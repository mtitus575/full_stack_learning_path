import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <p>It miight have been moved, deleted or you entered the wrong URL</p>

      <div style={{ marginTop: 40 }}>
        <Link to="/">Go Back Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
