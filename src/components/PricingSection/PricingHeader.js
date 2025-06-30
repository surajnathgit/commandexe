import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

 const PricingHeader = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      style={{ position: "relative" }}
    >
      <Box sx={{ position: "relative", mb: 3, textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 0.5,
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
            background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "40px",
              height: "2px",
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: "2px",
            },
          }}
        >
          Flexible Pricing Plans
        </Typography>
       <Typography
  variant="body1"
  sx={{
    maxWidth: 600,
    mx: "auto",
    fontWeight: 400,
    fontSize: { xs: "0.875rem", sm: "0.95rem" },
    lineHeight: 1.5,
    mt: 1,
    color: theme.palette.text.secondary,
  }}
>
  Choose a plan that fits your agency&apos;s scale, with add-ons for
  extra flexibility. Scale up or down as your needs change.
</Typography>

      </Box>
    </motion.div>
  );
};

export default PricingHeader;