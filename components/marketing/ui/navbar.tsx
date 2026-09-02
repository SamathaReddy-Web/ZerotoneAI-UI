'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Method', href: '#how-we-work' },
    { label: 'Approach', href: '#approach' },
    { label: 'Built', href: '#built' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
            <img src="/marketing/logo-transparent.png" alt="Zerotone" className="w-12 h-12 object-contain" />
            <span className="hidden sm:inline font-semibold text-[#1a1a1a] text-lg">Zerotone</span>
          </Link>

          {/* Center Navigation (Desktop) */}
          <div className="hidden md:flex gap-12 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1a1a1a] font-medium text-sm hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-[#1e40af] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-[0_8px_20px_-5px_rgba(30,64,175,0.6)] hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            Get in touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-4 p-2 flex-shrink-0"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#1a1a1a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[#1a1a1a] font-medium text-sm hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
