import React, { useState } from 'react';
import axios from 'axios';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setErrorMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/apiRoute', formData);

      if (response.status === 200) {
        setFileUrl(response.data.fileUrl);
        setErrorMessage('');
      } else {
        setErrorMessage('Error uploading the file.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error uploading the file.');
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="file" name="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

      {fileUrl && (
        <div>
          <p>File URL:</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
        </div>
      )}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default FileUploadForm;