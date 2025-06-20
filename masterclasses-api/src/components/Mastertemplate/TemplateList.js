import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllTemplates, getTemplateImageUrl, deleteTemplate } from '../../api/api';
import '../styles.css';

const TemplateList = () => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getAllTemplates();
      setTemplates(response.data);
    } catch (err) {
      console.error('Error fetching templates:', err);
      setError('Failed to load templates. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (templateId, templateTitle) => {
    if (!window.confirm(`Are you sure you want to delete "${templateTitle}"? This action cannot be undone.`)) {
      return;
    }

    try {
      await deleteTemplate(templateId);
      setTemplates(templates.filter(t => t.id !== templateId));
      alert(`Template "${templateTitle}" has been deleted successfully.`);
    } catch (err) {
      console.error('Error deleting template:', err);
      setError(`Failed to delete template. ${err.response?.data?.message || ''}`);
      fetchTemplates();
    }
  };

  return (
    <div className="template-list-container">
      <div className="template-list-header">
        <h1 className="template-list-title">Masterclass Templates</h1>
        <Link to="/templates/create" className="template-create-btn">
          <span className="btn-icon">+</span> New Template
        </Link>
      </div>

      {error && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading templates...</p>
        </div>
      ) : (
        <div className="template-table-wrapper">
          {templates.length > 0 ? (
            <table className="template-table">
              <thead>
                <tr>
                  <th className="table-header id-col">ID</th>
                  <th className="table-header">Title</th>
                  <th className="table-header">Preview</th>
                  <th className="table-header actions-col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {templates.map(template => (
                  <tr key={template.id} className="template-row">
                    <td className="table-cell id-cell">{template.id}</td>
                    <td className="table-cell title-cell">{template.title}</td>
                    <td className="table-cell preview-cell">
                      {template.imageUrls && template.imageUrls.length > 0 ? (
                        <div className="image-preview-container">
                          {template.imageUrls.slice(0, 3).map((filename, idx) => (
                            <div key={idx} className="preview-thumbnail">
                              <img
                                src={getTemplateImageUrl(filename)}
                                alt={`${template.title} preview ${idx + 1}`}
                                className="thumbnail-image"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = '/placeholder-image.jpg';
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="no-preview">
                          <span className="no-preview-icon">🖼️</span>
                          No images
                        </div>
                      )}
                    </td>
                    <td className="table-cell actions-cell">
                      <div className="action-buttons">
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(template.id, template.title);
                          }}
                          className="action-btn delete-btn"
                        >
                          Delete
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="empty-state">
              <p>No templates found.</p>
              <Link to="/templates/create" className="create-link">
                Create your first template
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TemplateList;