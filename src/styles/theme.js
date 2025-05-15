import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a custom theme with a modern, futuristic color palette
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3A86FF',
      light: '#6BA3FF',
      dark: '#0066DB',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8A2BE2',
      light: '#A555ED',
      dark: '#7000D0',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00CFFD',
      light: '#47E0FF',
      dark: '#00A3CA',
    },
    error: {
      main: '#FF3D71',
      light: '#FF6B93',
      dark: '#DB0050',
    },
    warning: {
      main: '#FFAA00',
      light: '#FFBC33',
      dark: '#DB9000',
    },
    info: {
      main: '#00CFFD',
      light: '#47E0FF',
      dark: '#00A3CA',
    },
    background: {
      default: '#F8FAFF',
      paper: '#ffffff',
    },
    text: {
      primary: '#14213D',
      secondary: '#4E5D78',
    },
    divider: 'rgba(0, 0, 0, 0.06)',
    // Custom colors for advanced UI elements
    custom: {
      darkBlue: '#14213D',
      purple: '#8A2BE2',
      lightBlue: '#3A86FF',
      neonBlue: '#00CFFD',
      deepPurple: '#5E17EB',
      gradients: {
        primary: 'linear-gradient(135deg, #3A86FF 0%, #00CFFD 100%)',
        secondary: 'linear-gradient(135deg, #8A2BE2 0%, #5E17EB 100%)',
        info: 'linear-gradient(135deg, #00CFFD 0%, #0066DB 100%)',
        dark: 'linear-gradient(135deg, #14213D 0%, #233355 100%)',
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.005em',
    },
    h6: {
      fontWeight: 600,
      letterSpacing: 0,
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: 0,
    },
    subtitle2: {
      fontWeight: 500,
      letterSpacing: 0,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: 0,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(0, 0, 0, 0.03), 0px 1px 4px rgba(0, 0, 0, 0.04)',
    '0px 4px 12px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.06)',
    '0px 6px 16px rgba(0, 0, 0, 0.05), 0px 3px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 24px rgba(0, 0, 0, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.1)',
    '0px 12px 32px rgba(0, 0, 0, 0.07), 0px 6px 16px rgba(0, 0, 0, 0.12)',
    '0px 16px 40px rgba(0, 0, 0, 0.08), 0px 8px 20px rgba(0, 0, 0, 0.14)',
    '0px 20px 48px rgba(0, 0, 0, 0.09), 0px 10px 24px rgba(0, 0, 0, 0.16)',
    ...Array(17).fill('none'), // Fill the rest with 'none'
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          scrollBehavior: 'smooth',
        },
        'html, body': {
          height: '100%',
        },
        body: {
          padding: 0,
          margin: 0,
        },
        '#__next': {
          height: '100%',
        },
        '::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '4px',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#c1c1c1',
          borderRadius: '4px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#a8a8a8',
        },
        '.gradient-text': {
          background: 'linear-gradient(135deg, #3A86FF 0%, #00CFFD 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        },
        '.glassmorphism': {
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
        '@keyframes fadeIn': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        '@keyframes slideUp': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        '@keyframes pulse': {
          '0%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: 0.8,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
        '@keyframes float': {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        '@keyframes spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        '.animate-fadeIn': {
          animation: 'fadeIn 0.6s ease-out forwards',
        },
        '.animate-slideUp': {
          animation: 'slideUp 0.6s ease-out forwards',
        },
        '.animate-pulse': {
          animation: 'pulse 2s ease-in-out infinite',
        },
        '.animate-float': {
          animation: 'float 5s ease-in-out infinite',
        },
        '.animate-spin': {
          animation: 'spin 1s linear infinite',
        },
        '.stagger-item': {
          animationDelay: 'calc(var(--index) * 0.1s)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.3s ease-out',
          },
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.12)',
            '&::after': {
              transform: 'translateX(0)',
            },
          },
        },
        contained: {
          '&:active': {
            transform: 'translateY(1px)',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #3A86FF 0%, #00CFFD 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #2E7DFF 0%, #00BFE9 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #8A2BE2 0%, #5E17EB 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #7B1ED3 0%, #5411DC 100%)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 16px 40px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 20,
        },
        elevation1: {
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.03)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'box-shadow 0.3s ease',
            '&.Mui-focused': {
              boxShadow: '0px 0px 0px 3px rgba(58, 134, 255, 0.15)',
              '& fieldset': {
                borderWidth: 2,
                borderColor: '#3A86FF',
              },
            },
            '&:hover fieldset': {
              borderColor: '#3A86FF',
            },
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: '0 12px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '16px 24px',
          borderBottom: 'none',
        },
        head: {
          fontWeight: 600,
          backgroundColor: 'rgba(58, 134, 255, 0.05)',
          color: '#14213D',
        },
        body: {
          color: '#4E5D78',
          '&:first-of-type': {
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
          },
          '&:last-of-type': {
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.08)',
          },
          '&.MuiTableRow-root.MuiTableRow-head': {
            boxShadow: 'none',
            '&:hover': {
              transform: 'none',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        filled: {
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.08)',
        },
        standardError: {
          backgroundColor: 'rgba(255, 61, 113, 0.1)',
          color: '#DB0050',
        },
        standardWarning: {
          backgroundColor: 'rgba(255, 170, 0, 0.1)',
          color: '#DB9000',
        },
        standardInfo: {
          backgroundColor: 'rgba(0, 207, 253, 0.1)',
          color: '#00A3CA',
        },
        standardSuccess: {
          backgroundColor: 'rgba(0, 207, 253, 0.1)',
          color: '#00A3CA',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: 'none',
          minWidth: 'unset',
          padding: '12px 24px',
          transition: 'all 0.2s ease',
          '&.Mui-selected': {
            backgroundColor: 'rgba(58, 134, 255, 0.08)',
            borderRadius: 8,
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          marginBottom: 4,
          transition: 'background-color 0.2s ease',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 52,
          height: 32,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 4,
            '&.Mui-checked': {
              transform: 'translateX(20px)',
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#3A86FF',
              },
            },
          },
          '& .MuiSwitch-thumb': {
            width: 24,
            height: 24,
            borderRadius: 12,
          },
          '& .MuiSwitch-track': {
            opacity: 1,
            borderRadius: 16,
            backgroundColor: '#C9D1D9',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 20,
          boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            borderRadius: 8,
            minWidth: 36,
            height: 36,
            margin: '0 4px',
            '&.Mui-selected': {
              backgroundColor: '#3A86FF',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#0066DB',
              },
            },
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          border: 'none',
        },
      },
    },
  },
});

// Make the typography responsive
theme = responsiveFontSizes(theme);

export default theme;