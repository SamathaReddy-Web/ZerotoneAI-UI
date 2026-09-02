"use client";

import { motion } from "motion/react";
import { FolderTree, AlertTriangle, DollarSign, Search } from "lucide-react";

export function BudgetHeroVisual() {
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
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
            <DollarSign className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Project Budget & JTD
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Syncing with QuickBooks Online <span className="inline-block h-1.5 w-1.5 rounded-full bg-success ml-1 animate-pulse" />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-muted" />
            <div className="pl-9 pr-3 py-1.5 rounded-full border border-border bg-white font-body text-[12px] text-text-muted w-48">
              Search CSI codes...
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-data text-[13px]">
          <thead className="bg-neutral-50/50 border-b border-border text-text-muted text-[11px] uppercase tracking-wider font-bold">
            <tr>
              <th className="px-6 py-3 font-bold">CSI Code</th>
              <th className="px-4 py-3 font-bold text-right">Orig Budget</th>
              <th className="px-4 py-3 font-bold text-right">Committed</th>
              <th className="px-4 py-3 font-bold text-right">Actuals (JTD)</th>
              <th className="px-6 py-3 font-bold text-right">Variance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {/* Row 1 */}
            <motion.tr variants={itemVariants} className="bg-white hover:bg-neutral-50 transition-colors">
              <td className="px-6 py-3">
                <div className="flex items-center gap-2">
                  <FolderTree className="h-4 w-4 text-primary-500" />
                  <span className="font-bold text-text-primary">03 30 00</span>
                  <span className="text-text-secondary">Cast-in-Place Concrete</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right text-text-primary">$185,000</td>
              <td className="px-4 py-3 text-right text-text-primary">$180,000</td>
              <td className="px-4 py-3 text-right text-text-primary">$142,500</td>
              <td className="px-6 py-3 text-right">
                <span className="inline-flex items-center gap-1 text-success bg-success/10 px-2 py-0.5 rounded font-bold">
                  $5,000
                </span>
              </td>
            </motion.tr>

            {/* Row 2: Overrun Warning */}
            <motion.tr variants={itemVariants} className="bg-error-bg/20 hover:bg-error-bg/30 transition-colors">
              <td className="px-6 py-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-error-text" />
                  <span className="font-bold text-text-primary">05 12 00</span>
                  <span className="text-text-secondary">Structural Steel</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right text-text-primary">$320,000</td>
              <td className="px-4 py-3 text-right text-text-primary">$345,000</td>
              <td className="px-4 py-3 text-right text-text-primary">$345,000</td>
              <td className="px-6 py-3 text-right">
                <span className="inline-flex items-center gap-1 text-error-text bg-error-bg px-2 py-0.5 rounded font-bold">
                  ($25,000)
                </span>
              </td>
            </motion.tr>

            {/* Row 3 */}
            <motion.tr variants={itemVariants} className="bg-white hover:bg-neutral-50 transition-colors">
              <td className="px-6 py-3">
                <div className="flex items-center gap-2">
                  <FolderTree className="h-4 w-4 text-text-muted" />
                  <span className="font-bold text-text-primary">09 29 00</span>
                  <span className="text-text-secondary">Gypsum Board</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right text-text-primary">$110,000</td>
              <td className="px-4 py-3 text-right text-text-primary">$110,000</td>
              <td className="px-4 py-3 text-right text-text-primary">$45,000</td>
              <td className="px-6 py-3 text-right">
                <span className="inline-flex items-center gap-1 text-text-muted font-bold">
                  $0
                </span>
              </td>
            </motion.tr>
            
            {/* Totals */}
            <motion.tr variants={itemVariants} className="bg-surface font-bold text-text-primary border-t-2 border-border">
              <td className="px-6 py-4 uppercase tracking-wider text-[11px] text-text-muted">Total Project</td>
              <td className="px-4 py-4 text-right">$615,000</td>
              <td className="px-4 py-4 text-right">$635,000</td>
              <td className="px-4 py-4 text-right">$532,500</td>
              <td className="px-6 py-4 text-right text-error-text">($20,000)</td>
            </motion.tr>
          </tbody>
        </table>
      </div>

    </motion.div>
  );
}
