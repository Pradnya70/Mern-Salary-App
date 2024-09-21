import axios from 'axios';

const API_URL = 'http://localhost:5000/api/salaries';

// src/services/api.js

export const fetchSalaries = async () => {
  // Simulate an API call or use an actual API endpoint here
  const response = await fetch('/api/salaries'); // Adjust this URL to your API endpoint

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  // Example of what the returned data might look like
  return data.map((item) => ({
    _id: item._id,  // Ensure this matches your actual data structure
    year: item.year,
    totalJobs: item.totalJobs,
    averageSalary: item.averageSalary,
  }));
};
