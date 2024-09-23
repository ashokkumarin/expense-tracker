const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

// Connect to the SQLite database
const db = new sqlite3.Database('./db/database.sqlite');

// Get all expenses
router.get('/', (req, res) => {
  db.all('SELECT * FROM expenses', [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).json(rows);
  });
});

// Add a new expense
router.post('/', (req, res) => {
  const { description, amount, category, date } = req.body;

  db.run(
    `INSERT INTO expenses (description, amount, category, date) VALUES (?, ?, ?, ?)`,
    [description, amount, category, date],
    function (err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(201).send({ id: this.lastID });
    }
  );
});

// Update an expense by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { description, amount, category, date } = req.body;

  db.run(
    `UPDATE expenses SET description = ?, amount = ?, category = ?, date = ? WHERE id = ?`,
    [description, amount, category, date, id],
    function (err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (this.changes === 0) {
        return res.status(404).send('Expense not found');
      }
      res.status(200).send('Expense updated');
    }
  );
});

// Delete an expense by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM expenses WHERE id = ?`, [id], function (err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    if (this.changes === 0) {
      return res.status(404).send('Expense not found');
    }
    res.status(200).send('Expense deleted');
  });
});

module.exports = router;
