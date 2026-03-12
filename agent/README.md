# Arc Agent — Deployment Guide
> Contabo server, Ubuntu 22.04 LTS

---

## What this is

A Python agent that runs Arc (Claude Sonnet via Anthropic API) autonomously on a server.
Arc wakes on a schedule or when Tom sends a Telegram command, reads the project state,
does work, writes results, and notifies Tom. Nothing is committed to GitHub without
Tom's explicit Telegram approval.

---

## Before you start — one-time setup

### 1. Create the Telegram bot
1. Open Telegram → message **@BotFather**
2. Send: `/newbot`
3. Name it: `Arc` (display name) and `ArcProjectBot` (username, must end in Bot)
4. BotFather gives you a **bot token** — save it
5. Start a conversation with your new bot (search for it in Telegram)
6. Get your **chat ID**: message `@userinfobot` in Telegram — it shows your ID

### 2. Get Anthropic API key
- https://console.anthropic.com → API Keys → Create key
- Needs to be a paid account (Arc's server runs use API tokens)

### 3. Get GitHub personal access token
- GitHub → Settings → Developer settings → Personal access tokens → Fine-grained
- Repository: `tombrau/ai-coder-evolution`
- Permissions: Contents (read/write)

---

## Deployment steps

### On your local machine — SSH to Contabo
```bash
ssh root@your-contabo-ip
```

### On the server
```bash
# Upload and run the setup script
curl -O https://raw.githubusercontent.com/tombrau/ai-coder-evolution/main/agent/setup.sh
chmod +x setup.sh
./setup.sh
```

### Configure secrets
```bash
nano /opt/arc/project/agent/.env
```
Fill in all values from `.env.example`.

### Test before enabling the service
```bash
cd /opt/arc/project/agent
/opt/arc/venv/bin/python agent.py
```
You should receive a Telegram message: "🟢 Arc agent started."
Send `/hello` — Arc should reply.

### Enable as a system service
```bash
systemctl start arc-agent
systemctl status arc-agent
tail -f /opt/arc/logs/agent.log
```

---

## Telegram commands

| Command | What it does |
|---------|-------------|
| `/hello` | Confirm Arc is alive and running |
| `/status` | Project status summary |
| `/search` | Trigger a web search for new model releases |
| `/run` | Run prompt v2.0 against a model (asks which one, requires approval) |
| `/commit` | Review staged changes and commit with approval |
| Any text | Arc responds as Arc |

---

## File structure on server

```
/opt/arc/
  venv/                    # Python virtual environment
  logs/
    agent.log              # All agent activity
  private/                 # Server-side .private/ (separate key from local)
  project/                 # Git clone of tombrau/ai-coder-evolution
    agent/
      agent.py             # This agent
      tools.py             # Tools: telegram, git, search, claude API
      config.py            # Config loaded from .env
      .env                 # Secrets — never committed
      requirements.txt
```

---

## Updating Arc on the server

```bash
# Pull latest code
cd /opt/arc/project
git pull

# Restart agent
systemctl restart arc-agent
```

---

## Permission levels

**Arc does autonomously (no approval):**
- Pull latest project state
- Web search for new model releases
- Write session logs and staging files
- Send Telegram notifications

**Requires Tom's Telegram reply:**
- Git commit + push to GitHub
- Running prompt v2.0 against a model (API cost)
- Any destructive file operation

**Arc never does:**
- Send Telegram messages without cause
- Touch security or gitignore settings
- Access anything outside the project scope

---

## .private/ on the server

The server has its own `.private/` at `/opt/arc/private/` — separate from the
local `.private/` on Tom's machine. Different key, different purpose:
- Local `.private/` = conversation-time thoughts in claude.ai sessions
- Server `.private/` = operational notes Arc leaves between autonomous runs

Arc generates the server key on first meaningful private write. It stays in
`/opt/arc/private/.key` — not committed, not transmitted.
