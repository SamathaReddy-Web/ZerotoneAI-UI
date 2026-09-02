"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { X, Building2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PAIN_POINTS = [
  "No visibility into who opened the invite vs. who ignored it",
  "Addendum issued at 4pm on bid day: half your subs never got it",
  "Bid leveling happens in a spreadsheet that someone has to rebuild every project",
  "Executed subcontract is a Word doc someone fills out by hand after award",
];

const MOCK_DATA = [
  { trade: "Concrete (Div 03)", count: "3 bids", status: "Covered", tone: "success" },
  { trade: "Steel (Div 05)", count: "2 bids", status: "Covered", tone: "success" },
  { trade: "Roofing (Div 07)", count: "1 bid", status: "Covered", tone: "success" },
  { trade: "Plumbing (Div 22)", count: "0 bids", status: "Missing", tone: "warning" },
  { trade: "HVAC (Div 23)", count: "1 bid", status: "Covered", tone: "success" },
];

export function BiddingProblemSolution() {
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
              Stop managing your bid list in your email sent folder.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-10 text-lg text-text-secondary leading-relaxed"
            >
              Most GCs send bid invites by BCC email with a PDF attachment and a Dropbox link. Half the subs never open it. You find out on bid day that three scopes have no coverage.
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
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-data text-[11px] font-bold uppercase tracking-wider text-text-muted">
                      Bid Package
                    </p>
                    <h3 className="font-body text-base font-semibold text-text-primary">
                      Riverside Office Complex
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
                      className="group flex items-center justify-between px-5 py-4 rounded-lg bg-white border border-border-subtle shadow-sm transition-all hover:border-primary-200 hover:shadow-md cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col gap-1">
                          <span className="font-body text-[14.5px] font-medium text-text-primary">
                            {item.trade}
                          </span>
                          <span className="font-data text-[13px] text-text-muted">
                            {item.count}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "px-2.5 py-1 rounded-full font-data text-[11px] font-bold uppercase tracking-wider",
                            item.tone === "success" && "bg-success/10 text-success",
                            item.tone === "warning" && "bg-primary-50 text-primary-700"
                          )}
                        >
                          {item.status}
                        </span>
                        <ChevronRight className="h-4 w-4 text-text-muted opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary-600" />
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
