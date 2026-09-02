"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { X, FileSpreadsheet, AlertTriangle, MonitorPlay } from "lucide-react";

const PAIN_POINTS = [
  "Schedule lives in your PM's laptop and no one else can see it",
  "A two week weather delay in framing cascades into MEP, and you find out too late",
  "Subs don't know their start dates until you call them",
  "Owner asks for a look ahead report and you spend 3 hours making slides",
];

export function SchedulingProblemSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section ref={containerRef} className="relative w-full bg-surface py-24 md:py-32 border-b border-border-subtle overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col max-w-2xl">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center rounded-full border border-warning-border bg-warning-bg px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-warning-text">
                THE OLD WAY
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="mb-6 text-balance font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl leading-tight">
              Your schedule shouldn&apos;t be a PowerPoint you update every Monday.
            </motion.h2>

            <motion.p variants={itemVariants} className="mb-10 text-lg text-text-secondary leading-relaxed">
              Most small GCs run their schedule in Excel or MS Project and recreate the look ahead report by hand before every owner meeting. It takes hours, and the schedule is already stale by the time you present it.
            </motion.p>

            <div className="flex flex-col gap-4">
              {PAIN_POINTS.map((point, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ x: 6 }} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-white shadow-sm cursor-default transition-shadow hover:shadow-md">
                  <div className="flex mt-0.5 h-6 w-6 shrink-0 items-center justify-center rounded-full bg-error-bg text-error-text">
                    <X className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <p className="font-body text-[15.5px] leading-snug text-text-secondary">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive UI Mock */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="relative">
            <div className="absolute inset-0 -z-10 translate-x-10 translate-y-10 scale-110 blur-3xl rounded-full bg-primary-100 opacity-60" />
            
            <div className="rounded-2xl border border-border bg-white p-2 shadow-overlay transform transition-transform hover:-translate-y-1 hover:shadow-2xl duration-500">
              <div className="rounded-xl border border-border-subtle bg-surface/50 overflow-hidden flex flex-col gap-2 p-3">
                
                {/* File Mock 1 */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm transition-colors hover:border-error-border">
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet className="h-6 w-6 text-success" />
                    <div>
                      <span className="font-body text-[13.5px] font-semibold text-text-primary block">Master_Schedule_v6_FINAL.xlsx</span>
                      <span className="font-data text-[12px] text-error-text flex items-center gap-1"><AlertTriangle className="h-3 w-3"/> Out of date (Edited 14 days ago)</span>
                    </div>
                  </div>
                </motion.div>

                {/* File Mock 2 */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm transition-colors hover:border-error-border">
                  <div className="flex items-center gap-3">
                    <MonitorPlay className="h-6 w-6 text-error-text" />
                    <div>
                      <span className="font-body text-[13.5px] font-semibold text-text-primary block">3_Week_Look_Ahead_Owner_Meeting.pptx</span>
                      <span className="font-data text-[12px] text-text-muted">Takes 3 hours to build manually</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center p-3 mt-1">
                  <span className="font-data text-[11px] font-bold uppercase tracking-wider text-error-text bg-error-bg px-3 py-1.5 rounded-full">Silos hide delays</span>
                </motion.div>

              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
