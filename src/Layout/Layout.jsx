import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sales from "../components/Sales";

const Layout = () => {
  return (
    <>
      <Sales />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
