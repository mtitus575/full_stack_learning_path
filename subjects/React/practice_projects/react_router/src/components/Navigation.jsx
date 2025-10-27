import { NavLink } from "react-router-dom";

function Navigation({ username, isLoggedIn, onLogout }) {
  //Active state styles:
  const linkStyle = {
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "4px",
  };

  const activeStyle = {
    ...linkStyle,
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
  };

  const inactiveStyle = {
    ...linkStyle,
    color: "#007bff",
  };

  const userId = "John Cena";

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        listStyle: "none",
      }}
    >
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Contact
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink
            to="/signup"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Signup
          </NavLink>
        </li>
      )}

      <li
        style={{
          display: "flex",
          backgroundColor: "#1267",
          borderRadius: 4,
        }}
      >
        {/*This is a DYNAMIC Links, using a Parameters for different users */}
        <NavLink
          to={`/user/123`}
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          User: 123
        </NavLink>
        <NavLink
          to={`/user/alice`}
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          User: Alice
        </NavLink>
        <NavLink
          to={`/user/bob`}
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          User: Bob
        </NavLink>
      </li>
      <li>
        {isLoggedIn ? (
          <NavLink
            to="/dashboard"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Dashboard
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Login
          </NavLink>
        )}
      </li>

      {isLoggedIn && <li>{username}</li>}
    </ul>
  );
}

export default Navigation;
