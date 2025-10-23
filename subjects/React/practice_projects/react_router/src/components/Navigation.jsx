import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul style={{display: 'flex', gap: '1rem',listStyle: 'none'}}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </ul>
  );
}

export default Navigation;
