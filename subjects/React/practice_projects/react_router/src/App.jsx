import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DashboardProfile from "./components/DashBoardProfile";
import DashboardSettings from "./components/DashboardSettings";

import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  function handleLogin(user) {
    setIsLoggedIn(true);
    setUsername(user);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
  }
  console.log(isLoggedIn, username);

  return (
    <BrowserRouter>
      <Navigation
        username={username}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:id" element={<UserProfile />} />

        {/* My Protected Routes */}
        {isLoggedIn ? (
          <Route
            path="/dashboard"
            element={<Dashboard username={username} onLogout={handleLogout} />}
          >
            {/* Nested Protected Routes */}
            {isLoggedIn ? (
              <Route path="profile" element={<DashboardProfile />} />
            ) : (
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
            )}
            {isLoggedIn ? (
              <Route path="settings" element={<DashboardSettings />} />
            ) : (
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
            )}
          </Route>
        ) : (
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        )}

        {/* // <Route path="/dashboard" element={<Dashboard />}>
        //   <Route path="profile" element={<DashboardProfile />} />
        //   <Route path="settings" element={<DashboardSettings />} />
        // </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
