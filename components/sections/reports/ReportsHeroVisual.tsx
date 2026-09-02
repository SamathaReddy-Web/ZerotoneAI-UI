"use client";

import { motion } from "motion/react";
import { PieChart, TrendingUp, BarChart3, ChevronRight, DollarSign, Activity, FileSpreadsheet } from "lucide-react";

export function ReportsHeroVisual() {
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
            <PieChart className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Project Financial Dashboard
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Live Data • Project 104
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="bg-white border border-border text-text-secondary px-3 py-1.5 rounded-full font-data text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-50 transition-colors">
            <FileSpreadsheet className="h-3.5 w-3.5" /> Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
        
        {/* Left Col: Charts */}
        <div className="bg-neutral-50/50 p-6 flex flex-col gap-6 col-span-1 lg:col-span-2">
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm">
              <span className="font-data text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1.5"><TrendingUp className="h-3 w-3" /> Projected Margin</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-data text-[24px] font-bold text-primary-700">12.4%</span>
                <span className="font-data text-[11px] text-success font-bold flex items-center">+1.2%</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm">
              <span className="font-data text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1.5"><DollarSign className="h-3 w-3" /> Cash Position</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-data text-[24px] font-bold text-success">+$142k</span>
                <span className="font-data text-[11px] text-text-muted font-bold">Net 30</span>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-data text-[11px] font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5"><Activity className="h-3.5 w-3.5" /> Earned Value (S-Curve)</h4>
              <span className="bg-surface text-text-secondary px-2 py-0.5 rounded text-[10px] font-bold border border-border">Month 4</span>
            </div>
            
            {/* Fake Chart Area */}
            <div className="h-32 w-full relative border-l border-b border-border flex items-end justify-between px-2 pt-4">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="border-t border-border-subtle w-full h-0" />
                <div className="border-t border-border-subtle w-full h-0" />
                <div className="border-t border-border-subtle w-full h-0" />
              </div>
              
              {/* Lines */}
              <svg className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
                {/* Planned Value (Gray) */}
                <path d="M 0 120 Q 50 120, 100 80 T 250 40 T 400 10" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                {/* Actual Cost (Red-ish) */}
                <path d="M 0 120 Q 50 115, 100 85 T 220 55" fill="none" stroke="#F87171" strokeWidth="2.5" />
                {/* Earned Value (Green-ish) */}
                <path d="M 0 120 Q 50 110, 100 70 T 220 30" fill="none" stroke="#34D399" strokeWidth="2.5" />
              </svg>
              
              {/* Markers */}
              <div className="absolute left-[55%] top-[25%] h-3 w-3 rounded-full bg-success border-2 border-white shadow-sm" />
              <div className="absolute left-[55%] top-[45%] h-3 w-3 rounded-full bg-error-text border-2 border-white shadow-sm" />
            </div>
            <div className="flex justify-center gap-4 mt-3">
              <div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-neutral-200" /><span className="font-data text-[10px] text-text-muted">Planned</span></div>
              <div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-success" /><span className="font-data text-[10px] text-text-muted">Earned</span></div>
              <div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-error-text" /><span className="font-data text-[10px] text-text-muted">Actual Cost</span></div>
            </div>
          </motion.div>

        </div>

        {/* Right Col: Drill Down */}
        <div className="bg-white p-6 flex flex-col gap-6">
          
          <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5"><BarChart3 className="h-3.5 w-3.5" /> Top Variances (Drill-down)</h4>
          
          <div className="flex flex-col gap-2">
            {/* Item 1 */}
            <motion.div variants={itemVariants} className="group flex items-center justify-between p-3 rounded-xl border border-border bg-surface hover:bg-white hover:border-primary-200 transition-colors cursor-pointer shadow-sm">
              <div>
                <span className="block font-body text-[13px] font-bold text-text-primary">03-3000 Concrete</span>
                <span className="block font-data text-[11px] text-error-text font-bold">-$12,450 over budget</span>
              </div>
              <ChevronRight className="h-4 w-4 text-text-muted group-hover:text-primary-600 transition-colors" />
            </motion.div>

            {/* Item 2 */}
            <motion.div variants={itemVariants} className="group flex items-center justify-between p-3 rounded-xl border border-border bg-surface hover:bg-white hover:border-primary-200 transition-colors cursor-pointer shadow-sm">
              <div>
                <span className="block font-body text-[13px] font-bold text-text-primary">09-2000 Drywall</span>
                <span className="block font-data text-[11px] text-success font-bold">+$4,200 under budget</span>
              </div>
              <ChevronRight className="h-4 w-4 text-text-muted group-hover:text-primary-600 transition-colors" />
            </motion.div>

             {/* Item 3 */}
             <motion.div variants={itemVariants} className="group flex items-center justify-between p-3 rounded-xl border border-border bg-surface hover:bg-white hover:border-primary-200 transition-colors cursor-pointer shadow-sm">
              <div>
                <span className="block font-body text-[13px] font-bold text-text-primary">01-1000 Gen Cond.</span>
                <span className="block font-data text-[11px] text-warning-600 font-bold">Projected -3 days</span>
              </div>
              <ChevronRight className="h-4 w-4 text-text-muted group-hover:text-primary-600 transition-colors" />
            </motion.div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
