import { NavLink } from "react-router-dom";

function Navigation() {
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

  return (
    <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
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
      <li>
        <NavLink
          to="/signup"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Signup
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
