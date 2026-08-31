"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui";
import { ChevronDownIcon, MenuIcon } from "@/components/icons/Icons";
import { NavMegaMenu } from "./NavMegaMenu";
import { NavMobileDrawer } from "./NavMobileDrawer";
import { Logo } from "./Logo";
import {
  CONSTRUCT_BASE_PATH,
  FAQ_HREF,
  GET_STARTED_HREF,
  MODULES,
  PRICING_HREF,
  constructHref,
} from "@/content/navigation";

const MEGA_MENU_ID = "modules-mega-menu";
const OPEN_DELAY_MS = 100;
const CLOSE_DELAY_MS = 150;

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      data-cursor="link"
      className="group relative py-2 font-body text-[14.5px] font-medium text-text-secondary transition-colors hover:text-text-primary"
    >
      {children}
      <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[1.5px] origin-left scale-x-0 bg-primary-800 transition-transform duration-200 group-hover:scale-x-100" />
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [modulesOpen, setModulesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const openTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isModulesActive = MODULES.some((m) => pathname === constructHref(m.slug));

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click.
  useEffect(() => {
    if (!modulesOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setModulesOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [modulesOpen]);

  function clearTimers() {
    if (openTimeout.current) clearTimeout(openTimeout.current);
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  }

  function handleMouseEnter() {
    clearTimers();
    openTimeout.current = setTimeout(() => setModulesOpen(true), OPEN_DELAY_MS);
  }

  function handleMouseLeave() {
    clearTimers();
    closeTimeout.current = setTimeout(() => setModulesOpen(false), CLOSE_DELAY_MS);
  }

  function handleTriggerClick() {
    clearTimers();
    setModulesOpen((v) => !v);
  }

  function handleTriggerKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setModulesOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === "ArrowDown" && !modulesOpen) {
      e.preventDefault();
      setModulesOpen(true);
    }
  }

  useEffect(() => clearTimers, []);

  return (
    <>
      <header
        ref={navRef}
        className={`sticky top-0 z-30 transition-[padding] duration-300 ease-out ${
          scrolled ? "px-3 pt-3 sm:px-4 sm:pt-4" : "px-0 pt-0"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`mx-auto flex h-16 w-full items-center justify-between border transition-[max-width,border-radius,background-color,border-color,box-shadow,padding] duration-300 ease-out ${
            scrolled
              ? "max-w-5xl rounded-full border-border bg-surface/90 px-5 shadow-raised backdrop-blur-md"
              : "max-w-7xl border-transparent bg-surface px-6"
          }`}
        >
          <Link href={CONSTRUCT_BASE_PATH} className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <div onMouseEnter={handleMouseEnter}>
              <button
                ref={triggerRef}
                aria-expanded={modulesOpen}
                aria-controls={MEGA_MENU_ID}
                aria-haspopup="true"
                onClick={handleTriggerClick}
                onKeyDown={handleTriggerKeyDown}
                className={`group relative flex items-center gap-1 py-2 font-body text-[14.5px] font-medium transition-colors ${
                  isModulesActive ? "text-primary-800" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Modules
                <ChevronDownIcon
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${modulesOpen ? "rotate-180" : ""}`}
                />
                <span
                  className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-[1.5px] origin-left bg-primary-800 transition-transform duration-200 ${
                    isModulesActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
              {modulesOpen && (
                <NavMegaMenu id={MEGA_MENU_ID} onLinkClick={() => setModulesOpen(false)} />
              )}
            </div>

            <NavLink href={PRICING_HREF}>Pricing</NavLink>
            <NavLink href={FAQ_HREF}>FAQ&apos;s</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <Button href={GET_STARTED_HREF} size="md" className="hidden md:inline-flex">
              Talk to the Team →
            </Button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="rounded-md p-2 text-text-secondary hover:bg-neutral-100 md:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <NavMobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
