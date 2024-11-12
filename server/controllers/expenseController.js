const Expense = require('../models/Expense');

// Create a new expense
exports.createExpense = async (req, res) => {
  const { title, amount, category, date } = req.body;
  try {
    const expense = new Expense({ title, amount, category, date, user: req.userId });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all expenses for a user
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.userId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// // Update an expense
// exports.updateExpense = async (req, res) => {
//   const { id } = req.params;
//   const { title, amount, category, date } = req.body;
//   try {
//     const updatedExpense = await Expense.findByIdAndUpdate(
//       id,
//       { title, amount, category, date },
//       { new: true }
//     );
//     res.status(200).json(updatedExpense);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Update an expense
exports.updateExpense = async (req, res) => {
    const { id } = req.params;  // The ID of the expense to update
    const { title, amount, category, date } = req.body;  // New values for the expense
  
    try {
      const updatedExpense = await Expense.findByIdAndUpdate(
        id,  // Find the expense by its ID
        { title, amount, category, date },  // Update the values
        { new: true }  // Return the updated expense object
      );
      res.status(200).json(updatedExpense);  // Respond with the updated expense
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  



// Delete an expense
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
