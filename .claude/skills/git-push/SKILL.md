---
name: git-push
description: Stage, commit, and push all changes to the remote repository
---

Stage all changes, commit with a descriptive message, and push to the remote.

## Instructions

1. Run `git status` to see all untracked and modified files
2. Run `git diff --stat` to see what changed
3. Run `git log --oneline -3` to match the repo's commit message style
4. Stage all relevant files (use specific filenames, not `git add -A`)
   - Do NOT stage files that contain secrets (.env, credentials, tokens)
   - Do NOT stage large binary files unless the user explicitly asks
5. Write a concise commit message summarizing the changes
   - Follow the repo's existing commit message style
   - End with: `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`
6. Push to the remote
7. Run `git status` after push to confirm success
8. Show the user what was committed and pushed

## Rules

- Always show the user what will be staged before committing
- Never force push unless explicitly asked
- Never amend existing commits unless explicitly asked
- If there are no changes, tell the user and do nothing
- Use a HEREDOC for the commit message to preserve formatting
