"use client";

import { motion } from "motion/react";
import { Search, Clock, ChevronRight, CornerDownRight } from "lucide-react";

export function RfiHeroVisual() {
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
      className="relative mx-auto w-full max-w-3xl rounded-2xl border border-border bg-white shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-border bg-surface px-6 py-4 gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              RFI Log
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Project: North Tower
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-muted" />
            <div className="pl-9 pr-3 py-1.5 rounded-full border border-border bg-white font-body text-[12px] text-text-muted w-48">
              Search RFIs...
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-neutral-50/50 p-6 gap-4">
        
        {/* RFI Card 1: Urgent */}
        <motion.div variants={itemVariants} className="group bg-white rounded-xl border border-border shadow-sm p-4 transition-all hover:border-error-border hover:shadow-md cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-error-bg" />
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="font-data text-[11px] font-bold tracking-widest text-text-muted uppercase">RFI #042</span>
              <span className="px-2 py-0.5 rounded bg-error-bg/30 text-error-text font-data text-[10px] font-bold uppercase tracking-wider">Overdue</span>
            </div>
            <div className="flex items-center gap-1.5 text-error-text">
              <Clock className="h-3.5 w-3.5" />
              <span className="font-data text-[12px] font-bold">1 Day Past SLA</span>
            </div>
          </div>
          <h4 className="font-body text-[14px] font-semibold text-text-primary mb-1 group-hover:text-error-text transition-colors">
            Steel connection detail at Grid A-4 conflict with HVAC duct
          </h4>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-data text-[10px] font-bold">AJ</div>
              <span className="font-body text-[12px] text-text-secondary">Assigned to: <span className="font-medium text-text-primary">Adam J. (Structural Eng)</span></span>
            </div>
            <ChevronRight className="h-4 w-4 text-text-muted opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </div>
        </motion.div>

        {/* RFI Card 2: Good Standing */}
        <motion.div variants={itemVariants} className="group bg-white rounded-xl border border-border shadow-sm p-4 transition-all hover:border-primary-200 hover:shadow-md cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-warning-bg" />
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="font-data text-[11px] font-bold tracking-widest text-text-muted uppercase">RFI #043</span>
              <span className="px-2 py-0.5 rounded bg-warning-bg/30 text-warning-text font-data text-[10px] font-bold uppercase tracking-wider">In Review</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary">
              <Clock className="h-3.5 w-3.5" />
              <span className="font-data text-[12px]">3 Days Left</span>
            </div>
          </div>
          <h4 className="font-body text-[14px] font-semibold text-text-primary mb-1 group-hover:text-primary-700 transition-colors">
            Substitute specified ceiling tile for Armstrong Ultima?
          </h4>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-data text-[10px] font-bold">MR</div>
              <span className="font-body text-[12px] text-text-secondary">Assigned to: <span className="font-medium text-text-primary">Maria R. (Architect)</span></span>
            </div>
            <ChevronRight className="h-4 w-4 text-text-muted opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </div>
        </motion.div>

        {/* Action Mock */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mt-2 ml-4">
          <CornerDownRight className="h-4 w-4 text-primary-500" />
          <div className="bg-primary-50 text-primary-700 font-body text-[12.5px] font-medium px-3 py-1.5 rounded-lg border border-primary-200">
            Auto-assigned to Architect based on CSI Division 09 (Finishes)
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
