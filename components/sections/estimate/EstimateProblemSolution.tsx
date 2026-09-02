"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { X, FileSpreadsheet, ChevronRight } from "lucide-react";

const PAIN_POINTS = [
  "Manually typing every line: 40+ hours per mid size estimate",
  "Excel formulas break, calculations get corrupted, versions get mixed up",
  "No visibility into labor vs. material vs. markup: just a total number",
  "Changes to scope require reestimating dozens of lines",
];

const MOCK_DATA = [
  { code: "03-3000", desc: "Cast-in-Place Concrete", qty: "1,200", unit: "CY", total: "$312,000" },
  { code: "05-1200", desc: "Structural Steel Framing", qty: "450", unit: "TON", total: "$1,125,000" },
  { code: "07-5000", desc: "Membrane Roofing", qty: "45,000", unit: "SF", total: "$382,500" },
  { code: "09-2900", desc: "Gypsum Board", qty: "120,000", unit: "SF", total: "$276,000" },
  { code: "23-0000", desc: "HVAC Systems", qty: "1", unit: "LS", total: "$890,000" },
];

export function EstimateProblemSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section ref={containerRef} className="relative w-full bg-surface py-24 md:py-32 border-b border-border-subtle overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center rounded-full border border-warning-border bg-warning-bg px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-warning-text">
                THE OLD WAY
              </span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="mb-6 text-balance font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl leading-tight"
            >
              Spreadsheets can&apos;t keep up.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-10 text-lg text-text-secondary leading-relaxed"
            >
              You build estimates in Excel. You type every line. You manually calculate subtotals and margins. You email drafts back and forth. When the architect changes the scope, you copy rows, update quantities, redo the math. Two weeks later you&apos;ve got five versions floating around and no one knows which is the current bid.
            </motion.p>

            <div className="flex flex-col gap-4">
              {PAIN_POINTS.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border bg-white shadow-sm cursor-default transition-shadow hover:shadow-md"
                >
                  <div className="flex mt-0.5 h-6 w-6 shrink-0 items-center justify-center rounded-full bg-error-bg text-error-text">
                    <X className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <p className="font-body text-[15.5px] leading-snug text-text-secondary">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive UI Mock */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 -z-10 translate-x-10 translate-y-10 scale-110 blur-3xl rounded-full bg-primary-100 opacity-60" />
            
            <div className="rounded-2xl border border-border bg-white p-2 shadow-overlay transform transition-transform hover:-translate-y-1 hover:shadow-2xl duration-500">
              <div className="rounded-xl border border-border-subtle bg-surface/50 overflow-hidden">
                {/* Mock Header */}
                <div className="flex items-center gap-3 px-6 py-5 border-b border-border bg-white">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <FileSpreadsheet className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-data text-[11px] font-bold uppercase tracking-wider text-text-muted">
                      Estimate V3
                    </p>
                    <h3 className="font-body text-base font-semibold text-text-primary">
                      Riverside Office Complex
                    </h3>
                  </div>
                </div>

                {/* Mock Rows */}
                <div className="flex flex-col p-2 gap-1 bg-neutral-50/50">
                  {/* Header Row */}
                  <div className="flex items-center px-4 py-2 border-b border-border-subtle/50 mb-1">
                    <div className="w-16 font-data text-[10px] font-bold uppercase tracking-wider text-text-muted">Code</div>
                    <div className="flex-1 font-data text-[10px] font-bold uppercase tracking-wider text-text-muted">Description</div>
                    <div className="w-16 text-right font-data text-[10px] font-bold uppercase tracking-wider text-text-muted">Qty</div>
                    <div className="w-24 text-right font-data text-[10px] font-bold uppercase tracking-wider text-text-muted">Total</div>
                  </div>
                  
                  {MOCK_DATA.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ scale: 1.015 }}
                      className="group flex items-center px-4 py-3 rounded-lg bg-white border border-border-subtle shadow-sm transition-all hover:border-primary-200 hover:shadow-md cursor-pointer"
                    >
                      <div className="w-16 font-data text-[12px] text-text-muted">
                        {item.code}
                      </div>
                      <div className="flex-1 font-body text-[13.5px] font-medium text-text-primary truncate pr-4">
                        {item.desc}
                      </div>
                      <div className="w-16 text-right font-data text-[12px] text-text-muted">
                        {item.qty} <span className="text-[10px] uppercase">{item.unit}</span>
                      </div>
                      <div className="w-24 text-right font-data text-[13px] font-semibold text-text-primary">
                        {item.total}
                      </div>
                      <div className="w-6 flex justify-end">
                        <ChevronRight className="h-4 w-4 text-text-muted opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary-600" />
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Total Row */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-end px-4 py-4 mt-2 rounded-lg bg-primary-50 border border-primary-100"
                  >
                     <div className="mr-6 font-data text-[12px] font-bold uppercase tracking-wider text-primary-800">
                        Total Direct Cost
                     </div>
                     <div className="w-24 text-right font-data text-[15px] font-bold text-primary-900">
                        $2,985,500
                     </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
