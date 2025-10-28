import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function MainLayout() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header>
        <h1>Welcome to my React Router Website</h1>
        <p>Explore some of the pages and observe the design</p>
      </header>
      {/* <Navigation /> */}
      <main style={{minHeight: '60vh', minWidth: '100wv', backgroundColor: '#494932'}}>
        <Outlet />
      </main>
      <footer>
        <p>&copy; My website 2025. All right reserved.</p>
        <p>Made with React Router.</p>
      </footer>
    </div>
  );
}

export default MainLayout;
