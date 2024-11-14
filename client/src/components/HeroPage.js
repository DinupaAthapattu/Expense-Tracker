import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

// Hero Page Component
const HeroPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register'); // Redirects to the registration page
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #1e3c72, #2a5298)', // Darker blue gradient
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Title Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                color: 'white',
                mb: 2,
              }}
            >
              Welcome to Your Expense Tracker
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                mb: 4,
                fontWeight: 400,
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
              }}
            >
              Track your spending, plan your budget, and save more money with ease. Start managing your finances today!
            </Typography>
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleGetStarted}
              sx={{
                fontSize: '1.2rem',
                px: 4,
                py: 2,
                borderRadius: 4,
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                  boxShadow: 5,
                },
                mt: 4,  // Added margin top to lower the button
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </Box>

        {/* Feature Section */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 5 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={6} sx={{ p: 4, textAlign: 'center', borderRadius: 2, boxShadow: 3 }}>
              <AccountBalanceIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Track Your Expenses
              </Typography>
              <Typography color="text.secondary">
                Easily add, categorize, and view your expenses to stay on top
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={6} sx={{ p: 4, textAlign: 'center', borderRadius: 2, boxShadow: 3 }}>
              <AccountBalanceIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Save and Plan
              </Typography>
              <Typography color="text.secondary">
                Set up budgets, save for goals, and plan your future with financial insights.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={6} sx={{ p: 4, textAlign: 'center', borderRadius: 2, boxShadow: 3 }}>
              <AccountBalanceIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Detailed Reports
              </Typography>
              <Typography color="text.secondary">
                Analyze your spending habits with detailed reports and visual charts.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroPage;
