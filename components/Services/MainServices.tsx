'use client';
import { useState } from 'react';
import { EduFooter } from '../EduFooter';
import { EduNavbar } from '../EduNavbar';
import ServicesHero from './ServicesHero';
import ServicesTabs from './ServicesTabs';
import { FaqSection } from '@/components/Home/FaqSection';
import { CtaBanner } from '../Home/CtaBanner';

export default function MainServices() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="w-full overflow-x-clip">
      <EduNavbar />
      <ServicesHero />
      <ServicesTabs />
      <FaqSection />
      <CtaBanner onOpenDemo={() => setIsDemoModalOpen(true)} />
      <EduFooter />
    </div>
  );
}
