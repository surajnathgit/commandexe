import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  alpha,
  Chip,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import {
  AutoAwesome,
  Description,
  Receipt,
  Dashboard,
  ArrowRightAlt,
  TrendingUp,
} from "@mui/icons-material";

/**
 * FeaturesSection Component
 * Displays key features of the application in a responsive grid layout
 * Each feature card includes an icon, title, description, and call-to-action
 */
const FeaturesSection = () => {
  const theme = useTheme();

  // Feature data array - each feature contains title, description points, icon, and theme color
  const features = [
    {
      title: "AI-Powered Data Ingestion",
      description: [
        "Upload diverse customer templates, forms, and data sources. CommandExe's intelligent AI reads, understands, and extracts critical data points, eliminating manual input.",
        "Automatically identify and categorize information from various documents and data streams with smart recognition."
      ],
      icon: <AutoAwesome fontSize="small" />,
      color: theme.palette.primary.main,
    },
    {
      title: "Dynamic Report Generation",
      description: [
        "Generate precise reports that perfectly align with your specific agency or client requirements using our customizable engine.",
        "Dynamically populate reports with accurate, real-time data from your AI-fed information, eliminating manual errors."
      ],
      icon: <Description fontSize="small" />,
      color: theme.palette.secondary.main,
    },
    {
      title: "Integrated Invoicing",
      description: [
        "Effortlessly generate accurate invoices directly linked to completed reports, ensuring timely and transparent billing.",
        "Reduce billing errors by automating pricing and service charges based on your predefined rules."
      ],
      icon: <Receipt fontSize="small" />,
      color: theme.palette.success.main,
    },
    {
      title: "Agency Owner Dashboard & Reporting",
      description: [
        "Get a comprehensive overview of report generation progress, team performance, and financial metrics from a centralized dashboard.",
        "Track key operational data to identify bottlenecks and optimize your workflow for maximum efficiency."
      ],
      icon: <Dashboard fontSize="small" />,
      color: theme.palette.info.main,
    }
  ];

  return (
    // Main section container with gradient background
    <Box
      sx={{
        py: { xs: 4, md: 6 }, // Responsive vertical padding
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
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header section with chip and title */}
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Box>
            {/* Feature label chip */}
            <Chip
              label="FEATURES"
              size="small"
              icon={<TrendingUp fontSize="small"/>}
              sx={{
                mb: 1,
                bgcolor: alpha(theme.palette.primary.main, 0.08),
                color: theme.palette.primary.main,
                fontWeight: 600,
                backdropFilter: "blur(10px)",
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                "& .MuiChip-icon": {
                  color: theme.palette.primary.main,
                },
              }}
            />
            {/* Section title with gradient text */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" }, // Responsive font size
                lineHeight: 1.2,
                background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Features Section
            </Typography>
          </Box>
        </Stack>

        {/* Section description */}
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            mb: { xs: 2, md: 3 }, // Responsive margin bottom
            maxWidth: 600,
            fontSize: { xs: "0.95rem", md: "1rem" }, // Responsive font size
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Your Solution for Automated Agency Reporting.
        </Typography>

        {/* Features grid - responsive layout */}
        <Grid container spacing={1.5} sx={{ justifyContent: "center", mb: { xs: 1, sm: 2 } }}>
          {features.map((feature, index) => (
            // Grid items with responsive breakpoints
            <Grid 
              item 
              xs={12} // Full width on mobile
              sm={6}  // 2 cards per row on tablet
              md={3}  // 4 cards per row on desktop
              lg={3}  // 4 cards per row on large screens
              key={index} 
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {/* Feature card with hover effects */}
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 270,
                  minHeight: 360,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  backdropFilter: "blur(20px)",
                  bgcolor: alpha(theme.palette.common.white, 0.85),
                  border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                  boxShadow: `0 4px 20px ${alpha(
                    theme.palette.primary.light,
                    0.1
                  )}`,
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: `0 8px 24px ${alpha(feature.color, 0.1)}`,
                    borderColor: alpha(feature.color, 0.3),
                  },
                }}
              >
                {/* Colored accent bar at the top of each card */}
                <Box
                  sx={{
                    height: 3,
                    width: "100%",
                    background: `linear-gradient(90deg, ${alpha(
                      feature.color,
                      0.9
                    )}, ${alpha(feature.color, 0.5)})`,
                    transition: "all 0.3s ease",
                  }}
                />
                <CardContent
                  sx={{
                    p: 2,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Feature icon and title section */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    {/* Icon container with hover effect */}
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "12px",
                        bgcolor: alpha(feature.color, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 1.5,
                        color: feature.color,
                        border: `1px solid ${alpha(feature.color, 0.2)}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                          bgcolor: alpha(feature.color, 0.15),
                        },
                      }}
                    >
                      {React.cloneElement(feature.icon, {
                        sx: { fontSize: "1.4rem" }
                      })}
                    </Box>
                    {/* Feature title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: theme.palette.text.primary,
                        lineHeight: 1.3,
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>

                  {/* Feature description list with custom bullet points */}
                  <Stack spacing={1.5} sx={{ mb: 2 }}>
                    {feature.description.map((desc, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: "0.9rem",
                          lineHeight: 1.5,
                          display: "flex",
                          alignItems: "flex-start",
                          position: "relative",
                          pl: 2,
                          "&:before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "0.5em",
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor: feature.color,
                            opacity: 1,
                            boxShadow: `0 0 0 3px ${alpha(feature.color, 0.2)}`,
                            transform: "scale(1)",
                            transition: "all 0.2s ease",
                          },
                          "&:hover:before": {
                            transform: "scale(1.2)",
                            boxShadow: `0 0 0 4px ${alpha(feature.color, 0.3)}`,
                          }
                        }}
                      >
                        {desc}
                      </Typography>
                    ))}
                  </Stack>

                  {/* Call-to-action button */}
                  <Button
                    size="small"
                    endIcon={<ArrowRightAlt />}
                    sx={{
                      mt: "auto",
                      alignSelf: "flex-start",
                      color: feature.color,
                      px: 1.5,
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      "&:hover": {
                        bgcolor: alpha(feature.color, 0.05),
                      },
                    }}
                  >
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
