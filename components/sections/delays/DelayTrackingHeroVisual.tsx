"use client";

import { motion } from "motion/react";
import { AlertTriangle, CloudRain, Clock, DollarSign, Target, AlignStartVertical } from "lucide-react";

export function DelayTrackingHeroVisual() {
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
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-error-bg text-error-text">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Project Delay Register
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              North Tower · 3 Active Delays
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex flex-col items-end">
            <span className="font-data text-[10px] text-text-muted uppercase tracking-wider">Total Impact</span>
            <span className="font-data text-[14px] font-bold text-error-text">$14,400</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-neutral-50/50 p-6 gap-4 overflow-hidden">
        
        {/* Delay Card 1: Critical Path */}
        <motion.div variants={itemVariants} className="group bg-white rounded-xl border border-error-border shadow-sm overflow-hidden transition-all hover:shadow-md cursor-pointer relative">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-error-bg" />
          <div className="p-4 pl-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-full bg-error-bg/30 text-error-text font-data text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Target className="h-3 w-3" /> Critical Path
                </span>
                <span className="font-data text-[11px] font-bold text-text-muted uppercase flex items-center gap-1">
                  <CloudRain className="h-3 w-3" /> Weather
                </span>
              </div>
              <div className="font-data text-[12px] font-bold text-error-text flex items-center gap-1">
                <DollarSign className="h-3.5 w-3.5 -mr-1" />
                3,600 Impact
              </div>
            </div>
            
            <h4 className="font-body text-[14px] font-semibold text-text-primary mb-1">
              Site flooded: unable to pour foundation
            </h4>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 pt-3 border-t border-border-subtle">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-text-muted" />
                <span className="font-data text-[12px] text-text-secondary"><span className="font-bold text-text-primary">3 Days</span> (Oct 12 - Oct 14)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-data text-[9px] font-bold">ACT</div>
                <span className="font-body text-[12px] text-text-secondary">Owner: <span className="font-medium text-text-primary">Act of God</span></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Delay Card 2: Float Impact */}
        <motion.div variants={itemVariants} className="group bg-white rounded-xl border border-border shadow-sm overflow-hidden transition-all hover:border-warning-border hover:shadow-md cursor-pointer relative">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-warning-bg" />
          <div className="p-4 pl-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-text-secondary font-data text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <AlignStartVertical className="h-3 w-3" /> Float Impact
                </span>
                <span className="font-data text-[11px] font-bold text-text-muted uppercase">
                  Material Shortage
                </span>
              </div>
              <div className="font-data text-[12px] font-bold text-warning-text flex items-center gap-1">
                <DollarSign className="h-3.5 w-3.5 -mr-1" />
                10,800 Impact
              </div>
            </div>
            
            <h4 className="font-body text-[14px] font-semibold text-text-primary mb-1">
              Custom windows delayed at port
            </h4>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 pt-3 border-t border-border-subtle">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-text-muted" />
                <span className="font-data text-[12px] text-text-secondary"><span className="font-bold text-text-primary">9 Days</span> (Oct 01 - Oct 09)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-warning-100 flex items-center justify-center text-warning-700 font-data text-[9px] font-bold">Gls</div>
                <span className="font-body text-[12px] text-text-secondary">Owner: <span className="font-medium text-text-primary">GlassTech Pro</span></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Auto Calculation Mock */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mt-2 ml-4">
          <div className="bg-primary-50 text-primary-700 font-body text-[12px] font-medium px-4 py-2 rounded-lg border border-primary-200">
            GC Burden Rate ($1,200/day) × 12 total delay days = <strong>$14,400 Claim Value</strong>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
