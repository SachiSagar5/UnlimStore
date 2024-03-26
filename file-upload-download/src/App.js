// src/App.js
import React from 'react';
import './App.css';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';

function App() {
  return (
    <div className="App">
      <h1>File Upload and Download</h1>
      <FileUpload />
      <FileDownload />
    </div>
  );
}

export default App;
