'use client';

import { useEffect, useRef, useState } from 'react';

export function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="relative w-full bg-gradient-to-b from-blue-50 to-white overflow-hidden flex flex-col items-center pt-10 pb-16 px-4"
    >
      {/* Manasa Name - giant text sitting BEHIND the photo. Both the text and
          the photo's overlap are sized off fixed pixel values (not viewport
          height), so the photo reliably occludes the lower part of the name
          no matter how tall the screen is — a min-h-screen + justify-end
          layout let them drift apart on tall viewports. */}
      <h1
        className={`text-center text-[8rem] sm:text-[12.5rem] lg:text-[16rem] font-black bg-gradient-to-b from-[#1a1a1a] to-[#0D47A1] bg-clip-text text-transparent leading-none select-none pointer-events-none z-0 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`}
      >
        Manasa
      </h1>

      {/* Photo - overlaps the bottom portion of the name via a negative
          margin, so it occludes it regardless of section/viewport height. */}
      <img
        src="/marketing/manasa.png"
        alt="Manasa, Founder of Zerotone"
        className="relative z-10 h-[280px] sm:h-[360px] lg:h-[440px] w-auto object-contain drop-shadow-2xl -mt-[70px] sm:-mt-[100px] lg:-mt-[130px]"
      />

      {/* Quote Card */}
      <div className="relative z-20 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-10 max-w-2xl w-full mx-auto -mt-6">
        {/* Quote Mark */}
        <div className="text-5xl text-[#0D47A1] opacity-25 mb-3 leading-none">&ldquo;</div>

        {/* Quote Text */}
        <p className="text-base sm:text-lg font-normal text-gray-900 italic leading-relaxed mb-4 text-left sm:text-center">
          Most people jump straight to building. We jump to understanding.
          That&apos;s where everything changes. I don&apos;t let a single system get built
          until the problem is understood from both the numbers side and the ground
          side. That&apos;s the rule.
        </p>

        {/* Title */}
        <p className="text-xs font-bold uppercase tracking-wider text-[#0D47A1] mt-3">
          Founder, Zerotone
        </p>
      </div>
    </section>
  );
}
