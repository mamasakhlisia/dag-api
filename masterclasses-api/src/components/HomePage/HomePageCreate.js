import React, { useState } from "react";

const HomePageForm = () => {
  const [navHeader, setNavHeader] = useState("");
  const [navParagraph, setNavParagraph] = useState("");
  const [aboutText, setAboutText] = useState(""); // multi-line textarea input
  const [footerText, setFooterText] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [instagram, setInstagram] = useState("");
  const [extraField1, setExtraField1] = useState("");
  const [extraField2, setExtraField2] = useState("");
  const [extraImage1, setExtraImage1] = useState(null);
  const [extraImage2, setExtraImage2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const about = aboutText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    setTimeout(() => {
      setIsLoading(false);
      console.log({
        navHeader,
        navParagraph,
        about,
        footerText,
        facebook,
        linkedIn,
        instagram,
        extraField1,
        extraField2,
        extraImage1,
        extraImage2,
      });
      alert("წარმატებით გაიგზავნა!");
    }, 1500);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const labelStyle = {
    fontWeight: "bold",
    display: "block",
    marginBottom: "6px",
  };

  const fieldBox = {
    marginBottom: "20px",
  };

  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1
        style={{ marginBottom: "20px", textAlign: "center", fontSize: "24px" }}
      >
        მთავარი გვერდის შინაარსის დამატება
      </h1>

      {error && <p style={{ color: "red", marginBottom: "20px" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={fieldBox}>
          <label style={labelStyle}>ნავიგაციის სათაური</label>
          <input
            type="text"
            value={navHeader}
            onChange={(e) => setNavHeader(e.target.value)}
            required
            placeholder="გთხოვთ, შეიყვანეთ სათაური"
            style={inputStyle}
          />
        </div>

        <div style={fieldBox}>
          <label style={labelStyle}>ნავიგაციის ტექსტი</label>
          <input
            type="text"
            value={navParagraph}
            onChange={(e) => setNavParagraph(e.target.value)}
            required
            placeholder="გთხოვთ, შეიყვანოთ ტექსტი"
            style={inputStyle}
          />
        </div>

        <div style={fieldBox}>
          <label style={labelStyle}>ჩვენს შესახებ (3 ხაზი)</label>
          <textarea
            rows={5}
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            placeholder="გთხოვთ შეიყვანეთ ტექსტი"
            required
            style={{ ...inputStyle, fontFamily: "inherit" }}
          />
        </div>

        <div style={fieldBox}>
          <label style={labelStyle}>ქვედა კოლონტიტულის ტექსტი</label>
          <input
            type="text"
            value={footerText}
            onChange={(e) => setFooterText(e.target.value)}
            required
            placeholder="გთხოვთ, შეიყვანეთ ტექსტი"
            style={inputStyle}
          />
        </div>

        <div style={fieldBox}>
          <label style={labelStyle}>Facebook-ის URL</label>
          <input
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            placeholder="https://facebook.com/..."
            style={inputStyle}
          />
        </div>

        <div style={fieldBox}>
          <label style={labelStyle}>LinkedIn-ის URL</label>
          <input
            type="text"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
            placeholder="https://linkedin.com/..."
            style={inputStyle}
          />
        </div>

        <div style={fieldBox}>
          <label style={labelStyle}>Instagram-ის URL</label>
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="https://instagram.com/..."
            style={inputStyle}
          />
        </div>

        <div style={fieldBox}>
          <label style={labelStyle}>დამატებითი ველი 1</label>
          <input
            type="text"
            value={extraField1}
            onChange={(e) => setExtraField1(e.target.value)}
            placeholder="გთხოვთ, შეიყვანეთ დამატებითი ინფორმაცია"
            style={inputStyle}
          />
        </div>

        <div style={fieldBox}>
          <label style={labelStyle}>დამატებითი ველი 2</label>
          <input
            type="text"
            value={extraField2}
            onChange={(e) => setExtraField2(e.target.value)}
            placeholder="გთხოვთ, შეიყვანეთ დამატებითი ინფორმაცია"
            style={inputStyle}
          />
        </div>

        <div style={fieldBox}>
          <label style={labelStyle}>დამატებითი სურათი 1</label>
          <input
            type="file"
            onChange={(e) => setExtraImage1(e.target.files[0])}
            style={{
              ...inputStyle,
              padding: "8px",
              border: "none",
            }}
          />
        </div>

        <div style={fieldBox}>
          <label style={labelStyle}>დამატებითი სურათი 2</label>
          <input
            type="file"
            onChange={(e) => setExtraImage2(e.target.files[0])}
            style={{
              ...inputStyle,
              padding: "8px",
              border: "none",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: isLoading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: isLoading ? "not-allowed" : "pointer",
            transition: "background 0.3s ease",
          }}
        >
          {isLoading ? "გზავნა..." : "გაგზავნა"}
        </button>
      </form>
    </div>
  );
};

export default HomePageForm;
