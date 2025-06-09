import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  useTheme,
  alpha,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Email,
  Phone,
} from "@mui/icons-material";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: <Facebook />, href: "https://facebook.com/commandx" },
  { icon: <Twitter />, href: "https://twitter.com/commandx" },
  { icon: <LinkedIn />, href: "https://linkedin.com/company/commandx" },
  { icon: <GitHub />, href: "https://github.com/commandx" },
];

const Footer = () => {
  const theme = useTheme();
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: `
          radial-gradient(ellipse at 20% 50%, ${alpha(
            theme.palette.primary.light,
            0.1
          )} 0%, transparent 50%),
          linear-gradient(to bottom, #121212 0%, #1a1a1a 100%)
        `,
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        position: "relative",
        overflow: "hidden",
        color: '#ffffff',
        
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 1, sm: 3, md: 4 }} alignItems="center">
          {/* Logo and description */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                <Image
                  src="/logo.png"
                  alt="CommandX Logo"
                  width={140}
                  height={35}
                  style={{ height: "auto", width: "140px" }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{ mb: 2, lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.7)' }}
              >
                CommandX is your AI-driven operations suite for RCU, Legal, and
                Technical agencies.
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      href={social.href}
                      target="_blank"
                      rel="noopener"
                      size="small"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        "&:hover": {
                          color: "primary.main",
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.1
                          ),
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: 2, color: '#ffffff' }}
              >
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {footerLinks.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <motion.div whileHover={{ x: 3 }}>
                      <Link
                        href={link.href}
                        sx={{
                          fontSize: "0.9rem",
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact and Subscribe */}
          <Grid
            item
            xs={5}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
            
              <Box 
                component="form" 
                onSubmit={handleSubscribe}
                sx={{ 
                  display: 'flex', 
                  gap: 1,
                  mb: 3 
                }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{
                    flexGrow: 1,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                      '& input': {
                        color: '#ffffff',
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{
                    px: 3,
                    whiteSpace: 'nowrap',
                    fontWeight: 600,
                  }}
                >
                  Subscribe
                </Button>
              </Box>

              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: 2, color: '#ffffff' }}
              >
                Contact
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <Email
                  sx={{ mr: 1.5, color: "primary.main", fontSize: "1.1rem" }}
                />
                <Link
                  href="mailto:support@commandx.ai"
                  sx={{
                    fontSize: "0.9rem",
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  Commandexe@fincoopers.in
                </Link>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            my: 3,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${alpha(
              theme.palette.divider,
              0.3
            )}, transparent)`,
          }}
        />

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: "0.85rem", color: 'rgba(255, 255, 255, 0.7)' }}
          >
            © {new Date().getFullYear()} CommandX. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: { xs: 1, sm: 0 } }}>
            <Link
              href="/privacy"
              sx={{
                fontSize: "0.85rem",
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                fontSize: "0.85rem",
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;