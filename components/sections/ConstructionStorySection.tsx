"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const storySteps = [
  {
    id: "budget",
    eyebrow: "Budget & Cost Control",
    title: "Know where every committed dollar is going before the invoice arrives.",
    description: "Your budget starts from the approved estimate. The moment a PO is approved, it reduces your available balance. When the vendor invoice comes in, actuals update automatically. You always see baseline, committed, and actual side by side.",
    bullets: [
      "Estimate lines auto seed the budget: zero reentry",
      "Approved POs commit budget by cost code instantly",
      "Catch overruns in week three, not week twelve",
      "Budget transfers with documented approval chain",
      "Short close POs to return savings to available budget"
    ],
  },
  {
    id: "schedule",
    eyebrow: "Schedule Control",
    title: "Know which delays will blow your deadline, and which ones won't.",
    description: "Import the GC's schedule. Build your own internal schedule alongside it. Compare both against your vendor's committed delivery dates. Zerotone's AI flags the moment a late delivery would push a downstream activity past its deadline.",
    bullets: [
      "Import P6 or MS Project exports from your GC directly",
      "Six schedule lenses: baseline, GC, internal, forecast, committed PO, actual",
      "CPM runs automatically: see critical path color coded",
      "AI slippage alert fires when a vendor date threatens your finish",
      "Progress tracking: % complete and actual dates from the field"
    ],
  },
  {
    id: "accounting",
    eyebrow: "Accounting & GL",
    title: "Your books update the moment you approve a vendor bill.",
    description: "Zerotone includes a full double entry general ledger built for project based businesses. When you approve a vendor invoice, it posts to AP automatically. When a pay application is approved, AR is created. At month end, your P&L is already done.",
    bullets: [
      "AP invoices from approved bills post to GL automatically",
      "AR entries created when billing periods are approved",
      "AI-assisted bank import with auto categorization and reconciliation",
      "POC revenue recognition: know what you've actually earned",
      "P&L, Balance Sheet, Cash Flow, and WIP report per project"
    ],
  }
];

export function ConstructionStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const currentStepRef = useRef(0);
  const portalRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Initial State Setup
    portalRefs.current.forEach((el, i) => {
      if (el) {
        if (i === 0) {
          gsap.set(el, { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 24px)", zIndex: 10 });
        } else {
          gsap.set(el, { opacity: 0, scale: 0.95, clipPath: "inset(5% 5% 5% 5% round 24px)", zIndex: 5 });
        }
      }
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        let step = 0;
        
        if (progress < 0.33) step = 0;
        else if (progress < 0.66) step = 1;
        else step = 2;

        if (currentStepRef.current !== step) {
          const oldStep = currentStepRef.current;
          currentStepRef.current = step;
          setActiveStep(step);
          
          // GSAP Mask Transition for Portals
          const currentEl = portalRefs.current[oldStep];
          const nextEl = portalRefs.current[step];
          
          if (currentEl && nextEl) {
            // Animate out current (Shrink and fade)
            gsap.to(currentEl, {
              clipPath: "inset(5% 5% 5% 5% round 24px)",
              opacity: 0,
              scale: 0.95,
              duration: 0.6,
              ease: "power3.inOut"
            });
            
            // Bring next element to top z-index
            gsap.set(nextEl, { zIndex: 10 });
            gsap.set(currentEl, { zIndex: 5 });

            // Animate in next (Expand from center)
            gsap.fromTo(nextEl, 
              {
                clipPath: "inset(20% 20% 20% 20% round 24px)",
                opacity: 0,
                scale: 1.05
              },
              {
                clipPath: "inset(0% 0% 0% 0% round 24px)",
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power4.out",
                delay: 0.1
              }
            );
          }
        }
      },
    });
  }, { scope: containerRef });

  return (
    <section id="tour" ref={containerRef} className="relative w-full h-[300vh] bg-background text-text-primary overflow-x-clip">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 rounded-full blur-[120px]" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary-100 rounded-full blur-[120px]" />
      </div>

      {/* Sticky Inner Container */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center pt-24 pb-12">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-3xl px-6 mb-12 sm:mb-16 z-20 shrink-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[10px] font-bold text-primary-800 mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            See It Running
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-display font-bold tracking-tight text-text-primary mb-4 leading-tight">
            See what running a project in <br className="hidden md:block"/>Zerotone actually looks like.
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-xl">
            Three of the modules where Zerotone goes deeper than any point tool you're currently using.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="w-full max-w-7xl flex-1 flex flex-col lg:flex-row px-6 md:px-12 gap-12 lg:gap-24 relative z-20">
          
          {/* Left Side: Narrative */}
          <div className="w-full lg:w-[45%] flex flex-col relative h-[50vh] lg:h-full shrink-0">
            {storySteps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div 
                  key={step.id} 
                  className={cn(
                    "absolute top-0 lg:top-1/2 left-0 w-full lg:-translate-y-1/2 transition-all duration-700 ease-[0.22,1,0.36,1]",
                    isActive ? "opacity-100 pointer-events-auto z-10 scale-100" : "opacity-0 pointer-events-none z-0 scale-[0.98] -translate-y-8 lg:-translate-y-[calc(50%+20px)]"
                  )}
                >
                  <span className="text-primary-500 font-data text-[11px] lg:text-xs font-bold italic tracking-wider mb-2 lg:mb-3 block">
                    {step.eyebrow}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-display font-bold text-text-primary mb-4 lg:mb-6">
                    {step.title}
                  </h3>

                  <p className="text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                    {step.description}
                  </p>
                  
                  <ul className="flex flex-col gap-2.5 lg:gap-3">
                    {step.bullets.map((bullet, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-3"
                        style={{
                          transitionDelay: isActive ? `${(i * 100) + 300}ms` : '0ms',
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateX(0)' : 'translateX(-10px)',
                          transitionProperty: 'opacity, transform',
                          transitionDuration: '0.5s',
                          transitionTimingFunction: 'ease'
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-primary-500 shrink-0 mt-0.5" />
                        <span className="text-text-primary text-xs sm:text-sm font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Right Side: Portal Visualizer */}
          <div className="w-full lg:w-[55%] h-[40vh] lg:h-full relative flex items-start lg:items-center justify-center pt-8 lg:pt-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[550px]">
              {/* State 1: Budget */}
              <div ref={el => { portalRefs.current[0] = el; }} className="absolute inset-0 bg-white rounded-2xl shadow-raised overflow-hidden flex flex-col p-4 sm:p-6 lg:p-8 border border-border-subtle">
                <BudgetPortalState />
              </div>
              
              {/* State 2: Schedule */}
              <div ref={el => { portalRefs.current[1] = el; }} className="absolute inset-0 bg-white rounded-2xl shadow-raised overflow-hidden flex flex-col p-4 sm:p-6 lg:p-8 border border-border-subtle">
                <SchedulePortalState />
              </div>

              {/* State 3: Accounting */}
              <div ref={el => { portalRefs.current[2] = el; }} className="absolute inset-0 bg-white rounded-2xl shadow-raised overflow-hidden flex flex-col p-4 sm:p-6 lg:p-8 border border-border-subtle">
                <AccountingPortalState />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Portal UI Components ---

function BudgetPortalState() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-1.5 mb-4 lg:mb-6 opacity-30">
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
      </div>
      <h4 className="text-xs lg:text-sm font-bold text-neutral-900 mb-4 lg:mb-6">Budget Summary: River North Office</h4>
      
      <div className="flex-1 flex flex-col gap-2 lg:gap-3">
        <BudgetRow code="03- Concrete" value="$62,400" label="budgeted" color="bg-emerald-500" width="w-[80%]" />
        <BudgetRow code="05- Metals" value="$28,800" label="committed" warning color="bg-blue-600" width="w-[45%]" />
        <BudgetRow code="09- Finishes" value="$18,200" label="committed" color="bg-amber-500" width="w-[30%]" />
        <BudgetRow code="15- MEP" value="$44,500" label="approved" color="bg-purple-500" width="w-[60%]" />
      </div>

      <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-blue-50 text-blue-900 text-[10px] lg:text-xs font-semibold rounded-lg flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
        Metals is 97% committed: 3% available against $29,700 budget
      </div>
    </div>
  );
}

function BudgetRow({ code, value, label, color, width, warning }: any) {
  return (
    <div className="border border-neutral-200 rounded-md lg:rounded-lg p-2 lg:p-3 flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center z-10 relative mb-1.5 lg:mb-2">
        <span className="text-[10px] lg:text-xs font-bold text-neutral-800">{code}</span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] lg:text-xs font-black text-neutral-900">{value}</span>
          <span className="text-[9px] lg:text-[10px] text-neutral-500 font-medium">{label}</span>
          {warning && <span className="ml-1 text-[9px] bg-red-100 text-red-600 px-1 py-0.5 rounded font-bold">!</span>}
        </div>
      </div>
      <div className="w-full h-1 lg:h-1.5 bg-neutral-100 rounded-full z-10 relative overflow-hidden">
        <div className={cn("h-full rounded-full", color, width)} />
      </div>
    </div>
  );
}

function SchedulePortalState() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-1.5 mb-4 lg:mb-6 opacity-30">
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
      </div>
      <h4 className="text-xs lg:text-sm font-bold text-neutral-900 mb-4 lg:mb-6">Schedule Control: Critical Path View</h4>
      
      <div className="flex-1 flex flex-col gap-3 lg:gap-4">
        <GanttRow title="Demolition" status="Complete" statusColor="text-emerald-600 bg-emerald-50" width="w-[100%]" left="left-0" color="bg-blue-500" />
        <GanttRow title="Concrete Pour" status="On Track" statusColor="text-blue-600 bg-blue-50" width="w-[80%]" left="left-[10%]" color="bg-blue-500" />
        <GanttRow title="MEP Rough In" status="Float: 2d" statusColor="text-amber-600 bg-amber-50" width="w-[60%]" left="left-[30%]" color="bg-blue-500" />
        <GanttRow title="Steel Frame" status="⚠ Slipping" statusColor="text-red-600 bg-red-50 border border-red-200" width="w-[40%]" left="left-[50%]" color="bg-blue-500" />
        <GanttRow title="Drywall" status="At Risk" statusColor="text-red-600 bg-red-50" width="w-[30%]" left="left-[70%]" color="bg-blue-500" />
      </div>

      <div className="mt-4 p-3 lg:p-4 bg-red-50 border border-red-100 text-red-900 text-[10px] lg:text-xs font-semibold rounded-lg leading-relaxed">
        Steel vendor committed date is Aug 18: 6 days after CPM projected finish. Drywall start at risk.
      </div>
    </div>
  );
}

function GanttRow({ title, status, statusColor, width, left, color }: any) {
  return (
    <div className="flex flex-col gap-1 lg:gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-[10px] lg:text-[11px] font-bold text-neutral-800">{title}</span>
        <span className={cn("text-[9px] font-bold px-1.5 py-0.5 rounded", statusColor)}>{status}</span>
      </div>
      <div className="w-full relative h-2 lg:h-3">
        <div className={cn("absolute top-0 h-full rounded-full", width, left, color)} />
      </div>
    </div>
  );
}

function AccountingPortalState() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-1.5 mb-4 lg:mb-6 opacity-30">
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
        <div className="w-2 h-2 rounded-full bg-neutral-800" />
      </div>
      <h4 className="text-xs lg:text-sm font-bold text-neutral-900 mb-3 lg:mb-4">Accounting: Project P&L - July</h4>
      
      <div className="flex-1 border border-neutral-200 rounded-lg lg:rounded-xl flex flex-col overflow-hidden bg-neutral-50/50">
        <PLRow label="Contract Revenue" value="$312,000" color="text-emerald-600" />
        <PLRow label="Earned Revenue (POC)" value="$243,360" color="text-emerald-600" />
        <PLRow label="Cost of Revenue (Actual)" value="$198,400" color="text-red-600" />
        <div className="border-t-2 border-neutral-200" />
        <PLRow label="Gross Profit" value="$44,960" color="text-emerald-600" bold />
        <div className="border-t border-neutral-200" />
        <PLRow label="Retainage Held" value="$24,336" color="text-neutral-900" bold />
      </div>

      <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 text-[9px] lg:text-[10px] font-bold rounded-lg flex items-center gap-1.5 border border-emerald-100">
        <CheckCircle2 className="w-3 h-3 shrink-0" />
        Last reconciled: Jul 31 - 3 unmatched transactions
      </div>
    </div>
  );
}

function PLRow({ label, value, color, bold }: any) {
  return (
    <div className="flex justify-between items-center p-2 lg:p-3.5 border-b border-neutral-100 last:border-0 bg-white">
      <span className={cn("text-[10px] lg:text-xs text-neutral-700", bold && "font-bold text-neutral-900")}>{label}</span>
      <span className={cn("text-[10px] lg:text-xs font-black", color, bold && "lg:text-sm text-xs")}>{value}</span>
    </div>
  );
}
