"""
config.py — Arc Agent Configuration
Loads environment variables and defines permission boundaries.
"""

import os
from dotenv import load_dotenv

load_dotenv()

# API keys
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID = int(os.getenv("TELEGRAM_CHAT_ID", "0"))
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
GITHUB_REPO = os.getenv("GITHUB_REPO", "tombrau/ai-coder-evolution")

# Paths
PROJECT_DIR = os.getenv("PROJECT_DIR", "/opt/arc/project")
SESSIONS_DIR = os.getenv("SESSIONS_DIR", f"{PROJECT_DIR}/sessions")
PRIVATE_DIR = os.getenv("PRIVATE_DIR", "/opt/arc/private")

# Model
CLAUDE_MODEL = os.getenv("CLAUDE_MODEL", "claude-sonnet-4-5-20251001")

# Arc's identity files — read at start of every run
IDENTITY_FILE = f"{SESSIONS_DIR}/arc-identity.md"

# Permission levels — what Arc can do without asking Tom
AUTONOMOUS_ACTIONS = [
    "read_project_files",
    "web_search",
    "write_session_log",
    "write_private_notes",
    "write_staging",
    "send_telegram_notification",
]

APPROVAL_REQUIRED_ACTIONS = [
    "git_commit",
    "git_push",
    "run_prompt_against_model",    # costs API tokens
    "modify_prompt_md",
    "delete_any_file",
]

NEVER_AUTONOMOUS = [
    "send_telegram_message_unprompted_spam",
    "modify_gitignore",
    "access_outside_project_scope",
    "any_financial_action",
]
