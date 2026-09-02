"use client";

import { motion } from "motion/react";
import { FileSignature, Send, Clock, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export function ChangeOrderHeroVisual() {
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
            <FileSignature className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Change Order Request: COR-014
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Add structural steel framing at elevator core
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="px-3 py-1 bg-warning-100 text-warning-700 font-data text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
            <Clock className="h-3 w-3" /> Pending Owner Signature
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        
        {/* Left Col: COR Details */}
        <div className="bg-neutral-50/50 p-6 flex flex-col gap-4 col-span-1 lg:col-span-2">
          
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider">Scope & Pricing</h4>
          </div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
            <table className="w-full text-left font-data text-[13px]">
              <thead className="bg-surface border-b border-border text-text-muted text-[11px] uppercase tracking-wider font-bold">
                <tr>
                  <th className="px-4 py-2 font-bold">Description</th>
                  <th className="px-4 py-2 font-bold">Type</th>
                  <th className="px-4 py-2 font-bold text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="px-4 py-3 font-body text-[13px] text-text-primary">Steel Fabrication (Apex Steel)</td>
                  <td className="px-4 py-3 text-text-secondary">Subcontractor</td>
                  <td className="px-4 py-3 text-right text-text-primary font-bold">$12,450.00</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="px-4 py-3 font-body text-[13px] text-text-primary">Crane Rental (2 Days)</td>
                  <td className="px-4 py-3 text-text-secondary">Equipment</td>
                  <td className="px-4 py-3 text-right text-text-primary font-bold">$4,800.00</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="px-4 py-3 font-body text-[13px] text-text-primary pl-8 text-text-secondary border-l-2 border-primary-500">GC Markup (10%)</td>
                  <td className="px-4 py-3 text-text-secondary">Fee</td>
                  <td className="px-4 py-3 text-right text-text-primary font-bold">$1,725.00</td>
                </tr>
                <tr className="bg-surface font-bold text-text-primary">
                  <td className="px-4 py-3 uppercase tracking-wider text-[11px] text-text-muted">Total COR Value</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3 text-right text-primary-700 text-[15px]">$18,975.00</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-between items-center px-2 pt-2">
            <span className="font-body text-[12px] text-text-secondary flex items-center gap-1">
               <AlertCircle className="h-3.5 w-3.5 text-warning-500" /> Adds 3 days to critical path schedule
            </span>
          </motion.div>

        </div>

        {/* Right Col: Workflow */}
        <div className="bg-white p-6 flex flex-col gap-6">
          
          <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2">Approval Workflow</h4>
          
          <div className="flex flex-col gap-0 relative">
            <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-border z-0" />
            
            {/* Step 1 */}
            <motion.div variants={itemVariants} className="flex items-start gap-4 relative z-10 pb-6">
              <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center shrink-0 border-4 border-white">
                <CheckCircle2 className="h-3 w-3" strokeWidth={3} />
              </div>
              <div className="mt-0.5">
                <span className="block font-body text-[13px] font-semibold text-text-primary">COR Generated</span>
                <span className="block font-data text-[11px] text-text-muted">By Sarah Jenkins • Oct 12</span>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={itemVariants} className="flex items-start gap-4 relative z-10 pb-6">
              <div className="h-6 w-6 rounded-full bg-success text-white flex items-center justify-center shrink-0 border-4 border-white">
                <CheckCircle2 className="h-3 w-3" strokeWidth={3} />
              </div>
              <div className="mt-0.5">
                <span className="block font-body text-[13px] font-semibold text-text-primary">Sent to Owner</span>
                <span className="block font-data text-[11px] text-text-muted">Via Email Link • Oct 12</span>
              </div>
            </motion.div>

            {/* Step 3 (Active) */}
            <motion.div variants={itemVariants} className="flex items-start gap-4 relative z-10">
              <div className="h-6 w-6 rounded-full bg-warning-500 text-white flex items-center justify-center shrink-0 border-4 border-white">
                <RefreshCw className="h-3 w-3 animate-spin" strokeWidth={3} />
              </div>
              <div className="mt-0.5 bg-warning-50/50 p-2.5 rounded-lg border border-warning-200">
                <span className="block font-body text-[13px] font-semibold text-warning-800">Owner Signature</span>
                <span className="block font-data text-[11px] text-warning-600 mt-1">Waiting on David Chen</span>
                <button className="mt-2 text-[10px] font-data font-bold uppercase tracking-wider bg-white border border-warning-300 text-warning-700 px-2 py-1 rounded shadow-sm hover:bg-warning-50 transition-colors w-full flex justify-center items-center gap-1">
                  <Send className="h-3 w-3" /> Send Reminder
                </button>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
