'use client';

import {
  Wrench,
  Gavel,
  Briefcase,
  HardHat,
  Flag,
  Building2,
  DollarSign,
  Sparkles,
  Bell,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  ShoppingCart,
  TrendingUp,
  FileText,
  LayoutDashboard,
  type LucideIcon,
} from 'lucide-react';

interface ConstructionPortalV2Props {
  companyName?: string;
  projectName?: string;
  projectId?: string;
  userName?: string;
  userRole?: string;
}

const NAV_ITEMS: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: Wrench, label: 'Basic Setup' },
  { icon: Gavel, label: 'Bidding Phase' },
  { icon: Briefcase, label: 'Precon Phase' },
  { icon: HardHat, label: 'Construction Phase', active: true },
  { icon: Flag, label: 'Closeout Phase' },
];

const NAV_ITEMS_FOOTER: { icon: LucideIcon; label: string }[] = [
  { icon: Building2, label: 'Company' },
  { icon: DollarSign, label: 'Accounting' },
  { icon: Sparkles, label: 'Tools' },
];

const BUDGET_CARDS = [
  { icon: FileText, tone: 'bg-blue-100 text-blue-700', label: 'Total Budget', value: '$975K' },
  { icon: ShoppingCart, tone: 'bg-amber-100 text-amber-700', label: 'Committed (POs)', value: '$234K', note: '24% of budget' },
  { icon: TrendingUp, tone: 'bg-emerald-100 text-emerald-700', label: 'Remaining Budget', value: '$741K' },
  { icon: Building2, tone: 'bg-indigo-100 text-indigo-700', label: 'Contract Price', value: '$1.3M' },
];

export function ConstructionPortalV2({
  companyName = 'Acme Builders',
  projectName = 'Maple Ridge',
  projectId = '#JOB-2048',
  userName = 'Jordan Lee',
  userRole = 'Admin',
}: ConstructionPortalV2Props) {
  return (
    <div className="relative flex w-full h-full">
      {/* Sidebar */}
      <aside className="hidden sm:flex w-64 flex-shrink-0 flex-col bg-slate-900 text-white overflow-y-auto">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <img src="/marketing/logo-transparent.png" alt="Zerotone" className="w-9 h-9 object-contain flex-shrink-0" />
            <div className="min-w-0">
              <p className="font-bold text-white text-sm truncate">{companyName}</p>
              <p className="text-[10px] text-slate-400 tracking-wide">Powered by ZEROTONE</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition border-l-2 ${
                item.active
                  ? 'bg-slate-800 border-blue-500 text-white'
                  : 'border-transparent text-slate-300 hover:bg-slate-800'
              }`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              <span className="flex-1 text-left uppercase text-xs tracking-wide">{item.label}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          ))}

          <div className="my-3 border-t border-slate-800" />

          {NAV_ITEMS_FOOTER.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border-l-2 border-transparent text-slate-300 hover:bg-slate-800 text-sm font-medium transition"
            >
              <item.icon className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              <span className="flex-1 text-left uppercase text-xs tracking-wide">{item.label}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        <header className="bg-slate-900 text-white px-6 py-3 border-b border-slate-800 flex-shrink-0 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4 text-slate-300" />
            <h1 className="text-base font-bold">Project Dashboard</h1>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-left">
              <div className="leading-tight">
                <p className="text-[9px] uppercase text-slate-400 tracking-wider">Project Context</p>
                <p className="text-xs font-semibold text-white">
                  {projectName} <span className="text-slate-400 font-normal">{projectId}</span>
                </p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <Bell className="w-4 h-4 text-slate-300" />

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-semibold text-white">
                {userName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div className="leading-tight">
                <p className="text-xs font-medium text-white">{userName}</p>
                <p className="text-[10px] text-slate-400">{userRole}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-hidden space-y-8">
          <div>
            <h2 className="text-xl font-bold text-black mb-2">{projectName}</h2>
            <div className="flex items-center gap-4">
              <span className="text-slate-600 text-sm">{projectId}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                OPEN
              </span>
            </div>
          </div>

          <section>
            <h3 className="text-xs font-bold uppercase text-slate-600 mb-5 tracking-wider">
              Budget Health
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {BUDGET_CARDS.map((card) => (
                <div key={card.label} className="bg-white p-5 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${card.tone}`}>
                      <card.icon className="w-4 h-4" />
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </div>
                  <p className="text-xs font-bold text-gray-600 mb-1">{card.label}</p>
                  <p className="text-2xl font-black text-black">{card.value}</p>
                  {card.note && <p className="text-xs text-gray-600 mt-1">{card.note}</p>}
                </div>
              ))}
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 mt-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-black text-sm">Budget is within limits</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Committed purchase orders are at 24% of the approved budget — $741K remaining.
                  </p>
                </div>
                <p className="text-xs text-gray-600 whitespace-nowrap">24% committed</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '24%' }} />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-600 font-bold mb-1">TOTAL BUDGET</p>
                  <p className="text-lg font-black text-blue-600">$975K</p>
                  <p className="text-xs text-gray-600 mt-1">Approved baseline</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-bold mb-1">COMMITTED</p>
                  <p className="text-lg font-black text-emerald-600">$234K</p>
                  <p className="text-xs text-gray-600 mt-1">24% of budget</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-bold mb-1">REMAINING</p>
                  <p className="text-lg font-black text-emerald-600">$741K</p>
                  <p className="text-xs text-gray-600 mt-1">Budget still available</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Floating chat bubble */}
      <button className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg">
        <MessageCircle className="w-5 h-5" />
      </button>
    </div>
  );
}
