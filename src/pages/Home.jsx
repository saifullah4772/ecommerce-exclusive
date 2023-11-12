import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import Today from "../components/Home/Today";
import Category from "../components/Home/Category";
import Best from "../components/Home/Best";
import Single from "../components/Home/Single";
import Products from "../components/Home/Products";
import Arrival from "../components/Home/Arrival";
import Delivery from "../components/Home/Delivery";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="bg-neutral-100">
      <Hero />
      <Today />
      <Category />
      <Best />
      <Single />
      <Products />
      <Arrival />
      <Delivery />
    </main>
  );
};

export default Home;
