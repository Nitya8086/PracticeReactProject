// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import DocumentManager from './components/DocumentManager';
import './App.css';

const App = () => {
  const [page, setPage] = useState('keyDetails');

  const renderPage = () => {
    switch (page) {
      case 'keyDetails':
        return <h2>Key Details Page</h2>;
      case 'moreInfo':
        return <h2>More Info Page</h2>;
      case 'oabs':
        return <h2>OABs Page</h2>;
      case 'applicants':
        return <h2>Applicants Page</h2>;
      case 'documents':
        return <DocumentManager />;
      default:
        return <h2>Welcome</h2>;
    }
  };

  return (
    <div className="App">
      <Header setPage={setPage} />
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
