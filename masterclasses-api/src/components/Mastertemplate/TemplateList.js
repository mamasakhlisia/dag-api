import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTemplates, getTemplateImageUrl } from '../../api/api';
import '../styles.css';

const TemplateList = () => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTemplates()
      .then(res => {
        setTemplates(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="template-list-page">
      <div className="template-list-header">
        <h1>Masterclass Templates</h1>
        <Link to="/templates/create" className="template-create-button">
          + New Template
        </Link>
      </div>

      {isLoading ? (
        <div className="template-loading">Loading templates...</div>
      ) : (
        <div className="template-list-container">
          <div className="template-list-table">
            <div className="template-list-header-row">
              <div className="template-list-header-cell template-id-header">ID</div>
              <div className="template-list-header-cell template-title-header">Title</div>
              <div className="template-list-header-cell template-images-header">Preview</div>
              <div className="template-list-header-cell template-actions-header">Actions</div>
            </div>

            {templates.length > 0 ? (
              templates.map(template => (
                <div key={template.id} className="template-list-row">
                  <div className="template-list-cell template-id-cell">{template.id}</div>
                  <div className="template-list-cell template-title-cell">{template.title}</div>

                  <div className="template-list-cell template-images-cell">
                    {template.imageUrls && template.imageUrls.length > 0 ? (
                      <div className="template-image-gallery">
                        {template.imageUrls.slice(0, 3).map((filename, idx) => (
                          <div key={idx} className="template-image-container">
                            <img
                              src={getTemplateImageUrl(filename)}
                              alt={`${template.title} preview ${idx + 1}`}
                              className="template-image"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="template-no-image">
                        <span className="template-no-image-icon">🖼️</span>
                        No images
                      </div>
                    )}
                  </div>

                  <div className="template-list-cell template-actions-cell">
                    <div className="template-action-buttons">
                      <Link 
                        to={`/templates/edit/${template.id}`} 
                        className="template-action-button template-edit-button"
                      >
                        <span className="template-button-icon">✏️</span> Edit
                      </Link>
                      <button className="template-action-button template-delete-button">
                        <span className="template-button-icon">🗑️</span> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="template-empty-message">
                No templates found. Create your first template to get started.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateList;