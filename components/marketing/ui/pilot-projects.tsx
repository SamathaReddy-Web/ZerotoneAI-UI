'use client';

import { useState, useEffect } from 'react';

export function PilotProjects() {
  const [activeCard, setActiveCard] = useState(0);

  const projects = [
    {
      id: 1,
      image: 'data:image/svg+xml;utf8,<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="400" fill="%23000000"/></svg>',
      label: 'LIVE ON PROJECTS',
      title: 'Construction Management',
      subtitle: 'Budgets, POs, schedules scattered across tools',
      description: 'Budgets, purchase orders, change orders, schedules, and field reports, scattered across spreadsheets and disconnected tools.',
      cta: 'Open the platform',
    },
    {
      id: 2,
      image: 'data:image/svg+xml;utf8,<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="400" fill="%23000000"/></svg>',
      label: 'LIVE IN USE',
      title: 'GST Compliance',
      subtitle: 'Returns, reconciliation, deadlines handled by hand',
      description: 'Return filings, input credit reconciliation, and deadline tracking, handled by hand every cycle across multiple entities.',
      cta: 'Ask us about it',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % projects.length);
    }, 7000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCardHover = (index: number) => {
    setActiveCard(index);
  };

  return (
    <section id="pilot" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-black mb-4">
            Pilot projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            <div>
              <span className="text-[#0D47A1] text-5xl">Two problems</span>
              <span className="text-black"> we took on.</span>
            </div>
            <div className="mt-2">
              <span className="text-black">Here is what we</span>{' '}
              <span className="text-[#0D47A1] text-5xl">built.</span>
            </div>
          </h2>
        </div>

        {/* 3D Carousel */}
        <div className="mb-16 [perspective:1200px]">
          <div className="flex items-center justify-center gap-0 h-96 [transform-style:preserve-3d]">
            {projects.map((project, index) => {
              const isCenter = index === activeCard;
              const isRight = (index - activeCard + projects.length) % projects.length === 1;

              return (
                // Hit area: flat, untransformed, sits in normal flex flow so
                // hover/click always land where the mouse actually is.
                <div
                  key={project.id}
                  onClick={() => handleCardHover(index)}
                  onMouseEnter={() => handleCardHover(index)}
                  className={`relative flex-shrink-0 transition-all duration-600 cursor-pointer ${
                    isCenter ? 'w-80 h-96 z-10' : 'w-64 h-80'
                  }`}
                >
                  {/* Visual layer: the 3D rotation/depth effect lives here only */}
                  <div
                    className={`w-full h-full transition-all duration-600 ${
                      isCenter ? 'scale-100' : 'scale-75 opacity-50'
                    }`}
                    style={{
                      transform: isCenter
                        ? 'rotateY(0deg) translateZ(0)'
                        : isRight
                        ? 'rotateY(-35deg) translateZ(-100px)'
                        : 'rotateY(35deg) translateZ(-100px)',
                    }}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 flex flex-col justify-center items-center text-white text-center px-6">
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-sm opacity-95">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Section */}
        <div className="text-center transition-all duration-600 opacity-100">
          <p className="text-xs font-bold uppercase tracking-wider text-[#0D47A1] mb-3">
            {projects[activeCard].label}
          </p>
          <h3 className="text-3xl font-black text-black mb-4">
            {projects[activeCard].title}
          </h3>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            {projects[activeCard].description}
          </p>
          <button className="px-10 py-3 bg-[#0D47A1] text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
            {projects[activeCard].cta}
          </button>
        </div>
      </div>
    </section>
  );
}
