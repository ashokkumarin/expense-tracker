import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/expenses');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/expenses/${id}`, {
        method: 'DELETE',
      });
      fetchExpenses(); // Refresh the list
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', p: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Expense List
      </Typography>
      <List>
        {expenses.map((expense) => (
          <ListItem
            key={expense.id}
            sx={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              mb: 1,
              backgroundColor: '#f4f4f4',
            }}
          >
            <ListItemText
              primary={expense.description}
              secondary={`${expense.category} - $${expense.amount} - ${expense.date}`}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(expense.id)}>
              <DeleteIcon color="secondary" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ExpenseList;
