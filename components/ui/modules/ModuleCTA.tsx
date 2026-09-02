"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion";
import { GET_STARTED_HREF } from "@/content/navigation";

export interface ModuleCTAProps {
  headline: React.ReactNode;
  description: React.ReactNode;
}

export function ModuleCTA({ headline, description }: ModuleCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section ref={ref} className="w-full bg-background py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-100/50 blur-[100px]" />
      
      <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <h2 className="mb-6 text-balance font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            {headline}
          </h2>
          
          <p className="mb-10 max-w-2xl text-balance text-lg text-text-secondary leading-relaxed sm:text-xl">
            {description}
          </p>
          
          <MagneticButton>
            <Button href={GET_STARTED_HREF} size="lg" className="px-8 py-6 text-base group">
              Talk to the Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
