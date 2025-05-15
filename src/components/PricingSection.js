import React from 'react';
import { Box, Container, Typography, Grid, Card, Button, Chip, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const pricingPlans = [
  {
    name: 'Basic',
    price: 4999,
    reports: 100,
    adminUsers: 1,
    backofficeUsers: 5,
    fieldOfficers: 10,
    lenders: 3,
    storage: '10 GB',
    features: ['Basic reporting', 'Email support'],
    isPopular: false,
  },
  {
    name: 'Standard',
    price: 7999,
    reports: 250,
    adminUsers: 2,
    backofficeUsers: 10,
    fieldOfficers: 25,
    lenders: 5,
    storage: '25 GB',
    features: ['AI alerts', 'Task automation', 'Priority support'],
    isPopular: true,
  },
  {
    name: 'Professional',
    price: 9999,
    reports: 500,
    adminUsers: 3,
    backofficeUsers: 20,
    fieldOfficers: 50,
    lenders: 10,
    storage: '50 GB',
    features: ['Auto invoicing', 'Smart reports', 'Dedicated support'],
    isPopular: false,
  },
  {
    name: 'Premium',
    price: 14999,
    reports: '1000+',
    adminUsers: 5,
    backofficeUsers: 40,
    fieldOfficers: 100,
    lenders: 'Unlimited',
    storage: '100 GB',
    features: ['Advanced AI features', 'Analytics dashboard', 'SLA triggers', '24/7 support'],
    isPopular: false,
  },
];

const addOns = [
  { name: 'Extra Reports', price: '₹15 / report', description: 'Additional RCU, Legal, or Technical reports.' },
  { name: 'Admin User', price: '₹499 / user / month', description: 'Additional admin access.' },
  { name: 'Backoffice User', price: '₹299 / user / month', description: 'Additional backoffice access.' },
  { name: 'Field Officer', price: '₹199 / user / month', description: 'Additional field officer access.' },
  { name: 'Lender Onboarding', price: '₹999 / lender / month', description: 'Additional lender integration.' },
  { name: 'Storage', price: '₹499 / 10 GB / month', description: 'Extra storage capacity.' },
];

const PricingSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 12 },
        background: 'linear-gradient(135deg, #F8FAFF 0%, #F0F4FF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textAlign: 'center',
              background: 'linear-gradient(90deg, #3A86FF, #00CFFD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Flexible Pricing Plans
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              fontWeight: 400,
              textAlign: 'center',
              mb: 8,
            }}
          >
            Choose a plan that fits your agency's scale, with add-ons for extra flexibility.
          </Typography>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Grid container spacing={3}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      p: 3,
                      position: 'relative',
                      overflow: 'visible',
                      boxShadow: plan.isPopular
                        ? `0px 20px 40px ${alpha(theme.palette.primary.main, 0.2)}`
                        : '0px 10px 30px rgba(0, 0, 0, 0.08)',
                      border: plan.isPopular ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                      borderColor: plan.isPopular ? theme.palette.primary.main : alpha('#fff', 0.2),
                      transform: plan.isPopular ? 'scale(1.05)' : 'none',
                      zIndex: plan.isPopular ? 2 : 1,
                    }}
                  >
                    {plan.isPopular && (
                      <Chip
                        label="Most Popular"
                        color="primary"
                        sx={{
                          position: 'absolute',
                          top: -16,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          fontWeight: 600,
                          py: 0.5,
                        }}
                      />
                    )}
                    <Typography variant="h5" fontWeight={700} mb={1}>
                      {plan.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <AccountBalanceWalletIcon sx={{ fontSize: 30, color: theme.palette.primary.main, mr: 1 }} />
                      <Typography variant="h3" fontWeight={800}>
                        ₹{plan.price}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: alpha(theme.palette.background.default, 0.6),
                        borderRadius: 2,
                        mb: 3,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Reports</span>
                        <span>
                          <strong>{plan.reports}</strong>
                        </span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Admin Users</span>
                        <span>
                          <strong>{plan.adminUsers}</strong>
                        </span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Backoffice Users</span>
                        <span>
                          <strong>{plan.backofficeUsers}</strong>
                        </span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Field Officers</span>
                        <span>
                          <strong>{plan.fieldOfficers}</strong>
                        </span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Lenders</span>
                        <span>
                          <strong>{plan.lenders}</strong>
                        </span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Storage</span>
                        <span>
                          <strong>{plan.storage}</strong>
                        </span>
                      </Typography>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {plan.features.map((feature, i) => (
                        <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                          • {feature}
                        </Typography>
                      ))}
                    </Box>
                    <Button
                      variant={plan.isPopular ? 'contained' : 'outlined'}
                      fullWidth
                      component={Link}
                      href="/contact"
                      sx={{
                        mt: 'auto',
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: 2,
                        ...(plan.isPopular && {
                          background: 'linear-gradient(90deg, #3A86FF, #00CFFD)',
                          boxShadow: '0px 8px 16px rgba(58, 134, 255, 0.3)',
                        }),
                      }}
                    >
                      Get Started
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mt: 12,
              mb: 5,
              textAlign: 'center',
            }}
          >
            Add-Ons for Extra Flexibility
          </Typography>
          <Grid container spacing={3}>
            {addOns.map((addOn, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                      textAlign: 'center',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {addOn.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {addOn.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {addOn.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PricingSection;