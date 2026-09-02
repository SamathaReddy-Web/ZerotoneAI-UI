'use client';

interface CapabilityCard {
  title: string;
  description: string;
  visual: 'number' | 'question' | 'graph' | 'shield' | 'user';
  content?: string;
}

interface CapabilitiesProps {
  sectionTitle?: string;
  sectionDescription?: string;
  cards?: CapabilityCard[];
}

export function Capabilities({
  sectionTitle = 'Our Approach',
  sectionDescription = 'We understand problems deeply, then build solutions that actually work.',
  cards = [
    {
      title: 'Understand First',
      description: 'We spend time with your team to see exactly how work happens right now.',
      visual: 'number',
      content: '100%',
    },
    {
      title: 'Question Everything',
      description: 'We ask if that step needs a person at all. Challenge every assumption.',
      visual: 'question',
    },
    {
      title: 'Fix What Actually Needs Fixing',
      description: 'Sometimes it’s a process change or a tool you already own. When it is a build, we design it and stay to run it.',
      visual: 'graph',
    },
    {
      title: 'Fast & Simple',
      description: 'Everything runs quick. No bloated systems. Just what you need.',
      visual: 'shield',
    },
    {
      title: 'AI When It Matters',
      description: 'We use AI only where it makes work easier. Not everywhere.',
      visual: 'user',
    },
  ],
}: CapabilitiesProps) {

  const renderVisual = (visual: string, index: number) => {
    const gradientId = `cap-gradient-${index}`;
    // Shared black-to-blue gradient def, reused inline by every SVG visual below.
    const gradientDef = (
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0D47A1" />
        </linearGradient>
      </defs>
    );

    switch (visual) {
      case 'number':
        return (
          <div className="mb-8">
            <span className="text-7xl font-black bg-gradient-to-b from-[#1a1a1a] to-[#0D47A1] bg-clip-text text-transparent">
              100%
            </span>
          </div>
        );

      case 'question':
        return (
          <div className="mb-8">
            <span className="text-7xl font-black bg-gradient-to-b from-[#1a1a1a] to-[#0D47A1] bg-clip-text text-transparent">
              ?
            </span>
          </div>
        );

      case 'graph':
        return (
          <svg className="w-full h-16 mx-auto mb-8" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
            {gradientDef}
            <polyline points="10,50 40,35 70,40 100,20 130,25 160,10 190,5" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      case 'shield':
        return (
          <div className="w-20 h-20 mx-auto mb-8">
            <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              {gradientDef}
              <path d="M12 1L3 5v7c0 5.55 4.45 10.74 9 11.95 4.55-1.21 9-6.4 9-11.95V5l-9-4z" stroke={`url(#${gradientId})`} fill="none" />
              <path d="M8.5 12l2.5 2.5 5-5" stroke={`url(#${gradientId})`} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        );

      case 'user':
        return (
          <div className="w-20 h-20 mx-auto mb-8">
            <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              {gradientDef}
              <circle cx="12" cy="8" r="4" stroke={`url(#${gradientId})`} />
              <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={`url(#${gradientId})`} fill="none" strokeLinecap="round" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  const topCards = cards.slice(0, 3);
  const bottomCards = cards.slice(3);

  return (
    <section id="approach" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-b from-[#1a1a1a] to-[#0D47A1] bg-clip-text text-transparent mb-6">
            {sectionTitle}
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topCards.map((card, index) => (
            <div key={index} className="p-12 border-2 border-neutral-200 rounded-2xl bg-white text-center">
              {renderVisual(card.visual, index)}
              <h3 className="text-2xl font-black text-black mb-3">
                {card.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomCards.map((card, index) => (
            <div key={index} className="p-12 border-2 border-neutral-200 rounded-2xl bg-white text-center">
              {renderVisual(card.visual, index + topCards.length)}
              <h3 className="text-2xl font-black text-black mb-3">
                {card.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
