import { Box, Typography, FormControlLabel, Switch, Chip, Paper, toggleButtonClasses } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

 const PricingToggle = ({ isAnnual, setIsAnnual }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 3,
        position: "relative",
        width: "100%",
      }}
    >
      <Paper
        component={FormControlLabel}
        control={
          <Switch
            checked={isAnnual}
            onChange={(e) => setIsAnnual(e.target.checked)}
            sx={{
              width: 36,
              height: 20,
              padding: 0,
              "& .MuiSwitch-switchBase": {
                padding: 0.5,
                "&.Mui-checked": {
                  color: theme.palette.common.white,
                  transform: "translateX(16px)",
                  "& + .MuiSwitch-track": {
                    backgroundColor: theme.palette.primary.main,
                    opacity: 1,
                  },
                },
              },
              "& .MuiSwitch-thumb": {
                width: 14,
                height: 14,
                boxShadow: "none",
              },
              "& .MuiSwitch-track": {
                borderRadius: 10,
                backgroundColor: alpha(theme.palette.text.secondary, 0.2),
                opacity: 1,
              },
            }}
          />
        }
        label={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ml: 1.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                fontSize: "0.8rem",
                color: isAnnual ? theme.palette.text.secondary : theme.palette.primary.main,
              }}
            >
              Monthly
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                fontSize: "0.8rem",
                color: isAnnual ? theme.palette.primary.main : theme.palette.text.secondary,
              }}
            >
              Annual
            </Typography>
            {isAnnual && (
              <Chip
                label="Save 20%"
                size="small"
                sx={{
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  fontSize: "0.65rem",
                  height: 18,
                  "& .MuiChip-label": { px: 1 },
                }}
              />
            )}
          </Box>
        }
        sx={{
          backgroundColor: "background.paper",
          px: 1.5,
          py: 0.5,
          borderRadius: 4,
          boxShadow: theme.shadows[1],
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default  PricingToggle;