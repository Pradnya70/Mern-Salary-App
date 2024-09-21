import React from 'react';
import MainTable from './MainTable';
import Analytics from './Analytics';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>ML Engineer Salary Data</h1>
      <MainTable />
      <Analytics />
    </div>
  );
};

export default App;
