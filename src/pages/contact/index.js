import React from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import ImprovedHeader from '../../components/ImprovedHeader';
import EnhancedFooter from '../../components/EnhancedFooter';
import ContactSection from '../../components/ContactSection';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact | CommandX</title>
        <meta
          name="description"
          content="Get in touch with CommandX to book a demo or discuss how our AI-driven platform can transform your agency."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ImprovedHeader />
        <ContactSection />
        <EnhancedFooter />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </Box>
    </>
  );
};

export default ContactPage;