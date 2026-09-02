"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { X, Building2, ChevronRight, FileSpreadsheet, FileText, Mail } from "lucide-react";

const PAIN_POINTS = [
  "Building data scattered across spreadsheets, emails, and PDFs",
  "Setup takes two days instead of 30 minutes due to manual entry",
  "Building changes require manual updates across cost codes and estimates",
  "Estimators guess at floor areas or work from outdated drawings",
];

const MOCK_DATA = [
  { name: "Project_GFA_Master_v4_FINAL.xlsx", type: "excel", date: "Oct 12" },
  { name: "RE: Floor Area Revisions - North Tower", type: "email", date: "Oct 14" },
  { name: "Architect_Plans_Set_03.pdf", type: "pdf", date: "Oct 15" },
  { name: "Estimate_Copy(2)_DO_NOT_USE.xlsx", type: "excel", date: "Oct 16" },
];

export function BuildingsProblemSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
              Then cost codes and estimates guess.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-10 text-lg text-text-secondary leading-relaxed"
            >
              You know your project&apos;s square footage and level count. But that information lives in three places: a spreadsheet, an email from the architect, and someone&apos;s notebook.
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-data text-[11px] font-bold uppercase tracking-wider text-error-text">
                      Scattered Data
                    </p>
                    <h3 className="font-body text-base font-semibold text-text-primary">
                      Where is the real GFA?
                    </h3>
                  </div>
                </div>

                {/* Mock Rows */}
                <div className="flex flex-col p-2 gap-1 bg-neutral-50/50">
                  {MOCK_DATA.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ scale: 1.015 }}
                      className="group flex items-center justify-between px-5 py-4 rounded-lg bg-white border border-border-subtle shadow-sm transition-all hover:border-error-border hover:shadow-md cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        {item.type === "excel" && <FileSpreadsheet className="h-5 w-5 text-success" />}
                        {item.type === "email" && <Mail className="h-5 w-5 text-primary-600" />}
                        {item.type === "pdf" && <FileText className="h-5 w-5 text-error-text" />}
                        
                        <span className="font-body text-[13.5px] font-medium text-text-primary truncate max-w-[200px]">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-data text-[12px] text-text-muted">
                          {item.date}
                        </span>
                        <ChevronRight className="h-4 w-4 text-text-muted opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
