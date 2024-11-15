const Expense = require('../models/Expense');

// Create a new expense
exports.createExpense = async (req, res) => {
  const { title, amount, category, date } = req.body;
  try {
    const expense = new Expense({ title, amount, category, date, user: req.userId });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all expenses for a user
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.userId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Update an expense
exports.updateExpense = async (req, res) => {
    const { id } = req.params;  // The ID of the expense to update
    const { title, amount, category, date } = req.body;  // New values for the expense
  
    try {
      const updatedExpense = await Expense.findByIdAndUpdate(
        id,  // Find the expense by its ID
        { title, amount, category, date },  // Update the values
        { new: true }  // Return the updated expense object
      );
      res.status(200).json(updatedExpense);  // Respond with the updated expense
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  



// Delete an expense
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// import React, { useEffect, useState } from 'react';
// import { Button, Container, Typography, Box, Grid, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import SavingsIcon from '@mui/icons-material/Savings';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import TrendingDownIcon from '@mui/icons-material/TrendingDown';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [expenses, setExpenses] = useState([]); // State to store expenses

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   // Fetch expenses on component mount
//   useEffect(() => {
//     const fetchExpenses = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Fetch token from local storage
//         const response = await axios.get('http://localhost:5001/api/expenses', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setExpenses(response.data); // Set the fetched expenses in state
//       } catch (error) {
//         console.error('Error fetching expenses:', error);
//       }
//     };

//     fetchExpenses();
//   }, []);

//   return (
//     <Container maxWidth="lg">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           minHeight: '100vh',
//           backgroundColor: 'background.default',
//           borderRadius: 2,
//           p: 3,
//         }}
//       >
//         <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center', mb: 3 }}>
//           Dashboard
//         </Typography>
//         <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, textAlign: 'center' }}>
//           Welcome to your personalized expense tracker dashboard!
//         </Typography>

//         {/* Financial Overview Section */}
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper elevation={4} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
//               <SavingsIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
//               <Typography variant="h6" fontWeight="bold">
//                 Total Savings
//               </Typography>
//               <Typography variant="h4" color="success.main">
//                 $5,200
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper elevation={4} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
//               <TrendingUpIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
//               <Typography variant="h6" fontWeight="bold">
//                 Income This Month
//               </Typography>
//               <Typography variant="h4" color="primary.main">
//                 $2,300
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper elevation={4} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
//               <TrendingDownIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
//               <Typography variant="h6" fontWeight="bold">
//                 Expenses This Month
//               </Typography>
//               <Typography variant="h4" color="error.main">
//                 $1,800
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Expenses List Section */}
//         <Box sx={{ mt: 4, width: '100%' }}>
//           <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
//             Your Expenses
//           </Typography>
//           {expenses.length > 0 ? (
//             <Grid container spacing={3}>
//               {expenses.map((expense) => (
//                 <Grid item xs={12} md={6} key={expense._id}>
//                   <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
//                     <Typography variant="h6" fontWeight="bold">
//                       {expense.title}
//                     </Typography>
//                     <Typography color="text.secondary">Category: {expense.category}</Typography>
//                     <Typography color="text.secondary">Amount: ${expense.amount}</Typography>
//                     <Typography color="text.secondary">Date: {new Date(expense.date).toLocaleDateString()}</Typography>
//                   </Paper>
//                 </Grid>
//               ))}
//             </Grid>
//           ) : (
//             <Typography color="text.secondary">No expenses found.</Typography>
//           )}
//         </Box>

//         {/* Logout Button */}
//         <Button
//           variant="contained"
//           color="secondary"
//           size="large"
//           onClick={handleLogout}
//           sx={{
//             mt: 5,
//             px: 4,
//             py: 1,
//             fontSize: '1.1rem',
//             fontWeight: 'medium',
//             borderRadius: 4,
//             boxShadow: 2,
//             '&:hover': {
//               backgroundColor: 'secondary.dark',
//               boxShadow: 4,
//             },
//           }}
//         >
//           Logout
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Dashboard;
