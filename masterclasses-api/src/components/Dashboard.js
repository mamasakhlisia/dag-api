import { Link } from "react-router-dom";
import "./styles.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>ადმინისტრატორის მართვის პანელი</h1>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-grid">
          <Link to="/masterclasses/list" className="dashboard-card">
            <h2>მასტერკლასები</h2>
            <p>ნახვა, რედაქტირება ან წაშლა</p>
          </Link>

          <Link to="/masterclasses/create" className="dashboard-card">
            <h2>მასტერკლასის შექმნა</h2>
            <p>დაიწყეთ ახალი მასტერკლასი</p>
          </Link>

          <Link to="/templates/list" className="dashboard-card">
            <h2>თემები</h2>
            <p>ნახვა, რედაქტირება ან წაშლა</p>
          </Link>

          <Link to="/templates/create" className="dashboard-card">
            <h2>თემის შექმნა</h2>
            <p>შექმენით ახალი მასტერკლასის თემა</p>
          </Link>

          <Link to="/doctors/list" className="dashboard-card">
            <h2>ექიმები</h2>
            <p>იხილეთ ექიმები და მართეთ ისინი</p>
          </Link>

          <Link to="/doctors/create" className="dashboard-card">
            <h2>ექიმის დამატება</h2>
            <p>დაამატეთ ახალი ექიმი</p>
          </Link>

          {/* აქ არის მთავარი გვერდის შექმნა */}
          <Link to="/homePage/create" className="dashboard-card">
            <h2>მთავარი გვერდის შექმნა</h2>
            <p>შექმენი მთავარი გვერდის ვიზუალი</p>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
