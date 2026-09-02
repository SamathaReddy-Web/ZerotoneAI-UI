"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { ChevronDownIcon, CloseIcon } from "@/components/icons/Icons";
import { Logo } from "./Logo";
import {
  FAQ_HREF,
  GET_STARTED_HREF,
  MODULE_CATEGORIES,
  MODULES,
  PRICING_HREF,
  constructHref,
} from "@/content/navigation";

export function NavMobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [modulesOpen, setModulesOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Move focus in, trap Tab within the drawer, close on Escape.
  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-neutral-900/40 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-surface shadow-overlay transition-transform duration-[250ms] ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border-subtle px-5 py-4">
          <Logo />
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-text-secondary hover:bg-neutral-100 hover:text-text-primary"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          <button
            onClick={() => setModulesOpen((v) => !v)}
            aria-expanded={modulesOpen}
            aria-controls="mobile-modules-panel"
            className="flex items-center justify-between rounded-md px-2.5 py-3 text-left font-body text-[17px] font-semibold text-text-primary hover:bg-neutral-100"
          >
            Modules
            <ChevronDownIcon
              className={`h-4 w-4 text-text-muted transition-transform duration-200 ${
                modulesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            id="mobile-modules-panel"
            className={`grid overflow-hidden transition-[grid-template-rows] duration-[250ms] ease-out ${
              modulesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="flex flex-col gap-4 py-2 pl-4 pr-1">
                {MODULE_CATEGORIES.map((category) => (
                  <div key={category.key} className="flex flex-col gap-1">
                    <div className="border-b border-border-subtle pb-2 mb-1 px-2.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                        {category.label}
                      </p>
                    </div>
                    {MODULES.filter((m) => m.category === category.key).map((mod) => (
                      <Link
                        key={mod.slug}
                        href={constructHref(mod.slug)}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-md px-2.5 py-2.5 font-body text-[15.5px] text-text-secondary hover:bg-neutral-100 hover:text-text-primary"
                      >
                        {mod.icon && <mod.icon className="h-5 w-5 shrink-0 text-text-muted" />}
                        <span>{mod.label}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            href={PRICING_HREF}
            onClick={onClose}
            className="rounded-md px-2.5 py-3 font-body text-[17px] font-semibold text-text-primary hover:bg-neutral-100"
          >
            Pricing
          </Link>
          <Link
            href={FAQ_HREF}
            onClick={onClose}
            className="rounded-md px-2.5 py-3 font-body text-[17px] font-semibold text-text-primary hover:bg-neutral-100"
          >
            FAQ&apos;s
          </Link>
          <Link
            href="/construct"
            onClick={onClose}
            className="rounded-md px-2.5 py-3 font-body text-[17px] font-semibold text-text-primary hover:bg-neutral-100"
          >
            Construct
          </Link>
        </nav>

        <div className="border-t border-border-subtle p-4">
          <Button href={GET_STARTED_HREF} onClick={onClose} className="w-full">
            Talk to the Team →
          </Button>
        </div>
      </div>
    </div>
  );
}
