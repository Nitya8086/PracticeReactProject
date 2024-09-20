// src/Header.js
import React from 'react';

const Header = ({ setPage }) => {
  return (
    <div className="header">
      <button onClick={() => setPage('keyDetails')}>Key Details</button>
      <button onClick={() => setPage('moreInfo')}>More Info</button>
      <button onClick={() => setPage('oabs')}>OABs</button>
      <button onClick={() => setPage('applicants')}>Applicants</button>
      <button onClick={() => setPage('documents')}>Documents</button>
      <button className="dropdown">▼</button>
    </div>
  );
};

export default Header;
