"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight, X } from "lucide-react";
import { CONSTRUCT_BASE_PATH, MODULES, MODULE_CATEGORIES, ModuleLink } from "@/content/navigation";

export function RestOfZerotone() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [expanded, setExpanded] = useState(false);

  const pathname = usePathname();
  const currentSlug = pathname?.split("/").pop();

  const recommendedModules = useMemo(() => {
    const available = MODULES.filter((m) => m.slug !== currentSlug);
    // Use length of slug for deterministic pseudo-random offset
    const offset = currentSlug ? currentSlug.length % available.length : 0;
    
    // Pick 4
    const selection = [];
    for (let i = 0; i < 4; i++) {
      selection.push(available[(offset + i) % available.length]);
    }
    return selection;
  }, [currentSlug]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  // Helper for the expanded view: Group modules by category
  const groupedModules = useMemo(() => {
    return MODULE_CATEGORIES.map((cat) => ({
      ...cat,
      modules: MODULES.filter((m) => m.category === cat.key),
    }));
  }, []);

  return (
    <section ref={ref} className="py-24 bg-surface w-full overflow-hidden border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl uppercase">
              The rest of Zerotone
            </h2>
            <p className="font-body text-lg text-text-secondary">
              One platform for every phase of the job: from first bid to final closeout.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!expanded ? (
              <motion.div
                key="recommendations"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recommendedModules.map((mod) => (
                    <ModuleCard key={mod.slug} mod={mod} />
                  ))}
                </div>
                
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setExpanded(true)}
                    className="group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-6 py-3 font-body text-sm font-semibold text-text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md"
                  >
                    Explore all modules 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-primary-600" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="all-modules"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                  {groupedModules.map((group) => (
                    <div key={group.key} className="flex flex-col gap-6">
                      <div className="flex items-center gap-3 border-b border-border-subtle pb-3">
                        <span className="font-data text-[11px] font-bold uppercase tracking-widest text-text-muted">
                          {group.label}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {group.modules.map((mod) => {
                          const isCurrent = mod.slug === currentSlug;
                          return (
                            <Link
                              key={mod.slug}
                              href={isCurrent ? "#" : `${CONSTRUCT_BASE_PATH}/${mod.slug}`}
                              onClick={(e) => isCurrent && e.preventDefault()}
                              className={`group flex items-center justify-between rounded-xl border p-3 transition-all duration-300 ${
                                isCurrent
                                  ? "border-primary-200 bg-primary-50 cursor-default"
                                  : "border-transparent hover:border-border hover:bg-white hover:shadow-sm"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                                  isCurrent ? "bg-primary-600 text-white" : "bg-neutral-100 text-neutral-500 group-hover:bg-primary-50 group-hover:text-primary-600"
                                }`}>
                                  <mod.icon className="h-4 w-4" />
                                </div>
                                <span className={`font-body text-[14px] ${isCurrent ? "font-bold text-primary-900" : "font-medium text-text-secondary group-hover:text-text-primary"}`}>
                                  {mod.label}
                                </span>
                              </div>
                              {!isCurrent && (
                                <ChevronRight className="h-4 w-4 text-text-muted opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                              )}
                              {isCurrent && (
                                <span className="font-data text-[10px] uppercase font-bold tracking-wider text-primary-600">Current</span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => setExpanded(false)}
                    className="group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-6 py-3 font-body text-sm font-semibold text-text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-border hover:shadow-md"
                  >
                    <X className="h-4 w-4 text-text-muted transition-transform group-hover:scale-110" />
                    Show fewer modules
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

const MODULE_DESCRIPTIONS: Record<string, string> = {
  "construction-buildings": "Define project scope with building registry.",
  "construction-estimating-software": "Pre construction line item estimates.",
  "construction-budget-software": "Manage approved financial baseline.",
  "construction-bills-software": "Track and manage project bills.",
  "construction-accounting-software": "Job costed general ledger, AP, AR, and bank reconciliation.",
  "change-order-management": "Track scope, price, and approvals.",
  "construction-purchasing-software": "Issue and track purchase orders.",
  "construction-inventory-software": "Track material stock, warehouses, and equipment by job.",
  "construction-daily-logs": "Log daily activities and crew.",
  "construction-delay-tracking": "Track project delays and impacts.",
  "construction-project-tracker": "Monitor project progress.",
  "construction-reporting-software": "Real time project dashboards.",
  "schedule-of-values-software": "Track project value statements.",
  "construction-submittals-software": "Manage project submittals.",
  "rfi-software": "Manage questions and responses.",
  "construction-team-management": "Manage team access.",
  "construction-vendor-management": "Manage vendor information.",
  "construction-scheduling-software": "Drag and drop Gantt charts.",
  "construction-bidding-software": "Send bid packages to subs.",
  "punchlist-software": "Photo based punchlists.",
  "construction-cost-codes": "Organize costs by standard CSI divisions.",
};

function ModuleCard({ mod }: { mod: ModuleLink }) {
  const description = MODULE_DESCRIPTIONS[mod.slug] || mod.category.replace(/-/g, " ");
  
  return (
    <Link
      href={`${CONSTRUCT_BASE_PATH}/${mod.slug}`}
      className="group relative flex h-full min-h-[220px] flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-raised hover:border-primary-200"
    >
      <div>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
          <mod.icon className="h-5 w-5" />
        </div>
        <h3 className="mb-2 font-display text-[17px] font-bold text-text-primary">
          {mod.label}
        </h3>
        <p className="font-body text-[13.5px] leading-snug text-text-secondary transition-colors group-hover:text-text-primary">
          {description}
        </p>
      </div>
      
      <div className="mt-8 flex items-center font-body text-[13px] font-bold uppercase tracking-wider text-primary-600 group-hover:text-primary-700">
        Explore Module <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
