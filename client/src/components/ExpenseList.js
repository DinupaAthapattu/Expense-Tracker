// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Box, Grid, Paper, CircularProgress } from '@mui/material';
// import axios from 'axios';

// const AllExpenses = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExpenses = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5001/api/expenses', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setExpenses(response.data);
//       } catch (error) {
//         console.error('Error fetching expenses:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExpenses();
//   }, []);

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ textAlign: 'center', mt: 5 }}>
//         <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
//           All Expenses
//         </Typography>

//         {loading ? (
//           <CircularProgress color="primary" />
//         ) : expenses.length > 0 ? (
//           <Grid container spacing={3}>
//             {expenses.map((expense) => (
//               <Grid item xs={12} sm={6} key={expense._id}>
//                 <Paper elevation={4} sx={{ p: 3, borderRadius: 2, textAlign: 'left' }}>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{expense.title}</Typography>
//                   <Typography color="text.secondary" sx={{ mb: 1 }}>Category: {expense.category}</Typography>
//                   <Typography color="text.secondary" sx={{ mb: 1 }}>Amount: ${expense.amount}</Typography>
//                   <Typography color="text.secondary">Date: {new Date(expense.date).toLocaleDateString()}</Typography>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         ) : (
//           <Typography color="text.secondary">No expenses found.</Typography>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default AllExpenses;


import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Paper, CircularProgress, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const AllExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5001/api/expenses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    const sortedExpenses = [...expenses].sort((a, b) => {
      if (option === 'title') {
        return a.title.localeCompare(b.title);
      } else if (option === 'amount') {
        return b.amount - a.amount;
      } else if (option === 'date') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return 0;
      }
    });
    setExpenses(sortedExpenses);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
          All Expenses
        </Typography>

        <FormControl variant="outlined" sx={{ minWidth: 200, mb: 4 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortOption}
            onChange={handleSortChange}
            label="Sort By"
            sx={{
              borderRadius: 2,
              boxShadow: 1,
              '.MuiOutlinedInput-notchedOutline': { borderColor: 'primary.light' }
            }}
          >
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="amount">Amount</MenuItem>
            <MenuItem value="date">Date</MenuItem>
          </Select>
        </FormControl>

        {loading ? (
          <CircularProgress color="primary" />
        ) : expenses.length > 0 ? (
          <Grid container spacing={3}>
            {expenses.map((expense) => (
              <Grid item xs={12} sm={6} key={expense._id}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'left',
                    background: 'linear-gradient(135deg, #f0f4ff, #d7e3fc)',
                    '&:hover': { boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                    {expense.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    Category: {expense.category}
                  </Typography>
                  <Typography sx={{ color: 'secondary.main', fontSize: '1.2rem', fontWeight: 'medium' }}>
                    Amount: ${expense.amount}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    Date: {new Date(expense.date).toLocaleDateString()}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography color="text.secondary">No expenses found.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default AllExpenses;
