import React from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import ImprovedHeader from '../components/ImprovedHeader';
import Footer from '../components/Footer';
import CommandXHero from '../components/CommandXHero';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>CommandX | AI-Driven Operations Suite for Agencies</title>
        <meta
          name="description"
          content="CommandX is an AI-powered platform for RCU, Legal, and Technical agencies, streamlining operations for NBFCs and banks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ImprovedHeader />
        <CommandXHero />
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;