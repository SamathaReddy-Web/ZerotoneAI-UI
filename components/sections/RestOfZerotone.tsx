"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clipboard, Wallet, Target } from "lucide-react";
import { CONSTRUCT_BASE_PATH } from "@/content/navigation";

const OTHER_MODULES = [
  {
    label: "Smart Scheduling",
    slug: "construction-scheduling-software",
    icon: CalendarDays,
    description: "Keep your teams aligned with real-time schedule updates.",
  },
  {
    label: "RFI Manager",
    slug: "rfi-software",
    icon: Clipboard,
    description: "Get answers faster and keep the project moving.",
  },
  {
    label: "Budget & POs",
    slug: "construction-budget-software",
    icon: Wallet,
    description: "Track every dollar and control costs before they happen.",
  },
  {
    label: "Project Tracker",
    slug: "construction-project-tracker",
    icon: Target,
    description: "See the big picture across your entire portfolio.",
  },
];

export function RestOfZerotone() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section ref={ref} className="py-24 bg-surface w-full">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              The rest of Zerotone
            </h2>
            <p className="font-body text-lg text-text-secondary">
              Everything connects. From the first bid to the final punchlist, run your entire construction business in one unified system.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OTHER_MODULES.map((mod) => (
              <Link
                key={mod.slug}
                href={`${CONSTRUCT_BASE_PATH}/${mod.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-raised hover:border-primary-200"
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                    <mod.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-display text-[17px] font-bold text-text-primary">
                    {mod.label}
                  </h3>
                  <p className="font-body text-[14.5px] text-text-secondary">
                    {mod.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center font-body text-[13px] font-bold uppercase tracking-wider text-primary-600 group-hover:text-primary-700">
                  Explore Module <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
