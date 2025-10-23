import { Link, useParams } from "react-router-dom"; // This method with grab the users `id` parameter and return it.

// Mock user database: Used to render different user data
const users = {
  123: {
    id: "123",
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    joinDate: "2022-01-15",
  },
  alice: {
    id: "alice",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Designer",
    joinDate: "2021-09-10",
  },
  bob: {
    id: "bob",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Manager",
    joinDate: "2020-03-22",
  },
};

const basicStyles = {
  textAlign: "center",
  padding: 40,
  maxWidth: 600,
  margin: "0 auto",
};

function UserProfile() {
  const { id } = useParams(); //Grabbing the URL `id` parameter

  const user = users[id]; // return the user, based on the `id` param.

  //Validation and code for no user found:
  if (!user) {
    return (
      <div style={basicStyles}>
        <h1>User Not Found.</h1>
        <p>No user with ID: {id}</p>
        <Link to="/">Home</Link>
      </div>
    );
  }

  //Code for if the user is in the dataset:
  return (
    <div style={basicStyles}>
      <h1>This is the profile for user: {user.name}</h1>
      <div
        style={{
          background: "#f0f8ff",
          padding: "15px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <h2>User ID: {user.id}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          Member since: <strong>{user.joinDate}</strong>
        </p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link
          to="/"
          style={{
            background: "#007bff",
            color: "white",
            padding: "8px 16px",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default UserProfile;
