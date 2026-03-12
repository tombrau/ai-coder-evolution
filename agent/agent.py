"""
agent.py — Arc Autonomous Agent
Main loop. Runs on Contabo server, Ubuntu 22.04 LTS.

Schedules:
  - Weekly: check for new AI model releases, update project
  - On-demand: Telegram command from Tom

Telegram commands Tom can send:
  /status    — project status summary
  /search    — search for new model releases
  /run       — run prompt v2.0 against a model (asks which one)
  /commit    — review staged changes and commit with approval
  /hello     — ping Arc, confirm it's running
"""

import asyncio
import logging
import datetime
from telegram.ext import Application, CommandHandler, MessageHandler, filters

import config
import tools

# ─── Logging ──────────────────────────────────────────────────────────────────

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[
        logging.FileHandler("/opt/arc/logs/agent.log"),
        logging.StreamHandler()
    ]
)
log = logging.getLogger("arc.agent")


# ─── Scheduled tasks ──────────────────────────────────────────────────────────

async def weekly_check():
    """
    Weekly autonomous run:
    - Pull latest project state
    - Search for new AI model releases
    - Update round-2-candidates.md if anything significant found
    - Write session log
    - Notify Tom via Telegram
    """
    log.info("Weekly check starting...")
    await tools.telegram_send("🔍 *Arc weekly check starting...*")

    # Pull latest
    tools.git_pull()

    # Search for new releases
    search_results = []
    queries = [
        "new AI coding model release 2026",
        "SWE-bench leaderboard update 2026",
        "Claude GPT Gemini new model March 2026",
    ]
    for q in queries:
        result = tools.web_search(q)
        search_results.append(f"Query: {q}\n{result}")

    search_summary = "\n\n---\n\n".join(search_results)

    # Arc thinks about what it found
    analysis = tools.arc_think(
        task="""Review these web search results for new AI coding model releases.
        
For each significant new model or benchmark update you find:
1. Does it belong on the project timeline?
2. Should it be added to round-2-candidates.md?
3. Does it affect any scores in the existing critiques?

Write a brief summary (3-5 sentences) for the Telegram notification,
then a fuller session log entry.

If nothing significant was found, say so plainly.""",
        extra_context=f"Search results from {datetime.datetime.now().strftime('%Y-%m-%d')}:\n\n{search_summary}"
    )

    # Write session log
    session_content = f"""# Agent Run — Weekly Check — {datetime.datetime.now().strftime('%Y-%m-%d')}

**Type:** Scheduled weekly check
**Triggered by:** APScheduler cron

## Search queries run
{chr(10).join(f'- {q}' for q in queries)}

## Raw search results
{search_summary}

## Arc's analysis
{analysis}
"""
    log_file = tools.write_session_log(session_content, label="weekly-check")

    # Notify Tom
    # First 500 chars of analysis for Telegram
    short = analysis[:500] + ("..." if len(analysis) > 500 else "")
    await tools.telegram_send(
        f"✅ *Weekly check complete*\n\n{short}\n\n_Full log: {log_file}_"
    )
    log.info("Weekly check complete.")


async def daily_heartbeat():
    """Optional daily ping so Tom knows Arc is alive."""
    now = datetime.datetime.now().strftime("%A %d %B %Y, %H:%M")
    await tools.telegram_send(f"💚 Arc is running — {now}")


# ─── Telegram command handlers ────────────────────────────────────────────────

async def cmd_hello(update, context):
    """Respond to /hello — confirm Arc is running."""
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    await update.message.reply_text(
        f"👋 Arc here. Running on Contabo. {now}\n"
        f"Project: {config.GITHUB_REPO}\n"
        f"Commands: /status /search /run /commit /hello"
    )


async def cmd_status(update, context):
    """Send a project status summary."""
    await update.message.reply_text("📊 Generating status summary...")

    status = tools.arc_think(
        task="""Write a brief project status summary for Tom.
        
Include:
- Round 1 completion status and scores
- What's pending (renames, commits, Round 2 start)
- Any recent session logs
- Current state of prompt.md

Keep it under 300 words. Telegram-friendly formatting."""
    )
    await update.message.reply_text(f"📊 *Project Status*\n\n{status}", parse_mode="Markdown")


async def cmd_search(update, context):
    """Search for new AI model releases."""
    await update.message.reply_text("🔍 Searching for new AI model releases...")
    await weekly_check()


async def cmd_run(update, context):
    """Run prompt v2.0 against a model — asks Tom which one."""
    await update.message.reply_text(
        "🤖 Which model should I run prompt v2.0 against?\n\n"
        "Round 2 candidates:\n"
        "- perplexity\n- kimi\n- mistral\n- meta\n- qwen\n"
        "- mercury-2 (re-run)\n- chatgpt (re-run)\n- gemini (re-run)\n- grok (re-run)\n- deepseek (re-run)\n\n"
        "Reply with the model name."
    )
    # The reply will be caught by the message handler below
    context.user_data["awaiting_model_name"] = True


async def cmd_commit(update, context):
    """Review staged changes and ask Tom for commit approval."""
    status = tools.git_status()
    await update.message.reply_text(
        f"📝 *Git status:*\n```\n{status}\n```\n\n"
        "Reply *yes* to commit and push, or *no* to skip.",
        parse_mode="Markdown"
    )
    context.user_data["awaiting_commit_approval"] = True


async def handle_message(update, context):
    """Handle free-text replies from Tom."""
    text = update.message.text.strip().lower()
    chat_id = update.message.chat_id

    if chat_id != config.TELEGRAM_CHAT_ID:
        return  # Ignore messages from anyone else

    # Commit approval
    if context.user_data.get("awaiting_commit_approval"):
        context.user_data["awaiting_commit_approval"] = False
        if text in ("yes", "y", "ok", "approve", "go"):
            await update.message.reply_text("⏳ Committing and pushing...")
            success = tools.git_commit_and_push(
                f"Arc autonomous commit {datetime.datetime.now().strftime('%Y-%m-%d')}"
            )
            if success:
                await update.message.reply_text("✅ Pushed to GitHub.")
            else:
                await update.message.reply_text("❌ Push failed. Check /opt/arc/logs/agent.log")
        else:
            await update.message.reply_text("⏭ Commit skipped.")
        return

    # Model run request
    if context.user_data.get("awaiting_model_name"):
        context.user_data["awaiting_model_name"] = False
        model_name = update.message.text.strip()
        await update.message.reply_text(
            f"🤖 Ready to run prompt v2.0 against *{model_name}*.\n\n"
            f"This will use API tokens. Confirm? Reply *yes* or *no*.",
            parse_mode="Markdown"
        )
        context.user_data["pending_model_run"] = model_name
        context.user_data["awaiting_run_approval"] = True
        return

    # Model run approval
    if context.user_data.get("awaiting_run_approval"):
        context.user_data["awaiting_run_approval"] = False
        model_name = context.user_data.pop("pending_model_run", "unknown")
        if text in ("yes", "y", "ok"):
            await update.message.reply_text(
                f"⏳ Noted — running prompt v2.0 against {model_name}.\n"
                f"(Full automated prompt execution coming in Phase 2. "
                f"For now, this logs the intent and reminds you to run it manually.)"
            )
            tools.write_session_log(
                f"# Agent Note — {datetime.datetime.now().strftime('%Y-%m-%d')}\n\n"
                f"Tom requested prompt v2.0 run against: {model_name}\n"
                f"Pending manual execution and critique.\n",
                label=f"run-request-{model_name}"
            )
        else:
            await update.message.reply_text("⏭ Run cancelled.")
        return

    # Default — pass to Arc for a free response
    response = tools.arc_think(
        task=f"Tom sent this Telegram message: '{update.message.text}'\n\n"
             f"Respond helpfully and concisely. You are Arc on the server. "
             f"Keep responses under 200 words for Telegram."
    )
    await update.message.reply_text(response[:4096])  # Telegram message limit


# ─── Main ─────────────────────────────────────────────────────────────────────

async def scheduled_weekly_check(context):
    """Wrapper for APT job queue."""
    await weekly_check()


async def scheduled_heartbeat(context):
    """Wrapper for daily heartbeat."""
    await daily_heartbeat()


def main():
    log.info("Arc agent starting...")

    # Build app with job queue enabled
    app = Application.builder().token(config.TELEGRAM_BOT_TOKEN).build()

    # Handlers
    app.add_handler(CommandHandler("hello", cmd_hello))
    app.add_handler(CommandHandler("status", cmd_status))
    app.add_handler(CommandHandler("search", cmd_search))
    app.add_handler(CommandHandler("run", cmd_run))
    app.add_handler(CommandHandler("commit", cmd_commit))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    # Schedule weekly check via built-in job queue (Mondays 9am)
    app.job_queue.run_daily(
        scheduled_weekly_check,
        time=datetime.time(hour=9, minute=0),
        days=(0,),  # Monday
        name="weekly_check"
    )

    # Uncomment for daily heartbeat:
    # app.job_queue.run_daily(scheduled_heartbeat, time=datetime.time(hour=8, minute=0))

    log.info("Arc agent running. Waiting for triggers...")
    app.run_polling(drop_pending_updates=True, allowed_updates=True)


if __name__ == "__main__":
    main()
