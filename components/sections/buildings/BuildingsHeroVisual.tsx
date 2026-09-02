"use client";

import { motion } from "motion/react";
import { Building, Layers, ArrowRight } from "lucide-react";

export function BuildingsHeroVisual() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2
      } 
    }
  };

  const levelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-2xl rounded-2xl border border-border bg-white shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-surface px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <Building className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              North Tower
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Building Registry • Mixed Use
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-data text-[10px] font-bold uppercase tracking-wider text-text-muted">Total GFA</span>
          <span className="font-data text-[15px] font-bold text-primary-900">125,000 sqft</span>
        </div>
      </div>

      {/* Stacked Levels */}
      <div className="bg-neutral-50/50 p-8 flex flex-col gap-2">
        {/* Roof */}
        <motion.div variants={levelVariants} className="group relative w-[75%] mx-auto bg-white border border-border-subtle rounded-t-xl h-14 flex items-center justify-between px-4 transition-all hover:border-primary-300 hover:shadow-md cursor-pointer shadow-sm z-40 hover:z-50">
          <span className="font-body text-[13.5px] font-medium text-text-primary flex items-center gap-3"><Layers className="h-4 w-4 text-text-muted group-hover:text-primary-500" /> Level 04: Roof</span>
          <span className="font-data text-[13px] font-semibold text-text-primary">15,000 sqft</span>
        </motion.div>

        {/* Level 3 */}
        <motion.div variants={levelVariants} className="group relative w-[85%] mx-auto bg-white border border-border-subtle h-16 flex items-center justify-between px-4 transition-all hover:border-primary-300 hover:shadow-md cursor-pointer shadow-sm z-30 hover:z-50">
          <span className="font-body text-[13.5px] font-medium text-text-primary flex items-center gap-3"><Layers className="h-4 w-4 text-text-muted group-hover:text-primary-500" /> Level 03: Office</span>
          <span className="font-data text-[13px] font-semibold text-text-primary">30,000 sqft</span>
        </motion.div>

        {/* Level 2 */}
        <motion.div variants={levelVariants} className="group relative w-[85%] mx-auto bg-white border border-border-subtle h-16 flex items-center justify-between px-4 transition-all hover:border-primary-300 hover:shadow-md cursor-pointer shadow-sm z-20 hover:z-50">
          <span className="font-body text-[13.5px] font-medium text-text-primary flex items-center gap-3"><Layers className="h-4 w-4 text-text-muted group-hover:text-primary-500" /> Level 02: Office</span>
          <span className="font-data text-[13px] font-semibold text-text-primary">30,000 sqft</span>
        </motion.div>

        {/* Podium / Ground */}
        <motion.div variants={levelVariants} className="group relative w-full mx-auto bg-white border border-border-subtle h-24 rounded-b-xl flex items-center justify-between px-4 transition-all hover:border-primary-300 hover:shadow-md cursor-pointer shadow-sm z-10 hover:z-50">
          <div className="flex flex-col gap-1">
            <span className="font-body text-[13.5px] font-medium text-text-primary flex items-center gap-3"><Layers className="h-4 w-4 text-text-muted group-hover:text-primary-500" /> Level 01: Retail & Lobby</span>
            <span className="font-data text-[11px] text-primary-600 flex items-center gap-1.5 ml-7 font-semibold uppercase tracking-wider"><ArrowRight className="h-3 w-3" /> Ground Access</span>
          </div>
          <span className="font-data text-[13px] font-semibold text-text-primary">50,000 sqft</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
