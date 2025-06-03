import { Card, Typography, Button, Box } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

 const AddOnCard = ({ addOn }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 1,
        p: 1.5,
        position: "relative",
        overflow: "hidden",
        boxShadow: "none",
        border: "1px solid",
        borderColor: alpha(theme.palette.divider, 0.1),
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: theme.palette.primary.main,
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: alpha(theme.palette.primary.main, 0.08),
            color: theme.palette.primary.main,
          }}
        >
          {addOn.icon}
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              fontSize: "0.9rem",
              color: "text.primary",
              mb: 0.25,
            }}
          >
            {addOn.name}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "1rem",
              color: theme.palette.primary.main,
            }}
          >
            {addOn.price}
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          mb: 1.5,
          flexGrow: 1,
          fontSize: "0.875rem",
          lineHeight: 1.5,
        }}
      >
        {addOn.description}
      </Typography>

      <Button
        variant="text"
        fullWidth
        size="small"
        sx={{
          fontWeight: 500,
          textTransform: "none",
          color: theme.palette.primary.main,
          p: 0.5,
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: 0,
            height: "2px",
            background: theme.palette.primary.main,
            transition: "all 0.3s ease",
            transform: "translateX(-50%)",
          },
          "&:hover": {
            backgroundColor: "transparent",
            "&::after": {
              width: "100%",
            },
          },
        }}
      >
        Add to Plan
      </Button>
    </Card>
  );
};

export default AddOnCard;