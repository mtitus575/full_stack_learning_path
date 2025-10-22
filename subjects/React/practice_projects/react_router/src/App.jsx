import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Nav from "./pages/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
