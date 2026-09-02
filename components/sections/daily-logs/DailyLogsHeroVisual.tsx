"use client";

import { motion } from "motion/react";
import { CloudRain, Sun, Wind, Users, CheckCircle2, Image as ImageIcon } from "lucide-react";

export function DailyLogsHeroVisual() {
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
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Tuesday, Oct 15
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Daily Log · North Tower
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success font-data text-[11px] font-bold tracking-widest uppercase">
            <CheckCircle2 className="h-3 w-3" /> Signed by Super
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border-subtle bg-neutral-50/50">
        
        {/* Left Column (Weather & Photos) */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <h4 className="font-data text-[11px] font-bold uppercase tracking-wider text-text-muted">Weather</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-border rounded-lg p-3 shadow-sm flex items-center gap-3">
                <CloudRain className="h-5 w-5 text-primary-500" />
                <div>
                  <div className="font-data text-[13px] font-bold text-text-primary">0.4&quot;</div>
                  <div className="font-data text-[10px] text-text-muted uppercase">Morning Rain</div>
                </div>
              </div>
              <div className="bg-white border border-border rounded-lg p-3 shadow-sm flex items-center gap-3">
                <Sun className="h-5 w-5 text-warning-500" />
                <div>
                  <div className="font-data text-[13px] font-bold text-text-primary">72°F</div>
                  <div className="font-data text-[10px] text-text-muted uppercase">Afternoon</div>
                </div>
              </div>
            </div>
            <div className="bg-error-bg/30 border border-error-border/50 rounded-lg p-3 shadow-sm flex items-start gap-3 mt-1">
              <Wind className="h-4 w-4 text-error-text mt-0.5" />
              <div>
                <div className="font-body text-[12.5px] font-medium text-error-text">High Wind Alert</div>
                <div className="font-body text-[12px] text-text-secondary mt-0.5">Crane operations suspended 10AM - 2PM.</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <h4 className="font-data text-[11px] font-bold uppercase tracking-wider text-text-muted flex justify-between">
              Photos <span>(3 Attached)</span>
            </h4>
            <div className="flex gap-3">
              <div className="h-20 w-20 rounded-lg bg-neutral-200 border border-border flex items-center justify-center text-text-muted/50 overflow-hidden relative group">
                <ImageIcon className="h-6 w-6" />
                <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="h-20 w-20 rounded-lg bg-neutral-200 border border-border flex items-center justify-center text-text-muted/50 overflow-hidden relative group">
                <ImageIcon className="h-6 w-6" />
                <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="h-20 w-20 rounded-lg border border-dashed border-border flex items-center justify-center text-text-muted bg-white hover:bg-surface cursor-pointer transition-colors">
                <span className="font-data text-[18px]">+</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Crew & Progress) */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <h4 className="font-data text-[11px] font-bold uppercase tracking-wider text-text-muted flex items-center gap-2">
              <Users className="h-3.5 w-3.5" /> Crew On Site
            </h4>
            <div className="flex flex-col gap-2">
              
              {/* Crew Row */}
              <div className="bg-white border border-border rounded-lg p-3 shadow-sm flex items-center justify-between">
                <div>
                  <div className="font-body text-[13px] font-semibold text-text-primary">Apex Concrete</div>
                  <div className="font-body text-[11.5px] text-text-secondary">Foundation - Area A</div>
                </div>
                <div className="text-right">
                  <div className="font-data text-[14px] font-bold text-text-primary">8 <span className="text-[10px] text-text-muted font-normal">Workers</span></div>
                  <div className="font-data text-[11px] text-text-muted">64 Total Hrs</div>
                </div>
              </div>

              {/* Crew Row */}
              <div className="bg-white border border-border rounded-lg p-3 shadow-sm flex items-center justify-between group hover:border-primary-300 transition-colors">
                <div>
                  <div className="font-body text-[13px] font-semibold text-text-primary group-hover:text-primary-700">Steel Pro Erectors</div>
                  <div className="font-body text-[11.5px] text-text-secondary">Tower Framing</div>
                </div>
                <div className="text-right">
                  <div className="font-data text-[14px] font-bold text-text-primary">4 <span className="text-[10px] text-text-muted font-normal">Workers</span></div>
                  <div className="font-data text-[11px] text-text-muted">16 Total Hrs (Delayed)</div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
