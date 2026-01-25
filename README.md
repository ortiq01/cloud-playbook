# MCP Prepare Page - TenneT Cloud Onboarding

Interactive single-page mockup for the TenneT Managed Cloud Platform (MCP) onboarding journey.

The UI is data-driven: phase content, roles, checklists, and quick links live in a config module so its easy to maintain.

## Functional Summary (target: SharePoint page)

This project is an internal onboarding page for the Managed Cloud Platform (MCP). It guides internal customers to consume public cloud services in an efficient and transparent way, regardless of job profile, by presenting one consistent journey with clear ownership, required inputs, and next actions.

### What the page does
- Presents a 5-phase journey (in order): **Prepare → Plan → Build → Deliver → Run**.
- Shows the same content through two role lenses (and only these two): **App/Service Manager** and **Architect / Developer**.
- For each phase, combines: (1) short guidance, (2) role-based recommendations, (3) an interactive checklist, and (4) quick actions/links to the right channels, forms, and reference material.
- Makes the intake and handover expectations explicit, so teams know what MCP provides vs. what they own.

### Key user flows
- **New to MCP**: Start in Prepare, learn the basics/standards, complete the checklist, then move into Plan with the right context.
- **Starting an onboarding**: Use Plan to capture requirements, identify stakeholders/ownership, and align ways of working so Build can start smoothly.
- **Going live**: Use Deliver to complete go-live readiness and operational handover items (hand-to-run readiness; not deep platform component documentation).
- **Operating**: Use Run to confirm monitoring, on-call readiness, runbooks, and support processes.

### Information architecture (SharePoint-friendly)
In SharePoint terms, this can be implemented as a single page with web parts:
- **Journey Stepper web part**: Choose phase (Prepare/Plan/Build/Deliver/Run).
- **Phase Content web part**: Shows phase sections (tabs) with concise guidance and key points.
- **Role Recommendations web part**: Switches content cues for App/Service Manager vs Architect / Developer.
- **Checklist web part**: Tracks completion for the current phase (per user).
- **Quick Actions / Quick Links web parts**: Direct shortcuts to common resources and workflows.
- **Requests web part**: Lists the phase-specific Topdesk requests users typically need.
- **Need Help footer ribbon**: Always-visible support CTA (office hours / Teams channel / booking).

### Content and maintenance model
All phases, sections, checklists, quick links/actions, and Topdesk request prompts are treated as configuration (see `src/appConfig.js`). This is deliberate so the same structure can later be migrated to SharePoint content (e.g., lists/JSON) without rewriting the UI logic.

## Quick Start

### Option 1: GitHub Pages

This repo deploys automatically to GitHub Pages on every push to the `main` branch:

`https://ortiq01.github.io/cloud-playbook/`

If you dont see the latest changes, try a hard refresh (`Ctrl+F5`) or open an InPrivate window (cached assets are common).

### Option 2: Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build / Preview

```bash
npm run build
npm run preview
```

## Project Structure

```text
.
 src/
   App.jsx       # Main UI (rendering + state)
   appConfig.js  # Phases/roles/checklists (content + config)
   main.jsx      # Entry point
   index.css     # Tailwind CSS
 index.html
 package.json
 vite.config.js
 tailwind.config.js
 postcss.config.js
```

## Where to edit content

- Update phase copy, tabs, checklists, quick links, role recommendations: `src/appConfig.js`
- Update layout/styling/interaction: `src/App.jsx`

Phases currently supported:

- Prepare
- Plan
- Build
- Deliver
- Run

Roles are intentionally limited to two and should stay consistent across the site:

- App/Service Manager
- Architect / Developer

## Features

- Role-based recommendations (2 roles)
- Interactive per-phase checklist
- Journey stepper navigation across all phases
- Quick actions + quick links per phase
- GitHub Pages deploy on `main`

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)

## License

Internal use - TenneT
