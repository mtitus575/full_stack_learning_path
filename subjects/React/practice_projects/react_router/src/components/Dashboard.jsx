import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <nav>
        <h3>Dashboard</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            fontWeight: "bold",
          }}
        >
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
          <Link to="/dashboard/stats">Statistics</Link>
        </div>
      </nav>
      <main>
        <h1>Welcome to your dashboard</h1>
        <p>This is where the nested content will be:</p>

        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
