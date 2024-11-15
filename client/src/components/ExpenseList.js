// // import React, { useEffect, useState } from 'react';
// // import { Container, Typography, Box, Grid, Paper, CircularProgress } from '@mui/material';
// // import axios from 'axios';

// // const AllExpenses = () => {
// //   const [expenses, setExpenses] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchExpenses = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const response = await axios.get('http://localhost:5001/api/expenses', {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         setExpenses(response.data);
// //       } catch (error) {
// //         console.error('Error fetching expenses:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchExpenses();
// //   }, []);

// //   return (
// //     <Container maxWidth="md">
// //       <Box sx={{ textAlign: 'center', mt: 5 }}>
// //         <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
// //           All Expenses
// //         </Typography>

// //         {loading ? (
// //           <CircularProgress color="primary" />
// //         ) : expenses.length > 0 ? (
// //           <Grid container spacing={3}>
// //             {expenses.map((expense) => (
// //               <Grid item xs={12} sm={6} key={expense._id}>
// //                 <Paper elevation={4} sx={{ p: 3, borderRadius: 2, textAlign: 'left' }}>
// //                   <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{expense.title}</Typography>
// //                   <Typography color="text.secondary" sx={{ mb: 1 }}>Category: {expense.category}</Typography>
// //                   <Typography color="text.secondary" sx={{ mb: 1 }}>Amount: ${expense.amount}</Typography>
// //                   <Typography color="text.secondary">Date: {new Date(expense.date).toLocaleDateString()}</Typography>
// //                 </Paper>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         ) : (
// //           <Typography color="text.secondary">No expenses found.</Typography>
// //         )}
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default AllExpenses;


// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Box, Grid, Paper, CircularProgress, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
// import axios from 'axios';

// const AllExpenses = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sortOption, setSortOption] = useState('');

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

//   const handleSortChange = (e) => {
//     const option = e.target.value;
//     setSortOption(option);

//     const sortedExpenses = [...expenses].sort((a, b) => {
//       if (option === 'title') {
//         return a.title.localeCompare(b.title);
//       } else if (option === 'amount') {
//         return b.amount - a.amount;
//       } else if (option === 'date') {
//         return new Date(b.date) - new Date(a.date);
//       } else {
//         return 0;
//       }
//     });
//     setExpenses(sortedExpenses);
//   };

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ textAlign: 'center', mt: 5 }}>
//         <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
//           All Expenses
//         </Typography>

//         <FormControl variant="outlined" sx={{ minWidth: 200, mb: 4 }}>
//           <InputLabel>Sort By</InputLabel>
//           <Select
//             value={sortOption}
//             onChange={handleSortChange}
//             label="Sort By"
//             sx={{
//               borderRadius: 2,
//               boxShadow: 1,
//               '.MuiOutlinedInput-notchedOutline': { borderColor: 'primary.light' }
//             }}
//           >
//             <MenuItem value="title">Title</MenuItem>
//             <MenuItem value="amount">Amount</MenuItem>
//             <MenuItem value="date">Date</MenuItem>
//           </Select>
//         </FormControl>

//         {loading ? (
//           <CircularProgress color="primary" />
//         ) : expenses.length > 0 ? (
//           <Grid container spacing={3}>
//             {expenses.map((expense) => (
//               <Grid item xs={12} sm={6} key={expense._id}>
//                 <Paper
//                   elevation={6}
//                   sx={{
//                     p: 3,
//                     borderRadius: 3,
//                     textAlign: 'left',
//                     background: 'linear-gradient(135deg, #f0f4ff, #d7e3fc)',
//                     '&:hover': { boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }
//                   }}
//                 >
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
//                     {expense.title}
//                   </Typography>
//                   <Typography color="text.secondary" sx={{ mb: 1 }}>
//                     Category: {expense.category}
//                   </Typography>
//                   <Typography sx={{ color: 'secondary.main', fontSize: '1.2rem', fontWeight: 'medium' }}>
//                     Amount: ${expense.amount}
//                   </Typography>
//                   <Typography sx={{ color: 'text.secondary', mt: 1 }}>
//                     Date: {new Date(expense.date).toLocaleDateString()}
//                   </Typography>
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


// import React, { useEffect, useState } from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Paper,
//   CircularProgress,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
// } from '@mui/material';
// import axios from 'axios';

// const AllExpenses = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sortOption, setSortOption] = useState('');
//   const [editExpense, setEditExpense] = useState(null); // For editing an expense
//   const [deleteId, setDeleteId] = useState(null); // For deleting an expense

//   useEffect(() => {
//     const fetchExpenses = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5001/api/expenses', {
//           headers: { Authorization: `Bearer ${token}` },
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

//   const handleSortChange = (e) => {
//     const option = e.target.value;
//     setSortOption(option);

//     const sortedExpenses = [...expenses].sort((a, b) => {
//       if (option === 'title') {
//         return a.title.localeCompare(b.title);
//       } else if (option === 'amount') {
//         return b.amount - a.amount;
//       } else if (option === 'date') {
//         return new Date(b.date) - new Date(a.date);
//       } else {
//         return 0;
//       }
//     });
//     setExpenses(sortedExpenses);
//   };

//   const handleEdit = (expense) => {
//     setEditExpense(expense);
//   };

//   const handleEditSave = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.put(
//         `http://localhost:5001/api/expenses/${editExpense._id}`,
//         editExpense,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setExpenses((prev) =>
//         prev.map((exp) => (exp._id === editExpense._id ? response.data : exp))
//       );
//       setEditExpense(null);
//     } catch (error) {
//       console.error('Error updating expense:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:5001/api/expenses/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setExpenses((prev) => prev.filter((exp) => exp._id !== id));
//       setDeleteId(null);
//     } catch (error) {
//       console.error('Error deleting expense:', error);
//     }
//   };

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ textAlign: 'center', mt: 5 }}>
//         <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
//           All Expenses
//         </Typography>

//         <FormControl variant="outlined" sx={{ minWidth: 200, mb: 4 }}>
//           <InputLabel>Sort By</InputLabel>
//           <Select
//             value={sortOption}
//             onChange={handleSortChange}
//             label="Sort By"
//             sx={{
//               borderRadius: 2,
//               boxShadow: 1,
//               '.MuiOutlinedInput-notchedOutline': { borderColor: 'primary.light' },
//             }}
//           >
//             <MenuItem value="title">Title</MenuItem>
//             <MenuItem value="amount">Amount</MenuItem>
//             <MenuItem value="date">Date</MenuItem>
//           </Select>
//         </FormControl>

//         {loading ? (
//           <CircularProgress color="primary" />
//         ) : expenses.length > 0 ? (
//           <Grid container spacing={3}>
//             {expenses.map((expense) => (
//               <Grid item xs={12} sm={6} key={expense._id}>
//                 <Paper
//                   elevation={6}
//                   sx={{
//                     p: 3,
//                     borderRadius: 3,
//                     textAlign: 'left',
//                     background: 'linear-gradient(135deg, #f0f4ff, #d7e3fc)',
//                     '&:hover': { boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' },
//                   }}
//                 >
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
//                     {expense.title}
//                   </Typography>
//                   <Typography color="text.secondary" sx={{ mb: 1 }}>
//                     Category: {expense.category}
//                   </Typography>
//                   <Typography sx={{ color: 'secondary.main', fontSize: '1.2rem', fontWeight: 'medium' }}>
//                     Amount: ${expense.amount}
//                   </Typography>
//                   <Typography sx={{ color: 'text.secondary', mt: 1 }}>
//                     Date: {new Date(expense.date).toLocaleDateString()}
//                   </Typography>
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//                     <Button variant="contained" color="primary" onClick={() => handleEdit(expense)}>
//                       Edit
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="error"
//                       onClick={() => setDeleteId(expense._id)}
//                     >
//                       Delete
//                     </Button>
//                   </Box>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         ) : (
//           <Typography color="text.secondary">No expenses found.</Typography>
//         )}

//         {/* Edit Dialog */}
//         <Dialog open={!!editExpense} onClose={() => setEditExpense(null)}>
//           <DialogTitle>Edit Expense</DialogTitle>
//           <DialogContent>
//             <TextField
//               fullWidth
//               margin="dense"
//               label="Title"
//               value={editExpense?.title || ''}
//               onChange={(e) =>
//                 setEditExpense({ ...editExpense, title: e.target.value })
//               }
//             />
//             <TextField
//               fullWidth
//               margin="dense"
//               label="Amount"
//               type="number"
//               value={editExpense?.amount || ''}
//               onChange={(e) =>
//                 setEditExpense({ ...editExpense, amount: e.target.value })
//               }
//             />
//             <TextField
//               fullWidth
//               margin="dense"
//               label="Category"
//               value={editExpense?.category || ''}
//               onChange={(e) =>
//                 setEditExpense({ ...editExpense, category: e.target.value })
//               }
//             />
//             <TextField
//               fullWidth
//               margin="dense"
//               label="Date"
//               type="date"
//               value={editExpense?.date ? editExpense.date.split('T')[0] : ''}
//               onChange={(e) =>
//                 setEditExpense({ ...editExpense, date: e.target.value })
//               }
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setEditExpense(null)} color="secondary">
//               Cancel
//             </Button>
//             <Button onClick={handleEditSave} color="primary">
//               Save
//             </Button>
//           </DialogActions>
//         </Dialog>

//         {/* Delete Confirmation Dialog */}
//         <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
//           <DialogTitle>Confirm Delete</DialogTitle>
//           <DialogContent>
//             <Typography>
//               Are you sure you want to delete this expense?
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setDeleteId(null)} color="secondary">
//               Cancel
//             </Button>
//             <Button onClick={() => handleDelete(deleteId)} color="error">
//               Delete
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </Container>
//   );
// };

// export default AllExpenses;


import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const AllExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('');
  const [editExpense, setEditExpense] = useState(null); // For editing an expense
  const [deleteId, setDeleteId] = useState(null); // For deleting an expense

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5001/api/expenses', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setExpenses(response.data);
      } catch (error) {
        toast.error('Error fetching expenses.');
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

  const handleEdit = (expense) => {
    setEditExpense(expense);
  };

  const handleEditSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:5001/api/expenses/${editExpense._id}`,
        editExpense,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setExpenses((prev) =>
        prev.map((exp) => (exp._id === editExpense._id ? response.data : exp))
      );
      setEditExpense(null);
      toast.success('Expense updated successfully!');
    } catch (error) {
      toast.error('Error updating expense.');
      console.error('Error updating expense:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5001/api/expenses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExpenses((prev) => prev.filter((exp) => exp._id !== id));
      setDeleteId(null);
      toast.success('Expense deleted successfully!');
    } catch (error) {
      toast.error('Error deleting expense.');
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Toaster position="top-center" reverseOrder={false} />
      <Box sx={{ textAlign: 'center', mb: 4 }}>
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
              '.MuiOutlinedInput-notchedOutline': { borderColor: 'primary.light' },
            }}
          >
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="amount">Amount</MenuItem>
            <MenuItem value="date">Date</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {loading ? (
        <Box sx={{ textAlign: 'center', py: 5 }}>
          <CircularProgress color="primary" />
        </Box>
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
                  background: 'linear-gradient(135deg, #f5faff, #e3f2fd)',
                  '&:hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)' },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                  {expense.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 1 }}>
                  Category: {expense.category}
                </Typography>
                <Typography
                  sx={{
                    color: 'secondary.main',
                    fontSize: '1.2rem',
                    fontWeight: 'medium',
                  }}
                >
                  Amount: ${expense.amount}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                  Date: {new Date(expense.date).toLocaleDateString()}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ px: 3 }}
                    onClick={() => handleEdit(expense)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ px: 3 }}
                    onClick={() => setDeleteId(expense._id)}
                  >
                    Delete
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
          No expenses found.
        </Typography>
      )}

      {/* Edit Dialog */}
      <Dialog open={!!editExpense} onClose={() => setEditExpense(null)}>
        <DialogTitle>Edit Expense</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Title"
            value={editExpense?.title || ''}
            onChange={(e) =>
              setEditExpense({ ...editExpense, title: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Amount"
            type="number"
            value={editExpense?.amount || ''}
            onChange={(e) =>
              setEditExpense({ ...editExpense, amount: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Category"
            value={editExpense?.category || ''}
            onChange={(e) =>
              setEditExpense({ ...editExpense, category: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Date"
            type="date"
            value={editExpense?.date ? editExpense.date.split('T')[0] : ''}
            onChange={(e) =>
              setEditExpense({ ...editExpense, date: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditExpense(null)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this expense?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => handleDelete(deleteId)} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AllExpenses;
