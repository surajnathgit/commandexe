import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  alpha,
  Stack,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";

/**
 * CallToAction Component
 * A compelling section encouraging users to request a demo
 * Features gradient background, animated elements, and clear call-to-action
 */
const CallToAction = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: `
          linear-gradient(135deg, 
            ${alpha(theme.palette.primary.main, 0.95)} 0%,
            ${alpha(theme.palette.primary.dark, 0.95)} 100%
          )
        `,
        py: { xs: 4, md: 5 },
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `
            radial-gradient(circle at 20% 50%, ${alpha(
              theme.palette.common.white,
              0.2
            )} 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, ${alpha(
              theme.palette.common.white,
              0.2
            )} 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          sx={{ maxWidth: 700, mx: "auto" }}
        >
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: theme.palette.common.white,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                lineHeight: 1.2,
                mb: 1,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Are Manual Reports Holding Your Agency Back?
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: alpha(theme.palette.common.white, 0.9),
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.4,
                maxWidth: 500,
                mx: "auto",
              }}
            >
              Stop wasting time on manual tasks. Start growing your agency with
              CommandExe.
            </Typography>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward sx={{ fontSize: "1.2rem" }} />}
              sx={{
                bgcolor: alpha(theme.palette.common.white, 0.98),
                color: theme.palette.primary.dark,
                px: 3.5,
                py: 1.25,
                fontSize: "1.05rem",
                fontWeight: 700,
                borderRadius: "12px",
                textTransform: "none",
                letterSpacing: "0.3px",
                boxShadow: `0 4px 20px ${alpha(
                  theme.palette.common.black,
                  0.15
                )}`,
                "&:hover": {
                  bgcolor: theme.palette.common.white,
                  color: theme.palette.primary.dark,
                  transform: "translateY(-2px)",
                  boxShadow: `0 6px 24px ${alpha(
                    theme.palette.common.black,
                    0.2
                  )}`,
                },
                "& .MuiButton-endIcon": {
                  ml: 0.5,
                  transition: "transform 0.2s ease",
                  color: "inherit",
                },
                "&:hover .MuiButton-endIcon": {
                  transform: "translateX(4px)",
                  color: "inherit",
                },
                "& .MuiButton-label": {
                  color: "inherit",
                },
                transition: "all 0.3s ease",
              }}
            >
              Request Your Free Demo Today!
            </Button>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
                fontSize: "0.85rem",
                mt: 1,
              }}
            >
              No credit card required • 14-day free trial • Cancel anytime
            </Typography>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
