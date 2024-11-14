// import React, { useState } from 'react';
// import axios from 'axios';

// const AddExpense = () => {
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('Food');
//   const [date, setDate] = useState(new Date().toISOString().substring(0, 10)); // Sets to current date

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const token = localStorage.getItem('token'); // Retrieve token from localStorage
//       const response = await axios.post(
//         'http://localhost:5001/api/expenses', // Adjust the URL if necessary
//         { title, amount, category, date },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include the token in the Authorization header
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       console.log('Expense added successfully:', response.data);
//     } catch (error) {
//       console.error('Add expense error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//       </label>
//       <label>
//         Amount:
//         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
//       </label>
//       <label>
//         Category:
//         <select value={category} onChange={(e) => setCategory(e.target.value)} required>
//           <option value="Food">Food</option>
//           <option value="Travel">Travel</option>
//           <option value="Bills">Bills</option>
//           <option value="Shopping">Shopping</option>
//           <option value="Other">Other</option>
//         </select>
//       </label>
//       <label>
//         Date:
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//       </label>
//       <button type="submit">Add Expense</button>
//     </form>
//   );
// };

// export default AddExpense;


import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';

const AddExpense = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10)); // Sets to current date

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const response = await axios.post(
        'http://localhost:5001/api/expenses', // Adjust the URL if necessary
        { title, amount, category, date },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('Expense added successfully!'); // Success toast
      console.log('Expense added successfully:', response.data);
    } catch (error) {
      toast.error('Failed to add expense!'); // Error toast
      console.error('Add expense error:', error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper',
        mt: 5,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Add New Expense
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Amount"
          variant="outlined"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
            required
          >
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Travel">Travel</MenuItem>
            <MenuItem value="Bills">Bills</MenuItem>
            <MenuItem value="Shopping">Shopping</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Date"
          variant="outlined"
          type="date"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          sx={{ mb: 3 }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Expense
        </Button>
      </form>
    </Box>
  );
};

export default AddExpense;
