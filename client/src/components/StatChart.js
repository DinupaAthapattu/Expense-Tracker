import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Paper, CircularProgress } from '@mui/material';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ExpenseStatistics = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const categoryData = expenses.reduce((acc, expense) => {
    const category = expense.category;
    if (acc[category]) {
      acc[category] += expense.amount;
    } else {
      acc[category] = expense.amount;
    }
    return acc;
  }, {});

  const expenseByCategory = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category]
  }));

  const expensesOverTime = expenses.map((expense) => ({
    date: new Date(expense.date).toLocaleDateString(),
    amount: expense.amount
  }));

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
          Expense Statistics
        </Typography>

        {loading ? (
          <CircularProgress color="primary" />
        ) : (
          <Grid container spacing={4}>
            {/* Pie Chart for Expenses by Category */}
            <Grid item xs={12} md={6}>
              <Paper elevation={4} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Expenses by Category
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={expenseByCategory}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                    >
                      {expenseByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Bar Chart for Expenses Over Time */}
            <Grid item xs={12} md={6}>
              <Paper elevation={4} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Expenses Over Time
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={expensesOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default ExpenseStatistics;
