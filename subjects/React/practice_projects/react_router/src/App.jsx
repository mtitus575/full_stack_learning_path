import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
