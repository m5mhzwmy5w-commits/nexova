'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Demos from '@/components/sections/Demos';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import Automations from '@/components/sections/Automations';
import SeoSection from '@/components/sections/SeoSection';
import FinalCta from '@/components/sections/FinalCta';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Demos />
      <WhyUs />
      <Process />
      <Automations />
      <SeoSection />
      <FinalCta />
      <Contact />
    </>
  );
}
