"use client";

import { motion } from "motion/react";
import { PackageSearch, Boxes, Truck, AlertTriangle, Building, ArrowRight } from "lucide-react";

export function InventoryHeroVisual() {
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
            <PackageSearch className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-body text-[15px] font-semibold text-text-primary">
              Material Inventory
            </h3>
            <p className="font-data text-[12px] text-text-muted">
              Live Stock: 3 Locations
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="px-3 py-1 bg-neutral-100 text-text-secondary border border-border font-data text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
            <Truck className="h-3 w-3" /> Log Delivery
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
        
        {/* Left Col: Stock Levels */}
        <div className="bg-neutral-50/50 p-6 flex flex-col gap-4 col-span-1 lg:col-span-2">
          
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-1.5"><Boxes className="h-3.5 w-3.5" /> High Volume Materials</h4>
          </div>

          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-left font-data text-[12px] whitespace-nowrap">
              <thead className="bg-surface border-b border-border text-text-muted text-[10px] uppercase tracking-wider font-bold">
                <tr>
                  <th className="px-4 py-3 font-bold">Material</th>
                  <th className="px-4 py-3 font-bold">Location</th>
                  <th className="px-4 py-3 font-bold text-right">On Hand</th>
                  <th className="px-4 py-3 font-bold text-right">Reorder Pt</th>
                  <th className="px-4 py-3 font-bold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="px-4 py-3 font-body font-semibold text-text-primary">3/4&quot; EMT Conduit (10&apos;)</td>
                  <td className="px-4 py-3 text-text-secondary"><span className="bg-neutral-100 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Main Yard</span></td>
                  <td className="px-4 py-3 text-right text-text-primary font-bold">450 <span className="text-text-muted font-normal text-[10px]">EA</span></td>
                  <td className="px-4 py-3 text-right text-text-secondary">200</td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex h-2 w-2 rounded-full bg-success"></span>
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors bg-warning-50/30">
                  <td className="px-4 py-3 font-body font-semibold text-text-primary">Type X Gypsum 4x8</td>
                  <td className="px-4 py-3 text-text-secondary"><span className="bg-neutral-100 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Job 104</span></td>
                  <td className="px-4 py-3 text-right text-warning-700 font-bold">45 <span className="text-text-muted font-normal text-[10px]">SHT</span></td>
                  <td className="px-4 py-3 text-right text-text-secondary">50</td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex h-2 w-2 rounded-full bg-warning-500 animate-pulse"></span>
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="px-4 py-3 font-body font-semibold text-text-primary">R-13 Batt Insulation</td>
                  <td className="px-4 py-3 text-text-secondary"><span className="bg-neutral-100 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Main Yard</span></td>
                  <td className="px-4 py-3 text-right text-text-primary font-bold">120 <span className="text-text-muted font-normal text-[10px]">ROLL</span></td>
                  <td className="px-4 py-3 text-right text-text-secondary">80</td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex h-2 w-2 rounded-full bg-success"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

        </div>

        {/* Right Col: Order Helper */}
        <div className="bg-white p-6 flex flex-col gap-6">
          
          <motion.div variants={itemVariants}>
            <h4 className="font-data text-[11px] font-bold text-warning-700 uppercase tracking-wider mb-3 flex items-center gap-1.5 bg-warning-50 px-3 py-1.5 rounded w-fit border border-warning-200">
               <AlertTriangle className="h-3.5 w-3.5" /> Order Helper Action
            </h4>
            
            <div className="border border-border rounded-xl p-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-warning-500" />
              <div className="flex flex-col gap-1 mb-3">
                <span className="font-body text-[13.5px] font-bold text-text-primary">Type X Gypsum 4x8</span>
                <span className="font-data text-[11px] text-text-muted">Shortage projected for Job 104</span>
              </div>
              
              <div className="flex justify-between items-center bg-surface p-2 rounded border border-border mb-3">
                 <div className="text-center w-full border-r border-border">
                   <span className="block font-data text-[10px] text-text-muted uppercase">On Site</span>
                   <span className="block font-data text-[13px] font-bold text-error-text">45</span>
                 </div>
                 <div className="text-center w-full">
                   <span className="block font-data text-[10px] text-text-muted uppercase">Needed</span>
                   <span className="block font-data text-[13px] font-bold text-text-primary">120</span>
                 </div>
              </div>

              <button className="w-full bg-primary-600 text-white font-data text-[11px] font-bold uppercase tracking-wider py-2 rounded shadow-sm hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                Generate PO <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </motion.div>

          {/* Delivery Snippet */}
          <motion.div variants={itemVariants} className="pt-4 border-t border-border">
            <h4 className="font-data text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5"><Building className="h-3.5 w-3.5" /> Recent Deliveries</h4>
            <div className="flex items-start gap-2 bg-surface p-2 rounded">
              <div className="h-6 w-6 bg-white border border-border rounded flex items-center justify-center shrink-0">
                <Truck className="h-3 w-3 text-text-muted" />
              </div>
              <div>
                <span className="block font-body text-[12px] font-semibold text-text-primary">PO-844: Fasteners</span>
                <span className="block font-data text-[10px] text-success">Received in full • 2h ago</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}
