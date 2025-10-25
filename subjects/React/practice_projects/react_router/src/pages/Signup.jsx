import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Enter details!");
      return;
    }
    navigate("/dashboard", { replace: true });
  }

  return (
    <div style={{ justifyItems: "center" }}>
      <h1>Signup now!</h1>
      <p>Join our amazing team.</p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flexDirection: " column",
          maxWidth: 400,
        }}
      >
        <input
          onChange={({ target }) => setUsername(target.value)}
          value={username}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          onChange={({ target }) => setPassword(target.value)}
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <button style={{ width: "3rem", borderRadius: 4 }}>Join!</button>
      </form>
    </div>
  );
}

export default Signup;
