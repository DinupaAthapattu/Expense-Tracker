

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from './pages/register';
import Dashboard from './pages/Dashboard'; // Placeholder for Dashboard
import Expenses from './pages/Expenses';   // Placeholder for Expense tracker page
import Login from './pages/Login';
import Navbar from './components/Navbar';
import AddExpense from './components/AddExpense';
import { Toaster } from 'react-hot-toast'; // Import Toaster from react-hot-toast
import ExpenseList from './components/ExpenseList'
import StatChart from "./components/StatChart"
import HeroPage from "./components/HeroPage"

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Customize as needed
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        {/* Add the Toaster here */}
        <Toaster position="top-center" reverseOrder={false} /> {/* Customize position */}
        <Routes>
          <Route path='expenselist' element={<ExpenseList />} />
          <Route path='/' element={<HeroPage />} />
          <Route path='statchart' element={<StatChart />} />
          <Route path='addexpense' element={<AddExpense />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
