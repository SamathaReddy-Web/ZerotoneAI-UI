"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Logo } from "@/components/layout/Logo";

const platformLinks = [
  "Bid Pipeline",
  "Estimating",
  "Budget Control",
  "Purchase Orders",
  "Schedule Control",
  "RFIs & Submittals",
  "Change Orders",
  "SOV & Billing",
  "Accounting & GL",
  "Vendor Management",
  "Daily Logs",
  "Reports",
  "Inventory & Materials",
];

const companyLinks = [
  "Zerotone home",
  "About",
  "Security & data",
  "Privacy",
  "Terms",
];

const socialLinks = [
  { icon: FaWhatsapp, label: "WhatsApp", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
];

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <footer ref={containerRef} className="w-full bg-background border-t border-border pt-16 md:pt-24 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24"
        >
          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="mb-6 block" aria-label="Zerotone Home">
              <Logo />
            </Link>
            
            <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-sm">
              Construction management software for the people who actually build things.
            </p>
            
            <address className="text-text-muted text-[14px] leading-relaxed not-italic mb-8 max-w-sm">
              Chennamma Kere, Kathreguppe,<br />
              Banashankari 3rd Stage, Banashankari,<br />
              Bengaluru, Karnataka 560085
            </address>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={`Follow Zerotone on ${social.label}`}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-surface border border-border text-text-secondary shadow-sm transition-all duration-250 ease-out hover:-translate-y-0.5 hover:border-primary-200 hover:text-primary-600 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Platform */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col">
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-text-primary mb-6">
              Platform
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {platformLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="text-[14.5px] font-medium text-text-secondary transition-all duration-200 hover:text-text-primary hover:translate-x-0.5 inline-block w-fit focus:outline-none focus-visible:text-primary-600 focus-visible:translate-x-0.5"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col">
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-text-primary mb-6">
              Company
            </h3>
            <div className="flex flex-col gap-3.5">
              {companyLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="text-[14.5px] font-medium text-text-secondary transition-all duration-200 hover:text-text-primary hover:translate-x-0.5 inline-block w-fit focus:outline-none focus-visible:text-primary-600 focus-visible:translate-x-0.5"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[13px] text-text-muted">
            © {new Date().getFullYear()} Zerotone. All rights reserved.
          </p>
          <p className="text-[13px] text-text-muted text-center sm:text-right">
            Built in Bengaluru · Working with teams in India and the U.S.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
