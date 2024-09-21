import React, { useState, useEffect } from 'react';
import { Table, Spin, Alert } from 'antd';
import { fetchSalaries } from './services/api'; // Adjust this import based on your project structure

// Define a type for salary data
interface SalaryData {
  year: number;
  totalJobs: number;
  averageSalary: number;
}

const MainTable: React.FC = () => {
  const [salaries, setSalaries] = useState<SalaryData[]>([]); // Specify the type
  const [loading, setLoading] = useState<boolean>(true); // Specify the type
  const [error, setError] = useState<null | string>(null); // Specify the type

  useEffect(() => {
    const getSalaries = async () => {
      try {
        const data = await fetchSalaries(); // Fetch salaries from the API
        setSalaries(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch salaries data');
        setLoading(false);
      }
    };

    getSalaries(); // Call the function to fetch salaries
  }, []);

  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      sorter: (a: SalaryData, b: SalaryData) => a.year - b.year,
    },
    {
      title: 'Total Jobs',
      dataIndex: 'totalJobs',
      sorter: (a: SalaryData, b: SalaryData) => a.totalJobs - b.totalJobs,
    },
    {
      title: 'Average Salary (USD)',
      dataIndex: 'averageSalary',
      sorter: (a: SalaryData, b: SalaryData) => a.averageSalary - b.averageSalary,
    },
  ];

  if (loading) {
    return <Spin tip="Loading data..." />; // Loading spinner
  }

  if (error) {
    return <Alert message={error} type="error" />; // Show error message
  }

  return <Table columns={columns} dataSource={salaries} rowKey="year" />; // Adjust rowKey if necessary
};

export default MainTable;
