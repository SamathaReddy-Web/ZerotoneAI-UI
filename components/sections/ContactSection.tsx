"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const trustPoints = [
  "A real conversation with the team that builds and runs the system",
  "Matched to your project type and how your team actually works",
  "Pricing, onboarding, and what ongoing support looks like, covered honestly",
  "No pressure to commit: just a clear look at how we'd work together",
];

const roleOptions = [
  "Owner / Executive",
  "Project Manager",
  "Superintendent",
  "Estimator",
  "Controller / Finance",
  "Operations",
  "Other",
];

const teamSizeOptions = [
  "1–10",
  "11–25",
  "26–50",
  "51–100",
  "100+",
];

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={containerRef} className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          
          {/* Left Column - Value Prop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            <motion.div variants={staggerVariants} className="mb-8">
              <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-800">
                10 · WE STAY ON THE JOB WITH YOU
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
              Book a 20 minute conversation with the actual team, not a rep reading a script. We'll walk through budgets, POs, schedule, and billing on a real job type, and talk through what working together long term actually looks like.
            </motion.p>

            <motion.div variants={staggerVariants} className="flex flex-col gap-5">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </div>
                  <p className="text-base text-text-secondary leading-snug">{point}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="rounded-3xl border border-border-subtle bg-white p-8 sm:p-10 shadow-overlay transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:rotate-[0.5deg] hover:shadow-2xl hover:border-primary-200">
              <div className="mb-8">
                <h3 className="mb-2 font-display text-2xl font-bold text-text-primary">Start the conversation.</h3>
                <p className="text-sm text-text-secondary">We'll reach out within one business day to confirm a time.</p>
              </div>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="mb-2 font-display text-xl font-bold text-text-primary">Request Received</h4>
                  <p className="text-text-secondary">We'll be in touch shortly to schedule your conversation.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Input label="First Name *" required placeholder="John" />
                    <Input label="Last Name *" required placeholder="Smith" />
                  </div>
                  
                  <Input label="Work Email *" type="email" required placeholder="john@yourcompany.com" />
                  
                  <Input label="Company Name *" required placeholder="Acme General Contracting" />
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Custom Select for Role */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-body text-[15.5px] font-medium text-text-primary">
                        Your Role *
                      </label>
                      <select required defaultValue="" className="h-11 rounded-md border border-border bg-surface px-3.5 font-body text-[16px] text-text-primary focus-visible:border-primary-600 focus:outline-none appearance-none cursor-pointer">
                        <option value="" disabled>Select role</option>
                        {roleOptions.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>

                    {/* Custom Select for Team Size */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-body text-[15.5px] font-medium text-text-primary">
                        Team Size
                      </label>
                      <select defaultValue="" className="h-11 rounded-md border border-border bg-surface px-3.5 font-body text-[16px] text-text-primary focus-visible:border-primary-600 focus:outline-none appearance-none cursor-pointer">
                        <option value="" disabled>Select size</option>
                        {teamSizeOptions.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-2 pt-2">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="group w-full h-12 text-[16px]"
                    >
                      {isSubmitting ? "Sending..." : "Start the Conversation"}
                      {!isSubmitting && (
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      )}
                    </Button>
                    <p className="mt-4 text-center text-xs text-text-muted">
                      No spam. We only reach out about your request.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
