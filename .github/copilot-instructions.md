# Copilot agent instructions

These instructions are for GitHub Copilot (coding agent) when modifying this repo.

## Goal

Keep the MCP onboarding page consistent, easy to maintain, and safe to change.

## Where things live

- `src/appConfig.js` is the source of truth for:
  - Phases (Prepare/Plan/Build/Deliver/Run)
  - Tabs/sections per phase
  - Checklists (initial state)
  - Quick actions, quick links
  - Role recommendations and Topdesk requests
- `src/App.jsx` should mainly contain rendering + state wiring.

## Content rules

- Roles must remain exactly two (and named consistently):
  - App/Service Manager
  - Architect / Developer
- Phases must remain in this order and naming:
  - Prepare  Plan  Build  Deliver  Run
- Deliver content scope is hand-to-run readiness (approvals/change/operational handover), not deep platform component docs.

## UI rules

- Journey stepper should:
  - Scale reasonably on wide screens
  - Remain usable on small screens (horizontal scroll is OK)
- Footer Need Help? stays in the bottom ribbon (avoid reintroducing a separate mid-page help card).

## Change process

- Prefer minimal, surgical edits.
- After changes, run `npm run build` and fix any build issues before pushing.
- If you change app structure (new modules, moving config), update `README.md`.

## Deployment

- Pushing to `main` triggers GitHub Pages deployment.
- If a reviewer reports still seeing the old layout, suggest `Ctrl+F5` / InPrivate to bypass cached assets.
