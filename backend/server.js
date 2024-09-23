const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expenseRoutes = require('./routes/expenses'); // Expense routes

const app = express();
const port = 3000;

// Enable CORS only for the React app running on port 3001
const corsOptions = {
  origin: 'http://localhost:3001', // Your React app
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
};

app.use(cors(corsOptions)); // Use the CORS middleware with options

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/expenses', expenseRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
