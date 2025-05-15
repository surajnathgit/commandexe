"use client";
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Container,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';
import Link from 'next/link';
import { Box } from '@mui/system';
import { useRouter } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import Image from 'next/image';

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

const ImprovedHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 280, height: '100%', p: 0 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          background: 'linear-gradient(90deg, #3A86FF, #00CFFD)',
          color: 'white',
        }}
      >
        <Box sx={{ maxWidth: '150px' }}>
          <Image src="/logo.png" alt="CommandX Logo" width={30} height={30} style={{ width: "30px" , height: '30px', width: 'auto' }} />
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }} aria-label="close menu">
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 1 }}>
        {navigationItems.map((item) => (
          <ListItem
            button
            key={item.name}
            component={Link}
            href={item.path}
            onClick={handleDrawerToggle}
            sx={{
              py: 1.5,
              pl: 3,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: router.pathname === item.path ? 600 : 400,
                color: router.pathname === item.path ? theme.palette.primary.main : 'inherit',
              }}
            >
              {item.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
          color: theme.palette.text.primary,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" passHref style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                  <Image src="/logo.png" alt="CommandX Logo" width={300} height={40} style={{ height: '40px', width: 'auto' }} />
                </Box>
              </Link>
            </motion.div>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <Link href={item.path} passHref style={{ textDecoration: 'none' }}>
                    <Button
                      sx={{
                        mx: 1,
                        px: 2,
                        py: 1,
                        color: theme.palette.text.primary,
                        fontWeight: 500,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 6,
                          left: '50%',
                          transform: router.pathname === item.path ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
                          height: 3,
                          width: router.pathname === item.path ? '20px' : '0',
                          borderRadius: '10px',
                          backgroundColor: theme.palette.primary.main,
                          transition: 'all 0.3s ease',
                        },
                        '&:hover': {
                          backgroundColor: 'transparent',
                          '&::after': {
                            transform: 'translateX(-50%) scaleX(1)',
                            width: '20px',
                          },
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  component={Link}
                  hrefElems="true"
                  href="/contact"
                 
                  // onClick={router.push('/contact')}
                  variant="contained"
                  sx={{
                    ml: 2,
                    background: 'linear-gradient(90deg, #3A86FF, #00CFFD)',
                    boxShadow: '0px 4px 14px rgba(58, 134, 255, 0.3)',
                  }}
                >
                  Book a Demo
                </Button>
              </motion.div>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: theme.palette.text.primary, ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            borderRadius: '16px 0 0 16px',
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Toolbar />
    </>
  );
};

export default ImprovedHeader;