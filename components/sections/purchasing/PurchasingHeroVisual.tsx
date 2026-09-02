"use client";

import { motion } from "motion/react";
import { ArrowRightLeft, DollarSign, Edit3, Briefcase, FileSignature } from "lucide-react";

export function PurchasingHeroVisual() {
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
            <FileSignature className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Purchase Order: PO-2024-089
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Vendor: Apex Steel Fabricators
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="px-3 py-1 bg-success/10 text-success font-data text-[11px] font-bold uppercase tracking-wider rounded-full">
            Issued & Committed
          </span>
        </div>
      </div>

      <div className="flex flex-col bg-neutral-50/50 p-6 gap-4">
        
        {/* Commitment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm flex flex-col justify-center">
            <span className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-1">Original Amount</span>
            <span className="font-data text-[18px] font-bold text-text-primary">$125,000.00</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm flex flex-col justify-center relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-warning-bg" />
            <span className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1"><Edit3 className="h-3 w-3" /> Amendments (2)</span>
            <span className="font-data text-[18px] font-bold text-warning-700">+$12,500.00</span>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-primary-900 rounded-xl border border-primary-800 p-4 shadow-sm flex flex-col justify-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <span className="font-data text-[11px] font-bold text-primary-200 uppercase tracking-wider mb-1 relative z-10">Revised Total</span>
            <span className="font-data text-[20px] font-bold relative z-10">$137,500.00</span>
          </motion.div>
        </div>

        {/* Budget Integration Line */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border shadow-sm p-1">
          <table className="w-full text-left font-data text-[13px]">
            <thead className="bg-surface text-text-muted text-[11px] uppercase tracking-wider font-bold">
              <tr>
                <th className="px-4 py-2 font-bold rounded-tl-lg">Line Item</th>
                <th className="px-4 py-2 font-bold">CSI Code</th>
                <th className="px-4 py-2 font-bold text-right">Qty</th>
                <th className="px-4 py-2 font-bold text-right">Rate</th>
                <th className="px-4 py-2 font-bold text-right rounded-tr-lg">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-3 font-body text-[13px] text-text-primary">Structural Steel Fabrication</td>
                <td className="px-4 py-3">
                  <span className="bg-neutral-100 text-text-secondary px-2 py-0.5 rounded text-[11px] font-bold">05 12 00</span>
                </td>
                <td className="px-4 py-3 text-right text-text-secondary">1 LS</td>
                <td className="px-4 py-3 text-right text-text-secondary">$125,000</td>
                <td className="px-4 py-3 text-right text-text-primary font-bold">$125,000</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors bg-warning-50/30">
                <td className="px-4 py-3 font-body text-[13px] text-text-primary flex items-center gap-1"><ArrowRightLeft className="h-3 w-3 text-warning-600" /> AMD-01: Additional Framing</td>
                <td className="px-4 py-3">
                  <span className="bg-neutral-100 text-text-secondary px-2 py-0.5 rounded text-[11px] font-bold">05 12 00</span>
                </td>
                <td className="px-4 py-3 text-right text-text-secondary">1 LS</td>
                <td className="px-4 py-3 text-right text-text-secondary">$12,500</td>
                <td className="px-4 py-3 text-right text-warning-700 font-bold">+$12,500</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Real-time sync feedback */}
        <motion.div variants={itemVariants} className="flex justify-between items-center px-2 pt-2">
          <span className="font-body text-[12px] text-text-secondary flex items-center gap-1">
             <Briefcase className="h-3.5 w-3.5" /> Budget variance updated instantly.
          </span>
          <span className="font-data text-[11px] text-success font-bold flex items-center gap-1 uppercase tracking-wider">
             <DollarSign className="h-3.5 w-3.5" /> 10% Retainage Applied
          </span>
        </motion.div>

      </div>
    </motion.div>
  );
}
