"use client";

import { motion } from "motion/react";
import { BookOpen, Building2, Layers, CheckCircle2, Wallet } from "lucide-react";

export function AccountingHeroVisual() {
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
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              General Ledger
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Period: October 2024 (Open)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="px-3 py-1 bg-success/10 text-success font-data text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
            <Layers className="h-3 w-3" /> Job Ledgers Synced
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
        
        {/* Left Col: GL Entries */}
        <div className="bg-neutral-50/50 p-6 flex flex-col gap-4 col-span-1 lg:col-span-2">
          
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider">Recent Postings</h4>
          </div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-left font-data text-[12px] whitespace-nowrap">
              <thead className="bg-surface border-b border-border text-text-muted text-[10px] uppercase tracking-wider font-bold">
                <tr>
                  <th className="px-4 py-3 font-bold">Date</th>
                  <th className="px-4 py-3 font-bold">Source</th>
                  <th className="px-4 py-3 font-bold">Account</th>
                  <th className="px-4 py-3 font-bold">Job Tag</th>
                  <th className="px-4 py-3 font-bold text-right">Debit</th>
                  <th className="px-4 py-3 font-bold text-right">Credit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {/* AP Bill Posting */}
                <tr className="hover:bg-neutral-50 transition-colors bg-white">
                  <td className="px-4 py-3 text-text-secondary" rowSpan={2}>10/24</td>
                  <td className="px-4 py-3 font-body font-semibold text-text-primary">Bill: BL-8902</td>
                  <td className="px-4 py-3 text-text-secondary">5000 - Direct Costs</td>
                  <td className="px-4 py-3"><span className="bg-primary-50 text-primary-700 px-1.5 py-0.5 rounded font-bold text-[10px]">P-104</span></td>
                  <td className="px-4 py-3 text-right text-text-primary">$12,500.00</td>
                  <td className="px-4 py-3 text-right text-text-muted">-</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors bg-white">
                  <td className="px-4 py-3 font-body text-text-secondary pl-6">Titan Concrete</td>
                  <td className="px-4 py-3 text-text-secondary">2000 - Accounts Payable</td>
                  <td className="px-4 py-3 text-text-muted">-</td>
                  <td className="px-4 py-3 text-right text-text-muted">-</td>
                  <td className="px-4 py-3 text-right text-text-primary">$12,500.00</td>
                </tr>
                
                {/* AR Pay App Posting */}
                <tr className="hover:bg-neutral-50 transition-colors bg-surface/50 border-t-2 border-border-subtle">
                  <td className="px-4 py-3 text-text-secondary" rowSpan={3}>10/25</td>
                  <td className="px-4 py-3 font-body font-semibold text-text-primary">App: PA-004</td>
                  <td className="px-4 py-3 text-text-secondary">1200 - Accounts Rec.</td>
                  <td className="px-4 py-3"><span className="bg-primary-50 text-primary-700 px-1.5 py-0.5 rounded font-bold text-[10px]">P-104</span></td>
                  <td className="px-4 py-3 text-right text-text-primary">$45,000.00</td>
                  <td className="px-4 py-3 text-right text-text-muted">-</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors bg-surface/50">
                  <td className="px-4 py-3 font-body text-text-secondary pl-6">Retainage (10%)</td>
                  <td className="px-4 py-3 text-text-secondary">1210 - Retainage Rec.</td>
                  <td className="px-4 py-3"><span className="bg-primary-50 text-primary-700 px-1.5 py-0.5 rounded font-bold text-[10px]">P-104</span></td>
                  <td className="px-4 py-3 text-right text-text-primary">$5,000.00</td>
                  <td className="px-4 py-3 text-right text-text-muted">-</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors bg-surface/50">
                  <td className="px-4 py-3 font-body text-text-secondary pl-6">Progress Billing</td>
                  <td className="px-4 py-3 text-text-secondary">4000 - Contract Rev.</td>
                  <td className="px-4 py-3"><span className="bg-primary-50 text-primary-700 px-1.5 py-0.5 rounded font-bold text-[10px]">P-104</span></td>
                  <td className="px-4 py-3 text-right text-text-muted">-</td>
                  <td className="px-4 py-3 text-right text-text-primary">$50,000.00</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

        </div>

        {/* Right Col: WIP & Bank */}
        <div className="bg-white p-6 flex flex-col gap-6">
          
          {/* WIP Snippet */}
          <motion.div variants={itemVariants}>
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" /> Project WIP Summary</h4>
            <div className="bg-surface rounded-xl border border-border p-4 flex flex-col gap-3">
              <div>
                <span className="block font-data text-[10px] uppercase text-text-muted mb-0.5">Project 104 - Medical Office</span>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-data text-[12px] font-bold text-text-primary">% Complete (Cost)</span>
                  <span className="font-data text-[12px] font-bold text-primary-700">42.5%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 w-[42.5%]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div>
                  <span className="block font-data text-[9px] uppercase text-text-muted">Earned Rev</span>
                  <span className="block font-data text-[13px] font-bold text-text-primary">$531,250</span>
                </div>
                <div>
                  <span className="block font-data text-[9px] uppercase text-text-muted">Billed Rev</span>
                  <span className="block font-data text-[13px] font-bold text-text-primary">$475,000</span>
                </div>
              </div>
              <div className="pt-2 border-t border-border mt-1">
                <span className="block font-data text-[10px] uppercase text-text-muted">Underbilling (Asset)</span>
                <span className="block font-data text-[14px] font-bold text-success">+$56,250</span>
              </div>
            </div>
          </motion.div>

          {/* Bank Feed */}
          <motion.div variants={itemVariants} className="pt-4 border-t border-border">
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5"><Wallet className="h-3.5 w-3.5" /> Bank Feed</h4>
            <div className="flex items-center justify-between">
              <span className="font-body text-[13px] text-text-secondary">Chase Operating ...4492</span>
              <span className="font-data text-[11px] font-bold text-success flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Reconciled</span>
            </div>
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}
