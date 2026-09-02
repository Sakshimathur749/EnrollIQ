'use client';
import ServicesHero from './ServicesHero';
import ServicesTabs from './ServicesTabs';
import { FaqSection } from '@/components/Home/FaqSection';

export default function MainServices() {
  return (
    <>
      <ServicesHero />
      <ServicesTabs />
      <FaqSection />
    </>
  );
}
