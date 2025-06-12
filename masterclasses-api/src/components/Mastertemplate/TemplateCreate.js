import React, { useState, useEffect } from 'react';
import '../styles.css';
import { getAllDoctors, createTemplateWithImages } from '../../api/api';

const TemplateCreate = () => {
  const [formData, setFormData] = useState({
    title: '',
    lecturerId: '', // Changed from lecturer object to simple ID
    shortDescription: '',
    fullDescription: '',
    price: ''
  });
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [lecturersList, setLecturersList] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllDoctors()
      .then(res => setLecturersList(res.data))
      .catch(() => setError('Failed to load lecturers'));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    const urls = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formDataToSend = new FormData();
      
      // Append all fields as simple key-value pairs
      formDataToSend.append('title', formData.title);
      formDataToSend.append('lecturer.id', formData.lecturerId);
      formDataToSend.append('shortDescription', formData.shortDescription);
      formDataToSend.append('fullDescription', formData.fullDescription);
      formDataToSend.append('price', formData.price);
      
      // Append files
      files.forEach(file => {
        formDataToSend.append('files', file);
      });

      await createTemplateWithImages(formDataToSend);
      
      setSuccess('Template created successfully!');
      // Reset form
      setFormData({
        title: '',
        lecturerId: '',
        shortDescription: '',
        fullDescription: '',
        price: ''
      });
      setFiles([]);
      setPreviewUrls([]);
    } catch (err) {
      console.error('Error:', err);
      let errorMessage = 'Failed to create template';
      
      if (err.response) {
        if (err.response.data) {
          errorMessage = typeof err.response.data === 'object' 
            ? JSON.stringify(err.response.data, null, 2)
            : err.response.data;
        } else {
          errorMessage = `Server error: ${err.response.status}`;
        }
      } else if (err.request) {
        errorMessage = 'No response from server';
      } else {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <h1>Create Masterclass Template</h1>

      {error && (
        <div className="error-msg">
          <p>Error:</p>
          <pre>{error}</pre>
        </div>
      )}
      {success && <p className="success-msg">{success}</p>}

      <form className="form-box" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />

        <label>Lecturer</label>
        <select
          name="lecturerId"
          value={formData.lecturerId}
          onChange={handleInputChange}
          required
        >
          <option value="">Select lecturer</option>
          {lecturersList.map(l => (
            <option key={l.id} value={l.id}>
              {l.firstName} {l.lastName}
            </option>
          ))}
        </select>

        <label>Short Description</label>
        <textarea
          name="shortDescription"
          rows="3"
          placeholder="Short summary"
          value={formData.shortDescription}
          onChange={handleInputChange}
          required
        />

        <label>Full Description</label>
        <textarea
          name="fullDescription"
          rows="6"
          placeholder="Detailed content"
          value={formData.fullDescription}
          onChange={handleInputChange}
          required
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />

        <label>Upload Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />

        {previewUrls.length > 0 && (
          <div className="image-previews">
            <h4>Selected Images:</h4>
            <div className="preview-container">
              {previewUrls.map((url, index) => (
                <img 
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="preview-image"
                  onLoad={() => URL.revokeObjectURL(url)}
                />
              ))}
            </div>
          </div>
        )}

        <button 
          type="submit" 
          className="form-button" 
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Template'}
        </button>
      </form>
    </div>
  );
};

export default TemplateCreate;