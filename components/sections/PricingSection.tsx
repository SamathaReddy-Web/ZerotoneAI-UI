"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Starter",
    subtitle: "Small GC or sub, up to 10 users",
    price: "Custom",
    suffix: "/ contact us",
    features: [
      "RFIs, Daily Logs, Submittals",
      "Estimates & Budget Control",
      "Purchase Orders & Bills",
      "Change Orders",
      "Schedule Control",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    subtitle: "Growing GC, up to 50 users",
    price: "Custom",
    suffix: "/ contact us",
    features: [
      "Everything in Starter",
      "SOV & Billing (pay apps)",
      "Accounting & GL (AP, AR, Bank)",
      "Vendor Master & Compliance",
      "Bidding Pipeline & Analytics",
      "Inventory Management",
      "Priority onboarding support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "Multi company, unlimited users",
    price: "Custom",
    suffix: "/ contact us",
    features: [
      "Everything in Professional",
      "Multi company management",
      "Custom roles & permissions",
      "Dedicated onboarding & training",
      "Priority phone support",
      "Custom integrations",
    ],
    featured: false,
  },
];

export function PricingSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-background py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20 flex flex-col items-center text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-800"
          >
            08 · PRICING
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-6 max-w-2xl text-balance font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl"
          >
            Simple tiers. No per module fees.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-balance text-base text-text-secondary sm:text-lg"
          >
            Every tier includes all modules for your active users. No add ons, no hidden seat fees. Pricing discussed when we talk.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 items-stretch"
        >
          {pricingPlans.map((plan, index) => {
            const isFeatured = plan.featured;

            return (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={cn(
                  "relative flex flex-col rounded-3xl border p-8 sm:p-10 transition-all duration-300 h-full",
                  isFeatured
                    ? "bg-white border-primary-200 shadow-overlay z-10 scale-100 lg:scale-[1.02] hover:border-primary-300"
                    : "bg-neutral-50 border-border-subtle hover:border-border"
                )}
              >
                {/* Featured Accent Glow */}
                {isFeatured && (
                  <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-br from-primary-100 via-primary-50 to-warning-bg blur-[60px]" />
                )}

                {/* Top Highlight Accent for Featured */}
                {isFeatured && (
                  <div className="absolute inset-x-0 -top-[1px] h-[2px] w-full bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-50" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-text-primary mb-2">{plan.name}</h3>
                      <p className="text-sm text-text-muted">{plan.subtitle}</p>
                    </div>
                    {isFeatured && (
                      <span className="rounded-full bg-primary-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                        Most Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-10 flex items-baseline gap-2">
                    <span className="text-5xl font-display font-bold tracking-tight text-text-primary">{plan.price}</span>
                    <span className="text-sm font-medium text-text-secondary">{plan.suffix}</span>
                  </div>
                  
                  <div className="mb-8 h-px w-full bg-border-subtle" />
                  
                  <ul className="flex flex-col gap-4 text-sm text-text-secondary mb-10 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={cn("mt-0.5 h-[18px] w-[18px] shrink-0", isFeatured ? "text-primary-600" : "text-success")} strokeWidth={2.5} />
                        <span className="leading-snug text-[15px]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto pt-4">
                    <a
                      href="/contact" // Replace with actual route if needed
                      className={cn(
                        "flex h-12 w-full items-center justify-center rounded-xl text-[15px] font-semibold transition-all duration-200 border",
                        isFeatured
                          ? "bg-primary-800 border-primary-800 text-white hover:bg-primary-900 shadow-raised"
                          : "bg-transparent border-border text-text-primary hover:border-primary-800 hover:text-primary-800"
                      )}
                    >
                      Talk to the Team
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
