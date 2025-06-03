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
  Receipt,
  CheckCircleOutline,
  ArrowRightAlt,
  TrendingUp,
} from "@mui/icons-material";

const AutoInvoicing = () => {
  const theme = useTheme();

  const cardData = [
    {
      title: "Flexible Invoicing",
      description: "Generate by file, batch, or milestone in preferred formats",
      features: [
        "Multiple invoice formats",
        "Batch processing",
        "Milestone tracking",
        "Export options",
      ],
      icon: <Receipt fontSize="small" />,
      color: theme.palette.primary.main,
    },
    {
      title: "GST Compliance",
      description: "Audit-ready exports with due tracking",
      features: [
        "GST formats",
        "Excel/PDF exports",
        "Due tracking",
        "Audit trails",
      ],
      icon: <CheckCircleOutline fontSize="small" />,
      color: theme.palette.secondary.main,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 3, md: 4 },
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
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Box>
            <Chip
              label="AUTOMATION"
              size="small"
              icon={<TrendingUp fontSize="small" />}
              sx={{
                mb: 0.5,
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
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                lineHeight: 1.2,
                background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Smart Invoicing System
            </Typography>
          </Box>
          <Button
            endIcon={<ArrowRightAlt />}
            size="small"
            sx={{
              textTransform: "none",
              color: theme.palette.text.secondary,
              backdropFilter: "blur(10px)",
              bgcolor: alpha(theme.palette.common.white, 0.8),
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              "&:hover": {
                color: theme.palette.primary.main,
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                borderColor: alpha(theme.palette.primary.main, 0.2),
              },
            }}
          >
            View all features
          </Button>
        </Stack>

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            mb: { xs: 2, md: 3 },
            maxWidth: 600,
            fontSize: { xs: "0.95rem", md: "1rem" },
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Streamline your billing with automated invoice generation and
          GST-compliant exports.
        </Typography>

        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          {cardData.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  height: 320,
                  width: 350,
                  minWidth: 350,
                  maxWidth: 350,
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
                    boxShadow: `0 8px 24px ${alpha(card.color, 0.1)}`,
                    borderColor: alpha(card.color, 0.3),
                  },
                }}
              >
                {/* Colored header bar */}
                <Box
                  sx={{
                    height: 3,
                    width: "100%",
                    background: `linear-gradient(90deg, ${alpha(
                      card.color,
                      0.9
                    )}, ${alpha(card.color, 0.5)})`,
                    transition: "all 0.3s ease",
                  }}
                />

                <CardContent
                  sx={{
                    p: 2.5,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        bgcolor: alpha(card.color, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 1.5,
                        color: card.color,
                        border: `1px solid ${alpha(card.color, 0.2)}`,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: theme.palette.text.primary,
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 1.5,
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                      flex: 1,
                    }}
                  >
                    {card.description}
                  </Typography>

                  <Divider
                    sx={{
                      my: 1,
                      borderColor: alpha(theme.palette.divider, 0.1),
                    }}
                  />

                  <Stack spacing={1} sx={{ mb: 1.5 }}>
                    {card.features.map((feature, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.85rem",
                          color: theme.palette.text.secondary,
                          "&:before": {
                            content: '""',
                            display: "inline-block",
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor: card.color,
                            mr: 1.5,
                            opacity: 0.7,
                          },
                        }}
                      >
                        {feature}
                      </Box>
                    ))}
                  </Stack>

                  <Button
                    size="small"
                    endIcon={<ArrowRightAlt />}
                    sx={{
                      mt: "auto",
                      alignSelf: "flex-start",
                      color: card.color,
                      px: 1.5,
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      "&:hover": {
                        bgcolor: alpha(card.color, 0.05),
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

export default AutoInvoicing;
