import React from 'react';
import FeaturedSection from '../components/home-page/FeaturedSection';
import IntroductionSection from '../components/home-page/IntroductionSection';
import WhyHireMeSection from '../components/home-page/WhyHireMeSection';

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <FeaturedSection />
      <WhyHireMeSection />
    </>
  );
}
