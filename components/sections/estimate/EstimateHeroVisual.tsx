"use client";

import { motion } from "motion/react";
import { ArrowRight, History } from "lucide-react";

export function EstimateHeroVisual() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      } 
    }
  };

  const rowVariants = {
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
      <div className="flex items-center justify-between border-b border-border bg-surface px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <History className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Estimate Comparison
            </h3>
            <p className="font-data text-[12px] text-text-muted flex items-center gap-2">
              <span>V1: Baseline</span> <ArrowRight className="h-3 w-3" /> <span className="text-primary-700 font-medium">V2: Value Engineered</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-2.5 w-2.5 rounded-full border border-border-subtle bg-neutral-100" />
          <div className="h-2.5 w-2.5 rounded-full border border-border-subtle bg-neutral-100" />
          <div className="h-2.5 w-2.5 rounded-full border border-border-subtle bg-neutral-100" />
        </div>
      </div>

      {/* Table Content */}
      <div className="bg-neutral-50/50 p-4">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 mb-2 px-4 py-2 border-b border-border-subtle/50">
          <div className="font-data text-[10px] font-bold uppercase tracking-wider text-text-muted text-left">Line Item</div>
          <div className="font-data text-[10px] font-bold uppercase tracking-wider text-text-muted text-right">V1 Baseline</div>
          <div className="font-data text-[10px] font-bold uppercase tracking-wider text-text-muted text-right">V2 Current</div>
          <div className="font-data text-[10px] font-bold uppercase tracking-wider text-text-muted text-right">Variance</div>
        </div>

        <motion.div variants={rowVariants} className="group grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 items-center px-4 py-3 rounded-lg bg-white border border-border-subtle shadow-sm mb-2 transition-colors hover:border-primary-200 hover:shadow-md cursor-pointer">
          <div className="font-body text-[13.5px] font-medium text-text-primary text-left">Curtain Wall System</div>
          <div className="font-data text-[13px] text-text-muted text-right">$1,250,000</div>
          <div className="font-data text-[13px] font-semibold text-text-primary text-right">$1,150,000</div>
          <div className="font-data text-[12px] font-bold text-success text-right bg-success/10 px-2 py-0.5 rounded-full ml-auto">- $100k</div>
        </motion.div>

        <motion.div variants={rowVariants} className="group grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 items-center px-4 py-3 rounded-lg bg-white border border-border-subtle shadow-sm mb-2 transition-colors hover:border-primary-200 hover:shadow-md cursor-pointer">
          <div className="font-body text-[13.5px] font-medium text-text-primary text-left">Interior Glazing</div>
          <div className="font-data text-[13px] text-text-muted text-right">$320,000</div>
          <div className="font-data text-[13px] font-semibold text-text-primary text-right">$320,000</div>
          <div className="font-data text-[12px] font-bold text-text-muted text-right ml-auto">—</div>
        </motion.div>

        <motion.div variants={rowVariants} className="group grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 items-center px-4 py-3 rounded-lg bg-white border border-border-subtle shadow-sm mb-2 transition-colors hover:border-primary-200 hover:shadow-md cursor-pointer">
          <div className="font-body text-[13.5px] font-medium text-text-primary text-left">Custom Millwork</div>
          <div className="font-data text-[13px] text-text-muted text-right">$450,000</div>
          <div className="font-data text-[13px] font-semibold text-text-primary text-right">$280,000</div>
          <div className="font-data text-[12px] font-bold text-success text-right bg-success/10 px-2 py-0.5 rounded-full ml-auto">- $170k</div>
        </motion.div>

        <motion.div variants={rowVariants} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 items-center px-4 py-4 mt-4 rounded-lg bg-primary-50 border border-primary-100">
          <div className="font-data text-[12px] font-bold uppercase tracking-wider text-primary-800 text-left">Grand Total</div>
          <div className="font-data text-[15px] text-primary-900/60 text-right line-through">$2,020,000</div>
          <div className="font-data text-[15px] font-bold text-primary-900 text-right">$1,750,000</div>
          <div className="font-data text-[13px] font-bold text-success text-right ml-auto">- $270,000</div>
        </motion.div>

      </div>
    </motion.div>
  );
}
