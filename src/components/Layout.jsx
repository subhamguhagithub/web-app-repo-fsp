import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navigation />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
