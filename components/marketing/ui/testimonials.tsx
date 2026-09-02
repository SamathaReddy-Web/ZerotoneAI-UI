'use client';

import { useState } from 'react';

export function Testimonials() {
  const [isDark, setIsDark] = useState(false);

  const testimonials = [
    { text: "We used to lose hours every week just reconciling site reports. This platform gave us one clean view of every project, and honestly, that alone paid for itself in the first month.", name: "Siddharth Rao", role: "Site Operations Head" },
    { text: "Coming from spreadsheets and endless email threads, having everything — budgets, schedules, subcontractor status — in one place changed how fast our team could make decisions.", name: "Thomas Reilly", role: "Project Director" },
    { text: "What impressed me most was how quickly our field staff adopted it. No training headaches, no resistance — just a tool that made their day easier.", name: "Doyle Anderson", role: "Construction Consultant" },
    { text: "We've worked with a few construction finance consultants over the years, but the level of detail in the variance reports here is a different league.", name: "James Whitfield", role: "Managing Director" },
    { text: "Real-time visibility into project costs used to be a luxury for us. Now it's just how we work — and our margins have noticeably improved because of it.", name: "Varun Deshpande", role: "Operations Manager" },
    { text: "Reconciliation used to eat up my entire month-end. Now it's a couple of hours, and I actually trust the numbers I'm looking at.", name: "Ananya Krishnan", role: "Finance Lead" },
    { text: "Every project has its chaos, but this is the first system that actually kept up with ours instead of us having to work around it.", name: "Michael Grant", role: "General Contractor" },
    { text: "Daily logs, progress photos, material tracking — all of it finally lives in one app instead of three different WhatsApp groups.", name: "Rohan Malhotra", role: "Site Engineer" },
    { text: "Our clients notice the difference too. The transparency into project status has made a lot of hard conversations a lot easier.", name: "Sarah Collins", role: "Client Relations Manager" },
  ];

  const initialsOf = (name: string) => name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <li className="p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-black/5 max-w-xs w-full bg-white dark:bg-neutral-900 cursor-default select-none transition-transform duration-[250ms] hover:scale-105 hover:shadow-2xl">
      <blockquote className="m-0 p-0">
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal m-0">{testimonial.text}</p>
        <footer className="flex items-center gap-3 mt-6">
          <div
            aria-hidden="true"
            className="h-10 w-10 rounded-full ring-2 ring-neutral-100 dark:ring-neutral-800 bg-gradient-to-b from-[#1a1a1a] to-[#0D47A1] text-white flex items-center justify-center text-xs font-semibold"
          >
            {initialsOf(testimonial.name)}
          </div>
          <div className="flex flex-col">
            <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900 dark:text-white">
              {testimonial.name}
            </cite>
            <span className="text-sm leading-5 tracking-tight text-neutral-500 mt-0.5">
              {testimonial.role}
            </span>
          </div>
        </footer>
      </blockquote>
    </li>
  );

  const MarqueeColumn = ({ items, duration }: { items: typeof testimonials; duration: string }) => (
    <div className="flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .marquee-${duration} {
          animation: scrollUp linear infinite;
          animation-duration: ${duration}s;
        }
      `}</style>
      <ul className={`marquee-${duration} flex flex-col gap-6 list-none m-0 p-0`}>
        {items.map((t, idx) => (
          <TestimonialCard key={idx} testimonial={t} />
        ))}
        {items.map((t, idx) => (
          <TestimonialCard key={`dup-${idx}`} testimonial={t} />
        ))}
      </ul>
    </div>
  );

  return (
    <section className={`relative overflow-hidden ${isDark ? 'dark' : ''}`}>
      <div className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300 min-h-screen">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
            <div className="border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center bg-gradient-to-b from-[#1a1a1a] to-[#0D47A1] bg-clip-text text-transparent dark:from-white dark:to-[#42A5F5]">
              What teams on Zerotone say
            </h2>
            <p className="text-center mt-5 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-sm">
              Real feedback from the teams running the systems we built for them.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-10 max-h-[740px] overflow-hidden">
            <div className="hidden lg:flex">
              <MarqueeColumn items={testimonials.slice(0, 3)} duration="15" />
            </div>
            <div className="hidden md:flex">
              <MarqueeColumn items={testimonials.slice(3, 6)} duration="19" />
            </div>
            <div>
              <MarqueeColumn items={testimonials.slice(6, 9)} duration="17" />
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:scale-110 transition-all active:scale-95"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
