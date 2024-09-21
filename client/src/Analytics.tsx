import React from 'react';
import { Line } from '@ant-design/charts';

const Analytics: React.FC = () => {
  const data = [
    // Sample data to be replaced by the fetched data
    { year: '2020', value: 100 },
    { year: '2021', value: 200 },
    { year: '2022', value: 300 },
    { year: '2023', value: 400 },
    { year: '2024', value: 500 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  return <Line {...config} />;
};

export default Analytics;
