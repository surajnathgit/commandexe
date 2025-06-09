import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
  alpha,
  Container,
} from '@mui/material';
import {
  ExpandMore,
  ErrorOutline,
  AssignmentLate,
  Timer,
  AttachMoney,
  Warning,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ReportPainPoints = () => {
  const theme = useTheme();

  const painPoints = [
    {
      title: ": Manual Data Entry Headaches",
      details: "Endless copying and pasting information across multiple documents leads to errors and wasted time.",
      icon: <ErrorOutline />,
      color: theme.palette.error.main
    },
    {
      title: " Confusing & Inconsistent Forms",
      details: "Struggling with variations in customer templates and internal forms creates chaos.",
      icon: <AssignmentLate />,
      color: theme.palette.warning.main
    },
    {
      title: " Slow Turnaround Times",
      details: "Delays in report generation mean lost valuable time and delayed client approvals.",
      icon: <Timer />,
      color: theme.palette.info.main
    },
    {
      title: " High Operational Costs",
      details: "Draining resources on repetitive, error-prone tasks impacts your bottom line.",
      icon: <AttachMoney />,
      color: theme.palette.success.main
    },
    {
      title: " Lack of Standardization",
      details: "Battling with report inconsistencies and compliance risks can be a nightmare.",
      icon: <Warning />,
      color: theme.palette.secondary.main
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        background: `
          radial-gradient(ellipse at 20% 50%, ${alpha(
            theme.palette.primary.light,
            0.15
          )} 0%, transparent 50%),
          linear-gradient(to bottom, ${theme.palette.grey[50]} 0%, ${
            theme.palette.grey[100]
          } 100%)
        `,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              textAlign: 'center', 
              mb: { xs: 3, sm: 4, md: 5 },
              fontWeight: 800,
              background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
              lineHeight: 1.2,
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            Are Manual Reports Holding Your Agency Back?
          </Typography>
        </motion.div>
        
        <Box 
          sx={{ 
            maxWidth: 800, 
            margin: '0 auto',
            px: { xs: 1, sm: 2 },
          }}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion 
                sx={{ 
                  mb: { xs: 1.5, sm: 2 },
                  borderRadius: '16px !important',
                  overflow: 'hidden',
                  '&:before': {
                    display: 'none',
                  },
                  boxShadow: `0 4px 20px ${alpha(theme.palette.primary.light, 0.1)}`,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  '&.Mui-expanded': {
                    margin: '0 0 16px 0',
                    boxShadow: `0 8px 24px ${alpha(point.color, 0.15)}`,
                    borderColor: alpha(point.color, 0.2),
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore 
                      sx={{ 
                        color: point.color,
                        transition: 'transform 0.3s ease',
                        fontSize: '1.5rem',
                      }} 
                    />
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '16px 0',
                    },
                    '&.Mui-expanded': {
                      minHeight: '72px',
                      backgroundColor: alpha(point.color, 0.05),
                    },
                    px: { xs: 2, sm: 3 },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        bgcolor: alpha(point.color, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: point.color,
                        border: `1px solid ${alpha(point.color, 0.2)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          bgcolor: alpha(point.color, 0.15),
                        },
                      }}
                    >
                      {point.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        lineHeight: 1.3,
                      }}
                    >
                      {point.title}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    p: { xs: 2, sm: 3 },
                    backgroundColor: alpha(theme.palette.common.white, 0.8),
                    borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.6,
                      maxWidth: '90%',
                    }}
                  >
                    {point.details}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ReportPainPoints; 