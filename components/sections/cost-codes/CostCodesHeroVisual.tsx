"use client";

import { motion } from "motion/react";
import { FolderOpen, FileText, ChevronRight, Hash } from "lucide-react";

export function CostCodesHeroVisual() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15
      } 
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
      <div className="flex items-center justify-between border-b border-border bg-surface px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <Hash className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              CSI Master Library
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Company-wide Standards
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-2.5 w-2.5 rounded-full border border-border-subtle bg-neutral-100" />
          <div className="h-2.5 w-2.5 rounded-full border border-border-subtle bg-neutral-100" />
          <div className="h-2.5 w-2.5 rounded-full border border-border-subtle bg-neutral-100" />
        </div>
      </div>

      {/* Library Tree */}
      <div className="bg-neutral-50/50 p-4">
        {/* Division 02 */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-border-subtle shadow-sm mb-2 opacity-60 cursor-not-allowed">
          <ChevronRight className="h-4 w-4 text-text-muted" />
          <FolderOpen className="h-4 w-4 text-text-muted" />
          <span className="font-data text-[13px] font-semibold text-text-muted">02 00 00</span>
          <span className="font-body text-[13.5px] font-medium text-text-muted">Existing Conditions</span>
        </motion.div>

        {/* Division 03 (Expanded) */}
        <motion.div variants={itemVariants} className="flex items-center justify-between px-4 py-3 rounded-lg bg-primary-50 border border-primary-200 shadow-sm mb-2">
          <div className="flex items-center gap-3">
            <ChevronRight className="h-4 w-4 text-primary-600 rotate-90 transition-transform" />
            <FolderOpen className="h-4 w-4 text-primary-600" />
            <span className="font-data text-[13px] font-bold text-primary-900">03 00 00</span>
            <span className="font-body text-[13.5px] font-semibold text-primary-900">Concrete</span>
          </div>
          <span className="font-data text-[11px] font-bold uppercase tracking-wider text-primary-700 bg-primary-100 px-2 py-0.5 rounded-full">14 Codes</span>
        </motion.div>

        {/* Sub-items for Division 03 */}
        <div className="pl-12 flex flex-col gap-2 mb-2 relative">
          <div className="absolute left-6 top-0 bottom-4 w-px bg-border-subtle" />
          
          <motion.div variants={itemVariants} className="group flex items-center justify-between px-4 py-2.5 rounded-lg bg-white border border-border-subtle shadow-sm transition-colors hover:border-primary-200 hover:shadow-md cursor-pointer relative z-10">
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-text-muted group-hover:text-primary-500 transition-colors" />
              <span className="font-data text-[13px] font-semibold text-text-primary">03 10 00</span>
              <span className="font-body text-[13.5px] text-text-secondary">Concrete Forming and Accessories</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-data text-[12px] text-text-muted flex items-center gap-2">
                Labor: <span className="text-text-primary font-medium">$45/hr</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group flex items-center justify-between px-4 py-2.5 rounded-lg bg-white border border-border-subtle shadow-sm transition-colors hover:border-primary-200 hover:shadow-md cursor-pointer relative z-10">
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-text-muted group-hover:text-primary-500 transition-colors" />
              <span className="font-data text-[13px] font-semibold text-text-primary">03 20 00</span>
              <span className="font-body text-[13.5px] text-text-secondary">Concrete Reinforcing</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-data text-[12px] text-text-muted flex items-center gap-2">
                Mat: <span className="text-text-primary font-medium">$1.15/lb</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group flex items-center justify-between px-4 py-2.5 rounded-lg bg-white border border-border-subtle shadow-sm transition-colors hover:border-primary-200 hover:shadow-md cursor-pointer relative z-10">
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-text-muted group-hover:text-primary-500 transition-colors" />
              <span className="font-data text-[13px] font-semibold text-text-primary">03 30 00</span>
              <span className="font-body text-[13.5px] text-text-secondary">Cast-in-Place Concrete</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-data text-[12px] text-text-muted flex items-center gap-2">
                Sub: <span className="text-text-primary font-medium">$850/cy</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Division 04 */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-border-subtle shadow-sm opacity-60 cursor-not-allowed">
          <ChevronRight className="h-4 w-4 text-text-muted" />
          <FolderOpen className="h-4 w-4 text-text-muted" />
          <span className="font-data text-[13px] font-semibold text-text-muted">04 00 00</span>
          <span className="font-body text-[13.5px] font-medium text-text-muted">Masonry</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
