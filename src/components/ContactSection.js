import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import { toast } from 'react-toastify';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const ContactSection = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
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
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #F8FAFF 0%, #F0F4FF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
              textAlign: 'center',
              color: '#3A86FF',
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              fontWeight: 400,
              textAlign: 'center',
              mb: 6,
            }}
          >
            We’d love to hear from you! Fill out the form below or reach out directly via email.
          </Typography>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 4,
              borderRadius: 2,
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                textAlign: 'left',
              }}
            >
              Send Us a Message
            </Typography>

            <TextField
              fullWidth
              label="Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email *"
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
              label="Subject *"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message *"
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
                borderRadius: 50,
                fontWeight: 600,
              }}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </Button>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 3, textAlign: 'center' }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                Or email us directly at{' '}
                <a href="mailto:fintech@fincoopers.in" style={{ color: theme.palette.primary.main }}>
                  fintech@fincoopers.in
                </a>
              </Box>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1, textAlign: 'center' }}
            >
              We’ll get back to you within 24 hours with the information you need.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection;