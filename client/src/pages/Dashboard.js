


import React, { useState } from 'react';
import { Button, Container, Typography, Box, Grid, Paper, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SavingsIcon from '@mui/icons-material/Savings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AddIcon from '@mui/icons-material/Add';
import AddExpense from '../components/AddExpense'; // Assuming AddExpense is in the components folder

const Dashboard = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token on logout
    navigate('/');  // Redirect to login
  };

  const handleOpenDialog = () => {
    setOpenDialog(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: 'background.default',
          borderRadius: 2,
          p: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textAlign: 'center',
            mb: 3,
          }}
        >
          Dashboard
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Welcome to your personalized expense tracker dashboard!
        </Typography>

        {/* Financial Overview Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <SavingsIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Total Savings
              </Typography>
              <Typography variant="h4" color="success.main">
                $5,200
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <TrendingUpIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Income This Month
              </Typography>
              <Typography variant="h4" color="primary.main">
                $2,300
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <TrendingDownIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Expenses This Month
              </Typography>
              <Typography variant="h4" color="error.main">
                $1,800
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Add Expense Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddIcon />}
          onClick={handleOpenDialog}
          sx={{
            mt: 5,
            px: 4,
            py: 1,
            fontSize: '1.1rem',
            fontWeight: 'medium',
            borderRadius: 4,
            boxShadow: 2,
            '&:hover': {
              backgroundColor: 'primary.dark',
              boxShadow: 4,
            },
          }}
        >
          Add Expense
        </Button>

        {/* Logout Button */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleLogout}
          sx={{
            mt: 2,
            px: 4,
            py: 1,
            fontSize: '1.1rem',
            fontWeight: 'medium',
            borderRadius: 4,
            boxShadow: 2,
            '&:hover': {
              backgroundColor: 'secondary.dark',
              boxShadow: 4,
            },
          }}
        >
          Logout
        </Button>
      </Box>

      {/* Add Expense Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Add New Expense</DialogTitle>
        <DialogContent>
          <AddExpense /> {/* Assuming AddExpense is the form to add a new expense */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Dashboard;
