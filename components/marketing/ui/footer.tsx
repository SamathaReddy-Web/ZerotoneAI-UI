'use client';

import { MessageCircle } from 'lucide-react';

// lucide-react dropped brand/logo icons, so these three are small local SVGs
// kept in the same stroke style (24x24, currentColor, strokeWidth 2).
function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Facebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/marketing/logo-transparent.png" alt="Zerotone" className="w-10 h-10 object-contain" />
              <h3 className="text-xl font-bold text-black">Zerotone</h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We bring business analysts, finance specialists, and technologists together to understand real problems first, then build the AI-enabled systems they actually need.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-black">Useful Links</h4>
            <ul className="space-y-3">
              <li><a href="#how-we-work" className="text-neutral-600 hover:text-[#0D47A1] transition font-medium">How We Work</a></li>
              <li><a href="#pilot" className="text-neutral-600 hover:text-[#0D47A1] transition font-medium">Pilot Projects</a></li>
              <li><a href="#contact" className="text-neutral-600 hover:text-[#0D47A1] transition font-medium">Contact Us</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-[#0D47A1] transition font-medium">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-[#0D47A1] transition font-medium">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Column 3: Follow Us / Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-black">Follow Us</h4>
            <div className="space-y-3 flex flex-col">
              <a href="https://linkedin.com/company/zerotone-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-600 hover:text-[#0D47A1] transition font-medium">
                <Linkedin className="w-5 h-5" />LinkedIn
              </a>
              <a href="https://instagram.com/zerotone.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-600 hover:text-[#0D47A1] transition font-medium">
                <Instagram className="w-5 h-5" />Instagram
              </a>
              <a href="https://facebook.com/zerotone.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-600 hover:text-[#0D47A1] transition font-medium">
                <Facebook className="w-5 h-5" />Facebook
              </a>
              <a href="https://wa.me/917676451991" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-600 hover:text-[#0D47A1] transition font-medium">
                <MessageCircle className="w-5 h-5" />WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-200"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-sm text-neutral-600">
            <p className="font-semibold text-black mb-2">Zerotone AI</p>
            <p>Chennammana Kere, Kathreguppe,</p>
            <p>Banashankari 3rd Stage,</p>
            <p>Bengaluru, Karnataka 560085</p>
            <p className="mt-2 text-neutral-500">Zerotone AI Technology Private Limited</p>
            <p className="text-neutral-500">CIN: U62099KA2026PTC224281</p>
          </div>
          <div className="text-sm text-neutral-600 md:text-right space-y-2">
            <p>© 2026 Zerotone AI Technology Private Limited. All rights reserved.</p>
            <div className="flex flex-col md:flex-row md:justify-end gap-4">
              <a href="#" className="hover:text-[#0D47A1] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#0D47A1] transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
