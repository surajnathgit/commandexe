import React, { useState } from "react";
import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import {
  Build,
  Security,
  CloudSync,
  CheckCircleOutline,
  AutoGraph,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const WhyChooseUs = () => {
  const theme = useTheme();
  const [clickedIndex, setClickedIndex] = useState(null);

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
    clicked: { 
      scale: [0.98, 1.02, 1],
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 5, scale: 1.1 },
    tap: { rotate: -5, scale: 0.95 }
  };

  const reasons = [
    {
      title: "Designed for Diverse Agencies",
      description:
        "Built specifically to address the unique reporting challenges faced by legal, technical, RCU, and other specialized agencies.",
      icon: <Build fontSize="small" />,
    },
    {
      title: "Intelligent AI Automation",
      description:
        "Leveraging cutting-edge AI for data extraction, processing, and seamless report generation.",
      icon: <AutoGraph fontSize="small" />,
    },
    {
      title: "User-Friendly Interface",
      description:
        "Powerful automation accessible through an intuitive, easy-to-navigate platform.",
      icon: <CloudSync fontSize="small" />,
    },
    {
      title: "Scalable & Future-Proof",
      description:
        "Grows with your agency, handling increasing report volumes without proportional increases in effort.",
      icon: <Security fontSize="small" />,
    },
    {
      title: "Dedicated Support",
      description:
        "Our expert team is here to ensure your smooth onboarding and continued success.",
      icon: <CheckCircleOutline fontSize="small" />,
    },
  ];

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
          py: { xs: 3, md: 4 },
          px: { xs: 1.5, sm: 2, md: 2.5 },
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
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
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
                mb: 1,
                fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem" },
              }}
            >
              Why Choose CommandX?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                maxWidth: 500,
                mx: "auto",
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
                lineHeight: 1.4,
              }}
            >
               CommandExe is the Smart Choice for Modern Agencies
            </Typography>
          </motion.div>

          {/* Single Row Grid Layout */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(5, 1fr)"
              },
              gap: { xs: 1, sm: 1.5, md: 2},
              maxWidth: "100%",
              mx: "auto",
            }}
          >
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  animate={clickedIndex === index ? "clicked" : "initial"}
                  onClick={() => setClickedIndex(index)}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      p: { xs: 1.5, sm: 2 },
                      borderRadius: 2,
                      backdropFilter: "blur(20px)",
                      bgcolor: alpha(theme.palette.common.white, 0.85),
                      border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                      boxShadow: `0 4px 20px ${alpha(
                        theme.palette.primary.light,
                        0.1
                      )}`,
                      transition: "all 0.3s ease",
                      height: "100%",
                      minHeight: { xs: 200, sm: 220, md: 200 },
                      cursor: "pointer",
                      "&:hover": {
                        boxShadow: `0 8px 24px ${alpha(
                          theme.palette.primary.light,
                          0.15
                        )}`,
                        borderColor: alpha(theme.palette.primary.main, 0.2),
                      },
                    }}
                  >
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Box
                        sx={{
                          width: { xs: 32, sm: 36 },
                          height: { xs: 32, sm: 36 },
                          borderRadius: "8px",
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 1.5,
                          color: theme.palette.primary.main,
                          border: `1px solid ${alpha(
                            theme.palette.primary.main,
                            0.1
                          )}`,
                        }}
                      >
                        {item.icon}
                      </Box>
                    </motion.div>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 700,
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                        mb: 1,
                        lineHeight: 1.3,
                        minHeight: { xs: "2.4em", sm: "2.6em" },
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.82rem" },
                        lineHeight: 1.4,
                        flex: 1,
                        display: "flex",
                        alignItems: "flex-start",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default WhyChooseUs;