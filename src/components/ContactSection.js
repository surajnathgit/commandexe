import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { toast } from 'react-toastify';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const ContactSection = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

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
            Get in Touch
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
            Ready to transform your agency with CommandX? Contact us to book a demo or discuss your needs.
          </Typography>
        </motion.div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                    mb: 4,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ fontSize: 36, color: theme.palette.primary.main, mr: 2 }} />
                    <Typography variant="h6" fontWeight={600}>
                      Email Support
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    Reach out to our team at{' '}
                    <a href="mailto:support@commandx.ai" style={{ color: theme.palette.primary.main }}>
                      support@commandx.ai
                    </a>
                  </Typography>
                </Box>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ fontSize: 36, color: theme.palette.primary.main, mr: 2 }} />
                    <Typography variant="h6" fontWeight={600}>
                      Phone Support
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    Call us at{' '}
                    <a href="tel:+91-123-456-7890" style={{ color: theme.palette.primary.main }}>
                      +91-123-456-7890
                    </a>
                  </Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'rgba(255, 255, 255, 0.9)',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  sx={{ mb: 3 }}
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={submitting}
                  sx={{
                    py: 1.5,
                    background: 'linear-gradient(90deg, #3A86FF, #00CFFD)',
                    boxShadow: '0px 8px 20px rgba(58, 134, 255, 0.3)',
                    borderRadius: 3,
                    fontWeight: 600,
                  }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;