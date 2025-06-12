import React, { lazy, Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
const HeroSection = lazy(() => import('./CommandX/HeroSection'));
const ReportPainPoints = lazy(() => import('./CommandX/ReportPainPoints'));
const FeaturesSection = lazy(() => import('./CommandX/FeaturesSection'));
const WhyChooseUs = lazy(() => import('./CommandX/WhyChooseUs'));
const CallToAction = lazy(() => import('./CommandX/CallToAction')); 
const BenefitsSection = lazy(() => import('./CommandX/BenefitsSection'));

const CommandXHero = () => {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>
      <Suspense fallback={<CircularProgress />}>
        <HeroSection />
        <ReportPainPoints />
        {/* <CoreModules /> */}
        <FeaturesSection />
        <BenefitsSection />
        <WhyChooseUs />
        <CallToAction />
      </Suspense>
    </Box>
  );
};

export default CommandXHero;