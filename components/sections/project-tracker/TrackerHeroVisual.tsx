"use client";

import { motion } from "motion/react";
import { Target, AlertCircle, CheckCircle2, CircleDashed, Calendar, AlignLeft, Users } from "lucide-react";

export function TrackerHeroVisual() {
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
            <Target className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Project Tracker
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Project 104 • Critical Path
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex bg-neutral-100 p-1 rounded-lg">
            <button className="px-3 py-1 bg-white shadow-sm rounded text-text-primary font-data text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <AlignLeft className="h-3.5 w-3.5" /> List
            </button>
            <button className="px-3 py-1 text-text-secondary font-data text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:text-text-primary">
              <Calendar className="h-3.5 w-3.5" /> Gantt
            </button>
          </div>
        </div>
      </div>

      <div className="bg-neutral-50/50 p-6 flex flex-col gap-6">
        
        {/* Phase Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-data text-[12px] font-bold text-text-primary uppercase tracking-wider">Phase: Construction</span>
            <span className="bg-primary-50 text-primary-700 font-data text-[10px] font-bold px-2 py-0.5 rounded-full">Week 14</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[9px] font-bold text-blue-700">TL</div>
              <div className="h-6 w-6 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-[9px] font-bold text-purple-700">MK</div>
              <div className="h-6 w-6 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-text-muted"><Users className="h-3 w-3" /></div>
            </div>
          </div>
        </div>

        {/* Task List */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
          <table className="w-full text-left font-data text-[13px]">
            <thead className="bg-surface border-b border-border text-text-muted text-[11px] uppercase tracking-wider font-bold">
              <tr>
                <th className="px-4 py-3 font-bold w-10">Status</th>
                <th className="px-4 py-3 font-bold">Activity Name</th>
                <th className="px-4 py-3 font-bold">Assignee</th>
                <th className="px-4 py-3 font-bold text-right">Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* Task 1 (Completed) */}
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-3 text-center">
                  <CheckCircle2 className="h-4 w-4 text-success mx-auto" />
                </td>
                <td className="px-4 py-3 font-body text-text-secondary line-through">Excavation & Shoring</td>
                <td className="px-4 py-3 text-text-secondary">Mike K.</td>
                <td className="px-4 py-3 text-right text-text-secondary">Oct 12</td>
              </tr>
              
              {/* Task 2 (Overdue) */}
              <tr className="bg-error-bg/30 hover:bg-error-bg/50 transition-colors">
                <td className="px-4 py-3 text-center">
                  <AlertCircle className="h-4 w-4 text-error-text mx-auto" />
                </td>
                <td className="px-4 py-3 font-body font-semibold text-text-primary">
                  Pour Foundation Walls
                  <span className="block font-data text-[10px] font-normal text-error-text mt-0.5">Critical Path • 2 days overdue</span>
                </td>
                <td className="px-4 py-3 font-bold text-error-text">Tom L.</td>
                <td className="px-4 py-3 text-right font-bold text-error-text">Oct 15</td>
              </tr>

              {/* Task 3 (Blocked/Pending) */}
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-3 text-center">
                  <CircleDashed className="h-4 w-4 text-text-muted mx-auto" />
                </td>
                <td className="px-4 py-3 font-body font-semibold text-text-primary">
                  Structural Steel Delivery
                  <span className="block font-data text-[10px] font-normal text-warning-600 mt-0.5">Waiting on: Pour Foundation Walls</span>
                </td>
                <td className="px-4 py-3 text-text-primary">Sarah J.</td>
                <td className="px-4 py-3 text-right text-text-primary">Oct 18</td>
              </tr>

              {/* Task 4 (Not Started) */}
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-3 text-center">
                  <CircleDashed className="h-4 w-4 text-text-muted mx-auto" />
                </td>
                <td className="px-4 py-3 font-body font-semibold text-text-primary">Erect Steel Frame</td>
                <td className="px-4 py-3 text-text-primary">Sarah J.</td>
                <td className="px-4 py-3 text-right text-text-primary">Oct 22</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Action Bar */}
        <motion.div variants={itemVariants} className="flex justify-between items-center bg-white p-3 rounded-xl border border-border shadow-sm">
          <div className="flex items-center gap-3">
             <div className="h-8 w-8 rounded-full bg-error-bg text-error-text flex items-center justify-center">
               <AlertCircle className="h-4 w-4" />
             </div>
             <div>
               <span className="block font-body text-[13px] font-bold text-text-primary">1 Overdue Activity</span>
               <span className="block font-data text-[11px] text-text-muted">Pushing critical path timeline by 2 days</span>
             </div>
          </div>
          <button className="bg-primary-600 text-white px-4 py-1.5 rounded font-data text-[11px] font-bold uppercase tracking-wider hover:bg-primary-700 transition-colors">
            Notify Team
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
}
