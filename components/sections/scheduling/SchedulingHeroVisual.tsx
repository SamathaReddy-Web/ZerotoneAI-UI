"use client";

import { motion } from "motion/react";
import { Clock, CalendarDays, Zap } from "lucide-react";

export function SchedulingHeroVisual() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-3xl rounded-2xl border border-border bg-white shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-border bg-surface px-6 py-4 gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <CalendarDays className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              North Tower Build
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Live Gantt Schedule
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="px-3 py-1.5 rounded-full bg-success/10 text-success font-data text-[11px] font-bold tracking-widest uppercase">
            Baseline Active
          </div>
          <div className="flex gap-2">
            <div className="h-2.5 w-2.5 rounded-full border border-border-subtle bg-neutral-100" />
            <div className="h-2.5 w-2.5 rounded-full border border-border-subtle bg-neutral-100" />
            <div className="h-2.5 w-2.5 rounded-full border border-border-subtle bg-neutral-100" />
          </div>
        </div>
      </div>

      {/* Gantt Timeline Mock */}
      <div className="relative p-6 bg-neutral-50/50 min-h-[300px] overflow-hidden">
        {/* Timeline headers */}
        <div className="absolute top-0 left-48 right-0 h-8 border-b border-border-subtle flex">
          {[1, 2, 3, 4, 5, 6].map((week) => (
            <div key={week} className="flex-1 border-l border-border-subtle/50 pl-2 pt-1 font-data text-[10px] text-text-muted">
              Wk {week}
            </div>
          ))}
        </div>

        {/* Vertical grid lines */}
        <div className="absolute inset-y-0 left-48 right-0 flex pointer-events-none mt-8">
          {[1, 2, 3, 4, 5, 6].map((week) => (
            <div key={week} className="flex-1 border-l border-border-subtle/30" />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4">
          
          {/* Task 1: Foundation */}
          <div className="flex items-center group">
            <div className="w-40 shrink-0 font-body text-[13px] font-medium text-text-primary">
              1. Foundation
            </div>
            <div className="relative flex-1 h-8">
              <motion.div 
                variants={itemVariants}
                className="absolute left-[0%] w-[30%] h-8 bg-neutral-200 border border-neutral-300 rounded-md opacity-40"
              />
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="absolute top-1 left-[0%] w-[30%] h-6 bg-primary-500 rounded shadow-sm z-10 cursor-ew-resize flex items-center justify-center transition-colors hover:bg-primary-600"
              >
                <span className="font-data text-[10px] text-white font-bold tracking-wide">COMPLETED</span>
              </motion.div>
            </div>
          </div>

          {/* Dependency line 1 */}
          <div className="relative h-4 -my-2 opacity-50">
             <svg className="absolute left-[30%] top-[-10px] w-12 h-10 overflow-visible">
               <path d="M 0 10 L 10 10 L 10 30 L 25 30" fill="transparent" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3 3"/>
               <polygon points="25,30 20,27 20,33" fill="#9ca3af" />
             </svg>
          </div>

          {/* Task 2: Structural Framing */}
          <div className="flex items-center group">
            <div className="w-40 shrink-0 font-body text-[13px] font-medium text-text-primary flex items-center gap-1.5">
              2. Structural Frame
            </div>
            <div className="relative flex-1 h-8">
              <motion.div 
                variants={itemVariants}
                className="absolute left-[30%] w-[35%] h-8 bg-neutral-200 border border-neutral-300 rounded-md opacity-40"
              />
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                drag="x"
                dragConstraints={{ left: 0, right: 20 }}
                className="absolute top-1 left-[30%] w-[40%] h-6 bg-warning-500 rounded shadow-sm z-10 cursor-ew-resize flex items-center justify-center border border-warning-600 transition-colors group-hover:bg-warning-400"
              >
                 <span className="font-data text-[10px] text-white font-bold tracking-wide flex items-center gap-1">
                   <Clock className="h-3 w-3" /> DELAYED
                 </span>
              </motion.div>
            </div>
          </div>

          {/* Dependency line 2 */}
          <div className="relative h-4 -my-2 opacity-50">
             <svg className="absolute left-[70%] top-[-10px] w-12 h-10 overflow-visible transition-transform duration-300 group-hover:translate-x-2">
               <path d="M 0 10 L 10 10 L 10 30 L 25 30" fill="transparent" stroke="#f59e0b" strokeWidth="2" />
               <polygon points="25,30 20,27 20,33" fill="#f59e0b" />
             </svg>
          </div>

          {/* Task 3: MEP Rough-in */}
          <div className="flex items-center group">
            <div className="w-40 shrink-0 font-body text-[13px] font-medium text-text-primary">
              3. MEP Rough-in
            </div>
            <div className="relative flex-1 h-8">
              <motion.div 
                variants={itemVariants}
                className="absolute left-[65%] w-[30%] h-8 bg-neutral-200 border border-neutral-300 rounded-md opacity-40"
              />
              <motion.div 
                variants={itemVariants}
                className="absolute top-1 left-[70%] w-[30%] h-6 bg-primary-100 border border-primary-300 rounded shadow-sm z-10 cursor-ew-resize flex items-center justify-center transition-all group-hover:bg-error-bg group-hover:border-error-border"
              >
                 <span className="font-data text-[10px] text-primary-700 font-bold tracking-wide group-hover:text-error-text transition-colors">AUTO SHIFTED</span>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Floating Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-border flex items-center gap-2"
        >
          <Zap className="h-4 w-4 text-warning-text" fill="currentColor" />
          <span className="font-body text-[13px] font-semibold text-text-primary">Logic automatically updates successors</span>
        </motion.div>

      </div>
    </motion.div>
  );
}
