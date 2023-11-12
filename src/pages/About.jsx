import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Delivery from "../components/Home/Delivery";
import Testimonial from "../components/About/Testimonial";
import Activity from "../components/About/Activity";
import Header from "../components/About/Header";

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="pt-20 bg-neutral-100">
      <div className="container">
        <div className="flex justify-start items-center gap-4">
          <Link to="/" className="text-neutral-400">
            Home
          </Link>
          <span>/</span>
          <span>About</span>
        </div>
      </div>
      <Header />
      <Activity />
      <Testimonial />
      <Delivery />
    </section>
  );
};

export default About;
