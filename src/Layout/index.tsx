import { Outlet } from "react-router";
import NavbarDemo from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <NavbarDemo/>
      <Outlet />
      <Footer/>
    </div>
  );
}
