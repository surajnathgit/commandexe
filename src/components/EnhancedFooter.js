import React from 'react';
import { Box, Container, Typography, Link, Grid, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

const EnhancedFooter = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: 'linear-gradient(180deg, #F8FAFF 0%, #E6EEFF 100%)',
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: 2 }}>
                <Image src="/logo.png" alt="CommandX Logo" width={300} height={40} style={{ height: '40px', width: 'auto' }} />
              </Box>
              <Typography variant="body2" color="text.secondary">
                CommandX is your AI-driven operations suite for RCU, Legal, and Technical agencies.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
                {footerLinks.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <Link href={link.href} color="text.secondary" underline="hover">
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Email: <Link href="mailto:support@commandx.ai">support@commandx.ai</Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: <Link href="tel:+91-123-456-7890">+91-123-456-7890</Link>
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} CommandX. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default EnhancedFooter;