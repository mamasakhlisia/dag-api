import React, { useState, useEffect } from 'react';
import '../styles.css';
import { getAllDoctors, createTemplate } from '../../api/api';

const TemplateCreate = () => {
  const [title, setTitle] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);

  const [lecturersList, setLecturersList] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Load lecturers on mount
  useEffect(() => {
    getAllDoctors()
      .then(res => setLecturersList(res.data))
      .catch(() => setError('Failed to load lecturers'));
  }, []);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('lecturerId', lecturer);
    formData.append('shortDescription', shortDescription);
    formData.append('fullDescription', fullDescription);
    formData.append('price', price);

    images.forEach((file, index) => {
      formData.append('images', file);
    });

    try {
      await createTemplate(formData); // config handled in api.js
      setSuccess('Template created successfully!');
      setTitle('');
      setLecturer('');
      setShortDescription('');
      setFullDescription('');
      setPrice('');
      setImages([]);
    } catch (err) {
      setError('Failed to create template');
    }

    setLoading(false);
  };

  return (
    <div className="form-page">
      <h1>Create Masterclass Template</h1>

      {error && <p className="error-msg">{error}</p>}
      {success && <p className="success-msg">{success}</p>}

      <form className="form-box" onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <label>Lecturer Name</label>
        <select
          value={lecturer}
          onChange={e => setLecturer(e.target.value)}
          required
        >
          <option value="">Select lecturer</option>
          {lecturersList.map(l => (
            <option key={l.id} value={l.id}>{l.name}</option>
          ))}
        </select>

        <label>Short Description</label>
        <textarea
          rows="3"
          placeholder="Short summary"
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
          required
        />

        <label>Full Description</label>
        <textarea
          rows="6"
          placeholder="Detailed content"
          value={fullDescription}
          onChange={e => setFullDescription(e.target.value)}
          required
        />

        <label>Price</label>
        <input
          type="text"
          placeholder="Enter price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />

        <label>Upload Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />

        <button type="submit" className="form-button" disabled={loading}>
          {loading ? 'Creating...' : 'Create Template'}
        </button>
      </form>
    </div>
  );
};

export default TemplateCreate;