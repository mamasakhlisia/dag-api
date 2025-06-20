import React, { useState, useEffect } from 'react';
import { createMasterclass, getAllTemplates } from '../../api/api';
import '../styles.css';

const MasterclassCreate = () => {
  const [formData, setFormData] = useState({
    slug: '',
    date: '',
    daysLong: 1,
    definate: false,
    theoretical: false,
    link: '',
    templateId: ''
  });
  const [templates, setTemplates] = useState([]);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(true);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await getAllTemplates();
        setTemplates(response.data);
        if (response.data.length > 0) {
          setFormData(prev => ({ ...prev, templateId: response.data[0].id.toString() }));
        }
      } catch (err) {
        setError('Failed to load templates');
      } finally {
        setIsLoadingTemplates(false);
      }
    };
    fetchTemplates();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        slug: formData.slug,
        date: new Date(formData.date).toISOString(),
        daysLong: parseInt(formData.daysLong),
        definate: formData.definate,
        theoretical: formData.theoretical,
        link: formData.link,
        templateId: parseInt(formData.templateId)
      };

      const response = await createMasterclass(payload);
      
      if (response.status === 201) {
        setSuccess(true);
        // Reset form after successful submission
        setFormData({
          slug: '',
          date: '',
          daysLong: 1,
          definate: false,
          theoretical: false,
          link: '',
          templateId: templates.length > 0 ? templates[0].id.toString() : ''
        });
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (err) {
      console.error('Creation error:', err);
      setError(err.response?.data?.message || err.message || 'Failed to create masterclass');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingTemplates) {
    return <div className="form-container">Loading templates...</div>;
  }

  if (templates.length === 0) {
    return <div className="form-container">No templates available. Please create templates first.</div>;
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Create Masterclass</h1>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Masterclass created successfully!</div>}

      <label htmlFor="slug">Slug (URL identifier)</label>
      <input
        type="text"
        id="slug"
        name="slug"
        value={formData.slug}
        onChange={handleChange}
        required
        placeholder="e.g., advanced-implantology-2023"
      />

      <label htmlFor="date">Date & Time</label>
      <input
        type="datetime-local"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="daysLong">Duration (days)</label>
      <input
        type="number"
        id="daysLong"
        name="daysLong"
        min="1"
        value={formData.daysLong}
        onChange={handleChange}
        required
      />

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="definate"
            checked={formData.definate}
            onChange={handleChange}
          />
          Definite
        </label>

        <label>
          <input
            type="checkbox"
            name="theoretical"
            checked={formData.theoretical}
            onChange={handleChange}
          />
          Theoretical
        </label>
      </div>

      <label htmlFor="link">Signup Link</label>
      <input
        type="url"
        id="link"
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="https://example.com/signup"
      />

      <label htmlFor="template">Template</label>
      <select
        id="template"
        name="templateId"
        value={formData.templateId}
        onChange={handleChange}
        required
      >
        {templates.map(template => (
          <option key={template.id} value={template.id}>
            {template.title}
          </option>
        ))}
      </select>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Masterclass'}
      </button>
    </form>
  );
};

export default MasterclassCreate;