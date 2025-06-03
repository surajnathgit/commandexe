import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Link,
  Container,
  Stack,
  useTheme,
  alpha
} from '@mui/material';
import {
  Email as EmailIcon,
  AccessTime as AccessTimeIcon,
  FiberManualRecord as FiberManualRecordIcon,
  Send as SendIcon
} from '@mui/icons-material';

const ContactPage = () => {
  const theme = useTheme();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif',
        background: `
          radial-gradient(ellipse at 20% 50%, ${alpha(theme.palette.primary.light, 0.15)} 0%, transparent 50%),
          linear-gradient(to bottom, ${theme.palette.grey[50]} 0%, ${theme.palette.grey[100]} 100%)
        `,
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, ${alpha(theme.palette.grey[300], 0.3)} 1px, transparent 1px),
            linear-gradient(to bottom, ${alpha(theme.palette.grey[300], 0.3)} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 600, textAlign: 'center' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, maxWidth: 'md', textAlign: 'center' }}>
            We&apos;d love to hear from you! Fill out the form below or reach out directly via email.
          </Typography>
        </Stack>

        <Grid container spacing={4} justifyContent="center">
          {/* Left Column */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {/* Email Info */}
              <Paper elevation={1} sx={{ p: 3 }}>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ color: theme.palette.primary.main }}>
                    <EmailIcon fontSize="small" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Email Us
                    </Typography>
                  </Stack>
                  <Link
                    href="mailto:Commandexe@fincoopers.in"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 500,
                      wordBreak: 'break-word',
                      '&:hover': { color: theme.palette.primary.main }
                    }}
                  >
                    Commandexe@fincoopers.in
                  </Link>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Our team is ready to assist you via email
                  </Typography>
                </Stack>
              </Paper>

              {/* Response Time */}
              <Paper elevation={1} sx={{ p: 3 }}>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ color: theme.palette.primary.main }}>
                    <AccessTimeIcon fontSize="small" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Response Time
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Within 24 hours
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                     We&apos;ll get back to you promptly with the information you need.
                  </Typography>
                </Stack>
              </Paper>

              {/* Why Contact Us */}
              <Paper elevation={1} sx={{ p: 3, bgcolor: alpha(theme.palette.primary.dark, 0.1) }}>
                <Stack spacing={2}>
                  <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                    Why Contact Us?
                  </Typography>
                  <List dense sx={{ p: 0 }}>
                    {[
                      'Get personalized solutions for your document needs',
                      'Learn about our AI-powered document processing',
                      'Request a demo of our platform'
                    ].map((item, idx) => (
                      <ListItem key={idx} sx={{ p: 0, alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <FiberManualRecordIcon
                            sx={{ fontSize: '0.5rem', mt: '6px', color: theme.palette.primary.main }}
                          />
                        </ListItemIcon>
                        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          {/* Right Column (Form) */}
          <Grid item xs={12} md={7}>
            <Paper elevation={1}>
              <Box
                sx={{
                  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  p: 3,
                  color: 'white'
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  We&apos;re here to help with any questions you might have


                </Typography>
              </Box>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email address"
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
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
                  placeholder="How can we help you?"
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    color: 'white',
                    py: 1.5,
                    '&:hover': {
                      background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`
                    },
                    boxShadow: `0 4px 6px ${alpha(theme.palette.primary.main, 0.2)}`,
                    transition: 'all 0.3s ease',
                    '&:active': {
                      transform: 'translateY(1px)'
                    }
                  }}
                >
                  Send Message
                </Button>

                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
By submitting this form, you agree to our&nbsp;

                  <Link
                    href="#"
                    sx={{
                      color: theme.palette.primary.main,
                      textDecoration: 'underline',
                      '&:hover': { color: theme.palette.primary.dark }
                    }}
                  >
                    Privacy Policy
                  </Link>
                  .
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Chat Button */}
      <Button
        aria-label="Help chat button"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          bgcolor: theme.palette.primary.main,
          color: 'white',
          borderRadius: '50%',
          minWidth: 56,
          width: 56,
          height: 56,
          boxShadow: 3,
          '&:hover': {
            bgcolor: theme.palette.primary.dark,
            transform: 'scale(1.05)'
          },
          transition: 'all 0.2s ease'
        }}
      >
        <Box
          component="img"
          src="https://storage.googleapis.com/a1aa/image/c7088a1d-f964-49d9-ea08-142e227063a8.jpg"
          alt="Chat bubble icon"
          sx={{ width: 24, height: 24 }}
        />
      </Button>
    </Box>
  );
};

export default ContactPage;
