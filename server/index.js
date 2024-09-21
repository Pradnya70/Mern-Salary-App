// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const salarySchema = new mongoose.Schema({
  year: Number,
  totalJobs: Number,
  averageSalary: Number,
  jobDetails: [{ title: String, count: Number }],
});

const Salary = mongoose.model('Salary', salarySchema);

// API Endpoints
app.get('/api/salaries', async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.json(salaries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
