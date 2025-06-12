import { Box, Card, CardContent, Container, Typography, useMediaQuery } from '@mui/material';
import { Savings, TrendingUp, AutoFixHigh, Speed, CheckCircle, TaskAlt } from '@mui/icons-material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material';

const benefits = [
  {
    title: "Significant Cost Reduction",
    details: "Automate tasks that typically require hours of manual labor, freeing up your team and resources.",
    icon: <Savings fontSize="medium" />,
    color: '#388e3c' 
  },
  {
    title: "Unmatched Service Improvement",
    details: "Deliver faster, more accurate reports to clients, enhancing your reputation and client satisfaction.",
    icon: <TrendingUp fontSize="medium" />,
    color: '#0288d1' 
  },
  {
    title: "Eliminate Manual Errors",
    details: "AI-driven data extraction and automated report generation drastically reduce the risk of human error.",
    icon: <AutoFixHigh fontSize="medium" />,
    color: '#d32f2f' 
  },
  {
    title: "Boost Productivity",
    details: "Free up your team to focus on higher-value tasks like client relations and business development.",
    icon: <Speed fontSize="medium" />,
    color: '#f57c00' 
  },
  {
    title: "Ensure Compliance",
    details: "Standardize report generation to meet the stringent requirements of your industry and clients.",
    icon: <CheckCircle fontSize="medium" />,
    color: '#7b1fa2' 
  },
  {
    title: "Faster Turnaround",
    details: "Accelerate your reporting process, helping your agency expedite client deliverables and project milestones.",
    icon: <TaskAlt fontSize="medium" />,
    color: '#0288d1' 
  }
];

// Styled components for the card design
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  boxShadow: theme?.shadows?.[2] || '0px 2px 4px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  backgroundColor: theme?.palette?.background?.paper || '#ffffff',
  '&:hover': {
    boxShadow: theme?.shadows?.[6] || '0px 4px 8px rgba(0,0,0,0.2)',
    transform: 'translateY(-3px)',
  },
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2.5),
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

const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
  },
}));

const BenefitsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3 },
        background: `
          radial-gradient(ellipse at 20% 50%, ${theme.palette.primary.light}26 0%, transparent 50%),
          linear-gradient(to bottom, ${theme.palette.grey[50]} 0%, ${theme.palette.grey[100]} 100%)
        `,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
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
              mb: 3,
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
            Benefits Section
          </Typography>
          
          <Typography
            variant="h5"
            component="h3"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 5 },
              fontWeight: 500,
              color: 'text.secondary',
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              lineHeight: 1.3,
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            Unlock Agency Potential: The CommandExe Advantage
          </Typography>
        </motion.div>

        {/* Benefits Cards */}
        <CardsContainer>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
              style={{ height: '100%' }}
            >
              <StyledCard>
                <CardContentWrapper>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <IconWrapper color={benefit.color}>{benefit.icon}</IconWrapper>
                    <Typography
                      variant="subtitle1"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {benefit.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {benefit.details}
                  </Typography>
                </CardContentWrapper>
              </StyledCard>
            </motion.div>
          ))}
        </CardsContainer>
      </Container>
    </Box>
  );
};

export default BenefitsSection;