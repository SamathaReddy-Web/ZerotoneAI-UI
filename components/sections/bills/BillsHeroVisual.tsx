"use client";

import { motion } from "motion/react";
import { ScanLine, Clock, Wallet, FileText, CheckCircle2 } from "lucide-react";

export function BillsHeroVisual() {
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
            <ScanLine className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Invoice Processing
            </h3>
            <p className="font-data text-[12px] text-text-muted flex items-center gap-1">
              OCR Engine Active <span className="inline-block h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="bg-primary-600 text-white px-4 py-1.5 rounded-full font-data text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary-700 transition-colors">
            + Upload Invoice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        
        {/* Left Col: OCR Extraction Mock */}
        <div className="bg-neutral-50/50 p-6 flex flex-col gap-4 col-span-1 lg:col-span-2">
          
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider">Recent Uploads</h4>
            <span className="font-data text-[11px] text-primary-600 font-medium">Auto-matched to POs</span>
          </div>

          {/* Invoice Card 1 */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-success-border shadow-sm p-4 hover:shadow-md transition-shadow relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="text-primary-600 font-data text-[11px] font-bold uppercase hover:underline">Review & Approve</button>
             </div>
            <div className="flex items-start gap-4">
              <div className="h-12 w-10 shrink-0 rounded bg-neutral-100 flex items-center justify-center border border-border">
                <FileText className="h-5 w-5 text-text-muted" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h5 className="font-body text-[14px] font-semibold text-text-primary">INV-8832</h5>
                  <span className="px-1.5 py-0.5 rounded bg-success/10 text-success font-data text-[9px] font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Matched</span>
                </div>
                <p className="font-data text-[12px] text-text-secondary mt-0.5">Titan Concrete Pumping</p>
                
                <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-border-subtle">
                  <div>
                    <span className="block font-data text-[10px] uppercase text-text-muted">Total Billed</span>
                    <span className="block font-data text-[14px] font-bold text-text-primary">$14,500.00</span>
                  </div>
                  <div>
                    <span className="block font-data text-[10px] uppercase text-text-muted">Retained (5%)</span>
                    <span className="block font-data text-[14px] font-bold text-warning-600">$725.00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Invoice Card 2 */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border shadow-sm p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="h-12 w-10 shrink-0 rounded bg-neutral-100 flex items-center justify-center border border-border relative overflow-hidden">
                <FileText className="h-5 w-5 text-text-muted" />
                <div className="absolute inset-0 bg-primary-600/10 flex flex-col justify-center">
                  <div className="h-0.5 w-full bg-primary-500 animate-[scan_2s_ease-in-out_infinite]" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h5 className="font-body text-[14px] font-semibold text-text-primary">Extracting...</h5>
                  <span className="font-data text-[10px] text-primary-600 animate-pulse">Reading line items</span>
                </div>
                <div className="h-2 w-32 bg-neutral-100 rounded mt-2" />
                <div className="h-2 w-24 bg-neutral-100 rounded mt-2" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Col: AP Aging & Retention */}
        <div className="bg-white p-6 flex flex-col gap-6">
          
          {/* AP Aging */}
          <motion.div variants={itemVariants}>
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> AP Aging Summary</h4>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <div>
                  <span className="block font-data text-[12px] font-medium text-text-secondary">Current</span>
                  <span className="block font-data text-[16px] font-bold text-text-primary">$42,800</span>
                </div>
                <div className="h-2 w-24 bg-neutral-100 rounded-full overflow-hidden flex justify-end"><div className="h-full w-full bg-primary-400 rounded-full" /></div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="block font-data text-[12px] font-medium text-text-secondary">1-30 Days</span>
                  <span className="block font-data text-[16px] font-bold text-text-primary">$18,450</span>
                </div>
                <div className="h-2 w-24 bg-neutral-100 rounded-full overflow-hidden flex justify-end"><div className="h-full w-2/3 bg-warning-400 rounded-full" /></div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="block font-data text-[12px] font-medium text-error-text">60+ Days</span>
                  <span className="block font-data text-[16px] font-bold text-error-text">$3,200</span>
                </div>
                <div className="h-2 w-24 bg-neutral-100 rounded-full overflow-hidden flex justify-end"><div className="h-full w-1/4 bg-error-400 rounded-full" /></div>
              </div>
            </div>
          </motion.div>

          {/* Retention Widget */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-border">
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5"><Wallet className="h-3.5 w-3.5" /> Total Retained</h4>
            <div className="bg-surface rounded-xl border border-border p-3 flex justify-between items-center">
              <span className="font-body text-[13px] text-text-secondary">All active vendors</span>
              <span className="font-data text-[18px] font-bold text-text-primary">$84,500</span>
            </div>
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}
