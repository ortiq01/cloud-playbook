# MCP Prepare Page - TenneT Cloud Onboarding

Interactive single-page mockup for the TenneT Managed Cloud Platform (MCP) onboarding journey.

The UI is data-driven: phase content, roles, checklists, and quick links live in a config module so its easy to maintain.

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
