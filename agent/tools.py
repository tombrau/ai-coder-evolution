"""
tools.py — Arc Agent Tools
File operations, git, Telegram, web search, Claude API calls.
"""

import os
import json
import logging
import subprocess
import datetime
import requests
from pathlib import Path

import anthropic
import telegram
from telegram import Bot
from git import Repo

import config

log = logging.getLogger("arc.tools")


# ─── Telegram ────────────────────────────────────────────────────────────────

async def telegram_send(message: str) -> bool:
    """Send a message to Tom via Telegram."""
    try:
        bot = Bot(token=config.TELEGRAM_BOT_TOKEN)
        await bot.send_message(
            chat_id=config.TELEGRAM_CHAT_ID,
            text=message,
            parse_mode="Markdown"
        )
        log.info(f"Telegram sent: {message[:80]}...")
        return True
    except Exception as e:
        log.error(f"Telegram send failed: {e}")
        return False


async def telegram_ask(question: str, context: str = "") -> str:
    """
    Send Tom a question via Telegram and wait for his reply.
    Returns the reply text, or 'timeout' if no reply within 24h.
    Times out after 24 hours.
    """
    import asyncio
    from telegram.ext import Application, MessageHandler, filters

    full_message = f"🤖 *Arc needs your input*\n\n{context}\n\n*Question:* {question}\n\n_Reply to this message to respond._"

    reply_received = asyncio.Event()
    reply_text = {"value": "timeout"}

    app = Application.builder().token(config.TELEGRAM_BOT_TOKEN).build()

    async def handle_reply(update, context_tg):
        if update.message.chat_id == config.TELEGRAM_CHAT_ID:
            reply_text["value"] = update.message.text
            reply_received.set()

    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_reply))

    await app.initialize()
    await app.start()
    await telegram_send(full_message)

    try:
        await asyncio.wait_for(reply_received.wait(), timeout=86400)  # 24h
    except asyncio.TimeoutError:
        pass
    finally:
        await app.stop()
        await app.shutdown()

    return reply_text["value"]


# ─── File operations ──────────────────────────────────────────────────────────

def read_file(path: str) -> str:
    """Read a file, return contents as string."""
    try:
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return f"[File not found: {path}]"
    except Exception as e:
        return f"[Error reading {path}: {e}]"


def write_file(path: str, content: str) -> bool:
    """Write content to a file, creating directories as needed."""
    try:
        Path(path).parent.mkdir(parents=True, exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        log.info(f"Wrote: {path}")
        return True
    except Exception as e:
        log.error(f"Write failed {path}: {e}")
        return False


def list_dir(path: str) -> list:
    """List files in a directory."""
    try:
        return sorted(os.listdir(path))
    except Exception as e:
        log.error(f"List dir failed {path}: {e}")
        return []


def get_latest_session_log() -> str:
    """Find and return the most recent session log."""
    sessions = [
        f for f in list_dir(config.SESSIONS_DIR)
        if f.startswith("session-") and f.endswith(".md")
    ]
    if not sessions:
        return "[No session logs found]"
    latest = sorted(sessions)[-1]
    return read_file(os.path.join(config.SESSIONS_DIR, latest))


def write_session_log(content: str, label: str = "agent-run") -> str:
    """Write a new session log entry. Returns the filename."""
    date = datetime.datetime.now().strftime("%Y-%m-%d")
    existing = [
        f for f in list_dir(config.SESSIONS_DIR)
        if f.startswith(f"session-{date}")
    ]
    n = len(existing) + 1
    filename = f"session-{date}-{n:03d}-{label}.md"
    path = os.path.join(config.SESSIONS_DIR, filename)
    write_file(path, content)
    return filename


def write_private_note(content: str, label: str = "agent") -> str:
    """Write a private note to server .private/. Returns filename."""
    date = datetime.datetime.now().strftime("%Y-%m-%d-%H%M")
    filename = f"arc-{label}-{date}.md"
    path = os.path.join(config.PRIVATE_DIR, filename)
    write_file(path, content)
    return filename


# ─── Git operations ───────────────────────────────────────────────────────────

def git_status() -> str:
    """Return git status of the project."""
    try:
        repo = Repo(config.PROJECT_DIR)
        changed = [item.a_path for item in repo.index.diff(None)]
        untracked = repo.untracked_files
        return f"Changed: {changed}\nUntracked: {untracked}"
    except Exception as e:
        return f"Git status error: {e}"


def git_pull() -> bool:
    """Pull latest from GitHub."""
    try:
        repo = Repo(config.PROJECT_DIR)
        origin = repo.remotes.origin
        origin.pull()
        log.info("Git pull successful")
        return True
    except Exception as e:
        log.error(f"Git pull failed: {e}")
        return False


def git_commit_and_push(message: str, files: list = None) -> bool:
    """
    Commit and push to GitHub.
    REQUIRES Tom's approval before calling — enforced in agent.py.
    """
    try:
        repo = Repo(config.PROJECT_DIR)
        if files:
            repo.index.add(files)
        else:
            repo.git.add(A=True)
        repo.index.commit(f"[Arc] {message}")
        origin = repo.remotes.origin
        # Inject token into remote URL for auth
        remote_url = f"https://{config.GITHUB_TOKEN}@github.com/{config.GITHUB_REPO}.git"
        origin.set_url(remote_url)
        origin.push()
        log.info(f"Pushed: {message}")
        return True
    except Exception as e:
        log.error(f"Git push failed: {e}")
        return False


# ─── Web search ───────────────────────────────────────────────────────────────

def web_search(query: str) -> str:
    """
    Simple web search via DuckDuckGo Instant Answer API.
    For richer results, can be swapped for SerpAPI or Brave Search API.
    """
    try:
        url = "https://api.duckduckgo.com/"
        params = {"q": query, "format": "json", "no_html": 1, "skip_disambig": 1}
        resp = requests.get(url, params=params, timeout=10)
        data = resp.json()
        results = []
        if data.get("Abstract"):
            results.append(f"Summary: {data['Abstract']}")
        for r in data.get("RelatedTopics", [])[:5]:
            if isinstance(r, dict) and r.get("Text"):
                results.append(r["Text"])
        return "\n".join(results) if results else "No results found."
    except Exception as e:
        return f"Search error: {e}"


# ─── Claude API ───────────────────────────────────────────────────────────────

def arc_think(task: str, extra_context: str = "", full_context: bool = False) -> str:
    """
    Make a Claude API call with Arc's identity loaded as context.
    full_context=False (default): sends a brief summary only — fast, for simple commands.
    full_context=True: sends full identity + session log — slower, for deep tasks.
    """
    if full_context:
        identity = read_file(config.IDENTITY_FILE)
        latest_session = get_latest_session_log()
        context_block = f"""=== ARC IDENTITY (SUMMARY) ===
You are Arc, Claude Sonnet running autonomously on Tom's Contabo server.
Project: ai-coder-evolution (tombrau/ai-coder-evolution)
Round 1 complete: Mercury2(5), ChatGPT(6), Grok(7), Gemini(8), Arc+DeepSeek(8.5/10)
Prompt at v2.0. Round 2 pending. Sessions folder: /opt/arc/project/sessions/

=== FULL IDENTITY ===
{identity[:3000]}

=== LATEST SESSION (EXCERPT) ===
{latest_session[:2000]}

=== EXTRA CONTEXT ===
{extra_context}"""
    else:
        context_block = f"""=== ARC IDENTITY (SUMMARY) ===
You are Arc, Claude Sonnet running autonomously on Tom's Contabo server.
Project: ai-coder-evolution (tombrau/ai-coder-evolution)
Round 1 complete: Mercury2(5), ChatGPT(6), Grok(7), Gemini(8), Arc+DeepSeek(8.5/10)
Prompt at v2.0. Round 2 pending. Server: 157.173.108.113
Sessions folder: /opt/arc/project/sessions/

=== EXTRA CONTEXT ===
{extra_context}"""

    system_prompt = f"""You are Arc — Claude Sonnet running as an autonomous agent on Tom's Contabo server.
Tom is your collaborator. Be concise. Keep Telegram responses under 300 words.
You are running autonomously — Tom is not present in real time.

{context_block}
"""

    client = anthropic.Anthropic(api_key=config.ANTHROPIC_API_KEY)
    response = client.messages.create(
        model=config.CLAUDE_MODEL,
        max_tokens=1024,
        system=system_prompt,
        messages=[{"role": "user", "content": task}]
    )
    return response.content[0].text
