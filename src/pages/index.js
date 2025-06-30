import React from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import ImprovedHeader from '../components/ImprovedHeader';
import Footer from '../components/Footer';
import CommandXHero from '../components/CommandXHero';

// Animation variants for the header
const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Animation variants for the hero section
const heroVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } },
};

// Animation variants for the footer
const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4, ease: 'easeIn' } },
};

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