"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  Briefcase, 
  CalendarDays, 
  Users, 
  CheckSquare, 
  FolderOpen,
  DollarSign,
  AlertTriangle,
  BarChart3,
  Bell,
  Search,
  ChevronDown
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Data Model ---

const storySteps = [
  {
    id: "win-work",
    number: "01",
    eyebrow: "HOW THIS GOT BUILT",
    title: "Win the work",
    description: "Get more jobs signed and build a stronger pipeline.",
    features: ["Leads", "Estimates", "Proposals", "Contracts"],
  },
  {
    id: "run-work",
    number: "02",
    eyebrow: "RUN THE JOB",
    title: "Run the work",
    description: "Keep projects on schedule and field teams aligned.",
    features: ["Scheduling", "Crews", "Field Management", "Documents"],
  },
  {
    id: "run-money",
    number: "03",
    eyebrow: "PROTECT PROFIT",
    title: "Run the money",
    description: "Protect profit margins and prevent cost overruns.",
    features: ["Job Costing", "Bills", "Invoices", "Change Orders"],
  },
  {
    id: "stay-ahead",
    number: "04",
    eyebrow: "STAY IN CONTROL",
    title: "Stay ahead",
    description: "Know exactly what needs your attention right now.",
    features: ["Dashboard", "Reports", "Compliance", "AI Insights"],
  },
];

export function ProductStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = React.useState(0);

  // GSAP for tracking scroll progress and updating activeStep
  useGSAP(
    () => {
      if (!containerRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // Progress is 0 to 1 over the 400vh container
          const progress = self.progress;
          let step = 0;
          
          // Use slight offset to make transitions feel natural
          if (progress < 0.22) step = 0;
          else if (progress < 0.47) step = 1;
          else if (progress < 0.72) step = 2;
          else step = 3;

          if (activeStep !== step) {
            setActiveStep(step);
          }
        },
      });
    },
    { scope: containerRef, dependencies: [activeStep] }
  );

  const handleStepClick = (index: number) => {
    if (!containerRef.current) return;
    
    // The container is 400vh tall. 
    // Each step correlates to 100vh (one window height) of scroll progress
    // We use a slight offset into the step to ensure ScrollTrigger catches it cleanly.
    const containerTop = containerRef.current.offsetTop;
    const windowHeight = window.innerHeight;
    
    // Adding 10px to ensure we cross the threshold in GSAP's onUpdate
    const targetScrollY = containerTop + (index * windowHeight) + 10;
    
    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth"
    });
  };

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-surface text-text-primary border-t border-border-subtle">
      {/* Sticky Inner Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-surface">
        
        {/* Max width wrapper */}
        <div className="w-full max-w-7xl h-full px-6 md:px-12 py-12 md:py-24 flex flex-col lg:flex-row gap-8 lg:gap-24">
          
          {/* Left Side: Story Narrative */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center gap-4 lg:gap-6 z-10 relative mt-16 lg:mt-0 h-[40vh] lg:h-auto shrink-0">
            {storySteps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div 
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={cn(
                    "flex flex-col border-l-2 pl-5 py-2 transition-all duration-700 ease-[0.22,1,0.36,1] cursor-pointer",
                    isActive ? "border-primary-600 opacity-100" : "border-border-subtle opacity-40 hover:opacity-70"
                  )}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className={cn("text-xs font-bold font-mono tracking-widest transition-colors duration-500", isActive ? "text-primary-600" : "text-text-muted")}>
                      {step.number}
                    </span>
                    <AnimatePresence>
                      {isActive && (
                        <motion.span 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.4 }}
                          className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted"
                        >
                          — {step.eyebrow}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <h2 className={cn(
                    "font-display font-bold tracking-tight transition-all duration-700",
                    isActive ? "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary-900" : "text-xl sm:text-2xl lg:text-3xl text-text-secondary"
                  )}>
                    {step.title}
                  </h2>

                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isActive ? "auto" : 0, 
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? (typeof window !== 'undefined' && window.innerWidth < 1024 ? 12 : 20) : 0
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-[420px]">
                      {step.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4 lg:mt-6">
                      {step.features.map(f => (
                        <span key={f} className="px-2.5 py-1 lg:px-3 lg:py-1.5 bg-background border border-border-subtle rounded-full text-[10px] lg:text-xs font-bold text-text-secondary uppercase tracking-wider shadow-sm">
                          {f}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Product Portal Shell */}
          <div className="w-full lg:w-[60%] flex-1 relative flex items-center justify-center min-h-[40vh]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary-900/5 rounded-full blur-[100px] opacity-70 pointer-events-none" />
            
            {/* The Portal UI Box */}
            <div className="relative w-full h-full max-h-[700px] bg-background rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-border-subtle overflow-hidden flex flex-col z-10 ring-1 ring-black/5">
              
              {/* Portal Header */}
              <div className="h-12 lg:h-14 border-b border-border-subtle bg-surface flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 rounded bg-primary-900 flex items-center justify-center shadow-inner overflow-hidden">
                    <img src="/logo-mark.png" alt="Zerotone Logo" className="w-4 h-4 lg:w-5 lg:h-5 object-contain brightness-0 invert" />
                  </div>
                  <div className="flex flex-col">
                    <span className="hidden sm:block text-[9px] text-text-muted font-bold uppercase tracking-wider leading-none mb-0.5">Project Context</span>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span className="text-xs lg:text-sm font-semibold text-text-primary leading-none">Echo Park MFR</span>
                      <ChevronDown className="w-3 h-3 text-text-secondary" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 lg:gap-4">
                  <Search className="w-4 h-4 text-text-secondary hidden sm:block" />
                  <Bell className="w-4 h-4 text-text-secondary hidden sm:block" />
                  <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-neutral-200 border border-border-subtle flex items-center justify-center">
                    <span className="text-[10px] lg:text-xs font-bold text-text-secondary">JD</span>
                  </div>
                </div>
              </div>

              {/* Portal Body */}
              <div className="flex flex-1 overflow-hidden bg-background">
                {/* Portal Sidebar */}
                <div className="w-48 border-r border-border-subtle bg-surface/40 hidden md:flex flex-col py-4 shrink-0">
                  <SidebarItem icon={Briefcase} label="Pipeline" active={activeStep === 0} />
                  <SidebarItem icon={CalendarDays} label="Schedule" active={activeStep === 1} />
                  <SidebarItem icon={DollarSign} label="Financials" active={activeStep === 2} />
                  <SidebarItem icon={BarChart3} label="Dashboard" active={activeStep === 3} />
                  
                  <div className="mt-8 px-4 mb-2 text-[10px] font-bold text-text-muted uppercase tracking-wider">Modules</div>
                  <SidebarItem icon={Building2} label="Buildings" />
                  <SidebarItem icon={Users} label="Crews" />
                  <SidebarItem icon={CheckSquare} label="Tasks" />
                  <SidebarItem icon={FolderOpen} label="Documents" />
                </div>

                {/* Portal Main Content Area */}
                <div className="flex-1 relative overflow-hidden bg-background">
                  <AnimatePresence mode="wait">
                    {activeStep === 0 && <PipelineView key="pipeline" />}
                    {activeStep === 1 && <ScheduleView key="schedule" />}
                    {activeStep === 2 && <FinancialsView key="financials" />}
                    {activeStep === 3 && <IntelligenceView key="intelligence" />}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sidebar Helper ---
function SidebarItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-2 mx-2 rounded-md cursor-default transition-all duration-300",
      active ? "bg-primary-50 text-primary-900 shadow-sm" : "text-text-secondary"
    )}>
      <Icon className={cn("w-4 h-4 transition-colors duration-300", active ? "text-primary-600" : "opacity-70")} />
      <span className={cn("text-sm transition-all duration-300", active ? "font-semibold" : "font-medium")}>{label}</span>
    </div>
  );
}

// --- Portal View Components ---

function PipelineView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="p-4 lg:p-6 h-full flex flex-col absolute inset-0"
    >
      <div className="flex items-center justify-between mb-4 lg:mb-6 shrink-0">
        <h3 className="text-lg lg:text-xl font-bold text-text-primary">Bid Pipeline</h3>
        <button className="px-2 py-1 lg:px-3 lg:py-1.5 bg-primary-900 text-white text-[10px] lg:text-xs font-bold rounded-md shadow-sm">New Opportunity</button>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col gap-2 lg:gap-3 pr-2 custom-scrollbar">
        <PipelineCard title="Echo Park MFR" status="Proposal sent" value="$557,056" prob="82%" color="bg-primary-500" />
        <PipelineCard title="Harbor Logistics TI" status="Estimate in progress" value="$214,300" prob="45%" color="bg-amber-500" />
        <PipelineCard title="Marisol Residences" status="New lead" value="$1.24M" prob="15%" color="bg-emerald-500" />
        <PipelineCard title="Civic Center Renovation" status="Reviewing plans" value="$890,000" prob="60%" color="bg-purple-500" opacity="opacity-60" />
        <PipelineCard title="Lakeside Commercial" status="Lost" value="$3.1M" prob="0%" color="bg-neutral-400" opacity="opacity-40" />
      </div>
    </motion.div>
  );
}

function PipelineCard({ title, status, value, prob, color, opacity = "opacity-100" }: any) {
  return (
    <div className={cn("p-3 lg:p-4 border border-border-subtle rounded-lg bg-surface flex items-center justify-between shadow-sm shrink-0", opacity)}>
      <div className="flex items-center gap-3 lg:gap-4">
        <div className={cn("w-1.5 lg:w-2 h-8 lg:h-10 rounded-full", color)} />
        <div>
          <div className="font-bold text-text-primary text-xs lg:text-sm">{title}</div>
          <div className="text-[10px] lg:text-xs text-text-secondary mt-0.5">{status}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-text-primary text-xs lg:text-sm">{value}</div>
        <div className="text-[10px] lg:text-xs text-text-secondary mt-0.5">{prob} prob.</div>
      </div>
    </div>
  );
}

function ScheduleView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="p-4 lg:p-6 h-full flex flex-col absolute inset-0"
    >
      <div className="flex items-center justify-between mb-4 lg:mb-6 shrink-0">
        <h3 className="text-lg lg:text-xl font-bold text-text-primary">Schedule Control</h3>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold rounded flex items-center gap-1 shadow-sm"><AlertTriangle className="w-3 h-3"/> 1 At Risk</span>
        </div>
      </div>

      <div className="flex-1 border border-border-subtle rounded-lg bg-surface flex flex-col overflow-hidden shadow-sm">
        <div className="flex border-b border-border-subtle h-8 bg-neutral-50 text-[9px] lg:text-[10px] font-bold text-text-muted uppercase items-center shrink-0">
          <div className="w-1/3 px-3 border-r border-border-subtle">Task</div>
          <div className="w-2/3 flex h-full">
             {["Mon", "Tue", "Wed", "Thu", "Fri"].map(d => <div key={d} className="flex-1 flex items-center justify-center border-r border-border-subtle last:border-0">{d}</div>)}
          </div>
        </div>
        <div className="flex-1 flex flex-col p-2 gap-2 relative overflow-y-auto custom-scrollbar">
          <div className="absolute inset-y-0 right-0 w-2/3 flex pointer-events-none opacity-20">
            {[1,2,3,4,5].map(i => <div key={i} className="flex-1 border-r border-border-subtle last:border-0" />)}
          </div>

          <GanttRow title="Site Prep" crew="Crew A" w="w-[20%]" left="left-0" color="bg-emerald-500" opacity="opacity-50" />
          <GanttRow title="Foundations" crew="Crew A" w="w-[40%]" left="left-[15%]" color="bg-emerald-500" />
          <GanttRow title="Framing" crew="Crew B" w="w-[60%]" left="left-[30%]" color="bg-amber-500" warning />
          <GanttRow title="MEP Rough-in" crew="Sub 1" w="w-[50%]" left="left-[50%]" color="bg-primary-500" />
          <GanttRow title="Drywall" crew="Sub 2" w="w-[30%]" left="left-[80%]" color="bg-neutral-400" />
        </div>
      </div>
    </motion.div>
  );
}

function GanttRow({ title, crew, w, left, color, warning, opacity = "opacity-100" }: any) {
  return (
    <div className={cn("flex items-center text-[10px] lg:text-xs h-8 shrink-0", opacity)}>
      <div className="w-1/3 pr-2 flex flex-col justify-center pl-1">
        <span className="font-semibold text-text-primary truncate">{title}</span>
        <span className="text-[9px] lg:text-[10px] text-text-secondary truncate">{crew}</span>
      </div>
      <div className="w-2/3 relative h-full flex items-center px-1">
        <div className={cn("h-4 lg:h-5 rounded-md shadow-sm relative min-w-[10px]", w, left, color)}>
          {warning && <div className="absolute -top-1 -right-1 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-red-500 rounded-full border border-white shadow-sm" />}
        </div>
      </div>
    </div>
  );
}

function FinancialsView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="p-4 lg:p-6 h-full flex flex-col absolute inset-0 bg-surface/50"
    >
      <div className="flex items-center justify-between mb-3 lg:mb-4 shrink-0">
        <h3 className="text-lg lg:text-xl font-bold text-text-primary">Job Costing</h3>
      </div>

      <div className="grid grid-cols-3 gap-2 lg:gap-3 mb-4 lg:mb-6 shrink-0">
        <StatCard title="TOTAL BUDGET" value="$4.6M" />
        <StatCard title="COMMITTED" value="$3.1M" color="text-amber-600" />
        <StatCard title="REMAINING" value="$1.5M" color="text-emerald-600" />
      </div>

      <div className="flex-1 border border-border-subtle rounded-lg bg-background overflow-hidden flex flex-col shadow-sm">
        <div className="flex border-b border-border-subtle p-2 lg:p-3 bg-neutral-50 text-[9px] lg:text-[10px] font-bold text-text-muted uppercase shrink-0">
          <div className="flex-1">Cost Code</div>
          <div className="w-16 lg:w-24 text-right">Budget</div>
          <div className="w-16 lg:w-24 text-right">Actual</div>
          <div className="w-16 lg:w-24 text-right pr-2">Variance</div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <FinanceRow code="03-000 Concrete" budget="$114,600" actual="$96,530" variance="+$18,070" good />
          <FinanceRow code="06-000 Carpentry" budget="$137,000" actual="$141,200" variance="-$4,200" bad />
          <FinanceRow code="15-000 Plumbing" budget="$68,400" actual="$61,900" variance="+$6,500" good />
          <FinanceRow code="16-000 Electrical" budget="$82,000" actual="$82,000" variance="$0" />
          <FinanceRow code="09-000 Finishes" budget="$45,000" actual="$12,000" variance="+$33,000" good />
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ title, value, color = "text-text-primary" }: any) {
  return (
    <div className="p-2 lg:p-3 border border-border-subtle rounded-lg bg-background shadow-sm">
      <div className="text-[9px] lg:text-[10px] font-bold text-text-muted uppercase mb-1 truncate">{title}</div>
      <div className={cn("text-base lg:text-lg font-bold font-display truncate", color)}>{value}</div>
    </div>
  );
}

function FinanceRow({ code, budget, actual, variance, good, bad }: any) {
  return (
    <div className="flex border-b border-border-subtle p-2 lg:p-3 text-[10px] lg:text-xs last:border-0 hover:bg-neutral-50 transition-colors">
      <div className="flex-1 font-semibold text-text-primary truncate pr-2">{code}</div>
      <div className="w-16 lg:w-24 text-right text-text-secondary truncate">{budget}</div>
      <div className="w-16 lg:w-24 text-right text-text-primary truncate">{actual}</div>
      <div className={cn("w-16 lg:w-24 text-right font-bold truncate pr-2", good && "text-emerald-600", bad && "text-red-600")}>{variance}</div>
    </div>
  );
}

function IntelligenceView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="p-4 lg:p-6 h-full flex flex-col absolute inset-0 bg-surface/50"
    >
      <div className="flex items-center justify-between mb-3 lg:mb-4 shrink-0">
        <h3 className="text-lg lg:text-xl font-bold text-text-primary">Executive Dashboard</h3>
      </div>

      <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-3 lg:mb-4 shrink-0">
        <div className="p-3 lg:p-4 border border-border-subtle rounded-lg bg-background shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[9px] lg:text-[10px] font-bold text-text-muted uppercase mb-0.5 lg:mb-1">Active Jobs</div>
            <div className="text-xl lg:text-2xl font-bold font-display text-text-primary">8</div>
          </div>
          <Building2 className="w-6 h-6 lg:w-8 lg:h-8 text-primary-200" />
        </div>
        <div className="p-3 lg:p-4 border border-border-subtle rounded-lg bg-background shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[9px] lg:text-[10px] font-bold text-text-muted uppercase mb-0.5 lg:mb-1">Margin at Risk</div>
            <div className="text-xl lg:text-2xl font-bold font-display text-red-600">$31K</div>
          </div>
          <AlertTriangle className="w-6 h-6 lg:w-8 lg:h-8 text-red-100" />
        </div>
      </div>

      <div className="p-3 lg:p-4 bg-primary-50 border border-primary-200 rounded-lg shadow-sm flex gap-3 relative overflow-hidden mb-3 lg:mb-4 shrink-0">
        <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-primary-200 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none" />
        <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary-600 flex items-center justify-center shrink-0 shadow-sm relative z-10">
          <span className="text-white font-bold text-[10px] lg:text-xs">AI</span>
        </div>
        <div className="relative z-10">
          <h4 className="text-[10px] lg:text-xs font-bold text-primary-900 mb-0.5 lg:mb-1 uppercase tracking-wider">Zerotone Insight</h4>
          <p className="text-xs lg:text-sm text-primary-900/90 leading-relaxed font-medium pr-4">
            Echo Park MEP is trending 6 days late and $12K over budget. Move Crew B from Pier 7 closeout to recover schedule by Friday.
          </p>
          <button className="mt-2.5 lg:mt-3 px-2.5 py-1 lg:px-3 lg:py-1.5 bg-primary-900 text-white text-[10px] lg:text-xs font-bold rounded-md shadow-sm hover:bg-primary-800 transition-colors">Review Changes</button>
        </div>
      </div>
      
      <div className="flex-1 border border-border-subtle rounded-lg bg-background overflow-hidden flex flex-col p-2 lg:p-3 gap-1.5 lg:gap-2 shadow-sm min-h-[100px]">
         <div className="text-[9px] lg:text-[10px] font-bold text-text-muted uppercase mb-0.5 lg:mb-1 px-1">Project Health</div>
         <div className="flex-1 overflow-y-auto flex flex-col gap-1.5 lg:gap-2 custom-scrollbar pr-1">
           <div className="flex items-center justify-between text-[10px] lg:text-xs p-2 bg-emerald-50 rounded border border-emerald-100 shrink-0">
             <span className="font-semibold text-emerald-900">Pier 7 Cold Storage</span>
             <span className="text-emerald-700 font-bold">On track (92%)</span>
           </div>
           <div className="flex items-center justify-between text-[10px] lg:text-xs p-2 bg-amber-50 rounded border border-amber-100 shrink-0">
             <span className="font-semibold text-amber-900">Echo Park MFR</span>
             <span className="text-amber-700 font-bold">Watch (46%)</span>
           </div>
           <div className="flex items-center justify-between text-[10px] lg:text-xs p-2 bg-red-50 rounded border border-red-100 shrink-0">
             <span className="font-semibold text-red-900">Marisol Residences</span>
             <span className="text-red-700 font-bold">At risk (28%)</span>
           </div>
         </div>
      </div>
    </motion.div>
  );
}
