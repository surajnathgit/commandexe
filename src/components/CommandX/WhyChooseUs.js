import React from "react";
import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import {
  Build,
  Security,
  CloudSync,
  CheckCircleOutline,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <Box
        sx={{
          mt: 0,
          py: { xs: 4, md: 5 },
          px: { xs: 2, sm: 2.5, md: 3 },
          background: `
          radial-gradient(ellipse at 20% 50%, ${alpha(
            theme.palette.primary.light,
            0.15
          )} 0%, transparent 50%),
          linear-gradient(to bottom, ${theme.palette.grey[50]} 0%, ${
            theme.palette.grey[100]
          } 100%)
        `,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid Pattern Background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            linear-gradient(to right, ${alpha(
              theme.palette.grey[300],
              0.3
            )} 1px, transparent 1px),
            linear-gradient(to bottom, ${alpha(
              theme.palette.grey[300],
              0.3
            )} 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontWeight: 800,
                background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1.5,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              }}
            >
              Why Choose CommandX?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                lineHeight: 1.5,
              }}
            >
              Built by experts, trusted by NBFCs, and designed for scalability.
            </Typography>
          </motion.div>

          <Box
            sx={{
              maxWidth: 800,
              mx: "auto",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            {[
              {
                text: "Expert-built for RCU, Legal, and Technical workflows",
                icon: <Build fontSize="small" />,
              },
              {
                text: "Trusted by NBFC and Bank vendors across India",
                icon: <Security fontSize="small" />,
              },
              {
                text: "Dynamic, secure, and scalable platform",
                icon: <CloudSync fontSize="small" />,
              },
              {
                text: "Real support, not just a software license",
                icon: <CheckCircleOutline fontSize="small" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 2,
                    backdropFilter: "blur(20px)",
                    bgcolor: alpha(theme.palette.common.white, 0.85),
                    border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                    boxShadow: `0 4px 20px ${alpha(
                      theme.palette.primary.light,
                      0.1
                    )}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 8px 24px ${alpha(
                        theme.palette.primary.light,
                        0.15
                      )}`,
                      borderColor: alpha(theme.palette.primary.main, 0.2),
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "10px",
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1.5,
                      color: theme.palette.primary.main,
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "rotate(5deg) scale(1.1)",
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      lineHeight: 1.4,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default WhyChooseUs;
