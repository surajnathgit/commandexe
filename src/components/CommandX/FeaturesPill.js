import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { motion } from "framer-motion";

const FeaturePill = ({ icon, text, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        type: "spring",
        stiffness: 100,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "rgba(255, 255, 255, 0.8)",
          p: { xs: 1.25, sm: 1.5 },
          borderRadius: 50,
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
          backdropFilter: "blur(10px)",
          width: "fit-content",
          mx: "auto",
        }}
      >
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Avatar
            sx={{
              bgcolor: `${color}15`,
              width: { xs: 24, sm: 28 },
              height: { xs: 24, sm: 28 },
              mr: { xs: 1, sm: 1.5 },
            }}
          >
            {React.cloneElement(icon, {
              sx: {
                color: color,
                fontSize: { xs: "0.9rem", sm: "1rem" },
              },
            })}
          </Avatar>
        </motion.div>
        <Typography
          variant="body1"
          fontWeight={600}
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.875rem" },
          }}
        >
          {text}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default FeaturePill;
