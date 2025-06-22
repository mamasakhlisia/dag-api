import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllMasterclasses, deleteMasterclass } from "../../api/api"; // Make sure to import deleteMasterclass
import "../styles.css";

const MasterclassDashboard = () => {
  const [masterclasses, setMasterclasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMasterclasses();
  }, []);

  const fetchMasterclasses = async () => {
    try {
      const response = await getAllMasterclasses();
      setMasterclasses(response.data);
    } catch (err) {
      setError(err.message || "მასტერკლასების ჩატვირთვა ვერ მოხერხდა");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`დარწმუნებული ხართ, რომ გინდათ წაშალოთ "${title}"?`)) {
      return;
    }

    try {
      await deleteMasterclass(id);
      setMasterclasses(masterclasses.filter((mc) => mc.id !== id));
      alert("მასტერკლასი წარმატებით წაიშალა");
    } catch (err) {
      setError(err.message || "მასტერკლასის წაშლა ვერ მოხერხდა");
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading)
    return <div className="loading">მასტერკლასების ჩატვირთვა...</div>;
  if (error) return <div className="error">შეცდომა: {error}</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>მასტერკლასების პანელი</h1>
        <nav className="dashboard-nav">
          <Link to="/masterclasses/create" className="create-button">
            + ახალი მასტერკლასის შექმნა
          </Link>
        </nav>
      </header>

      <main className="masterclass-grid">
        {masterclasses.length > 0 ? (
          masterclasses.map((masterclass) => (
            <div key={masterclass.id} className="masterclass-card">
              <div className="card-header">
                <h2>{masterclass.template.title}</h2>
                <span
                  className={`status-badge ${
                    masterclass.definate ? "confirmed" : "pending"
                  }`}
                >
                  {masterclass.definate ? "დადასტურებულია" : "მოლოდინში"}
                </span>
              </div>

              <div className="card-body">
                <div className="info-row">
                  <span className="info-label">თარიღი:</span>
                  <span>{formatDate(masterclass.date)}</span>
                </div>

                <div className="info-row">
                  <span className="info-label">ხანგრძლივობა:</span>
                  <span>{masterclass.daysLong} დღე(ები)</span>
                </div>

                <div className="info-row">
                  <span className="info-label">ლექტორი:</span>
                  <span>
                    {masterclass.template.lecturer?.firstName || ""}{" "}
                    {masterclass.template.lecturer?.lastName || ""}
                  </span>
                </div>

                <div className="info-row">
                  <span className="info-label">ტიპი:</span>
                  <span>
                    {masterclass.theoretical ? "თეორიული" : "პრაქტიკული"}
                  </span>
                </div>
              </div>

              <div className="card-footer">
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(masterclass.id, masterclass.template.title);
                  }}
                  className="action-button delete-button"
                >
                  წაშლა
                </Link>
                {masterclass.link && (
                  <a
                    href={masterclass.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button view-button"
                  >
                    დეტალების ნახვა
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>მასტერკლასები არ არის.</p>
            <Link to="/masterclasses/create" className="create-button">
              შექმენით თქვენი პირველი მასტერკლასი
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default MasterclassDashboard;
