import api from '../api';

// Get all expenses
export const getExpenses = async () => {
  const response = await api.get('/expenses');
  return response.data;
};

// Add a new expense
export const addExpense = async (expense) => {
  const response = await api.post('/expenses', expense);
  return response.data;
};

// Update an expense
export const updateExpense = async (id, expense) => {
  const response = await api.put(`/expenses/${id}`, expense);
  return response.data;
};

// Delete an expense
export const deleteExpense = async (id) => {
  const response = await api.delete(`/expenses/${id}`);
  return response.data;
};
