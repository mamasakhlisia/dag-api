import React from "react";
import "../styles.css";

const MasterclassEdit = () => {
  return (
    <form className="form-container" method="POST" action="/masterclass/edit">
      <h1>მასტერკლასის რედაქტირება</h1>

      <input type="hidden" name="id" value="1" />

      <label htmlFor="slug">Slug (URL-ს ინდენტიფიკატორი)</label>
      <input
        type="text"
        id="slug"
        name="slug"
        defaultValue="implantology-intro"
        required
      />

      <label htmlFor="date">თარიღი და დრო</label>
      <input
        type="datetime-local"
        id="date"
        name="date"
        defaultValue="2025-08-20T10:00"
        required
      />

      <label htmlFor="template">შაბლონი</label>
      <select id="template" name="templateId" defaultValue="1">
        <option value="1">იმპლანტოლოგია 101</option>
        <option value="2">ციფრული სტომატოლოგიის საფუძვლები</option>
      </select>

      <button type="submit">განახლება</button>
    </form>
  );
};

export default MasterclassEdit;
