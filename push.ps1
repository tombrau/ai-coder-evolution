# ============================================================
# push.ps1 — Quick git push for ai-coder-evolution
# Double-click or run from PowerShell to stage, commit & push
# ============================================================

Set-Location "I:\Projects\ai-coder-evolution"

# Show current status
Write-Host ""
Write-Host "=== Current Git Status ===" -ForegroundColor Cyan
git status

# Ask for a commit message
Write-Host ""
$msg = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($msg)) {
    $msg = "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

# Stage all changes
Write-Host ""
Write-Host "=== Staging all changes ===" -ForegroundColor Cyan
git add .

# Commit
Write-Host ""
Write-Host "=== Committing ===" -ForegroundColor Cyan
git commit -m "$msg"

# Push
Write-Host ""
Write-Host "=== Pushing to GitHub ===" -ForegroundColor Cyan
git push

Write-Host ""
Write-Host "=== Done! ===" -ForegroundColor Green
Write-Host "View live at: https://tombrau.github.io/ai-coder-evolution/" -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter to close"
