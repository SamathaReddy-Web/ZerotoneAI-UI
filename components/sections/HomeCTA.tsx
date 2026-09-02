"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion";
import { GET_STARTED_HREF } from "@/content/navigation";

const trustPoints = [
  "A real conversation with the team that builds and runs the system",
  "Matched to your project type and how your team actually works",
  "Pricing, onboarding, and what ongoing support looks like, covered honestly",
];

export function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section ref={ref} className="w-full bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            <motion.div variants={staggerVariants} className="mb-8">
              <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-800">
                WE STAY ON THE JOB WITH YOU
              </span>
            </motion.div>

            <motion.h2
              variants={staggerVariants}
              className="mb-6 text-balance font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl"
            >
              See how we'd run this with you, on a project like yours.
            </motion.h2>

            <motion.p
              variants={staggerVariants}
              className="mb-12 max-w-xl text-balance text-lg text-text-secondary leading-relaxed"
            >
              Book a 20 minute conversation with the actual team, not a rep reading a script. We'll walk through budgets, POs, schedule, and billing on a real job type.
            </motion.p>
            
            <motion.div variants={staggerVariants} className="flex flex-col gap-4 mb-12 lg:mb-0">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </div>
                  <p className="text-[15px] text-text-secondary leading-snug">{point}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
             variants={containerVariants}
             initial="hidden"
             animate={isInView ? "visible" : "hidden"}
             className="flex flex-col items-start lg:items-center justify-center lg:p-12 rounded-3xl lg:bg-surface lg:border lg:border-border"
          >
            <h3 className="mb-4 font-display text-2xl font-bold text-text-primary text-center">Ready to get started?</h3>
            <p className="mb-8 text-center text-text-secondary">Schedule a personalized walkthrough of the platform.</p>
            <MagneticButton>
              <Button href={GET_STARTED_HREF} size="lg" className="px-8 py-6 text-base group">
                Book My Walkthrough
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
