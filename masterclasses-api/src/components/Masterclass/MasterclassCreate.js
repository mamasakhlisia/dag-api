import React from 'react';
import '../styles.css';

const MasterclassCreate = () => {
  return (
    <form className="form-container" method="POST" action="/masterclass/create">
      <h1>Create Masterclass</h1>

      <label htmlFor="slug">Slug</label>
      <input type="text" id="slug" name="slug" required />

      <label htmlFor="date">Date & Time</label>
      <input type="datetime-local" id="date" name="date" required />

      <label htmlFor="template">Template</label>
      <select id="template" name="templateId">
        <option value="1">Implantology 101</option>
        <option value="2">Digital Dentistry Basics</option>
      </select>

      <button type="submit">Create</button>
    </form>
  );
};

export default MasterclassCreate;
