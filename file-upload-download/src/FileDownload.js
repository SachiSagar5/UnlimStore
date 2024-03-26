// src/components/FileDownload.js
import React from 'react';
import axios from 'axios';

const FileDownload = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get('http://example.com/download', {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.txt');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return <button onClick={handleDownload}>Download</button>;
};

export default FileDownload;
