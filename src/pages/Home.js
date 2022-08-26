import React from 'react';
import FeaturedSection from '../components/homepage/FeaturedSection';
import IntroductionSection from '../components/homepage/IntroductionSection';
import WhyHireMeSection from '../components/homepage/WhyHireMeSection';

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <FeaturedSection />
      <WhyHireMeSection />
    </>
  );
}
