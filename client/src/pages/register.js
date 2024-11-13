// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography } from '@mui/material';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`http://localhost:5001/api/users/register`, formData);
//       toast.success("Registration successful!");  // Show success notification
//       console.log("Registration successful:", response.data);
      
//       // Redirect to login page after successful registration
//       navigate('/Login');
//     } catch (error) {
//       if (error.response && error.response.data) {
//         toast.error(`Registration error: ${error.response.data.message}`);
//       } else {
//         toast.error("An unexpected error occurred.");
//       }
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Toaster position="top-right" reverseOrder={false} />
//       <Typography variant="h4" component="h1" gutterBottom>
//         Register
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Name"
//           name="name"
//           fullWidth
//           margin="normal"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
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
//           Register
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
  marginTop: '1.5rem',
  padding: '0.75rem',
  fontWeight: 'bold',
  backgroundColor: '#1976d2',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5001/api/users/register`, formData);
      toast.success("Registration successful!");
      console.log("Registration successful:", response.data);

      navigate('/');  // Redirect after registration
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Registration error: ${error.response.data.message}`);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <StyledContainer maxWidth="sm">
      <Toaster position="top-right" reverseOrder={false} />
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h1" align="center" gutterBottom color="primary">
          Create an Account
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
          Please fill in the form to register
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
            Register
          </StyledButton>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Register;
