'use client';

import React from 'react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Diagnose',
      description: 'We sit with your team for two weeks and watch how work actually happens. Fixed fee, written findings.',
      bgColor: '#E3F2FD',
      borderColor: '#BBDEFB',
      numberColor: '#0D47A1',
    },
    {
      number: '02',
      title: 'Prescribe',
      description: 'We tell you which of six things will fix it — process, ownership, workflow, existing tools, software, or AI. Often it isn’t a build.',
      bgColor: '#E3F2FD',
      borderColor: '#BBDEFB',
      numberColor: '#0D47A1',
    },
    {
      number: '03',
      title: 'Implement, and stay',
      description: 'We do the work, not just the deck — and stay on to run it if it’s a system.',
      bgColor: '#E3F2FD',
      borderColor: '#BBDEFB',
      numberColor: '#0D47A1',
    },
  ];

  return (
    <section
      id="how-we-work"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <style>{`
        @keyframes dashMove {
          to {
            background-position: 28px 0;
          }
        }
        .animated-dash {
          height: 2px;
          background-image: repeating-linear-gradient(
            to right,
            #0d47a1 0,
            #0d47a1 10px,
            transparent 10px,
            transparent 18px
          );
          background-size: 28px 2px;
          animation: dashMove 1s linear infinite;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-black mb-4">
            How we work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-[#1a1a1a] to-[#0D47A1] bg-clip-text text-transparent">
            Understand the problem first. Then redesign.
          </h2>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="card-hover bg-white rounded-3xl p-2 w-full max-w-xs shadow-lg border border-gray-100">
                  <div
                    className="rounded-2xl p-6 min-h-48 flex flex-col"
                    style={{
                      backgroundColor: step.bgColor,
                      borderColor: step.borderColor,
                      borderWidth: '1px',
                    }}
                  >
                    <div
                      className="text-5xl font-bold mb-2"
                      style={{ color: step.numberColor }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <>
                  {/* Connector: horizontal on desktop, vertical on mobile */}
                  <div className="hidden md:block animated-dash flex-shrink-0 w-16 lg:w-20" />
                  <div className="md:hidden w-0.5 h-10 mx-auto bg-[repeating-linear-gradient(to_bottom,#0d47a1_0,#0d47a1_10px,transparent_10px,transparent_18px)]" />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
