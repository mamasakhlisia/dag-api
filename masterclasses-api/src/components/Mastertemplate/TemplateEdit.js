import React from "react";
import "../styles.css";

const TemplateEdit = () => {
  return (
    <div className="form-page">
      <h1>შაბლონის რედაქტირება</h1>
      <form className="form-box">
        <label>სათაური</label>
        <input type="text" defaultValue="არსებული სათაური" />

        <label>ლექტორის სახელი</label>
        <input type="text" defaultValue="არსებული ლექტორი" />

        <label>მოკლე აღწერა</label>
        <textarea rows="3" defaultValue="არსებული მოკლე აღწერა" />

        <label>სრული აღწერა</label>
        <textarea rows="6" defaultValue="არსებული სრული აღწერა" />

        <label>ფასი</label>
        <input type="text" defaultValue="არსებული ფასი" />

        <label>შეცვალე/დაამატე სურათ(ებ)ი</label>
        <input type="file" multiple />

        <button type="submit" className="form-button">
          ცვლილებების შენახვა
        </button>
      </form>
    </div>
  );
};

export default TemplateEdit;
