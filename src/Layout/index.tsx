import { Outlet } from "react-router";
import NavbarDemo from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="">
      <NavbarDemo/>
      <Outlet />
      <Footer/>
    </div>
  );
}
