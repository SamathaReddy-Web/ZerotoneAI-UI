"use client";

import { motion } from "motion/react";
import { Download, CheckCircle2, PenTool, LayoutList } from "lucide-react";

export function SovHeroVisual() {
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
      className="relative mx-auto w-full max-w-5xl rounded-2xl border border-border bg-white shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-border bg-surface px-6 py-4 gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <LayoutList className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Schedule of Values & Pay App
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Period Ending: Oct 31, 2024
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="bg-white border border-border text-text-secondary px-3 py-1.5 rounded-full font-data text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-50 transition-colors">
            <Download className="h-3.5 w-3.5" /> G702 / G703
          </button>
          <button className="bg-success text-white px-4 py-1.5 rounded-full font-data text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-success/90 transition-colors">
            <CheckCircle2 className="h-3.5 w-3.5" /> Submit to Owner
          </button>
        </div>
      </div>

      <div className="bg-neutral-50/50 p-6 flex flex-col gap-6">
        
        {/* Top Summary Widgets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm">
            <span className="font-data text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1 block">Contract Sum</span>
            <span className="font-data text-[16px] font-bold text-text-primary">$1,250,000</span>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm">
            <span className="font-data text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1 block">Prior Billings</span>
            <span className="font-data text-[16px] font-bold text-text-secondary">$425,000</span>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-primary-50 rounded-xl border border-primary-200 p-4 shadow-sm relative overflow-hidden">
            <span className="font-data text-[10px] font-bold text-primary-700 uppercase tracking-wider mb-1 block">This Period (Gross)</span>
            <span className="font-data text-[16px] font-bold text-primary-900">$115,000</span>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary-400" />
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm">
            <span className="font-data text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1 block">Less Retainage (10%)</span>
            <span className="font-data text-[16px] font-bold text-warning-600">-$11,500</span>
          </motion.div>
        </div>

        {/* SOV Table Mock */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left font-data text-[12px] whitespace-nowrap">
            <thead className="bg-surface border-b border-border text-text-muted text-[10px] uppercase tracking-wider font-bold">
              <tr>
                <th className="px-4 py-3 font-bold">Item No.</th>
                <th className="px-4 py-3 font-bold">Description of Work</th>
                <th className="px-4 py-3 font-bold text-right">Scheduled Value</th>
                <th className="px-4 py-3 font-bold text-right text-text-secondary bg-neutral-100/50">Prior Earned</th>
                <th className="px-4 py-3 font-bold text-right text-primary-700 bg-primary-50/50">This Period %</th>
                <th className="px-4 py-3 font-bold text-right text-primary-700 bg-primary-50/50">This Period $</th>
                <th className="px-4 py-3 font-bold text-right border-l border-border">Total Completed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-3 text-text-muted">01</td>
                <td className="px-4 py-3 font-body font-semibold text-text-primary">General Conditions</td>
                <td className="px-4 py-3 text-right text-text-primary">$120,000</td>
                <td className="px-4 py-3 text-right text-text-secondary bg-neutral-100/50">$60,000</td>
                <td className="px-4 py-3 text-right text-primary-600 font-bold bg-primary-50/30">
                  <div className="flex justify-end items-center gap-1">
                    <PenTool className="h-3 w-3" /> 10%
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-primary-700 font-bold bg-primary-50/30">$12,000</td>
                <td className="px-4 py-3 text-right font-bold border-l border-border text-text-primary">$72,000 <span className="text-text-muted font-normal ml-1">(60%)</span></td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-3 text-text-muted">02</td>
                <td className="px-4 py-3 font-body font-semibold text-text-primary">Site Work & Excavation</td>
                <td className="px-4 py-3 text-right text-text-primary">$85,000</td>
                <td className="px-4 py-3 text-right text-text-secondary bg-neutral-100/50">$85,000</td>
                <td className="px-4 py-3 text-right text-text-muted bg-primary-50/30">0%</td>
                <td className="px-4 py-3 text-right text-text-muted bg-primary-50/30">$0</td>
                <td className="px-4 py-3 text-right font-bold border-l border-border text-success">$85,000 <span className="font-normal ml-1">(100%)</span></td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-3 text-text-muted">03</td>
                <td className="px-4 py-3 font-body font-semibold text-text-primary">Concrete Foundation</td>
                <td className="px-4 py-3 text-right text-text-primary">$180,000</td>
                <td className="px-4 py-3 text-right text-text-secondary bg-neutral-100/50">$150,000</td>
                <td className="px-4 py-3 text-right text-primary-600 font-bold bg-primary-50/30">
                  <div className="flex justify-end items-center gap-1">
                    <PenTool className="h-3 w-3" /> 16.6%
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-primary-700 font-bold bg-primary-50/30">$30,000</td>
                <td className="px-4 py-3 text-right font-bold border-l border-border text-success">$180,000 <span className="font-normal ml-1">(100%)</span></td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-3 text-text-muted">04</td>
                <td className="px-4 py-3 font-body font-semibold text-text-primary">Structural Framing</td>
                <td className="px-4 py-3 text-right text-text-primary">$320,000</td>
                <td className="px-4 py-3 text-right text-text-secondary bg-neutral-100/50">$130,000</td>
                <td className="px-4 py-3 text-right text-primary-600 font-bold bg-primary-50/30">
                  <div className="flex justify-end items-center gap-1">
                    <PenTool className="h-3 w-3" /> 22.8%
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-primary-700 font-bold bg-primary-50/30">$73,000</td>
                <td className="px-4 py-3 text-right font-bold border-l border-border text-text-primary">$203,000 <span className="text-text-muted font-normal ml-1">(63%)</span></td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between items-center px-2">
          <span className="font-data text-[11px] text-text-secondary flex items-center gap-1">
             G702 application updates instantly as percent complete is entered.
          </span>
          <span className="font-data text-[12px] font-bold text-text-primary flex items-center gap-2">
             Net Amount Due: <span className="text-success text-[15px]">$103,500</span>
          </span>
        </motion.div>

      </div>
    </motion.div>
  );
}
