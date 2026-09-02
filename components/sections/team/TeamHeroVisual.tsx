"use client";

import { motion } from "motion/react";
import { Users, Shield, DollarSign, History } from "lucide-react";

export function TeamHeroVisual() {
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
            <Shield className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Role: Project Manager
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Permissions & Approvals
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="bg-primary-600 text-white px-4 py-1.5 rounded font-data text-[11px] font-bold uppercase tracking-wider hover:bg-primary-700 transition-colors shadow-sm">
            Save Role
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
        
        {/* Left Col: Module Permissions */}
        <div className="bg-white p-6 flex flex-col gap-6 col-span-1 lg:col-span-2">
          
          <div>
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> Module Access</h4>
            
            <div className="space-y-4">
              
              {/* Permission Row 1 */}
              <motion.div variants={itemVariants} className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface">
                <div>
                  <span className="block font-body text-[14px] font-bold text-text-primary">Estimating & Bidding</span>
                  <span className="block font-data text-[12px] text-text-muted">Create estimates, invite bidders, manage scope.</span>
                </div>
                <div className="flex bg-neutral-200/50 p-1 rounded-lg">
                  <button className="px-3 py-1 text-text-secondary font-data text-[11px] font-bold uppercase tracking-wider rounded">None</button>
                  <button className="px-3 py-1 bg-white shadow-sm rounded text-text-primary font-data text-[11px] font-bold uppercase tracking-wider">Full Access</button>
                </div>
              </motion.div>

              {/* Permission Row 2 */}
              <motion.div variants={itemVariants} className="flex items-center justify-between p-4 rounded-xl border border-primary-200 bg-primary-50">
                <div>
                  <span className="block font-body text-[14px] font-bold text-text-primary">Financials & Purchasing</span>
                  <span className="block font-data text-[12px] text-text-muted">Budgets, POs, Change Orders, Subcontracts.</span>
                </div>
                <div className="flex bg-white/60 p-1 rounded-lg border border-primary-100">
                  <button className="px-3 py-1 text-text-secondary font-data text-[11px] font-bold uppercase tracking-wider rounded">View Only</button>
                  <button className="px-3 py-1 bg-white shadow-sm rounded text-primary-700 font-data text-[11px] font-bold uppercase tracking-wider border border-primary-200">Custom</button>
                </div>
              </motion.div>

            </div>
          </div>

          <motion.div variants={itemVariants} className="bg-surface rounded-xl border border-border p-5">
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5"><DollarSign className="h-3.5 w-3.5" /> Financial Approval Limits</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-border rounded-lg p-3">
                <span className="block font-body text-[12px] text-text-secondary mb-1">Purchase Orders (Max)</span>
                <span className="block font-data text-[20px] font-bold text-text-primary">$50,000</span>
              </div>
              <div className="bg-white border border-border rounded-lg p-3">
                <span className="block font-body text-[12px] text-text-secondary mb-1">Change Orders (Max)</span>
                <span className="block font-data text-[20px] font-bold text-text-primary">$15,000</span>
              </div>
            </div>
            <p className="mt-3 font-data text-[11px] text-text-muted">Amounts above these limits require Secondary Approval (Project Executive).</p>
          </motion.div>

        </div>

        {/* Right Col: Activity / Status */}
        <div className="bg-neutral-50/50 p-6 flex flex-col gap-6">
          
          <div>
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> Assigned Users</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 p-2 bg-white border border-border rounded-lg">
                <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px]">TL</div>
                <div className="flex-1">
                  <span className="block font-body text-[12px] font-bold text-text-primary">Thomas L.</span>
                  <span className="block font-data text-[10px] text-text-muted">Active</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-white border border-border rounded-lg">
                <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px]">SJ</div>
                <div className="flex-1">
                  <span className="block font-body text-[12px] font-bold text-text-primary">Sarah J.</span>
                  <span className="block font-data text-[10px] text-text-muted">Active</span>
                </div>
              </div>
              <button className="text-primary-600 font-data text-[11px] font-bold uppercase tracking-wider mt-1 hover:text-primary-700 transition-colors text-left">
                + Add User to Role
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5"><History className="h-3.5 w-3.5" /> Recent Audit Log</h4>
            <div className="space-y-3">
              <div className="relative pl-4 border-l-2 border-primary-200">
                <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary-600" />
                <span className="block font-body text-[12px] text-text-primary">Admin updated PO limit from $25k to $50k</span>
                <span className="block font-data text-[10px] text-text-muted mt-0.5">Today at 9:42 AM</span>
              </div>
              <div className="relative pl-4 border-l-2 border-border-subtle">
                <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-neutral-300" />
                <span className="block font-body text-[12px] text-text-primary">Sarah J. assigned to role</span>
                <span className="block font-data text-[10px] text-text-muted mt-0.5">Aug 14 at 1:15 PM</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
