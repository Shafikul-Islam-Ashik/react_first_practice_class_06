import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Topbar from "../topbar/Topbar";

import "./Layouts.scss";

const Layouts = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
