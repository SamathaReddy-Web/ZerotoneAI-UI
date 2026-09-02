import { Hero } from '@/components/marketing/ui/hero';
import { HowItWorks } from '@/components/marketing/ui/how-it-works';
import { Capabilities } from '@/components/marketing/ui/capabilities';
import { BuiltSection } from '@/components/marketing/ui/built-section';
import { Founder } from '@/components/marketing/ui/founder';
import { FAQ } from '@/components/marketing/ui/faq';
import { ContactForm } from '@/components/marketing/ui/contact-form';
import { Nav, Footer } from '@/components/layout';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      {/* REMOVED: Pilot Projects Carousel */}
      {/* NEW: Built Section with Scroll Animation Portal, moved right after Hero */}
      <BuiltSection />
      <HowItWorks />
      <Capabilities />
      <Founder />
      <FAQ />
      {/* AIProcessDesign section pending spec */}
      <ContactForm />
      <Footer />
    </div>
  );
}
