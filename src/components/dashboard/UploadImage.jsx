import React, { useState } from 'react';
import './uploadImage.css';

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const analyse = () => {
    if (selectedFile) {
      // Redirect to the results page if a file is selected
      document.location.href = '/results';
    } else {
      alert('Please select an image file first.');
    }
  };

  return (
    <>
      <h1 className='uploadImage'>Upload Image to get Crop Analysis</h1>
      <div>
        <input 
          type="file" 
          className='uploadBtn' 
          accept="image/*" // Optional: only allow image files
          onChange={handleFileChange} 
        />
        <button type='button' className='goBtn' onClick={analyse}>Go</button>
      </div>
    </>
  );
};

export default UploadImage;