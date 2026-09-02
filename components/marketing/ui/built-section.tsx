'use client';

import { ChevronDown } from 'lucide-react';
import { ContainerScroll } from '@/components/marketing/ui/container-scroll-animation';
import { ConstructionPortalV2 } from '@/components/marketing/ui/construction-portal-v2';

export function BuiltSection() {
  return (
    <section id="built" className="bg-white">
      <ContainerScroll
        kicker={
          <div className="flex flex-col items-center gap-1 text-gray-400">
            <p className="text-sm">Software we built for teams like yours</p>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        }
      >
        <div className="w-full h-full bg-white">
          <ConstructionPortalV2 />
        </div>
      </ContainerScroll>
    </section>
  );
}
