'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

// A genuinely `position: sticky` viewport pins the portal card center-screen
// from the moment this section is reached, so it's already peeking in
// alongside whatever comes right before it (no title block in the way) while
// it rises, un-rotates, and grows. `kicker` is a short hint that sits tight
// against the card's top edge in that same pinned frame (visible from the
// first peek onward). `titleComponent` is the fuller caption that lives
// entirely outside the pinned track as a normal sibling, so it can only
// scroll into view once the pin has actually released — `whileInView` fades
// it in right at that point.
export const ContainerScroll = ({
  kicker,
  titleComponent,
  children,
}: {
  kicker?: React.ReactNode;
  titleComponent?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const pinRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ['start start', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <div className="relative w-full">
      {/* Pinned track: the sticky viewport lives inside this tall wrapper,
          which sets how long the card dwells center-screen before releasing. */}
      <div ref={pinRef} className="relative w-full h-[300vh]">
        <div
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center gap-3 p-4 md:p-10"
          style={{ perspective: '1000px' }}
        >
          {kicker && <div className="text-center">{kicker}</div>}

          <motion.div
            style={{
              rotateX,
              scale,
              boxShadow:
                '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
            }}
            className="w-full max-w-[1400px] h-[78vh] border-4 md:border-[6px] border-[#4b5563] rounded-[40px] bg-[#1f2937] p-2 md:p-5 overflow-hidden"
          >
            <div className="w-full h-full bg-white rounded-[25px] overflow-hidden flex">
              {children}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Caption: a plain sibling below the pinned track, so it only scrolls
          into view once the card has released, then fades/slides in. */}
      {titleComponent && (
        <div className="w-full flex items-center justify-center px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl mx-auto text-center"
          >
            {titleComponent}
          </motion.div>
        </div>
      )}
    </div>
  );
};
