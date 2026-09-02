"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { X, FileText, SearchX, FileQuestion } from "lucide-react";

const PAIN_POINTS = [
  "POs created in Word, emailed to vendors, filed: no central record",
  "Budget and actual POs get out of sync within weeks",
  "Amendments and change orders scatter across email",
  "Finance can't answer 'what's committed vs. what's actually spent'",
];

export function PurchasingProblemSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col max-w-2xl">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center rounded-full border border-warning-border bg-warning-bg px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-warning-text">
                THE OLD WAY
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="mb-6 text-balance font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl leading-tight">
              Budget goes out of sync. Vendors never know the truth.
            </motion.h2>

            <motion.p variants={itemVariants} className="mb-10 text-lg text-text-secondary leading-relaxed">
              You approve a budget. Then sub quotes come in. PM issues POs in Word docs. Finance doesn&apos;t know which POs are issued. Amended PO from a vendor lands in email. Vendor submits invoice for $18,000 against a $15,000 PO: how did that happen? 
            </motion.p>

            <div className="flex flex-col gap-4">
              {PAIN_POINTS.map((point, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ x: 6 }} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-white shadow-sm cursor-default transition-shadow hover:shadow-md">
                  <div className="flex mt-0.5 h-6 w-6 shrink-0 items-center justify-center rounded-full bg-error-bg text-error-text">
                    <X className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <p className="font-body text-[15.5px] leading-snug text-text-secondary">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive UI Mock */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="relative">
            <div className="absolute inset-0 -z-10 translate-x-10 translate-y-10 scale-110 blur-3xl rounded-full bg-primary-100 opacity-60" />
            
            <div className="rounded-2xl border border-border bg-white p-2 shadow-overlay transform transition-transform hover:-translate-y-1 hover:shadow-2xl duration-500">
              <div className="rounded-xl border border-border-subtle bg-surface/50 overflow-hidden flex flex-col gap-2 p-3">
                
                {/* Document Mock */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm transition-colors hover:border-error-border">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-text-muted mt-0.5" />
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-body text-[13px] font-semibold text-text-primary">PO_Apex_Steel_v3_Final.docx</span>
                        <span className="font-data text-[11px] text-text-muted">Last week</span>
                      </div>
                      <span className="font-body text-[12.5px] text-text-secondary line-clamp-2">
                        &quot;Hey Jim, I updated the PO for the extra beams. Can you sign and send back? Also did finance see the other version?&quot;
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Overrun Mock */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl border border-border p-4 shadow-sm transition-colors hover:border-error-border mt-2">
                  <div className="flex items-start gap-3">
                    <FileQuestion className="h-5 w-5 text-error-text mt-0.5" />
                    <div>
                      <span className="font-body text-[13.5px] font-semibold text-text-primary block">Invoice Mismatch</span>
                      <span className="font-data text-[12px] text-error-text flex items-center gap-1 mt-1">
                        <SearchX className="h-3.5 w-3.5" /> Invoiced $18k. Budget says $15k. No amendment found.
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center p-3 mt-1">
                  <span className="font-data text-[11px] font-bold uppercase tracking-wider text-error-text bg-error-bg px-3 py-1.5 rounded-full">Word docs don&apos;t talk to your budget</span>
                </motion.div>

              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
