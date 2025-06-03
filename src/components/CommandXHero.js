import React, { lazy, Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

const HeroSection = lazy(() => import('./CommandX/HeroSection'));
const CoreModules = lazy(() => import('./CommandX/CoreModules'));
const AutoInvoicing = lazy(() => import('./CommandX/AutoInvoicing'));
const WhyChooseUs = lazy(() => import('./CommandX/WhyChooseUs'));

const CommandXHero = () => {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>
      <Suspense fallback={<CircularProgress />}>
        <HeroSection />
        <CoreModules />
        <AutoInvoicing />
        <WhyChooseUs />
      </Suspense>
    </Box>
  );
};

export default CommandXHero;