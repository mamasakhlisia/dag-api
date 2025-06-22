import React, { useState, useEffect } from "react";
import { createMasterclass, getAllTemplates } from "../../api/api";
import "../styles.css";

const MasterclassCreate = () => {
  const [formData, setFormData] = useState({
    slug: "",
    date: "",
    daysLong: 1,
    definate: false,
    theoretical: false,
    link: "",
    templateId: "",
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
          setFormData((prev) => ({
            ...prev,
            templateId: response.data[0].id.toString(),
          }));
        }
      } catch (err) {
        setError("შაბლონების ჩატვირთვა ვერ მოხერხდა");
      } finally {
        setIsLoadingTemplates(false);
      }
    };
    fetchTemplates();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
        templateId: parseInt(formData.templateId),
      };

      const response = await createMasterclass(payload);

      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          slug: "",
          date: "",
          daysLong: 1,
          definate: false,
          theoretical: false,
          link: "",
          templateId: templates.length > 0 ? templates[0].id.toString() : "",
        });
      } else {
        throw new Error("მოულოდელი პასუხის სტატუსი");
      }
    } catch (err) {
      console.error("შექმნის შეცდომა:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "მასტერკლასის შექმნა ვერ მოხერხდა"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingTemplates) {
    return <div className="form-container">შაბლონების ჩატვირთვა...</div>;
  }

  if (templates.length === 0) {
    return (
      <div className="form-container">
        შაბლონები არ არის. გთხოვთ, ჯერ შექმნათ შაბლონები.
      </div>
    );
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>მასტერკლასის შექმნა</h1>

      {error && <div className="error-message">{error}</div>}
      {success && (
        <div className="success-message">მასტერკლასი წარმატებით შეიქმნა!</div>
      )}

      <label htmlFor="slug">Slug (URL-ის იდენტიფიკატორი)</label>
      <input
        type="text"
        id="slug"
        name="slug"
        value={formData.slug}
        onChange={handleChange}
        required
        placeholder="მაგ., advanced-implantology-2023"
      />

      <label htmlFor="date">თარიღი და დრო</label>
      <input
        type="datetime-local"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="daysLong">ხანგრძლივობა (დღეები)</label>
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
          დადგენილი
        </label>

        <label>
          <input
            type="checkbox"
            name="theoretical"
            checked={formData.theoretical}
            onChange={handleChange}
          />
          თეორიული
        </label>
      </div>

      <label htmlFor="link">რეგისტრაციის ბმული</label>
      <input
        type="url"
        id="link"
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="https://example.com/signup"
      />

      <label htmlFor="template">შაბლონი</label>
      <select
        id="template"
        name="templateId"
        value={formData.templateId}
        onChange={handleChange}
        required
      >
        {templates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.title}
          </option>
        ))}
      </select>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "შექმნა..." : "მასტერკლასის შექმნა"}
      </button>
    </form>
  );
};

export default MasterclassCreate;
