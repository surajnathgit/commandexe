import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { ErrorOutline, AssignmentLate, Timer, AttachMoney, Warning } from '@mui/icons-material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material';

const painPoints = [
  {
    title: "Manual Data Entry Headaches",
    details: "Endless copying and pasting information across multiple documents leads to errors and wasted time.",
    icon: <ErrorOutline fontSize="medium" />,
    color: '#d32f2f' 
  },
  {
    title: "Confusing & Inconsistent Forms",
    details: "Struggling with variations in customer templates and internal forms creates chaos.",
    icon: <AssignmentLate fontSize="medium" />,
    color: '#f57c00' 
  },
  {
    title: "Slow Turnaround Times",
    details: "Delays in report generation mean lost valuable time and delayed client approvals.",
    icon: <Timer fontSize="medium" />,
    color: '#0288d1' 
  },
  {
    title: "High Operational Costs",
    details: "Draining resources on repetitive, error-prone tasks impacts your bottom line.",
    icon: <AttachMoney fontSize="medium" />,
    color: '#388e3c' 
  },
  {
    title: "Lack of Standardization",
    details: "Battling with report inconsistencies and compliance risks can be a nightmare.",
    icon: <Warning fontSize="medium" />,
    color: '#7b1fa2' 
  }
];

// Styled components for the card design
const StyledCard = styled(Card)(({ theme }) => ({
  height: '180px', 
  width: '100%', 
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  backgroundColor: '#ffffff',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    transform: 'translateY(-3px)',
  },
}));

const IconWrapper = styled(Box)(({ theme, color }) => ({
  width: 40,
  height: 40,
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: `${color}15`,
  marginRight: theme.spacing(1.5),
  color: color,
}));

const CardsGrid = styled(Box)({
  display: 'grid',
  width: '100%',
});

const ReportPainPoints = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, md: 4 },
        px: { xs: 2, sm: 3, md: 4 },
        background: `
          radial-gradient(ellipse at 20% 50%, ${theme.palette.primary.light}26 0%, transparent 50%),
          linear-gradient(to bottom, ${theme.palette.grey[50]} 0%, ${theme.palette.grey[100]} 100%)
        `,
      }}
    >
      <Container maxWidth="xl">
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
              mb: { xs: 4, sm: 5 },
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

        {/* Responsive Grid Layout */}
        <CardsGrid
          sx={{
            gap: 1.5,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
              xl: 'repeat(5, 1fr)',
            },
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
              <StyledCard sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconWrapper color={point.color}>{point.icon}</IconWrapper>
                  <Typography
                    variant="subtitle2"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      color: '#111827',
                      fontSize: '1rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {point.title}
                  </Typography>
                </Box>

                <CardContent sx={{ p: 0, flexGrow: 1, display: 'flex', alignItems: 'flex-start' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#4b5563',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {point.details}
                  </Typography>
                </CardContent>
              </StyledCard>
            </motion.div>
          ))}
        </CardsGrid>
      </Container>
    </Box>
  );
};

export default ReportPainPoints;