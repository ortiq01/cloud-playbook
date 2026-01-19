$ErrorActionPreference = 'Stop'

$repo = 'ortiq01/cloud-playbook'

function Ensure-Label {
  param(
    [Parameter(Mandatory=$true)][string]$Name,
    [string]$Color = '0366d6',
    [string]$Description = ''
  )

  try {
    gh label create $Name --repo $repo --color $Color --description $Description | Out-Null
  } catch {
    # Label likely already exists; ignore.
  }
}

# Labels to help “assign” work to Copilot via filtering
Ensure-Label -Name 'copilot' -Color '6f42c1' -Description 'Work intended for Copilot implementation'
Ensure-Label -Name 'ui' -Color '1d76db' -Description 'UI work'
Ensure-Label -Name 'refactor' -Color 'cfd3d7' -Description 'Refactoring/cleanup'
Ensure-Label -Name 'phase:build' -Color '0e8a16' -Description 'Phase 2 Build'
Ensure-Label -Name 'phase:deliver' -Color 'fbca04' -Description 'Phase 3 Deliver'
Ensure-Label -Name 'phase:run' -Color 'd93f0b' -Description 'Phase 4 Run'

$issues = @(
  @{
    Title  = 'Phase 2: Build page (Design & implementation details)'
    Labels = @('copilot','ui','phase:build')
    Body   = @'
## Goal
Create the **2. Build** onboarding page using the same UI style/patterns as Prepare/Plan.

## Page purpose (from journey)
Turn the approved Plan outputs into **detailed design + implementation-ready work**, including ITSM alignment, service catalogue choices, and role/responsibility clarity.

## Must match existing style
- Reuse: hero header, sticky journey stepper, role selection personalization, tabbed content, checklist/progress, quick actions, quick links, help card.
- Keep content density and component styling consistent with Prepare/Plan.

## Recommended tabs
1. Detailed Design
2. Implementation Details
3. ITSM
4. Service Catalogue
5. Roles & Responsibility

## Checklist groups (proposal)
- Design complete (architecture, NFRs, security controls)
- Implementation plan (IaC approach, CI/CD, environments)
- ITSM alignment (change records, CMDB needs)
- Service catalogue selections (platform services needed)
- Handover readiness for Deliver

## Acceptance criteria
- Stepper navigates to Build page and highlights current phase.
- Tabs render Build-specific content.
- Checklist has grouped items and progress indicator.
- Role selection changes recommended topics for Build.
- Build compiles with `npm run build`.

## Notes
Follow the patterns already in the existing UI (Prepare/Plan).
'@
  },
  @{
    Title  = 'Phase 3: Deliver page (Provision & migrate / go-live)'
    Labels = @('copilot','ui','phase:deliver')
    Body   = @'
## Goal
Create the **3. Deliver** onboarding page using the same UI style/patterns as Prepare/Plan.

## Page purpose
Track execution to go-live: provisioning, migration/deploy, handover to Run, hypercare, and cut-over learnings.

## Recommended tabs
1. Provision
2. Deploy / Migrate
3. Handover to Run
4. Hypercare
5. Cut-over (Lessons learned)

## Checklist groups (proposal)
- Provisioning complete (accounts/subscriptions, networking, identity)
- Deployment/migration done (validation & sign-off)
- Monitoring/alerting in place
- Handover package ready (runbooks, contacts, SLOs)
- Hypercare plan executed

## Acceptance criteria
- Stepper navigates to Deliver page and highlights current phase.
- Deliver tabs + checklist render and feel consistent.
- Role selection changes recommended topics for Deliver.
- Build compiles with `npm run build`.
'@
  },
  @{
    Title  = 'Phase 4: Run page (Operate & optimize)'
    Labels = @('copilot','ui','phase:run')
    Body   = @'
## Goal
Create the **4. Run** onboarding page using the same UI style/patterns as Prepare/Plan.

## Page purpose
Operationalize: incident/problem, change, cost transparency & optimization, and governance feedback loops.

## Recommended tabs
1. Incident / Problem
2. Change / Request
3. Cost Transparency & Optimization
4. Feedback Loops (Governance)

## Checklist groups (proposal)
- Operational readiness (alerts, dashboards, on-call)
- Incident/problem processes confirmed
- Change workflow and approval path documented
- FinOps cadence + dashboards agreed
- Governance cadence + KPIs defined

## Acceptance criteria
- Stepper navigates to Run page and highlights current phase.
- Run tabs + checklist render and match styling.
- Role selection changes recommended topics for Run.
- Build compiles with `npm run build`.
'@
  },
  @{
    Title  = 'Refactor: Extract phase configs + reduce App.jsx size'
    Labels = @('copilot','refactor')
    Body   = @'
## Goal
Refactor the app so phase pages are easier to extend without inflating `src/App.jsx`.

## Scope
- Extract phase configs (hero/tabs/checklists/links/help/footer) into a dedicated module (e.g., `src/phaseConfig.js`).
- Keep UI components consistent.
- Ensure phase switching updates active tab defaults correctly.

## Acceptance criteria
- No behavior regression for Prepare/Plan.
- Adding a new phase requires mostly data/config, minimal UI edits.
- `npm run build` passes.
'@
  }
)

$createdUrls = @()
foreach ($item in $issues) {
  $tmp = New-TemporaryFile
  Set-Content -Path $tmp -Value $item.Body -Encoding UTF8
  $labelArgs = @()
  foreach ($l in $item.Labels) {
    $labelArgs += @('--label', $l)
  }

  Write-Host "Creating: $($item.Title)"
  $url = gh issue create --repo $repo --title $item.Title --body-file $tmp @labelArgs
  $createdUrls += $url
}

Write-Host ""
Write-Host "Created issues:"
$createdUrls | ForEach-Object { Write-Host "- $_" }
