import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddOnCard from './AddOnCard';

const AddOnsSection = ({ addOns }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: { xs: 4, md: 6 },
        px: { xs: 1, sm: 2 },
        position: "relative",
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 4, md: 5 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.75rem", md: "2rem" },
            lineHeight: 1.2,
            mb: 1,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Boost Your Plan
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: "600px",
            mx: "auto",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Enhance your experience with these premium add-ons
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Grid
        container
        spacing={{ xs: 1.5, md: 2 }}
        sx={{
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {addOns.map((addOn, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            key={index}
            sx={{
              flex: "1 1 0",
              minWidth: { xs: "100%", md: "220px" },
              maxWidth: { xs: "100%", md: "260px" },
              my: { xs: 0.75, md: 0 },
            }}
          >
            <AddOnCard addOn={addOn} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AddOnsSection;