import React from 'react';
import '../styles.css'

const TemplateEdit = () => {
  return (
    <div className="form-page">
      <h1>Edit Masterclass Template</h1>
      <form className="form-box">
        <label>Title</label>
        <input type="text" defaultValue="Existing title" />

        <label>Lecturer Name</label>
        <input type="text" defaultValue="Existing lecturer" />

        <label>Short Description</label>
        <textarea rows="3" defaultValue="Existing short summary" />

        <label>Full Description</label>
        <textarea rows="6" defaultValue="Existing full content" />

        <label>Price</label>
        <input type="text" defaultValue="Existing price" />

        <label>Replace/Add Images</label>
        <input type="file" multiple />

        <button type="submit" className="form-button">Save Changes</button>
      </form>
    </div>
  );
};

export default TemplateEdit;
