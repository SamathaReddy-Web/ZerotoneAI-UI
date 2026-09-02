"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const trustPoints = [
  "Live product walk through, not a prerecorded video",
  "We'll match the demo to your project type and team size",
  "Pricing, migration help, and onboarding timeline covered",
  "No commitment: just an honest look at the product",
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

export function GetStartedForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24 items-start">
        
        {/* Left Column - Value Prop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.div variants={staggerVariants} className="mb-8">
            <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-[10.5px] font-bold uppercase tracking-widest text-text-secondary shadow-sm">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse" />
              No slide decks. No fluff.
            </span>
          </motion.div>

          <motion.h1
            variants={staggerVariants}
            className="mb-6 text-balance font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl"
          >
            See Zerotone on a project that looks like <span className="text-primary-600">yours.</span>
          </motion.h1>

          <motion.p
            variants={staggerVariants}
            className="mb-12 max-w-xl text-balance text-lg text-text-secondary leading-relaxed"
          >
            Book a 20 minute demo with the team. We'll walk you through RFIs, budgets, POs, and scheduling: live, on a real job.
          </motion.p>

          <motion.div variants={staggerVariants} className="flex flex-col gap-5 mb-16">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-success transition-colors">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <p className="text-[15.5px] font-body font-medium text-text-secondary leading-snug">{point}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={staggerVariants} className="rounded-2xl border border-border bg-surface p-6 sm:p-8 flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              <span className="font-body text-[14.5px] font-bold text-text-primary">
                The Zerotone team
              </span>
              <span className="font-body text-[13.5px] text-text-secondary">
                The people who build and run the system
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="rounded-3xl border border-border bg-surface p-8 sm:p-10 shadow-raised transition-all duration-500 ease-out hover:border-border-subtle">
            <div className="mb-8">
              <h3 className="mb-2 font-display text-2xl font-bold text-text-primary">Book your walkthrough</h3>
              <p className="text-[14.5px] text-text-secondary">We'll reach out within one business day to schedule a time that works for you.</p>
            </div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="mb-2 font-display text-xl font-bold text-text-primary">Request Received</h4>
                <p className="text-text-secondary">We'll be in touch shortly to schedule your walkthrough.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Input label="FIRST NAME *" required placeholder="John" />
                  <Input label="LAST NAME *" required placeholder="Smith" />
                </div>
                
                <Input label="WORK EMAIL *" type="email" required placeholder="john@yourcompany.com" />
                
                <Input label="PHONE NUMBER" type="tel" placeholder="+1 (555) 000-0000" />
                
                <Input label="COMPANY NAME *" required placeholder="Acme General Contracting" />
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[11px] font-bold uppercase tracking-wider text-text-primary">
                      YOUR ROLE *
                    </label>
                    <select
                      key="role-select"
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 font-body text-base text-text-primary shadow-sm outline-none transition-all placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:opacity-50"
                    >
                      <option value="" disabled>
                        Select role
                      </option>
                      {roleOptions.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[11px] font-bold uppercase tracking-wider text-text-primary">
                      TEAM SIZE
                    </label>
                    <select
                      key="size-select"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 font-body text-base text-text-primary shadow-sm outline-none transition-all placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:opacity-50"
                    >
                      <option value="" disabled>
                        Select size
                      </option>
                      {teamSizeOptions.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Input label="PREFERRED DATE *" type="date" required />

                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-[11px] font-bold uppercase tracking-wider text-text-primary">
                    ANYTHING SPECIFIC YOU WANT TO SEE? (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. RFI workflow, budget tracking, PO approvals..."
                    className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 font-body text-base text-text-primary shadow-sm outline-none transition-all placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:opacity-50"
                  />
                </div>

                <div className="mt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-6 text-[15.5px]"
                  >
                    {isSubmitting ? "Submitting..." : "Book My Walkthrough"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
