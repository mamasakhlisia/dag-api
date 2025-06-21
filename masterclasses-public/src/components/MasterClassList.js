import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/list.css";
import { format, parseISO } from "date-fns";

const MasterclassList = () => {
  const [masterclasses, setMasterclasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/masterclass/list"
        );
        const data = await response.json();
        setMasterclasses(data);
      } catch (error) {
        console.error("Error fetching masterclasses:", error);
        setMasterclasses([]);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleString("default", { month: "short" }),
      day: date.getDate(),
      time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
  };

  const filteredMasterclasses = masterclasses.filter((masterclass) => {
    const matchesSearch =
      masterclass.template.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (
        masterclass.template.lecturer.firstName +
        " " +
        masterclass.template.lecturer.lastName
      )
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      masterclass.template.shortDescription
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  return (
    <section id="masterclass-list" className="py-5 mt-5">
      <div className="container">
        <h2 className="text-center mb-4">All Courses</h2>

        <div className="search-bar mb-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        {filteredMasterclasses.length > 0 ? (
          filteredMasterclasses.map((item) => {
            const { month, day, time } = formatDate(item.date);
            const isIndefinite = item.definate === false; // Explicit check for false

            return (
              <Link
                to={`/masterclasses/${item.id}`}
                key={item.id}
                className="masterclass-item"
                style={isIndefinite ? { marginLeft: "30px" } : {}}
              >
                <div className="date-block">
                  <span className="date-range">{day}</span>
                  <span className="month">{month}</span>
                  <span className="location">📍 Tbilisi</span>
                </div>
                <div className="details-block">
                  <h3>{item.template.title}</h3>
                  <p className="type">
                    {isIndefinite ? "იგეგმება" : "დაგეგმილია"}
                  </p>
                  <p className="lecturer">
                    {item.template.lecturer.firstName +
                      " " +
                      item.template.lecturer.lastName}
                  </p>
                  <p className="audience">{item.template.shortDescription}</p>
                  <p className="time">{time}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-center">No courses found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default MasterclassList;