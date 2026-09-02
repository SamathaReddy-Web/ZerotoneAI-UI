"use client";

import { motion } from "motion/react";
import { ShieldCheck, FileText, UploadCloud, AlertCircle, Building, CheckCircle2 } from "lucide-react";

export function VendorHeroVisual() {
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
      className="relative mx-auto w-full max-w-4xl rounded-2xl border border-border bg-white shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-border bg-surface px-6 py-4 gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <Building className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Apex Structural Steel
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Vendor #1048 • Approved Subcontractor
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="bg-primary-600 text-white px-4 py-1.5 rounded font-data text-[11px] font-bold uppercase tracking-wider hover:bg-primary-700 transition-colors shadow-sm">
            View Portal
          </button>
        </div>
      </div>

      <div className="bg-neutral-50/50 p-6 flex flex-col gap-6">
        
        {/* KPI Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-3 shadow-sm">
            <span className="font-data text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1 block">Contract Value</span>
            <span className="font-data text-[20px] font-bold text-text-primary">$1.4M</span>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-3 shadow-sm">
             <span className="font-data text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1 block">Quality Rating</span>
             <span className="font-data text-[20px] font-bold text-success flex items-center gap-1">4.8 <span className="text-[12px] text-text-muted font-normal">/ 5.0</span></span>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-error-border bg-error-bg/20 p-3 shadow-sm">
            <span className="font-data text-[10px] font-bold text-error-text uppercase tracking-wider mb-1 block">Compliance</span>
             <span className="font-data text-[20px] font-bold text-error-text flex items-center gap-1">Action Req.</span>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-3 shadow-sm">
             <span className="font-data text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1 block">Active Projects</span>
             <span className="font-data text-[20px] font-bold text-text-primary">3</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Compliance Docs */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-data text-[11px] font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Compliance Documents</h4>
              <button className="text-primary-600 font-data text-[10px] font-bold uppercase tracking-wider hover:text-primary-700">Request Update</button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface border border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="font-body text-[13px] font-semibold text-text-primary">W-9 / Tax ID</span>
                </div>
                <span className="font-data text-[11px] text-text-muted">Verified</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface border border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="font-body text-[13px] font-semibold text-text-primary">General Liability Ins.</span>
                </div>
                <span className="font-data text-[11px] text-text-muted">Exp: Dec 2025</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-error-bg/30 border border-error-border">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-error-text" />
                  <span className="font-body text-[13px] font-semibold text-text-primary">Workers Comp</span>
                </div>
                <span className="font-data text-[11px] font-bold text-error-text">Expiring in 14 days</span>
              </div>
            </div>
          </motion.div>

          {/* Lien Waivers */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border shadow-sm p-5">
             <div className="flex items-center justify-between mb-4">
              <h4 className="font-data text-[11px] font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5"><FileText className="h-3.5 w-3.5" /> Lien Waivers</h4>
            </div>

            <div className="flex flex-col items-center justify-center py-6 text-center border-2 border-dashed border-border-subtle rounded-xl bg-surface">
              <UploadCloud className="h-8 w-8 text-primary-400 mb-2" />
              <span className="block font-body text-[13px] font-semibold text-text-primary">Pending Final Waiver</span>
              <span className="block font-data text-[11px] text-text-muted mt-1 px-4">Invoice #4402 is approved but payment is held until final waiver is uploaded to the portal.</span>
              <button className="mt-3 bg-white border border-border shadow-sm text-text-primary px-3 py-1.5 rounded font-data text-[10px] font-bold uppercase tracking-wider hover:bg-neutral-50">
                Send Reminder
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
