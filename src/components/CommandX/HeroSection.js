import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Avatar,
  useTheme,
  alpha,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import {
  Terminal,
  Bolt,
  AutoGraph,
  Security,
  Cloud,
  PlayCircle,
  PauseCircle,
  ArrowLeft,
  ArrowRight,
} from "@mui/icons-material";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Sample demo data for the interactive demo
const demos = [
  {
    title: "AI Automation",
    description: "Streamline operations with intelligent automation tools.",
    accentColor: "#1976d2",
    visual: (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Terminal sx={{ fontSize: 80, color: "#1976d2" }} />
      </Box>
    ),
  },
  {
    title: "Real-time Sync",
    description: "Instant data synchronization across all platforms.",
    accentColor: "#d32f2f",
    visual: (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Bolt sx={{ fontSize: 80, color: "#d32f2f" }} />
      </Box>
    ),
  },
  {
    title: "Predictive Analytics",
    description: "Leverage AI for actionable insights and forecasting.",
    accentColor: "#ed6c02",
    visual: (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AutoGraph sx={{ fontSize: 80, color: "#ed6c02" }} />
      </Box>
    ),
  },
];

const demoVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const HeroSection = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [activeDemo, setActiveDemo] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        navigateDemo(1);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, activeDemo]);

  const navigateDemo = (direction) => {
    setActiveDemo((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return demos.length - 1;
      if (newIndex >= demos.length) return 0;
      return newIndex;
    });
  };

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.2, 0.7, 0.3, 1],
      },
    }),
  };

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: { xs: "auto", sm: "60vh" },
        display: "flex",
        alignItems: "center",
        background: `
          radial-gradient(ellipse at 80% 50%, ${alpha(
            theme.palette.primary.light,
            0.15
          )} 0%, transparent 50%),
          linear-gradient(to bottom, ${theme.palette.grey[50]} 0%, ${
          theme.palette.grey[100]
        } 100%)
        `,
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, sm: 3, md: 2 },
        px: { xs: 2, sm: 1.5, md: 1 },
        color: theme.palette.text.primary,
      }}
    >
      <Box
        component={motion.div}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 400,
          height: 400,
          backgroundImage: `radial-gradient(circle, ${alpha(
            theme.palette.primary.light,
            0.1
          )} 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          sx={{
            pt: { xs: 2, md: 0 },
            pb: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: "100%",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <motion.div
              custom={0}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  mb: { xs: 2, md: 2 },
                  px: { xs: 2, md: 2.5 },
                  py: { xs: 0.75, md: 1 },
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  boxShadow: `0 4px 20px ${alpha(
                    theme.palette.primary.main,
                    0.05
                  )}`,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    letterSpacing: { xs: 1, md: 1.5 },
                    lineHeight: 1,
                    fontSize: { xs: "0.7rem", md: "0.8rem" },
                  }}
                >
                  ENTERPRISE EDITION
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.8rem",
                    md: "2.2rem",
                    lg: "2.6rem",
                  },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: { xs: 1.5, md: 2 },
                  background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.03em",
                }}
              >
                Automate Reporting.{" "}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Drive Agency Growth
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: { xs: "100%", md: 600 },
                  mb: { xs: 4, md: 4 },
                  fontWeight: 400,
                  fontSize: { xs: "0.85rem", md: "1rem" },
                  lineHeight: { xs: 1.5, md: 1.6 },
                  px: { xs: 1, md: 0 },
                }}
              >
                Transform confusing manual processes into <strong>streamlined, AI-powered workflows</strong> across legal, technical, and RCU agencies. <strong>Reduce operational costs</strong>, enhance service delivery, and <strong>focus on strategic growth</strong>.
              </Typography>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1.5, sm: 2, md: 2.5 }}
                sx={{
                  mb: { xs: 3, md: 4 },
                  width: { xs: "100%", sm: "auto" },
                  alignItems: { xs: "stretch", sm: "center" },
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={
                    <Box
                      component={motion.div}
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Bolt
                        sx={{
                          fontSize: {
                            xs: "1.2rem",
                            sm: "1.4rem",
                            md: "1.5rem",
                          },
                        }}
                      />
                    </Box>
                  }
                  sx={{
                    px: { xs: 1.5, sm: 2, md: 3 },
                    py: { xs: 0.75, sm: 1, md: 1.25 },
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                    textTransform: "none",
                    minWidth: { xs: "100%", sm: "auto" },
                    maxWidth: { xs: "100%", sm: "none" },
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    boxShadow: `0 4px 20px ${alpha(
                      theme.palette.primary.main,
                      0.2
                    )}`,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 6px 24px ${alpha(
                        theme.palette.primary.main,
                        0.3
                      )}`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                 Request a Demo
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={
                    <PlayCircle
                      sx={{
                        fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
                      }}
                    />
                  }
                  sx={{
                    px: { xs: 1.5, sm: 2, md: 3 },
                    py: { xs: 0.75, sm: 1, md: 1.25 },
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                    textTransform: "none",
                    minWidth: { xs: "100%", sm: "auto" },
                    maxWidth: { xs: "100%", sm: "none" },
                    borderWidth: 2,
                    color: theme.palette.primary.main,
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    "&:hover": {
                      borderWidth: 2,
                      borderColor: theme.palette.primary.main,
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                    },
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </motion.div>
          </Box>

          <Box
            sx={{
              flex: 1,
              position: "relative",
              minHeight: { xs: 200, md: 300 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: { xs: 200, md: 300 },
                width: { xs: "100%", md: "85%" },
                maxWidth: "400px",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: `0 20px 60px ${alpha(
                  theme.palette.primary.light,
                  0.1
                )}`,
                border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                backdropFilter: "blur(10px)",
                bgcolor: alpha(theme.palette.common.white, 0.8),
              }}
            >
              <AnimatePresence custom={activeDemo}>
                <motion.div
                  key={activeDemo}
                  custom={activeDemo}
                  variants={demoVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  style={{
                    height: "100%",
                    background: `linear-gradient(135deg, ${alpha(
                      demos[activeDemo].accentColor,
                      0.05
                    )}, ${alpha(theme.palette.common.white, 0.9)} 60%)`,
                    padding: { xs: 12, md: 20 },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {demos[activeDemo].visual}
                  <Box sx={{ mt: "auto" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        mb: { xs: 0.5, md: 0.75 },
                        textAlign: "center",
                        color: demos[activeDemo].accentColor,
                        fontSize: { xs: "0.9rem", md: "1.1rem" },
                      }}
                    >
                      {demos[activeDemo].title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        textAlign: "center",
                        mb: { xs: 1, md: 1.5 },
                        fontSize: { xs: "0.75rem", md: "0.9rem" },
                      }}
                    >
                      {demos[activeDemo].description}
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      mt: { xs: 0.75, md: 1.5 },
                      px: { xs: 1, md: 1.5 },
                      pb: { xs: 0.75, md: 1.5 },
                    }}
                  >
                    <IconButton
                      onClick={() => navigateDemo(-1)}
                      sx={{
                        border: `1px solid ${alpha(
                          theme.palette.divider,
                          0.3
                        )}`,
                        p: { xs: 0.5, md: 0.75 },
                        color: theme.palette.primary.main,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.primary.main, 0.05),
                        },
                      }}
                    >
                      <ArrowLeft />
                    </IconButton>
                    <IconButton
                      onClick={() => setAutoPlay(!autoPlay)}
                      sx={{
                        border: `1px solid ${alpha(
                          theme.palette.divider,
                          0.3
                        )}`,
                        p: { xs: 0.5, md: 0.75 },
                        color: theme.palette.primary.main,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.primary.main, 0.05),
                        },
                      }}
                    >
                      {autoPlay ? <PauseCircle /> : <PlayCircle />}
                    </IconButton>
                    <IconButton
                      onClick={() => navigateDemo(1)}
                      sx={{
                        border: `1px solid ${alpha(
                          theme.palette.divider,
                          0.3
                        )}`,
                        p: { xs: 0.5, md: 0.75 },
                        color: theme.palette.primary.main,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.primary.main, 0.05),
                        },
                      }}
                    >
                      <ArrowRight />
                    </IconButton>
                  </Stack>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
