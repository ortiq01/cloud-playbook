import React, { useState } from 'react';
import { 
  Mountain, Users, BookOpen, GraduationCap, Play, ChevronRight, 
  CheckCircle2, Circle, ExternalLink, Calendar, MessageSquare,
  Briefcase, Building2, Code, FileText, Settings, DollarSign,
  Shield, GitBranch, ArrowRight, Clock, User, HelpCircle,
  Compass, Target, Lightbulb, Rocket
} from 'lucide-react';

export default function MCPPreparePage() {
  const [activePhase, setActivePhase] = useState('prepare');
  const [activeRole, setActiveRole] = useState(null);
  const defaultSectionByPhase = {
    prepare: 'what-is-mcp',
    plan: 'intake-requirements'
  };
  const [activeSection, setActiveSection] = useState(defaultSectionByPhase.prepare);
  const [checklists, setChecklists] = useState({
    prepare: {
      video: false,
      standards: false,
      training: false,
      register: false
    },
    plan: {
      intakeKickoff: false,
      classifyWorkload: false,
      stakeholders: false,
      appInventory: false,
      readinessAssessment: false,
      targetArchitecture: false,
      wayOfWorking: false,
      asaDraft: false
    }
  });

  const setPhase = (phaseId) => {
    setActivePhase(phaseId);
    setActiveSection(defaultSectionByPhase[phaseId] ?? defaultSectionByPhase.prepare);
  };

  const phases = [
    { id: 'prepare', name: 'Prepare', subtitle: 'Basecamp', icon: Compass },
    { id: 'plan', name: '1. Plan', subtitle: 'Intake', icon: Target },
    { id: 'build', name: '2. Build', subtitle: 'Design', icon: Settings },
    { id: 'deliver', name: '3. Deliver', subtitle: 'Go-Live', icon: Rocket },
    { id: 'run', name: '4. Run', subtitle: 'Operate', icon: Lightbulb }
  ].map((p) => ({ ...p, active: p.id === activePhase }));

  const roles = [
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
      phases: ['Prepare', 'Plan', 'Run']
    },
    {
      id: 'architect',
      title: 'Architect',
      icon: Building2,
      color: 'from-emerald-500 to-emerald-600',
      borderColor: 'border-emerald-500',
      bgColor: 'bg-emerald-50',
      focus: ['Solution design', 'NFRs & compliance', 'TenneT patterns'],
      prepareTopics: ['Cloud Playbook', 'Landing Zones', 'Security Standards'],
      planTopics: ['Solution Design', 'NFRs & Compliance', 'Dependency Mapping'],
      phases: ['Prepare', 'Plan', 'Build']
    },
    {
      id: 'devops',
      title: 'DevOps / Engineer',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
      focus: ['IaC & CI/CD', 'GitLab pipelines', 'Deployment patterns'],
      prepareTopics: ['GitLab Setup', 'Terraform Templates', 'Naming Conventions'],
      planTopics: ['Inventory & Pipelines', 'Readiness Gaps', 'Observability Baseline'],
      phases: ['Prepare', 'Build', 'Deliver', 'Run']
    }
  ];

  const phaseConfig = {
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
            description: "Understanding 'What is Cloud' is like knowing the terrain before a hike. Just as hikers need to be aware of the landscape and conditions ahead, it's important to grasp the basics of cloud technology.",
            keyPoints: [
              'What the cloud is and how it differs from on-premises',
              'Difference between public and private cloud',
              'How MCP services support your workload',
              'What the platform provides vs. what you own'
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
          title: 'Cloud Education',
          icon: GraduationCap,
          content: {
            description: 'Build your cloud capabilities through role-based training paths. We encourage certification to demonstrate knowledge and enhance your skills.',
            keyPoints: [
              'Enterprise Skilling Initiatives (ESI) platform',
              'Role-based learning paths (AZ-900, AZ-104, AZ-305)',
              'TenneT-specific patterns and standards training',
              'Cloud Playbook deep-dives'
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
        { icon: GitBranch, label: 'GitLab Access Request', color: 'text-orange-600' },
        { icon: DollarSign, label: 'Cost Management (FinOps)', color: 'text-green-600' },
        { icon: Shield, label: 'Security & Compliance', color: 'text-red-600' }
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
            { key: 'intakeKickoff', label: 'Schedule intake kickoff', time: '30 min' },
            { key: 'stakeholders', label: 'Confirm stakeholders & ownership (RACI)', time: '20 min' },
            { key: 'appInventory', label: 'Provide app inventory & dependencies', time: '45 min' }
          ]
        },
        {
          title: 'Readiness Assessment',
          items: [
            { key: 'classifyWorkload', label: 'Complete workload classification', time: '15 min' },
            { key: 'readinessAssessment', label: 'Run readiness assessment & log gaps', time: '60 min' }
          ]
        },
        {
          title: 'Initial Solution Design',
          items: [
            { key: 'targetArchitecture', label: 'Agree initial target architecture', time: '60 min' }
          ]
        },
        {
          title: 'Way of Working & ASA',
          items: [
            { key: 'wayOfWorking', label: 'Align ceremonies & decision points', time: '30 min' },
            { key: 'asaDraft', label: 'Draft ASA baseline (support + targets)', time: '45 min' }
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
    }
  };

  const currentConfig = phaseConfig[activePhase] ?? phaseConfig.prepare;
  const sections = currentConfig.sections;
  const quickActions = currentConfig.quickActions;

  const toggleChecklistItem = (itemKey) => {
    setChecklists((prev) => ({
      ...prev,
      [activePhase]: {
        ...(prev[activePhase] ?? {}),
        [itemKey]: !(prev[activePhase]?.[itemKey])
      }
    }));
  };

  const checklist = checklists[activePhase] ?? {};

  const getPhaseChecklistKeys = () => {
    if (activePhase === 'prepare') return currentConfig.checklistItems.map(i => i.key);
    if (activePhase === 'plan') return currentConfig.checklistGroups.flatMap(g => g.items.map(i => i.key));
    return Object.keys(checklist);
  };

  const phaseChecklistKeys = getPhaseChecklistKeys();
  const completedItems = phaseChecklistKeys.filter((k) => Boolean(checklist[k])).length;
  const totalItems = Math.max(phaseChecklistKeys.length, 1);
  const selectedRole = roles.find(r => r.id === activeRole);
  const selectedRoleTopics = selectedRole
    ? (activePhase === 'plan' ? selectedRole.planTopics : selectedRole.prepareTopics)
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,300 L200,150 L400,220 L600,80 L800,180 L1000,100 L1200,200 L1200,300 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute top-4 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <Mountain className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-sm">MCP</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-3">
            <Compass className="w-4 h-4" />
            <span>{currentConfig.hero.phaseLabel}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {currentConfig.hero.title}
          </h1>
          
          <p className="text-lg text-blue-100 max-w-2xl mb-6">
            {currentConfig.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="bg-white text-slate-800 px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors text-sm">
              {React.createElement(currentConfig.hero.primaryCta.icon, { className: 'w-4 h-4' })}
              {currentConfig.hero.primaryCta.label}
            </button>
            <button
              onClick={currentConfig.hero.secondaryCta.onClick}
              className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors text-sm"
            >
              {React.createElement(currentConfig.hero.secondaryCta.icon, { className: 'w-4 h-4' })}
              {currentConfig.hero.secondaryCta.label}
            </button>
          </div>
        </div>
      </div>

      {/* Journey Stepper */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-1 md:gap-2 overflow-x-auto">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <React.Fragment key={phase.id}>
                  <button
                    onClick={() => setPhase(phase.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
                      phase.active 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <div className="text-left">
                      <div className="font-semibold text-sm">{phase.name}</div>
                      <div className={`text-xs ${phase.active ? 'text-blue-100' : 'text-gray-400'}`}>
                        {phase.subtitle}
                      </div>
                    </div>
                    {phase.active && (
                      <span className="ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full">You're here</span>
                    )}
                  </button>
                  {index < phases.length - 1 && (
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${phase.active ? 'text-blue-400' : 'text-gray-300'}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">Quick Actions:</span>
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className="group flex items-center gap-3 bg-white rounded-lg px-4 py-2.5 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200 whitespace-nowrap"
                >
                  <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800 text-sm">{action.label}</div>
                    <div className="text-xs text-gray-500">{action.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Role Selection */}
        <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-800">What's your role?</h2>
              <p className="text-sm text-gray-500">Select to see personalized resources</p>
            </div>
            {selectedRole && (
              <button onClick={() => setActiveRole(null)} className="text-sm text-gray-400 hover:text-gray-600">
                Clear selection
              </button>
            )}
          </div>
          
          <div className="flex gap-3">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = activeRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(isActive ? null : role.id)}
                  className={`flex-1 relative rounded-xl p-4 text-left transition-all ${
                    isActive 
                      ? `bg-gradient-to-br ${role.color} text-white shadow-lg scale-[1.02]`
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-800'}`}>{role.title}</h3>
                      <div className={`text-xs truncate ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                        {role.focus[0]} • {role.focus[1]}
                      </div>
                    </div>
                    {isActive && <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>

          {selectedRole && (
            <div className={`mt-4 p-4 rounded-xl border ${selectedRole.bgColor} ${selectedRole.borderColor} border-opacity-30`}>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-sm mb-2">
                    {currentConfig.roleTipTitle(selectedRole.title)}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoleTopics.map((topic, i) => (
                      <span key={i} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border shadow-sm">{topic}</span>
                    ))}
                  </div>
                  <div className="mt-2 text-xs text-gray-500">Active phases: {selectedRole.phases.join(' → ')}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabs Content */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden mb-6">
          <div className="border-b bg-gray-50">
            <div className="flex overflow-x-auto">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors text-sm ${
                      isActive
                        ? 'border-blue-600 text-blue-600 bg-white'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {section.title}
                  </button>
                );
              })}
            </div>
          </div>

          {sections.map((section) => {
            if (section.id !== activeSection) return null;
            const Icon = section.icon;
            return (
              <div key={section.id} className="p-5">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{section.title}</h3>
                    <p className="text-gray-600 text-sm">{section.content.description}</p>
                  </div>
                </div>

                {section.content.hasVideo && (
                  <div className="bg-gray-900 rounded-xl overflow-hidden mb-5 h-48 flex items-center justify-center relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                    <div className="text-center text-white z-10">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                      <div className="font-semibold text-sm">{section.content.videoTitle}</div>
                      <div className="text-xs text-white/60 mt-1 flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" />
                        5 min watch
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key concepts you'll learn:</h4>
                  <ul className="space-y-1.5">
                    {section.content.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm">
                    <ExternalLink className="w-4 h-4" />
                    Open documentation
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors text-sm">
                    <BookOpen className="w-4 h-4" />
                    Related resources
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Checklist, Quick Links, and Help - Horizontal Row */}
        <div className="grid grid-cols-3 gap-4">
          {/* Progress Checklist */}
          <div className="bg-white rounded-xl shadow-sm border p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-800 text-sm">{currentConfig.checklistTitle}</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                {completedItems}/{totalItems}
              </span>
            </div>

            <div className="h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500"
                style={{ width: `${(completedItems / totalItems) * 100}%` }}
              />
            </div>

            <div className="space-y-2">
              {activePhase === 'plan' ? (
                <div className="space-y-4">
                  {currentConfig.checklistGroups.map((group) => (
                    <div key={group.title}>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        {group.title}
                      </div>
                      <div className="space-y-2">
                        {group.items.map((item) => (
                          <button
                            key={item.key}
                            onClick={() => toggleChecklistItem(item.key)}
                            className="w-full flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left"
                          >
                            {checklist[item.key] ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                              <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className={`text-sm font-medium truncate ${checklist[item.key] ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                                {item.label}
                              </div>
                              <div className="text-xs text-gray-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {item.time}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                currentConfig.checklistItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => toggleChecklistItem(item.key)}
                    className="w-full flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    {checklist[item.key] ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium truncate ${checklist[item.key] ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>

            {completedItems === totalItems && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 text-green-700 font-semibold text-sm mb-2">
                  <Rocket className="w-4 h-4" />
                  {currentConfig.readyCallout.title}
                </div>
                <button
                  onClick={currentConfig.readyCallout.onClick}
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
                >
                  {currentConfig.readyCallout.buttonLabel}
                </button>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-sm border p-5">
            <h3 className="font-bold text-gray-800 text-sm mb-3">Quick Links</h3>
            <div className="space-y-1">
              {currentConfig.quickLinks.map((link, i) => {
                const LinkIcon = link.icon;
                return (
                  <button
                    key={i}
                    className="w-full flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left group"
                  >
                    <LinkIcon className={`w-4 h-4 ${link.color}`} />
                    <span className="flex-1 text-sm text-gray-700 group-hover:text-gray-900">{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Need Help */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-sm p-5 text-white">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4" />
              <h3 className="font-bold text-sm">Need Help?</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-2.5 flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{currentConfig.help.personName}</div>
                  <div className="text-xs text-blue-200">{currentConfig.help.personSubtitle}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentConfig.help.officeHours}</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{currentConfig.help.teamsChannel}</span>
              </div>

              <button className="w-full bg-white text-blue-700 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm">
                {currentConfig.help.buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-800 text-white mt-8">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold mb-1">{currentConfig.footer.title}</h2>
              <p className="text-gray-300 text-sm">{currentConfig.footer.subtitle}</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white text-gray-800 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                {currentConfig.footer.primaryLabel}
              </button>
              <button
                onClick={currentConfig.footer.onSecondary}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm"
              >
                {currentConfig.footer.secondaryLabel}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
