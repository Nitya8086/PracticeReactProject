// src/ImageUpload.js
import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    setPreviews(files.map(file => URL.createObjectURL(file)));
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      alert('Please select at least one image to upload.');
      return;
    }

    selectedFiles.forEach(file => {
      console.log('Uploading file:', file.name);
    });

    alert('Upload process simulated. Check console for file details.');
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />
      <div>
        {previews.map((preview, index) => (
          <img key={index} src={preview} alt="Preview" style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
      <button onClick={handleUpload}>Upload Images</button>
    </div>
  );
};

export default ImageUpload;
