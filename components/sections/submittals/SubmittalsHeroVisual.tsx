"use client";

import { motion } from "motion/react";
import { Search, FolderOpen, CalendarClock, ShieldCheck, CheckCircle2 } from "lucide-react";

export function SubmittalsHeroVisual() {
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
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <FolderOpen className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              CSI 05 12 00: Structural Steel
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Submittal Log
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-muted" />
            <div className="pl-9 pr-3 py-1.5 rounded-full border border-border bg-white font-body text-[12px] text-text-muted w-48">
              Search spec sections...
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-neutral-50/50 p-6 gap-4">
        
        {/* Approved Submittal */}
        <motion.div variants={itemVariants} className="group bg-white rounded-xl border border-border shadow-sm p-4 transition-all hover:border-success-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-data text-[11px] font-bold tracking-widest text-text-muted uppercase">SUB-001</span>
                <span className="px-2 py-0.5 rounded bg-success/10 text-success font-data text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Approved</span>
              </div>
              <h4 className="font-body text-[14px] font-semibold text-text-primary">
                W-Shape Beam Details & Shop Drawings
              </h4>
              <p className="font-data text-[12px] text-text-secondary mt-1">Vendor: Apex Steel Fabricators</p>
            </div>

            <div className="flex flex-col md:items-end gap-2 shrink-0">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-warning-text" />
                <span className="font-data text-[12px] text-text-primary">Lead: <span className="font-bold">12 Weeks</span></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-success" />
                <span className="font-data text-[12px] text-text-primary">Compliance: <span className="font-bold text-success">Verified</span></span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* In Review Submittal */}
        <motion.div variants={itemVariants} className="group bg-white rounded-xl border border-border shadow-sm p-4 transition-all hover:border-warning-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-data text-[11px] font-bold tracking-widest text-text-muted uppercase">SUB-002</span>
                <span className="px-2 py-0.5 rounded bg-warning-bg/30 text-warning-text font-data text-[10px] font-bold uppercase tracking-wider">In Review (Architect)</span>
              </div>
              <h4 className="font-body text-[14px] font-semibold text-text-primary">
                Decking Profile & Fastener Specs
              </h4>
              <p className="font-data text-[12px] text-text-secondary mt-1">Vendor: Apex Steel Fabricators</p>
            </div>

            <div className="flex flex-col md:items-end gap-2 shrink-0">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-text-muted" />
                <span className="font-data text-[12px] text-text-muted">Lead: <span className="font-medium">4 Weeks</span></span>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <ShieldCheck className="h-4 w-4 text-text-muted" />
                <span className="font-data text-[12px] text-text-muted">Compliance: Pending</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
