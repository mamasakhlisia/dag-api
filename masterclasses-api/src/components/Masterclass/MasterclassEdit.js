import React from 'react';
import '../styles.css';

const MasterclassEdit = () => {
  return (
    <form className="form-container" method="POST" action="/masterclass/edit">
      <h1>Edit Masterclass</h1>

      <input type="hidden" name="id" value="1" />

      <label htmlFor="slug">Slug</label>
      <input type="text" id="slug" name="slug" defaultValue="implantology-intro" required />

      <label htmlFor="date">Date & Time</label>
      <input type="datetime-local" id="date" name="date" defaultValue="2025-08-20T10:00" required />

      <label htmlFor="template">Template</label>
      <select id="template" name="templateId" defaultValue="1">
        <option value="1">Implantology 101</option>
        <option value="2">Digital Dentistry Basics</option>
      </select>

      <button type="submit">Update</button>
    </form>
  );
};

export default MasterclassEdit;
