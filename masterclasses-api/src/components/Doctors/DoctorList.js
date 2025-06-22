import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteDoctor, getAllDoctors } from "../../api/api"; // Adjust path as needed

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await getAllDoctors();
        setDoctors(response.data);
      } catch (err) {
        setError(err.message || "ექიმების მონაცამების ჩამოტვითვა ვერ მოხერხდა");
        console.error("Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("ნამდვილად გსურთ ექიმის წაშლა?")) {
      try {
        await deleteDoctor(id);
        setDoctors(doctors.filter((doctor) => doctor.id !== id));
        setError(null);
      } catch (err) {
        console.error("Error deleting doctor:", err);
        const errorMessage =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "ექიმის წაშლა ვერ მოხერხდა";
        setError(errorMessage);
      }
    }
  };

  if (isLoading) return <div>იტვირთება ექიმის მონაცემები...</div>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>ექიმები</h1>
        <Link
          to="/doctors/create"
          style={{
            padding: "8px 12px",
            background: "#28a745",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          ახალი ექიმის დამატება
        </Link>
      </div>

      {error && (
        <div
          style={{
            color: "white",
            backgroundColor: "#dc3545",
            padding: "10px",
            borderRadius: "4px",
            marginBottom: "20px",
          }}
        >
          {error}
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <div style={{ height: "200px", overflow: "hidden" }}>
              <img
                src={`http://localhost:8080/api/doctor/image/${doctor.imagePath}`}
                alt={`${doctor.firstName} ${doctor.lastName}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=No+Image";
                }}
              />
            </div>
            <div style={{ padding: "15px" }}>
              <h2 style={{ margin: "0 0 10px 0" }}>
                {doctor.firstName} {doctor.lastName}
              </h2>
              <p style={{ color: "#666", margin: "0 0 10px 0" }}>
                {doctor.specialty}
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleDelete(doctor.id)}
                  style={{
                    padding: "6px 12px",
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  წაშლა
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
