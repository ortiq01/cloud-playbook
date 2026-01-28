import {
  Compass,
  Target,
  Settings,
  Rocket,
  Lightbulb,
  Play,
  ArrowRight,
  FileText,
  BookOpen,
  GraduationCap,
  Calendar,
  GitBranch,
  DollarSign,
  Shield,
  Building2,
  Briefcase,
  Code,
  CheckCircle2,
  MessageSquare,
  Users,
  HelpCircle
} from 'lucide-react';

export const defaultSectionByPhase = {
  prepare: 'what-is-mcp',
  plan: 'intake-requirements',
  build: 'solution-design',
  deliver: 'go-live-readiness',
  run: 'operate'
};

export const initialChecklists = {
  prepare: {
    video: false,
    standards: false,
    training: false,
    register: false
  },
  plan: {
    intakeKickoff: false,
    confirmStakeholdersOwnership: false,
    gatherAppRequirementsDesign: false,
    alignPoa: false,
    createInitialSolutionDesign: false,
    approveInitialSolutionArchitecture: false,
    determineScopeImpact: false,
    alignPlanningWithProductOwner: false
  },
  build: {
    designApproved: false,
    securityControlsReady: false,
    deploymentReadiness: false,
    observabilityBaseline: false
  },
  deliver: {
    vulnerabilitiesResolved: false,
    osmEngaged: false,
    asaConfirmed: false,
    changeRequestRaised: false,
    daApproved: false,
    runAccessRbac: false,
    closingEmailSent: false
  },
  run: {
    onCallReady: false,
    monitoringAlertsLive: false,
    incidentRunbookReady: false,
    handoverComplete: false
  }
};

export const phaseDefinitions = [
  { id: 'prepare', name: 'Prepare', subtitle: 'Basecamp', icon: Compass },
  { id: 'plan', name: '1. Plan', subtitle: 'Intake', icon: Target },
  { id: 'build', name: '2. Build', subtitle: 'Design', icon: Settings },
  { id: 'deliver', name: '3. Deliver', subtitle: 'Go-Live', icon: Rocket },
  { id: 'run', name: '4. Run', subtitle: 'Operate', icon: Lightbulb }
];

export const roles = [
  {
    id: 'manager',
    title: 'App/Service Manager',
    icon: Briefcase,
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50',
    focus: ['Intake & ownership', 'Cost model & budgets', 'Operational readiness'],
    prepareTopics: ['What is MCP', 'Cost Management', 'Intake Process'],
    planTopics: ['Intake Requirements', 'Readiness Assessment', 'ASA (Service Agreement)'],
    buildTopics: ['Plan Pack review', 'Go-live criteria', 'Operational handover prep'],
    deliverTopics: ['CAB / Change record', 'Go-live checklist', 'Operational handover'],
    runTopics: ['Service ownership', 'On-call & support', 'FinOps & reporting'],
    phases: ['Prepare', 'Plan', 'Build', 'Deliver', 'Run']
  },
  {
    id: 'archdev',
    title: 'Architect / Developer',
    icon: Code,
    color: 'from-emerald-500 to-purple-600',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-50',
    focus: ['Solution design', 'CI/CD & IaC', 'NFRs & compliance'],
    prepareTopics: ['Cloud Playbook', 'Landing Zones', 'GitLab & IaC basics'],
    planTopics: ['Solution Design', 'Dependencies', 'Observability Baseline'],
    buildTopics: ['Architecture sign-off', 'Deployment readiness', 'Security controls'],
    deliverTopics: ['Cutover/rollback plan', 'Risk & change impact', 'Handover completeness'],
    runTopics: ['Monitoring & alerting', 'Incident response', 'Runbook maintenance'],
    phases: ['Prepare', 'Plan', 'Build', 'Deliver', 'Run']
  }
];

export const topicKeyByPhase = {
  prepare: 'prepareTopics',
  plan: 'planTopics',
  build: 'buildTopics',
  deliver: 'deliverTopics',
  run: 'runTopics'
};

export function createPhaseConfig({ setPhase }) {
  return {
    prepare: {
      hero: {
        phaseLabel: 'Phase 0 – Education & Enablement',
        title: 'Prepare – Your Cloud Journey Starts Here',
        subtitle: 'Build the right foundation. Understand our platform, learn the standards, and know what to expect.',
        primaryCta: { label: "I'm new – show me around", icon: Play },
        secondaryCta: { label: 'Skip to Phase 1: Plan', icon: ArrowRight, onClick: () => setPhase('plan') }
      },
      roleTipTitle: (roleTitle) => `Recommended for ${roleTitle}s in Prepare phase:`,
      sections: [
        {
          id: 'what-is-mcp',
          title: 'What is MCP?',
          icon: Play,
          content: {
            description:
              "MCP (Managed Cloud Platform) is TenneT’s standardized, pre-configured cloud environment on Microsoft Azure. It was built by Capgemini for TenneT and is operated in partnership to provide a secure, compliant foundation (networking, identity, logging, and guardrails). This lets product teams provision workloads faster and focus on delivery instead of rebuilding cloud basics.",
            keyPoints: [
              "What MCP is at TenneT: a managed Azure platform foundation",
              'What is standardized (guardrails, monitoring, networking) vs. what you build and operate',
              'How MCP accelerates delivery through reusable, pre-approved patterns',
              'Shared responsibility: platform team/provider vs. your product team'
            ],
            hasVideo: true,
            videoTitle: 'What is the cloud? An introduction to cloud computing with Microsoft Azure'
          }
        },
        {
          id: 'mcp-organization',
          title: 'How MCP is Organized',
          icon: Users,
          content: {
            description: 'MCP operates through a partnership model with clear ownership and responsibilities across three key groups.',
            keyPoints: [
              'Platform Owner: BTO Operations, IIC Unit',
              'Managed Cloud Provider: Capgemini (Azure & GitLab)',
              'Enablement Team: Solutioning, coaching & onboarding'
            ],
            hasVideo: false
          }
        },
        {
          id: 'mcp-role',
          title: 'What is the role of MCP?',
          icon: Briefcase,
          content: {
            description:
              'MCP helps application teams move faster on Azure by providing a secure, standardized foundation and clear ways of working. Depending on your needs, you can get a “white glove” onboarding experience via the Enablement team or use predefined, automated self-service capabilities to stay more autonomous.',
            keyPoints: [
              'What MCP provides: compliant landing zones, platform guardrails, and baseline observability',
              'White glove enablement: coaching, onboarding, and solutioning support when needed',
              'Self-service autonomy: reusable patterns and automated services to provision safely and consistently',
              'Clarity on responsibilities: what the platform covers vs. what your team owns and operates'
            ],
            hasVideo: false
          }
        },
        {
          id: 'tennet-capgemini',
          title: 'TenneT & Capgemini',
          icon: Building2,
          content: {
            description: 'Our partnership with Capgemini delivers Azure and GitLab platform services while TenneT maintains strategic ownership and governance.',
            keyPoints: [
              'Capgemini: Platform operations & delivery',
              'TenneT: Governance, architecture & standards',
              'Enablement Team: Your bridge to both',
              'Application Service Agreement (ASA): SLA Schedule & Pricing Annex',
              'MCP TenneT and Capgemini contract – Formal contract between TenneT and Capgemini/Sogeti'
            ],
            hasVideo: false
          }
        },
        {
          id: 'education',
          title: 'Education – Cloud, Topdesk & ITSM',
          icon: GraduationCap,
          content: {
            description:
              'Build your cloud and operational capabilities with a mix of Azure fundamentals and TenneT ways of working. Start with Microsoft Learn (via ESI where available) for role-based learning paths, then learn the ITSM processes and Topdesk Self Service Portal (SSP) that support day-to-day delivery on MCP. These BTO-managed processes are owned by the QPM team.',
            keyPoints: [
              'Microsoft Learn learning paths for Azure fundamentals and role-based tracks (e.g., AZ-900 / AZ-104 / AZ-305)',
              'Enterprise Skilling Initiatives (ESI): curated training and certification support',
              'IT Service Management (ITSM) & IT Process Management: how services are requested, changed, and operated at TenneT',
              'Topdesk Self Service Portal (SSP): how to find services and raise requests in the BTO process landscape (QPM owned)'
            ],
            hasVideo: false
          }
        }
      ],
      quickActions: [
        { icon: FileText, label: 'Use Intake Form', desc: 'Start your registration', color: 'bg-blue-500' },
        { icon: BookOpen, label: 'Cloud Playbook', desc: 'Core reference docs', color: 'bg-emerald-500' },
        { icon: GraduationCap, label: 'Get Certified', desc: 'ESI training platform', color: 'bg-purple-500' },
        { icon: Calendar, label: 'Book Office Hour', desc: 'Tuesdays at 14:00', color: 'bg-orange-500' }
      ],
      checklistTitle: 'Your Prepare Checklist',
      checklistItems: [
        { key: 'video', label: 'Watch "What is Cloud" video', time: '5 min' },
        { key: 'standards', label: 'Review TenneT Cloud Standards', time: '15 min' },
        { key: 'training', label: 'Complete role-specific training', time: '1-2 hrs' },
        { key: 'register', label: 'Complete the Intake Form', time: '10 min' }
      ],
      readyCallout: {
        title: 'Ready for Phase 1!',
        buttonLabel: 'Start Plan Phase →',
        onClick: () => setPhase('plan')
      },
      quickLinks: [
        { icon: BookOpen, label: 'Inner Source Documentation', color: 'text-blue-600' },
        { icon: FileText, label: 'Cloud Playbook', color: 'text-emerald-600' },
        { icon: GraduationCap, label: 'ESI Training Portal', color: 'text-purple-600' },
        { icon: GraduationCap, label: 'Microsoft Learn (Azure Paths)', color: 'text-indigo-600' },
        { icon: MessageSquare, label: 'Topdesk Self Service Portal (SSP)', color: 'text-sky-600' },
        { icon: GitBranch, label: 'GitLab Access Request', color: 'text-orange-600' },
        { icon: DollarSign, label: 'Cost Management (FinOps)', color: 'text-green-600' },
        { icon: Shield, label: 'Security & Compliance', color: 'text-red-600' }
      ],
      topdeskRequests: [
        { label: 'Request Cloud Access via OMADA', desc: 'User onboarding / permissions' },
        { label: 'Request subscription / landing zone', desc: 'If needed for onboarding' },
        { label: 'Request security onboarding', desc: 'Access + policy alignment' }
      ],
      help: {
        personName: 'Lara',
        personSubtitle: 'Prepare & Run phases',
        officeHours: 'Office Hours: Tuesdays 14:00',
        teamsChannel: 'Teams: #mcp-enablement',
        buttonLabel: 'Book a Session'
      },
      footer: {
        title: 'Ready to move forward?',
        subtitle: 'Complete your preparation and start the intake process.',
        primaryLabel: 'Use Intake Form',
        secondaryLabel: 'Go to Phase 1: Plan',
        onSecondary: () => setPhase('plan')
      }
    },

    plan: {
      hero: {
        phaseLabel: 'Phase 1 – Intake & Initial Solution Design',
        title: '1. Plan – From Idea to a Build-Ready Plan',
        subtitle: 'Capture requirements, assess readiness, align ways of working, and draft the ASA so Build can start smoothly.',
        primaryCta: { label: 'Start Intake', icon: FileText },
        secondaryCta: { label: 'Back to Prepare', icon: ArrowRight, onClick: () => setPhase('prepare') }
      },
      roleTipTitle: (roleTitle) => `Recommended for ${roleTitle}s in Plan phase:`,
      sections: [
        {
          id: 'intake-requirements',
          title: 'Intake Requirements',
          icon: FileText,
          content: {
            description: 'Capture the minimum information needed to scope the onboarding, identify stakeholders, and define success for Build.',
            keyPoints: [
              'Workload overview: purpose, users, environments',
              'Stakeholders & ownership: Product/Service owner, technical owner, security, operations',
              'Dependencies: identity, networks, integrations, data flows',
              'Constraints: timelines, blackout windows, vendor limitations'
            ],
            hasVideo: false
          }
        },
        {
          id: 'readiness-assessment',
          title: 'Readiness Assessment',
          icon: Shield,
          content: {
            description: 'Confirm prerequisites and surface gaps early: security/compliance, connectivity, tooling, and operational readiness.',
            keyPoints: [
              'Classification: data sensitivity and regulatory constraints',
              'Prerequisites: identity, connectivity, landing zone alignment',
              'Delivery readiness: CI/CD, IaC approach, environments',
              'Risk register: gaps, owners, and remediation dates'
            ],
            hasVideo: false
          }
        },
        {
          id: 'way-of-working',
          title: 'MCP Way of Working',
          icon: Users,
          content: {
            description: 'Align ceremonies, decision points, and responsibilities so delivery is predictable and transparent.',
            keyPoints: [
              'Governance: decision makers, escalation, reporting cadence',
              'RACI: who owns what across Plan/Build/Deliver/Run',
              'Definition of Ready: what must be complete before Build',
              'Change process: intake changes, approvals, and impact assessment'
            ],
            hasVideo: false
          }
        },
        {
          id: 'asa',
          title: 'Application/Service Agreement (ASA)',
          icon: Briefcase,
          content: {
            description: 'Draft the service agreement early: service boundaries, responsibilities, support model, and targets.',
            keyPoints: [
              'Service boundaries: what MCP provides vs what the team owns',
              'Support model: hours, severity, on-call, handover criteria',
              'Targets: SLOs/SLAs, RTO/RPO, availability expectations',
              'Cost & transparency: showback/chargeback expectations'
            ],
            hasVideo: false
          }
        }
      ],
      quickActions: [
        { icon: FileText, label: 'Start Intake', desc: 'Kickoff & scope', color: 'bg-blue-500' },
        { icon: Shield, label: 'Readiness Check', desc: 'Find gaps early', color: 'bg-emerald-500' },
        { icon: Building2, label: 'Solution Design', desc: 'Initial design review', color: 'bg-purple-500' },
        { icon: Calendar, label: 'Plan Review', desc: 'Book a checkpoint', color: 'bg-orange-500' }
      ],
      checklistTitle: 'Your Plan Checklist',
      checklistGroups: [
        {
          title: 'Intake Requirements',
          items: [
            { key: 'intakeKickoff', label: 'Schedule intake Kickoff', time: '30 min' },
            { key: 'confirmStakeholdersOwnership', label: 'Confirm stakeholders & ownership', time: '20 min' },
            { key: 'gatherAppRequirementsDesign', label: 'Gather application requirements (design)', time: '45 min' }
          ]
        },
        {
          title: 'Initial Solution Design',
          items: [
            { key: 'alignPoa', label: 'Align PoA', time: '30 min' },
            { key: 'createInitialSolutionDesign', label: 'Create initial solution design', time: '60 min' },
            { key: 'approveInitialSolutionArchitecture', label: 'Approval on initial solution architecture', time: 'Varies' }
          ]
        },
        {
          title: 'Way of Working',
          items: [
            { key: 'determineScopeImpact', label: 'Determine scope and impact', time: '30 min' },
            { key: 'alignPlanningWithProductOwner', label: 'Align planning with Product Owner', time: '20 min' }
          ]
        }
      ],
      readyCallout: {
        title: 'Ready for Phase 2!',
        buttonLabel: 'Continue to Build →',
        onClick: () => setPhase('build')
      },
      quickLinks: [
        { icon: FileText, label: 'Intake Template', color: 'text-blue-600' },
        { icon: Shield, label: 'Readiness Checklist', color: 'text-emerald-600' },
        { icon: Building2, label: 'Solution Design Guide', color: 'text-purple-600' },
        { icon: Briefcase, label: 'ASA Template', color: 'text-orange-600' },
        { icon: DollarSign, label: 'Cost Model (FinOps)', color: 'text-green-600' },
        { icon: GitBranch, label: 'Repo / CI-CD Inputs', color: 'text-red-600' }
      ],
      topdeskRequests: [
        { label: 'Intake registration ticket', desc: 'Start the onboarding workflow' },
        { label: 'Stakeholder / access requests', desc: 'Groups, contacts, approvals' },
        { label: 'Architecture / review request', desc: 'If formal review is needed' }
      ],
      help: {
        personName: 'Kelsey',
        personSubtitle: 'Plan phase – Intake & design',
        officeHours: 'Office Hours: Thursdays 10:00',
        teamsChannel: 'Teams: #mcp-plan-intake',
        buttonLabel: 'Request Review'
      },
      footer: {
        title: 'Build starts with a great Plan.',
        subtitle: 'Finish the Plan checklist to hand over a complete Plan Pack to Build.',
        primaryLabel: 'Generate Plan Pack',
        secondaryLabel: 'Go to Phase 2: Build',
        onSecondary: () => setPhase('build')
      }
    },

    build: {
      hero: {
        phaseLabel: 'Phase 2 – Build & Readiness',
        title: '2. Build – Prepare for a Controlled Go-Live',
        subtitle: 'Validate design readiness, confirm controls, and ensure the basics are in place so Go-Live is a controlled change with low risk.',
        primaryCta: { label: 'Review build readiness', icon: CheckCircle2 },
        secondaryCta: { label: 'Back to Phase 1: Plan', icon: ArrowRight, onClick: () => setPhase('plan') }
      },
      roleTipTitle: (roleTitle) => `Recommended for ${roleTitle}s in Build phase:`,
      sections: [
        {
          id: 'solution-design',
          title: 'Solution Design Sign-off',
          icon: Building2,
          content: {
            description: 'Confirm the approved design is complete and aligned with standards before scheduling Go-Live activities.',
            keyPoints: [
              'Architecture decision records are complete and approved',
              'NFRs are agreed (availability, RTO/RPO, performance, security)',
              'Interfaces and dependencies are documented',
              'Go-live criteria are clear and measurable'
            ],
            hasVideo: false
          }
        },
        {
          id: 'controls',
          title: 'Controls & Compliance Readiness',
          icon: Shield,
          content: {
            description: 'Verify essential security/compliance controls are ready for production use.',
            keyPoints: [
              'Access model and privileged access approach is defined',
              'Logging and audit expectations are met',
              'Data handling and classification constraints are respected',
              'Risk items have owners and mitigation dates'
            ],
            hasVideo: false
          }
        },
        {
          id: 'deployment',
          title: 'Deployment Readiness',
          icon: Settings,
          content: {
            description: 'Ensure the standard platform components are usable for your workload and the deployment approach is repeatable.',
            keyPoints: [
              'Release approach is agreed (phased rollout / canary where applicable)',
              'Environments and promotions are defined',
              'Backout approach is understood',
              'Known limitations are documented and accepted'
            ],
            hasVideo: false
          }
        },
        {
          id: 'observability',
          title: 'Observability Baseline',
          icon: MessageSquare,
          content: {
            description: 'Set up a minimum baseline for monitoring and alerting so Go-Live is observable and supportable.',
            keyPoints: [
              'Golden signals / KPIs are defined',
              'Alerts are actionable and routed',
              'Dashboards support Go-Live monitoring',
              'Operational documentation is accessible'
            ],
            hasVideo: false
          }
        }
      ],
      quickActions: [
        { icon: FileText, label: 'Build Readiness', desc: 'Confirm go-live criteria', color: 'bg-blue-500' },
        { icon: Shield, label: 'Controls Check', desc: 'Security & compliance', color: 'bg-emerald-500' },
        { icon: Settings, label: 'Release Approach', desc: 'Deployment readiness', color: 'bg-purple-500' },
        { icon: MessageSquare, label: 'Observability', desc: 'Dashboards & alerts', color: 'bg-orange-500' }
      ],
      checklistTitle: 'Your Build Checklist',
      checklistItems: [
        { key: 'designApproved', label: 'Design sign-off complete', time: '30–60 min' },
        { key: 'securityControlsReady', label: 'Security / compliance controls ready', time: '30–60 min' },
        { key: 'deploymentReadiness', label: 'Deployment readiness confirmed', time: '20–40 min' },
        { key: 'observabilityBaseline', label: 'Observability baseline in place', time: '20–40 min' }
      ],
      readyCallout: {
        title: 'Ready for Phase 3!',
        buttonLabel: 'Start Deliver phase →',
        onClick: () => setPhase('deliver')
      },
      quickLinks: [
        { icon: Building2, label: 'Architecture patterns', color: 'text-emerald-600' },
        { icon: Shield, label: 'Security & compliance', color: 'text-red-600' },
        { icon: Settings, label: 'Release readiness checklist', color: 'text-blue-600' },
        { icon: MessageSquare, label: 'Observability standards', color: 'text-purple-600' },
        { icon: FileText, label: 'Operational handover template', color: 'text-orange-600' },
        { icon: DollarSign, label: 'FinOps essentials', color: 'text-green-600' }
      ],
      topdeskRequests: [
        { label: 'Security control validation', desc: 'Evidence / sign-off support' },
        { label: 'Release readiness review', desc: 'Confirm go-live gate' },
        { label: 'Observability setup request', desc: 'Dashboards / alert routing' }
      ],
      help: {
        personName: 'MCP Enablement',
        personSubtitle: 'Build phase – readiness & controls',
        officeHours: 'Office Hours: Tuesdays 14:00',
        teamsChannel: 'Teams: #mcp-enablement',
        buttonLabel: 'Request Support'
      },
      footer: {
        title: 'Build sets up a smooth Go-Live.',
        subtitle: 'Complete the Build checklist to move into a controlled Deliver phase.',
        primaryLabel: 'Open readiness checklist',
        secondaryLabel: 'Go to Phase 3: Deliver',
        onSecondary: () => setPhase('deliver')
      }
    },

    deliver: {
      hero: {
        phaseLabel: 'Phase 3 – Go-Live, Approvals & Handover',
        title: '3. Deliver – Controlled Go-Live and Operational Handover',
        subtitle: 'Focus on cutover, approvals (CAB/security), and a clean handover so the service is supportable from day one.',
        primaryCta: { label: 'Open Go-Live checklist', icon: Rocket },
        secondaryCta: { label: 'Back to Phase 2: Build', icon: ArrowRight, onClick: () => setPhase('build') }
      },
      roleTipTitle: (roleTitle) => `Recommended for ${roleTitle}s in Deliver phase:`,
      sections: [
        {
          id: 'go-live-readiness',
          title: 'Go-Live Readiness (Minimum Gate)',
          icon: CheckCircle2,
          content: {
            description: 'Confirm the minimal go-live gate is met so the change is controlled and measurable.',
            keyPoints: [
              'Go-live criteria and success metrics are agreed',
              'Operational contacts and escalation paths are known',
              'Monitoring is in place for go-live day',
              'Known risks are documented with owners'
            ],
            hasVideo: false
          }
        },
        {
          id: 'change-approvals',
          title: 'Change Record, CAB & Security Approvals',
          icon: Shield,
          content: {
            description: 'Handle the formal change and approval steps (CAB/security) with a clear plan and risk picture.',
            keyPoints: [
              'Change record includes scope, timing, impacts, and rollback',
              'Evidence for approvals is prepared and accessible',
              'Stakeholders are informed and aligned on execution window',
              'Approval outcomes are captured'
            ],
            hasVideo: false
          }
        },
        {
          id: 'da-approval',
          title: 'Design Authority (DA) Approval',
          icon: Target,
          content: {
            description: 'Make sure the required DA approval is obtained before the go-live window (scope depends on workload criticality).',
            keyPoints: [
              'Approval request includes scope, architecture summary, and key risks',
              'Decision and conditions are captured and shared',
              'Any conditions are translated into actionable items',
              'Approval evidence is linked from the change request'
            ],
            hasVideo: false
          }
        },
        {
          id: 'cutover',
          title: 'Cutover & Rollback Plan',
          icon: ArrowRight,
          content: {
            description: 'Prepare a practical execution plan for the cutover window and a rollback plan that can actually be executed.',
            keyPoints: [
              'Step-by-step cutover runbook with owners and timings',
              'Validation steps and acceptance criteria',
              'Rollback decision points and procedure',
              'Communication plan during the window'
            ],
            hasVideo: false
          }
        },
        {
          id: 'handover',
          title: 'Operational Handover',
          icon: Users,
          content: {
            description: 'Complete operational handover so Run can operate confidently without tribal knowledge.',
            keyPoints: [
              'Runbooks and support model are available and current',
              'SLAs / ASA expectations are understood',
              'Monitoring ownership and alert routing is agreed',
              'Run access is granted (RBAC) for the right groups',
              'Post go-live follow-ups are scheduled and a closing email is sent'
            ],
            hasVideo: false
          }
        }
      ],
      quickActions: [
        { icon: Shield, label: 'Vulnerabilities', desc: 'Infra + App remediated', color: 'bg-blue-500' },
        { icon: Users, label: 'Engage OSM', desc: 'Align hand-to-run', color: 'bg-emerald-500' },
        { icon: FileText, label: 'ASA + Change', desc: 'ASA + change request', color: 'bg-purple-500' },
        { icon: Settings, label: 'Run Access', desc: 'RBAC to operate', color: 'bg-orange-500' }
      ],
      checklistTitle: 'Your Deliver Checklist',
      checklistItems: [
        { key: 'vulnerabilitiesResolved', label: 'Vulnerabilities resolved (infra + app)', time: 'Varies' },
        { key: 'osmEngaged', label: 'OSM engaged for hand-to-run', time: '15–30 min' },
        { key: 'asaConfirmed', label: 'Application Service Agreement (ASA) confirmed', time: '20–40 min' },
        { key: 'changeRequestRaised', label: 'Change request raised (scope, impact, rollback)', time: '30–60 min' },
        { key: 'daApproved', label: 'DA approval obtained', time: 'Varies' },
        { key: 'runAccessRbac', label: 'Run access granted (RBAC)', time: '10–20 min' },
        { key: 'closingEmailSent', label: 'Closing email sent (handover complete)', time: '5–10 min' }
      ],
      readyCallout: {
        title: 'Go-Live Complete!',
        buttonLabel: 'Go to Phase 4: Run →',
        onClick: () => setPhase('run')
      },
      quickLinks: [
        { icon: Shield, label: 'Vulnerability remediation checklist', color: 'text-red-600' },
        { icon: Users, label: 'OSM hand-to-run guidance', color: 'text-emerald-600' },
        { icon: FileText, label: 'ASA template / checklist', color: 'text-blue-600' },
        { icon: Target, label: 'DA approval request template', color: 'text-purple-600' },
        { icon: Settings, label: 'Run access (RBAC) request', color: 'text-orange-600' },
        { icon: MessageSquare, label: 'Closing email template', color: 'text-green-600' }
      ],
      topdeskRequests: [
        { label: 'Raise change request', desc: 'Schedule window + rollback' },
        { label: 'Request Run access (RBAC)', desc: 'Ops groups and permissions' },
        { label: 'Engage OSM (hand-to-run)', desc: 'Confirm support model' },
        { label: 'DA approval request', desc: 'If required by governance' }
      ],
      help: {
        personName: 'MCP Enablement',
        personSubtitle: 'Deliver phase – Go-Live & handover',
        officeHours: 'Office Hours: Tuesdays 14:00',
        teamsChannel: 'Teams: #mcp-enablement',
        buttonLabel: 'Request Go-Live Support'
      },
      footer: {
        title: 'Deliver is about control and clarity.',
        subtitle: 'Complete approvals and handover so Run can operate confidently.',
        primaryLabel: 'Open Go-Live checklist',
        secondaryLabel: 'Go to Phase 4: Run',
        onSecondary: () => setPhase('run')
      }
    },

    run: {
      hero: {
        phaseLabel: 'Phase 4 – Operate & Improve',
        title: '4. Run – Operate with Confidence',
        subtitle: 'Run focuses on steady operations: monitoring, incident response, ownership clarity, and continuous improvement.',
        primaryCta: { label: 'Review operating model', icon: Lightbulb },
        secondaryCta: { label: 'Back to Phase 3: Deliver', icon: ArrowRight, onClick: () => setPhase('deliver') }
      },
      roleTipTitle: (roleTitle) => `Recommended for ${roleTitle}s in Run phase:`,
      sections: [
        {
          id: 'operate',
          title: 'Operating Model & Ownership',
          icon: Briefcase,
          content: {
            description: 'Clarify who owns what: service ownership, support expectations, and escalation.',
            keyPoints: [
              'Primary/secondary contacts are defined',
              'Support hours and escalation are clear',
              'Change process expectations are understood',
              'Operational KPIs are agreed'
            ],
            hasVideo: false
          }
        },
        {
          id: 'service-manuals',
          title: 'Service & Operations Manuals',
          icon: FileText,
          content: {
            description:
              'Use the MCP InnerSource knowledge base as the single place to understand platform services: what is provided, what is expected from your team, and how support and SLAs work. This is also where you can find (or reference) the DAP and the Application Service Agreement (ASA) that define agreements, expectations, and commercial/SLA details.',
            keyPoints: [
              'InnerSource service manuals: service catalog, expectations, SLAs, and support boundaries',
              'Operations manuals: how services are operated (monitoring, runbooks, escalation, maintenance)',
              'DAP reference: the approved design/decision set and operational agreements for your service',
              'Application Service Agreement (ASA): SLA schedule, service expectations, and pricing annex'
            ],
            hasVideo: false,
            documentationUrl: '',
            resourcesUrl: ''
          }
        },
        {
          id: 'mcp-ops-org',
          title: 'How MCP Operations is organised',
          icon: Users,
          content: {
            description:
              'MCP operations follow a factory model that covers both Build and Run: Build focuses on delivering and evolving platform capabilities, while Run focuses on stability, support, and continuous improvement. Several teams work together to keep the platform secure, observable, and reliable for application teams.',
            keyPoints: [
              'MCP Factory model: Build (platform delivery & change) and Run (operate, support, improve)',
              'Operations team: day-to-day platform operations, platform support, and escalation handling',
              'Observability team: monitoring standards, dashboards, alerting strategy, and telemetry improvements',
              'Security teams: guardrails, compliance controls, vulnerability management, and security onboarding',
              'Service Management: ITSM processes, change/incident/problem routines, and service reporting'
            ],
            hasVideo: false
          }
        },
        {
          id: 'monitoring',
          title: 'Monitoring, Alerts & Dashboards',
          icon: MessageSquare,
          content: {
            description: 'Make sure monitoring and alerting stay useful after Go-Live.',
            keyPoints: [
              'Alerts are actionable (avoid noise)',
              'Dashboards support day-to-day operations',
              'Ownership for alert routing is maintained',
              'Operational reporting cadence is set'
            ],
            hasVideo: false
          }
        },
        {
          id: 'incident',
          title: 'Incident Response & Runbooks',
          icon: HelpCircle,
          content: {
            description: 'Ensure runbooks and incident routines are in place for predictable response.',
            keyPoints: [
              'Runbooks exist for critical failure modes',
              'On-call / escalation path is tested',
              'Post-incident follow-up process is defined',
              'Lessons learned feed improvements'
            ],
            hasVideo: false
          }
        },
        {
          id: 'improve',
          title: 'Continuous Improvement',
          icon: Target,
          content: {
            description: 'Operational maturity increases over time: tune alerts, improve resilience, and reduce toil.',
            keyPoints: [
              'Regular service review cadence',
              'Backlog for reliability improvements',
              'Cost baseline and optimization actions',
              'Documentation stays current'
            ],
            hasVideo: false
          }
        }
      ],
      quickActions: [
        { icon: Users, label: 'Support Model', desc: 'Ownership & contacts', color: 'bg-blue-500' },
        { icon: MessageSquare, label: 'Dashboards', desc: 'Daily operations', color: 'bg-emerald-500' },
        { icon: HelpCircle, label: 'Incident Playbook', desc: 'Runbooks & response', color: 'bg-purple-500' },
        { icon: Target, label: 'Service Review', desc: 'Improve over time', color: 'bg-orange-500' }
      ],
      checklistTitle: 'Your Run Checklist',
      checklistItems: [
        { key: 'onCallReady', label: 'On-call / escalation path confirmed', time: '15–30 min' },
        { key: 'monitoringAlertsLive', label: 'Monitoring & alert routing verified', time: '15–30 min' },
        { key: 'incidentRunbookReady', label: 'Incident runbook available', time: '20–40 min' },
        { key: 'handoverComplete', label: 'Handover acknowledged by operations', time: '10–20 min' }
      ],
      readyCallout: {
        title: 'Operating baseline in place!',
        buttonLabel: 'Revisit the journey →',
        onClick: () => setPhase('prepare')
      },
      quickLinks: [
        { icon: MessageSquare, label: 'Monitoring standards', color: 'text-purple-600' },
        { icon: HelpCircle, label: 'Incident management', color: 'text-red-600' },
        { icon: DollarSign, label: 'FinOps and cost reporting', color: 'text-green-600' },
        { icon: FileText, label: 'Runbook templates', color: 'text-blue-600' },
        { icon: Users, label: 'Support model & RACI', color: 'text-emerald-600' },
        { icon: Target, label: 'Service review checklist', color: 'text-orange-600' }
      ],
      topdeskRequests: [
        { label: 'On-call group setup', desc: 'Escalation + notifications' },
        { label: 'Monitoring/alert tuning request', desc: 'Reduce noise, improve signal' },
        { label: 'Operational access change', desc: 'RBAC adjustments over time' }
      ],
      help: {
        personName: 'MCP Enablement',
        personSubtitle: 'Run phase – operations & improvement',
        officeHours: 'Office Hours: Tuesdays 14:00',
        teamsChannel: 'Teams: #mcp-enablement',
        buttonLabel: 'Ask for Help'
      },
      footer: {
        title: 'Run is where value is sustained.',
        subtitle: 'Keep ownership, monitoring, and runbooks healthy over time.',
        primaryLabel: 'Open operating model',
        secondaryLabel: 'Back to Prepare',
        onSecondary: () => setPhase('prepare')
      }
    }
  };
}
