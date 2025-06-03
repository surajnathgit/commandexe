import { Card, Typography, Button, Chip, Box } from '@mui/material';
import Link from 'next/link';
import { useTheme, alpha } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

 const PricingCard = ({ plan, isAnnual }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 1.5,
        p: 1.5,
        position: "relative",
        overflow: "visible",
        boxShadow: plan.isPopular
          ? `0px 8px 20px ${alpha(theme.palette.primary.main, 0.15)}`
          : `0px 4px 12px ${alpha(theme.palette.primary.light, 0.1)}`,
        border: plan.isPopular
          ? `2px solid ${theme.palette.primary.main}`
          : "1px solid",
        borderColor: plan.isPopular
          ? theme.palette.primary.main
          : alpha(theme.palette.divider, 0.2),
        transform: plan.isPopular ? "scale(1.02)" : "none",
        zIndex: plan.isPopular ? 2 : 1,
        background: plan.isPopular
          ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(theme.palette.common.white, 0.9)} 60%)`
          : alpha(theme.palette.common.white, 0.8),
        "&:hover": {
          boxShadow: plan.isPopular
            ? `0px 12px 24px ${alpha(theme.palette.primary.main, 0.2)}`
            : `0px 8px 16px ${alpha(theme.palette.primary.light, 0.15)}`,
          transform: plan.isPopular
            ? "scale(1.02) translateY(-4px)"
            : "translateY(-4px)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
     {plan.isPopular && (
  <Chip
    label="Most Popular"
    color="primary"
    sx={{
      position: "absolute",
      top: -16, 
      left: "50%",
      transform: "translateX(-50%)",
      fontWeight: 600,
      py: 0.5,
      px: 2,
      borderRadius: 2,
      fontSize: "0.7rem",
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      color: "white",
      '&:hover': {
        transform: "translateX(-50%)", 
      },
      boxShadow: `0 2px 4px ${alpha(theme.palette.common.black, 0.1)}`,
      border: `1px solid ${alpha(theme.palette.common.white, 0.3)}`,
      zIndex: 2,
    }}
  />
)}

      <Typography
        variant="h6"
        fontWeight={700}
        sx={{
          mb: 0.5,
          textAlign: "center",
          fontSize: "1.1rem",
          background: plan.isPopular
            ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
            : "none",
          WebkitBackgroundClip: plan.isPopular ? "text" : "none",
          WebkitTextFillColor: plan.isPopular ? "transparent" : "inherit",
          pt: plan.isPopular ? 0.75 : 0,
        }}
      >
        {plan.name}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "baseline", mb: 1, justifyContent: "center" }}>
        <Typography
          variant="h5"
          fontWeight={800}
          sx={{
            mr: 0.5,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "1.4rem", md: "1.6rem" },
          }}
        >
          ₹
          {typeof plan.price === "number"
            ? (isAnnual ? plan.annualPrice : plan.price).toLocaleString("en-IN")
            : plan.price}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontSize: "0.75rem", fontWeight: 500 }}
        >
          /{isAnnual ? "year" : "month"}
        </Typography>
      </Box>

      <Box
        sx={{
          p: 1,
          bgcolor: alpha(theme.palette.primary.main, 0.03),
          borderRadius: 1,
          mb: 1,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        }}
      >
        <Typography variant="caption" color="text.secondary" sx={{ display: "flex", justifyContent: "space-between", mb: 0.25 }}>
          <span>Reports</span>
          <span><strong>{plan.reports}</strong></span>
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "flex", justifyContent: "space-between", mb: 0.25 }}>
          <span>Admin Users</span>
          <span><strong>{plan.adminUsers}</strong></span>
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "flex", justifyContent: "space-between", mb: 0.25 }}>
          <span>Backoffice Users</span>
          <span><strong>{plan.backofficeUsers}</strong></span>
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "flex", justifyContent: "space-between", mb: 0.25 }}>
          <span>Field Officers</span>
          <span><strong>{plan.fieldOfficers}</strong></span>
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "flex", justifyContent: "space-between", mb: 0.25 }}>
          <span>Lenders</span>
          <span><strong>{plan.lenders}</strong></span>
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "flex", justifyContent: "space-between" }}>
          <span>Storage</span>
          <span><strong>{plan.storage}</strong></span>
        </Typography>
      </Box>

      <Box sx={{ flex: 1, mb: 1 }}>
        {plan.features.map((feature, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", mb: 0.25 }}>
            <CheckCircleOutlineIcon
              sx={{ color: theme.palette.primary.main, fontSize: 12, mr: 0.5, opacity: 0.9 }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.75rem", lineHeight: 1.2 }}>
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>

      <Button
        variant={plan.isPopular ? "contained" : "outlined"}
        fullWidth
        component={Link}
        href="/contact"
        sx={{
          mt: "auto",
          py: 0.75,
          fontWeight: 600,
          borderRadius: 1,
          fontSize: "0.8rem",
          textTransform: "none",
          letterSpacing: "0.5px",
          transition: "all 0.2s ease",
          ...(plan.isPopular
            ? {
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                boxShadow: `0px 4px 8px ${alpha(theme.palette.primary.main, 0.3)}`,
                "&:hover": {
                  background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  transform: "translateY(-2px)",
                  boxShadow: `0px 6px 12px ${alpha(theme.palette.primary.main, 0.4)}`,
                },
              }
            : {
                borderWidth: 1.5,
                "&:hover": {
                  borderWidth: 1.5,
                  transform: "translateY(-2px)",
                  boxShadow: `0px 4px 8px ${alpha(theme.palette.primary.main, 0.15)}`,
                },
              }),
        }}
      >
        Get Started
      </Button>
    </Card>
  );
};
export default PricingCard;