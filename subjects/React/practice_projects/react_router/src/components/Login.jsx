import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      onLogin(username);
      alert("Login successful");
      navigate('/dashboard')
    } else {
      alert("Please login");
    }
  }

  return (
    <div>
      <h1>Please login below</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="text"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
