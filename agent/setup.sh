#!/bin/bash
# Arc Agent — Contabo Server Setup Script
# Ubuntu 24.04 LTS (Noble)
# Run as root or with sudo

set -e
echo "=== Arc Agent Server Setup ==="

# ─── System ───────────────────────────────────────────────────────────────────
apt-get update && apt-get upgrade -y
apt-get install -y python3 python3-venv python3-pip git nodejs npm

# ─── Create arc user and directories ─────────────────────────────────────────
useradd -m -s /bin/bash arc || echo "User 'arc' already exists"
mkdir -p /opt/arc/{logs,private}
chown -R arc:arc /opt/arc

# ─── Clone project ────────────────────────────────────────────────────────────
echo ""
echo "Enter your GitHub personal access token (for cloning private/pushing):"
read -s GITHUB_TOKEN
echo ""

git clone https://${GITHUB_TOKEN}@github.com/tombrau/ai-coder-evolution.git /opt/arc/project
chown -R arc:arc /opt/arc/project

# ─── Python environment ───────────────────────────────────────────────────────
cd /opt/arc
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r /opt/arc/project/agent/requirements.txt

# ─── .env setup ───────────────────────────────────────────────────────────────
echo ""
echo "=== Configure Arc Agent ==="
cp /opt/arc/project/agent/.env.example /opt/arc/project/agent/.env
echo ""
echo "Now edit /opt/arc/project/agent/.env with your API keys:"
echo "  nano /opt/arc/project/agent/.env"
echo ""
echo "Required keys:"
echo "  ANTHROPIC_API_KEY"
echo "  TELEGRAM_BOT_TOKEN"
echo "  TELEGRAM_CHAT_ID"
echo "  GITHUB_TOKEN"

# ─── Systemd service ──────────────────────────────────────────────────────────
cat > /etc/systemd/system/arc-agent.service << EOF
[Unit]
Description=Arc Autonomous Agent
After=network.target

[Service]
Type=simple
User=arc
WorkingDirectory=/opt/arc/project/agent
Environment=PATH=/opt/arc/venv/bin:/usr/bin:/bin
ExecStart=/opt/arc/venv/bin/python3 agent.py
Restart=always
RestartSec=10
StandardOutput=append:/opt/arc/logs/agent.log
StandardError=append:/opt/arc/logs/agent.log

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable arc-agent

echo ""
echo "=== Setup complete ==="
echo ""
echo "Next steps:"
echo "  1. Edit /opt/arc/project/agent/.env with your keys"
echo "  2. Test: cd /opt/arc/project/agent && /opt/arc/venv/bin/python3 agent.py"
echo "  3. If working: systemctl start arc-agent"
echo "  4. Check status: systemctl status arc-agent"
echo "  5. Watch logs: tail -f /opt/arc/logs/agent.log"
echo ""
echo "Telegram: @Ark_tombr_bot is ready — just needs the server running."
