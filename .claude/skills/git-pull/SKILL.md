---
name: git-pull
description: Pull latest changes from the remote repository
---

Pull the latest changes from the remote and show what changed.

## Instructions

1. Run `git status` to check for uncommitted local changes
2. If there are uncommitted changes, warn the user and ask whether to:
   - Stash changes first, pull, then pop the stash
   - Commit changes first, then pull
   - Abort
3. Run `git pull` to fetch and merge remote changes
4. Show the user what files were updated
5. If there are merge conflicts, list them and help resolve

## Rules

- Never discard uncommitted work without user confirmation
- If the pull results in a fast-forward, just show the updated files
- If the pull results in a merge, show the merge summary
- If there are conflicts, list each conflicting file and offer to help resolve
