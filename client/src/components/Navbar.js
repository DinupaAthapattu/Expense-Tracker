import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom'; // For routing links

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate(); // For navigation after logout

  // Initialize `isLoggedIn` state directly from `localStorage`
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    navigate('/'); // Navigate to login page
    window.location.reload(); // Force reload to reset app state
  };

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(45deg, #2196f3, #0d47a1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo or App Name */}
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textTransform: 'uppercase',
            }}
          >
            BudgetMate
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile View Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            BudgetMate
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Button
              sx={{
                color: 'white',
                fontWeight: 600,
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: 'transparent',
                  borderBottom: '2px solid white',
                },
                marginLeft: 3,
              }}
            >
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </Link>
            </Button>
            <Button
              sx={{
                color: 'white',
                fontWeight: 600,
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: 'transparent',
                  borderBottom: '2px solid white',
                },
                marginLeft: 3,
              }}
            >
              <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                About
              </Link>
            </Button>
            <Button
              sx={{
                color: 'white',
                fontWeight: 600,
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: 'transparent',
                  borderBottom: '2px solid white',
                },
                marginLeft: 3,
              }}
            >
              <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
                Contact
              </Link>
            </Button>

            {/* Conditional Render for Log In / Log Out Button */}
            {isLoggedIn ? (
              <Button
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    borderBottom: '2px solid white',
                  },
                  marginLeft: 3,
                }}
                onClick={handleLogout}
              >
                Log Out
              </Button>
            ) : (
              <Button
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    borderBottom: '2px solid white',
                  },
                  marginLeft: 3,
                }}
              >
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                  Log In
                </Link>
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
