// src/components/Doctor/DoctorCreate.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorCreate = () => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [lastname, setLastName] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("firstName", name);
    formData.append("specialty", specialty);
    formData.append("lastName", lastname);
    formData.append("file", file);

    try {
      await axios.post("http://localhost:8080/api/doctor/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/doctors/list");
    } catch (err) {
      setError("ექიმის დაგერისტრირება ვერ მოხერხდა. გთხოვთ სცადოთ თავიდან.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>ახალი ექიმის დამატება</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>სახელი:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>გვარი:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>სპეციალობა:</label>
          <input
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>პროფილის სურათი:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
            style={{ width: "100%" }}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: "10px 15px",
            background: isLoading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isLoading ? "მიმდინარეობს..." : "ექიმის დარეგისტრირება"}
        </button>
      </form>
    </div>
  );
};

export default DoctorCreate;
