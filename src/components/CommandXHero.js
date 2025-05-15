import React from 'react';
import { Box, Button, Container, Typography, Grid, Chip, Avatar, Card, CardContent } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GavelIcon from '@mui/icons-material/Gavel';
import BuildIcon from '@mui/icons-material/Build';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CommandXHero = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    rest: { 
      scale: 1,
      y: 0,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: { 
      scale: 1.03, 
      y: -8,
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const buttonHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const keyFeatures = [
    { text: 'AI-Powered Workflow', color: '#4caf50' },
    { text: '99.9% Accuracy', color: '#3A86FF' },
    { text: 'Secure & Compliant', color: '#8A2BE2' },
  ];

  const modules = [
    {
      icon: <AssignmentIcon fontSize="medium" style={{ color: '#3A86FF' }} />,
      title: 'RCU Agency Module',
      description: 'Streamline field verifications with real-time tracking, geo-tagged evidence, and AI-driven risk scoring.',
      features: [
        'Tele-verification with voice recording',
        'Real-time field agent tracking',
        'Auto-report generation',
        'Risk score AI engine',
      ],
    },
    {
      icon: <GavelIcon fontSize="medium" style={{ color: '#3A86FF' }} />,
      title: 'Legal Agency Module',
      description: 'Automate document validation, legal opinions, and advocate assignments with bank-compliant reports.',
      features: [
        'Document upload & validation',
        'AI-generated legal opinions',
        'Advocate assignment chains',
        'Bank-compliant report output',
      ],
    },
    {
      icon: <BuildIcon fontSize="medium" style={{ color: '#3A86FF' }} />,
      title: 'Technical Agency Module',
      description: 'Manage property inspections, valuations, and progress tracking with automated PDF reports.',
      features: [
        'Property visit logs with GPS',
        'Photo uploads & valuation inputs',
        'Auto-calculation of market value',
        'PDF report generation',
      ],
    },
  ];

  return (
    <Box
      component="section"
      className="fade-in"
      sx={{
        position: 'relative',
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #F8FAFF 0%, #F0F4FF 100%)',
      }}
    >
      {/* Animated Background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: 250,
            height: 250,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(58, 134, 255, 0.08) 0%, rgba(58, 134, 255, 0.01) 70%)',
            zIndex: 0,
          }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.08) 0%, rgba(138, 43, 226, 0.01) 70%)',
            zIndex: 0,
          }}
        />
      </motion.div>

      {/* Floating animated shapes */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '15%',
          width: 100,
          height: 100,
          background: 'rgba(58, 134, 255, 0.1)',
          borderRadius: '30%',
          zIndex: 0,
          transform: 'rotate(-15deg)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ 
          duration: 2.5, 
          delay: 0.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: 80,
          height: 80,
          background: 'rgba(138, 43, 226, 0.1)',
          borderRadius: '20%',
          zIndex: 0,
          transform: 'rotate(10deg)',
        }}
      />

      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} lg={8} textAlign="center">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <Chip
                label="AI-Driven Operations Suite"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  bgcolor: 'rgba(138, 43, 226, 0.1)',
                  color: '#8A2BE2',
                  display: 'table',
                  mx: 'auto',
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 2,
                  fontSize: '0.85rem',
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 2,
                    background: 'linear-gradient(90deg, #3A86FF, #00CFFD)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mx: 'auto',
                  }}
                >
                  CommandX: Streamline Your Agency Operations
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#4E5D78',
                    maxWidth: 650,
                    mx: 'auto',
                    mb: 4,
                    fontWeight: 400,
                    fontSize: '1.1rem',
                  }}
                >
                  Automate RCU, Legal, and Technical workflows for NBFCs and banks with a single, powerful AI-driven platform.
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'center',
                    mb: 4,
                  }}
                >
                  <motion.div
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      onMouseEnter={() => setHoveredButton('demo')}
                      onMouseLeave={() => setHoveredButton(null)}
                      sx={{
                        py: 1.25,
                        px: 3,
                        background: 'linear-gradient(90deg, #3A86FF, #00CFFD)',
                        borderRadius: 2,
                        fontWeight: 600,
                        boxShadow: '0 4px 15px rgba(58, 134, 255, 0.25)',
                      }}
                    >
                      Book a Demo
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      variant="outlined"
                      startIcon={<PlayCircleFilledIcon />}
                      onMouseEnter={() => setHoveredButton('pricing')}
                      onMouseLeave={() => setHoveredButton(null)}
                      sx={{
                        py: 1.25,
                        px: 3,
                        borderWidth: 2,
                        borderRadius: 2,
                        fontWeight: 600,
                        borderColor: '#3A86FF',
                        color: '#3A86FF',
                        '&:hover': {
                          borderWidth: 2,
                          bgcolor: 'rgba(58, 134, 255, 0.08)',
                        },
                      }}
                    >
                      View Pricing
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      variant="outlined"
                      onMouseEnter={() => setHoveredButton('contact')}
                      onMouseLeave={() => setHoveredButton(null)}
                      sx={{
                        py: 1.25,
                        px: 3,
                        borderWidth: 2,
                        borderRadius: 2,
                        fontWeight: 600,
                        borderColor: '#3A86FF',
                        color: '#3A86FF',
                        '&:hover': {
                          borderWidth: 2,
                          bgcolor: 'rgba(58, 134, 255, 0.08)',
                        },
                      }}
                    >
                      Contact Sales
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 2.5,
                  }}
                >
                  {keyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Avatar sx={{ bgcolor: `${feature.color}15`, width: 32, height: 32, mr: 1 }}>
                          <CheckCircleOutlineIcon sx={{ color: feature.color, fontSize: '1.2rem' }} />
                        </Avatar>
                        <Typography variant="body2" fontWeight={500}>
                          {feature.text}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>

        {/* Product Cards Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <Box sx={{ mt: 8 }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 700, color: '#14213D', mb: 2 }}
              >
                Core Modules
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: '#4E5D78', mb: 4, maxWidth: 650, mx: 'auto' }}
              >
                Discover the power of RCU, Legal, and Technical modules, all integrated into one AI-driven platform.
              </Typography>
            </motion.div>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 4 }}>
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  style={{ flex: 1 }}
                  whileHover="hover"
                  initial="rest"
                >
                  <motion.div variants={cardHover}>
                    <Card 
                      sx={{ 
                        borderRadius: 3,
                        height: '100%',
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <motion.div
                            whileHover={{ 
                              rotate: 5, 
                              scale: 1.1,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <Box 
                              sx={{ 
                                width: 40, 
                                height: 40, 
                                borderRadius: 2, 
                                bgcolor: 'rgba(58, 134, 255, 0.1)', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                mr: 2 
                              }}
                            >
                              {module.icon}
                            </Box>
                          </motion.div>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {module.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#4E5D78', mb: 2 }}>
                          {module.description}
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                          {module.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 * i }}
                              viewport={{ once: true }}
                            >
                              <Typography component="li" variant="body2" sx={{ color: '#4E5D78', mb: 0.5 }}>
                                {feature}
                              </Typography>
                            </motion.div>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Auto Invoicing Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Box sx={{ mt: 6, py: 5, bgcolor: 'rgba(58, 134, 255, 0.03)', borderRadius: 3 }}>
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 700, color: '#14213D', mb: 2 }}
              >
                Auto Invoicing System
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: '#4E5D78', mb: 3, maxWidth: 650, mx: 'auto' }}
              >
                Say goodbye to billing delays with our integrated invoicing system, designed for efficiency and compliance.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Card sx={{ 
                      borderRadius: 3, 
                      height: '100%'
                    }}>
                      <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                        <motion.div
                          whileHover={{ 
                            rotate: 5, 
                            scale: 1.1,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Box 
                            sx={{ 
                              width: 36, 
                              height: 36, 
                              borderRadius: 2, 
                              bgcolor: 'rgba(58, 134, 255, 0.1)', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              mr: 2 
                            }}
                          >
                            <ReceiptIcon sx={{ fontSize: 20, color: '#3A86FF' }} />
                          </Box>
                        </motion.div>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                            Flexible Invoicing
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#4E5D78' }}>
                            Generate invoices by file, batch, or milestone in your preferred format.
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Card sx={{ 
                      borderRadius: 3, 
                      height: '100%'
                    }}>
                      <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                        <motion.div
                          whileHover={{ 
                            rotate: 5, 
                            scale: 1.1,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Box 
                            sx={{ 
                              width: 36, 
                              height: 36, 
                              borderRadius: 2, 
                              bgcolor: 'rgba(58, 134, 255, 0.1)', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              mr: 2 
                            }}
                          >
                            <ReceiptIcon sx={{ fontSize: 20, color: '#3A86FF' }} />
                          </Box>
                        </motion.div>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                            GST-Ready & Auditable
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#4E5D78' }}>
                            Export invoices in Excel or PDF, track dues, and ensure audit compliance.
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </motion.div>

        {/* Why CommandX Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Box sx={{ mt: 6, py: 5 }}>
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 700, color: '#14213D', mb: 2 }}
              >
                Why Choose CommandX?
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: '#4E5D78', mb: 4, maxWidth: 650, mx: 'auto' }}
              >
                Built by experts, trusted by NBFCs, and designed for scalability.
              </Typography>
              <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                <Grid container spacing={3}>
                  {[
                    'Expert-built for RCU, Legal, and Technical workflows',
                    'Trusted by NBFC and Bank vendors across India',
                    'Dynamic, secure, and scalable platform',
                    'Real support, not just a software license',
                  ].map((reason, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Box 
                              sx={{ 
                                width: 28, 
                                height: 28, 
                                borderRadius: 2, 
                                bgcolor: 'rgba(58, 134, 255, 0.1)', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                mr: 1.5 
                              }}
                            >
                              <CheckCircleOutlineIcon sx={{ fontSize: 16, color: '#3A86FF' }} />
                            </Box>
                          </motion.div>
                          <Typography variant="body2" sx={{ color: '#14213D' }}>
                            {reason}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CommandXHero;