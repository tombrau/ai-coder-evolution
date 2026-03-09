# Chats

This folder stores the outputs from running `prompt.md` across different AI models and sessions.

## Naming Convention

```
{model-name}-{session-number}/
```

Examples:
- `claude-sonnet-4.6-0001/`
- `chatgpt-4o-0001/`
- `gemini-2.5-pro-0001/`
- `grok-4.1-0001/`

## Each session folder should contain:

| File | Description |
|------|-------------|
| `response.md` | Full raw response from the AI |
| `graphs/` | Any generated graph code or screenshots |
| `notes.md` | Your observations, what was interesting, what differed from other models |

## Purpose

Running the same prompt across multiple models allows direct comparison of:
- How each model interprets the historical timeline
- Differences in projected inflection points
- Variation in singularity estimates
- Quality of the plain-English summaries
