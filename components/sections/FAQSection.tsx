"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    id: "implementation",
    question: "How long does implementation take and what does onboarding look like?",
    answer:
      "Most teams are live in 2–4 weeks. We start with your budget and cost codes, import the project data, then train field and office users together so the system is operational for your first real pay application.",
  },
  {
    id: "migration",
    question: "Can we migrate budgets, cost codes, and project data from Excel or our current tool?",
    answer:
      "Yes. We import budgets, cost codes, contacts, and estimates from CSV / Excel. We also support direct migrations from QuickBooks Online and common PM tools, and our onboarding team handles the cleanup for you.",
  },
  {
    id: "pricing",
    question: "How transparent is pricing, and what comes with each seat?",
    answer:
      "Pricing is based on team seats plus optional services. There are no hidden fees for subcontractors, and every plan includes RFI management, budgeting, purchasing, schedule tracking, billing, and reporting. We walk through the package clearly before you sign.",
  },
  {
    id: "rfis",
    question: "How do we manage RFIs and track responses from the design team?",
    answer:
      "Every RFI gets a number, question text, and official response field. You assign it to a team member, set a due date, and track who has the ball. Field supers can submit RFIs from mobile, attach files and photos, and the PM sees everything in one log. You can also share RFIs to the live portal so architects and consultants respond directly in the system, no email chains.",
  },
  {
    id: "budget",
    question: "How does budget tracking work with purchase orders and cost codes?",
    answer:
      "Your budget is organized by CSI cost codes (standardized across the industry). For each line, we show original budget, approved changes, committed cost from linked POs, and variance. As you issue purchase orders, committed costs update in real time. You always know how much money is left in each cost code before you commit to a subcontractor.",
  },
  {
    id: "field",
    question: "Can field teams document daily work and weather from the field?",
    answer:
      "Yes. Supers fill out daily logs with work areas, weather, crew notes, and attach photos or documents. The diary view shows logs in chronological order, and you can search, filter, and export them all at once. Legal teams love these for delay claims, they're an official record of conditions on site.",
  },
  {
    id: "transfers",
    question: "What's the process for budget transfers and approvals?",
    answer:
      "If you need to move money between cost codes, initiate a transfer request that routes to your controller or approver. They review, approve or reject, and once approved, the budget updates automatically. The whole history is auditable, you know who approved what and when.",
  },
  {
    id: "change-orders",
    question: "How do we track change orders and their cost impact?",
    answer:
      "Link change orders directly to RFIs and cost code lines. When you approve a change order, the budget automatically reflects the new amount. You can see all changes in one place, their approval status, and exactly which cost codes they affect. Full audit trail for billing and claims.",
  },
  {
    id: "subcontractors",
    question: "Do my subcontractors need to pay to use it?",
    answer:
      "No. Your subs get free access to the subcontractor portal, they can respond to RFIs, download drawings, submit bids, and see their PO status without paying a dime. You only pay for office team seats.",
  },
  {
    id: "trial",
    question: "Is there a free trial?",
    answer:
      "14 days, no credit card. Full features, real project import. Try RFI management, budgeting, daily logs, change orders, everything. If it doesn't click, walk away, no calls from us.",
  },
];

export function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  const accordionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section id="faq" ref={containerRef} className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-6 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-800"
          >
            BEFORE YOU COMMIT
          </motion.div>

          <motion.h2
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-4 text-balance font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl"
          >
            What builders ask before they switch.
          </motion.h2>

          <motion.p
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl text-balance text-lg text-text-secondary"
          >
            Straight answers on implementation, data migration, and what you'll actually pay.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          variants={accordionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
