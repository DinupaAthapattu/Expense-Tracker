// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';  // Import React Hot Toast

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5001/api/users/login', formData);
//       localStorage.setItem('token', response.data.token);  // Save token to localStorage
//       toast.success('Login successful!');  // Show success notification
//       navigate('/dashboard');  // Redirect to dashboard on successful login
//     } catch (error) {
//       if (error.response && error.response.data) {
//         toast.error(`Login error: ${error.response.data.message}`);  // Show error notification
//       } else {
//         toast.error('An unexpected error occurred.');
//       }
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Toaster position="top-right" reverseOrder={false} />  {/* React Hot Toast */}
//       <Typography variant="h4" component="h1" gutterBottom>
//         Login
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Email"
//           name="email"
//           type="email"
//           fullWidth
//           margin="normal"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           label="Password"
//           name="password"
//           type="password"
//           fullWidth
//           margin="normal"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <Button variant="contained" color="primary" type="submit" fullWidth>
//           Login
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper, Link } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';  // Import React Hot Toast

// Custom styled components
const StyledContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
});

const StyledPaper = styled(Paper)({
  padding: '2rem',
  borderRadius: '8px',
  maxWidth: '400px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
});

const StyledButton = styled(Button)({
  marginTop: '1rem',
  padding: '0.75rem',
  fontWeight: 'bold',
  backgroundColor: '#1976d2',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/users/login', formData);
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful!');  // Show success notification
      navigate('/dashboard');  // Redirect on successful login
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Login error: ${error.response.data.message}`);  // Show error notification
      } else {
        toast.error('An unexpected error occurred.');
      }
      console.error("Login error:", error);
    }
  };

  return (
    <StyledContainer maxWidth="sm">
      <Toaster position="top-right" reverseOrder={false} />  {/* React Hot Toast */}
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h1" align="center" gutterBottom color="primary">
          Welcome!
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
          Please login to continue
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <StyledButton variant="contained" color="primary" type="submit" fullWidth>
            Login
          </StyledButton>
        </Box>
        <Typography align="center" variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          Don't have an account?{' '}
          <Link href="/register" variant="body2" underline="hover" color="primary">
            Register here
          </Link>
        </Typography>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Login;
