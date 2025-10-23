import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>This is the profile for user ID: {id}</h1>
      <div
        style={{
          background: "#f0f8ff",
          padding: "15px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <h2>User ID: {id}</h2>
        <p>
          This is the profile page for user with ID: <strong>{id}</strong>
        </p>
        <p>In a real app, you'd fetch user data from an API using this ID!</p>
      </div>
    </div>
  );
}

export default UserProfile;
