"use client";

import { motion } from "motion/react";
import { CheckCircle2, Map, CheckSquare } from "lucide-react";

export function PunchlistHeroVisual() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-sm rounded-[2.5rem] border-8 border-neutral-900 bg-white shadow-2xl overflow-hidden h-[600px] flex flex-col"
    >
      {/* Phone Notch Mock */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
        <div className="w-32 h-6 bg-neutral-900 rounded-b-3xl"></div>
      </div>

      {/* Header */}
      <div className="pt-12 pb-4 px-6 bg-surface border-b border-border-subtle flex flex-col gap-4">
        <div>
          <h3 className="font-display text-[22px] font-bold text-text-primary">
            Final Walkthrough
          </h3>
          <p className="font-body text-[13px] text-text-secondary mt-1 flex items-center gap-2">
            North Tower · Floor 4
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-1.5 rounded-full bg-primary-900 text-white font-data text-[11px] font-bold tracking-widest uppercase flex items-center justify-center gap-1.5">
            <CheckSquare className="h-3 w-3" /> List
          </button>
          <button className="flex-1 py-1.5 rounded-full bg-white border border-border text-text-secondary font-data text-[11px] font-bold tracking-widest uppercase flex items-center justify-center gap-1.5 hover:bg-neutral-50 transition-colors">
            <Map className="h-3 w-3" /> Plan
          </button>
        </div>
      </div>

      <div className="flex-1 bg-neutral-50 p-4 flex flex-col gap-3 overflow-hidden">
        
        {/* Item 1: Open */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-border shadow-sm p-3 flex gap-3 relative cursor-pointer hover:border-primary-200 transition-colors">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-error-bg rounded-r-md" />
          <div className="h-16 w-16 shrink-0 rounded-xl bg-neutral-200 overflow-hidden relative">
            {/* Mock Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
            <div className="absolute inset-x-0 bottom-0 bg-black/40 py-0.5 px-1 text-center">
              <span className="font-data text-[8px] text-white">4:12 PM</span>
            </div>
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-data text-[10px] font-bold tracking-widest text-text-muted uppercase">PL-142</span>
                <span className="px-1.5 py-0.5 rounded bg-error-bg/30 text-error-text font-data text-[9px] font-bold uppercase tracking-wider">Open</span>
              </div>
              <h4 className="font-body text-[13px] font-semibold text-text-primary leading-tight mt-1 truncate">
                Paint touchup on door frame
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-body text-[11px] text-text-secondary truncate">Room 402</span>
              <div className="flex items-center gap-1.5 bg-neutral-100 px-2 py-0.5 rounded-full">
                <div className="h-3 w-3 rounded-full bg-primary-500" />
                <span className="font-body text-[10px] font-medium text-text-primary truncate">Apex Paint</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Item 2: Ready for Review */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-border shadow-sm p-3 flex gap-3 relative cursor-pointer hover:border-primary-200 transition-colors">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-warning-bg rounded-r-md" />
          <div className="h-16 w-16 shrink-0 rounded-xl bg-neutral-200 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
            <div className="absolute inset-x-0 bottom-0 bg-black/40 py-0.5 px-1 text-center">
              <span className="font-data text-[8px] text-white">FIXED</span>
            </div>
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-data text-[10px] font-bold tracking-widest text-text-muted uppercase">PL-141</span>
                <span className="px-1.5 py-0.5 rounded bg-warning-bg/30 text-warning-text font-data text-[9px] font-bold uppercase tracking-wider">Review</span>
              </div>
              <h4 className="font-body text-[13px] font-semibold text-text-primary leading-tight mt-1 truncate">
                Outlet cover plate missing
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-body text-[11px] text-text-secondary truncate">Corridor A</span>
              <div className="flex items-center gap-1.5 bg-neutral-100 px-2 py-0.5 rounded-full">
                <div className="h-3 w-3 rounded-full bg-neutral-500" />
                <span className="font-body text-[10px] font-medium text-text-primary truncate">Volt Elec</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Item 3: Closed */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-border shadow-sm p-3 flex gap-3 relative cursor-pointer opacity-70">
          <div className="h-16 w-16 shrink-0 rounded-xl bg-neutral-100 flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-success" />
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <span className="font-data text-[10px] font-bold tracking-widest text-text-muted uppercase line-through">PL-138</span>
              <span className="px-1.5 py-0.5 rounded bg-success/10 text-success font-data text-[9px] font-bold uppercase tracking-wider">Closed</span>
            </div>
            <h4 className="font-body text-[13px] font-semibold text-text-primary leading-tight mt-1 truncate line-through text-text-muted">
              HVAC vent rattling
            </h4>
          </div>
        </motion.div>

      </div>

      {/* Floating Action Button */}
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ delay: 1, type: "spring" }}
        className="absolute bottom-6 right-6 h-14 w-14 rounded-full bg-primary-600 shadow-xl flex items-center justify-center text-white cursor-pointer hover:bg-primary-700 hover:scale-105 transition-all"
      >
        <span className="text-2xl font-light mb-1">+</span>
      </motion.div>
    </motion.div>
  );
}
