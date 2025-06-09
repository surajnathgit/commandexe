import React, { useState } from 'react';
import { Box, Container, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportIcon from '@mui/icons-material/Support';
import PricingHeader from './PricingSection/PricingHeader';
import PricingToggle from './PricingSection/PricingToggle';
import PricingCard from './PricingSection/PricingCard';
import AddOnsSection from './PricingSection/AddOnsSection';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};


const pricingPlans = [
  {
    name: "Basic",
    price: 4999,
    annualPrice: 49990,
    reports: 100,
    adminUsers: 1,
    backofficeUsers: 5,
    fieldOfficers: 10,
    lenders: 3,
    storage: "10 GB",
    features: [
      "Basic reporting",
      "Email support",
      "Standard SLA",
      "Basic analytics",
      "Single location",
      "Manual invoicing",
    ],
    isPopular: false,
  },
  {
    name: "Standard",
    price: 7999,
    annualPrice: 79990,
    reports: 250,
    adminUsers: 2,
    backofficeUsers: 10,
    fieldOfficers: 25,
    lenders: 5,
    storage: "25 GB",
    features: [
      "AI-powered alerts",
      "Task automation",
      "Priority support",
      "Advanced analytics",
      "Multi-location support",
      "Auto invoicing",
    ],
    isPopular: true,
  },
  {
    name: "Professional",
    price: 9999,
    annualPrice: 99990,
    reports: 500,
    adminUsers: 3,
    backofficeUsers: 20,
    fieldOfficers: 50,
    lenders: 10,
    storage: "50 GB",
    features: [
      "Smart reporting",
      "Custom workflows",
      "Dedicated support",
      "Real-time analytics",
      "Unlimited locations",
      "Advanced invoicing",
    ],
    isPopular: false,
  },
  {
    name: "Enterprise",
    price: 14999,
    annualPrice: 149990,
    reports: "1000+",
    adminUsers: 5,
    backofficeUsers: 40,
    fieldOfficers: 100,
    lenders: "Unlimited",
    storage: "100 GB",
    features: [
      "AI-driven insights",
      "Custom integrations",
      "24/7 support",
      "Predictive analytics",
      "Global deployment",
      "Enterprise invoicing",
    ],
    isPopular: false,
  },
];

const addOns = [
  {
    name: "Extra Reports",
    price: "₹15 / report",
    description: "Additional RCU, Legal, or Technical reports.",
    icon: <StarIcon sx={{ color: "#3A86FF", fontSize: 24 }} />,
  },
  {
    name: "Admin User",
    price: "₹499 / user / month",
    description: "Additional admin access with full control.",
    icon: <SecurityIcon sx={{ color: "#3A86FF", fontSize: 24 }} />,
  },
  {
    name: "Backoffice User",
    price: "₹299 / user / month",
    description: "Additional backoffice access for operations.",
    icon: <SpeedIcon sx={{ color: "#3A86FF", fontSize: 24 }} />,
  },
  {
    name: "Field Officer",
    price: "₹199 / user / month",
    description: "Additional field officer access with mobile app.",
    icon: <SupportIcon sx={{ color: "#3A86FF", fontSize: 24 }} />,
  },
  {
    name: "Lender Onboarding",
    price: "₹999 / lender / month",
    description: "Additional lender integration with API access.",
    icon: <StarIcon sx={{ color: "#3A86FF", fontSize: 24 }} />,
  },
  {
    name: "Storage",
    price: "₹499 / 10 GB / month",
    description: "Extra storage capacity for documents and reports.",
    icon: <SecurityIcon sx={{ color: "#3A86FF", fontSize: 24 }} />,
  },
];

 const PricingSection = () => {
  const theme = useTheme();
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
        background: `
          radial-gradient(ellipse at 80% 50%, ${alpha(theme.palette.primary.light, 0.15)} 0%, transparent 50%),
          linear-gradient(to bottom, ${theme.palette.grey[50]} 0%, ${theme.palette.grey[100]} 100%)
        `,
        position: "relative",
        overflow: "hidden",
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <PricingHeader />
        <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              alignItems: "stretch",
              flexWrap: { xs: "wrap", md: "nowrap" },
              px: { xs: 1, md: 2 },
            }}
          >
            {pricingPlans.map((plan, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 0",
                  minWidth: { xs: "100%", md: "220px" },
                  maxWidth: { xs: "100%", md: "260px" },
                  my: { xs: 1, md: 0 },
                }}
              >
                <PricingCard plan={plan} isAnnual={isAnnual} />
              </Box>
            ))}
          </Box>
        </motion.div>

        <AddOnsSection addOns={addOns} />
      </Container>
    </Box>
  );
};

export default PricingSection;