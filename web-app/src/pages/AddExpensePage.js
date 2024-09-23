import React, { useState } from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';

const AddExpensePage = () => {
  const [isExpenseAdded, setIsExpenseAdded] = useState(false);

  const refreshExpenses = () => {
    setIsExpenseAdded(!isExpenseAdded); // Trigger a state change to refresh the expense list
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <AddExpenseForm onExpenseAdded={refreshExpenses} />
      <ExpenseList key={isExpenseAdded} />
    </div>
  );
};

export default AddExpensePage;
