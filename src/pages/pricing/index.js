import React from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import ImprovedHeader from '../../components/ImprovedHeader';
import EnhancedFooter from '../../components/Footer';
import PricingSection from '../../components/PricingSection';

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Pricing | CommandX</title>
        <meta
          name="description"
          content="Explore CommandX's flexible pricing plans for RCU, Legal, and Technical agencies, with add-ons for scalability."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ImprovedHeader />
        <PricingSection />
        <EnhancedFooter />
      </Box>
    </>
  );
};

export default PricingPage;