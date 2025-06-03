import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  alpha,
  Grid,
} from "@mui/material";
import { Assignment, Gavel, Build } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const CoreModules = () => {
  const theme = useTheme();

  const modules = [
    {
      icon: (
        <Assignment
          fontSize="medium"
          style={{ color: theme.palette.primary.main }}
        />
      ),
      title: "RCU Agency Module",
      description:
        "Streamline field verifications with real-time tracking, geo-tagged evidence, and AI-driven risk scoring.",
      features: [
        "Tele-verification with voice recording",
        "Real-time field agent tracking",
        "Auto-report generation",
        "Risk score AI engine",
      ],
    },
    {
      icon: (
        <Gavel
          fontSize="medium"
          style={{ color: theme.palette.primary.main }}
        />
      ),
      title: "Legal Agency Module",
      description:
        "Automate document validation, legal opinions, and advocate assignments with bank-compliant reports.",
      features: [
        "Document upload & validation",
        "AI-generated legal opinions",
        "Advocate assignment chains",
        "Bank-compliant report output",
      ],
    },
    {
      icon: (
        <Build
          fontSize="medium"
          style={{ color: theme.palette.primary.main }}
        />
      ),
      title: "Technical Agency Module",
      description:
        "Manage property inspections, valuations, and progress tracking with automated PDF reports.",
      features: [
        "Property visit logs with GPS",
        "Photo uploads & valuation inputs",
        "Auto-calculation of market value",
        "PDF report generation",
      ],
    },
  ];

  return (
    <Box
      sx={{
        mt: 0,
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
        pt: { xs: 2.5, sm: 2, md: 1.5 },
        pb: { xs: 2.5, sm: 2, md: 1.5 },
      }}
    >
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

      <Box sx={{ position: "relative", zIndex: 1 }}>
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
          Core Modules
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: theme.palette.text.secondary,
            mb: 4,
            maxWidth: 650,
            mx: "auto",
            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
            lineHeight: 1.5,
          }}
        >
          Discover the power of RCU, Legal, and Technical modules, all
          integrated into one AI-driven platform.
        </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 0.5, sm: 0.75, md: 1 }}
        sx={{
          mx: "auto",
          position: "relative",
          zIndex: 1,
          maxWidth: { xs: "100%", md: "1100px" },
          justifyContent: "center",
        }}
      >
        {modules.map((module, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                borderRadius: 3,
                height: "100%",
                minHeight: { xs: 240, sm: 280, md: 300 },
                maxWidth: { xs: "100%", sm: "360px", md: "310px" },
                backdropFilter: "blur(20px)",
                bgcolor: alpha(theme.palette.common.white, 0.85),
                border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                boxShadow: `
                  0 4px 20px ${alpha(theme.palette.primary.light, 0.1)},
                  0 0 0 1px ${alpha(theme.palette.primary.light, 0.05)}
                `,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-6px) scale(1.01)",
                  boxShadow: `
                    0 12px 30px ${alpha(theme.palette.primary.light, 0.15)},
                    0 0 0 1px ${alpha(theme.palette.primary.light, 0.1)}
                  `,
                  borderColor: alpha(theme.palette.primary.main, 0.2),
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 1.75, sm: 2 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${alpha(
                      theme.palette.primary.main,
                      0.8
                    )}, ${alpha(theme.palette.primary.light, 0.8)})`,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.75,
                    mt: 0.75,
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
                    {module.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "0.95rem", sm: "1.1rem" },
                      color: theme.palette.text.primary,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {module.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 1.75,
                    fontSize: { xs: "0.8rem", sm: "0.85rem" },
                    lineHeight: 1.4,
                    fontWeight: 400,
                  }}
                >
                  {module.description}
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    pl: 1.75,
                    mb: 0,
                    mt: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.75,
                  }}
                >
                  {module.features.map((feature, i) => (
                    <Typography
                      key={i}
                      component="li"
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 500,
                        "&::before": {
                          content: '""',
                          display: "inline-block",
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          bgcolor: theme.palette.primary.main,
                          mr: 1.5,
                          opacity: 0.8,
                          boxShadow: `0 0 0 2px ${alpha(
                            theme.palette.primary.main,
                            0.2
                          )}`,
                        },
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoreModules;
