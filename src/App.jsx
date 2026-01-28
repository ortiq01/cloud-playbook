import React, { useState } from 'react';
import { 
  Mountain, Users, BookOpen, GraduationCap, Play, ChevronRight, 
  CheckCircle2, Circle, ExternalLink, Calendar, MessageSquare,
  Briefcase, Building2, Code, FileText, Settings, DollarSign,
  Shield, GitBranch, ArrowRight, Clock, User, HelpCircle,
  Compass, Target, Lightbulb, Rocket, Ticket
} from 'lucide-react';

import {
  createPhaseConfig,
  defaultSectionByPhase,
  initialChecklists,
  phaseDefinitions,
  roles,
  topicKeyByPhase
} from './appConfig';

export default function MCPPreparePage() {
  const [activePhase, setActivePhase] = useState('prepare');
  const [activeRole, setActiveRole] = useState(null);
  const [activeSection, setActiveSection] = useState(defaultSectionByPhase.prepare);
  const [checklists, setChecklists] = useState(initialChecklists);

  const openExternal = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const setPhase = (phaseId) => {
    setActivePhase(phaseId);
    setActiveSection(defaultSectionByPhase[phaseId] ?? defaultSectionByPhase.prepare);
  };

  const phases = [
    ...phaseDefinitions
  ].map((p) => ({ ...p, active: p.id === activePhase }));

  const phaseConfig = createPhaseConfig({ setPhase });

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
    if (activePhase === 'plan') return currentConfig.checklistGroups.flatMap(g => g.items.map(i => i.key));
    if (currentConfig.checklistItems) return currentConfig.checklistItems.map(i => i.key);
    return Object.keys(checklist);
  };

  const phaseChecklistKeys = getPhaseChecklistKeys();
  const completedItems = phaseChecklistKeys.filter((k) => Boolean(checklist[k])).length;
  const totalItems = Math.max(phaseChecklistKeys.length, 1);
  const selectedRole = roles.find(r => r.id === activeRole);

  const selectedRoleTopics = selectedRole
    ? (selectedRole[topicKeyByPhase[activePhase]] ?? selectedRole.prepareTopics ?? [])
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
          <div className="flex items-center gap-2 overflow-x-auto md:overflow-visible md:justify-between">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <React.Fragment key={phase.id}>
                  <button
                    onClick={() => setPhase(phase.id)}
                    className={`flex items-center gap-3 px-4 py-3 md:flex-1 md:min-w-0 md:px-5 md:py-3.5 rounded-xl transition-all min-w-[220px] ${
                      phase.active 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-semibold text-sm md:text-base">{phase.name}</div>
                      <div className={`text-xs md:text-sm ${phase.active ? 'text-blue-100' : 'text-gray-400'}`}>
                        {phase.subtitle}
                      </div>
                    </div>
                    {phase.active && (
                      <span className="ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full">You're here</span>
                    )}
                  </button>
                  {index < phases.length - 1 && (
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 md:hidden ${phase.active ? 'text-blue-400' : 'text-gray-300'}`} />
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
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={`p-4 rounded-xl border ${selectedRole.bgColor} ${selectedRole.borderColor} border-opacity-30`}>
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

              <div className="p-4 rounded-xl border bg-white">
                <div className="flex items-start gap-3">
                  <Ticket className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-sm mb-2">Topdesk requests</div>
                    <div className="space-y-2">
                      {(currentConfig.topdeskRequests ?? []).length > 0 ? (
                        (currentConfig.topdeskRequests ?? []).map((req, i) => (
                          <div key={i} className="bg-gray-50 border rounded-lg px-3 py-2">
                            <div className="text-sm font-medium text-gray-800">{req.label}</div>
                            {req.desc && <div className="text-xs text-gray-500">{req.desc}</div>}
                          </div>
                        ))
                      ) : (
                        <div className="text-sm text-gray-500">No Topdesk requests for this phase.</div>
                      )}
                    </div>
                  </div>
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
                  <button
                    onClick={() => openExternal(section.content.documentationUrl)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open documentation
                  </button>
                  <button
                    onClick={() => openExternal(section.content.resourcesUrl)}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors text-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    Related resources
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Checklist and Quick Links - Horizontal Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    onClick={() => openExternal(link.url)}
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
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-800 text-white mt-8">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold mb-1">{currentConfig.footer.title}</h2>
              <p className="text-gray-300 text-sm">{currentConfig.footer.subtitle}</p>
            </div>

            <div className="lg:col-span-1 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 justify-start lg:justify-center">
              <button className="bg-white text-gray-800 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                {currentConfig.footer.primaryLabel}
              </button>
              <button
                onClick={currentConfig.footer.onSecondary}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors text-sm"
              >
                {currentConfig.footer.secondaryLabel}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-1 lg:flex lg:justify-end">
              <div className="w-full lg:max-w-md flex flex-col justify-center">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-200" />
                    <div className="font-semibold text-sm">Need Help?</div>
                  </div>
                  <button className="bg-white text-gray-800 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm whitespace-nowrap">
                    {currentConfig.help.buttonLabel}
                  </button>
                </div>

                <div className="mt-3 flex items-start gap-3">
                  <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm truncate">{currentConfig.help.personName}</div>
                    <div className="text-xs text-gray-300 truncate">{currentConfig.help.personSubtitle}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
