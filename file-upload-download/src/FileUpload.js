// src/components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
const FormData = require('form-data');
let data = new FormData();
data.append('chat_id', '529363361');
data.append('document', file);
data.append('caption', 'uploaded files');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.telegram.org/bot7061190898:AAFGtWTHb79WjAWBmFPGfLRINxbnwg_TMmo/sendDocument',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
  };




  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
