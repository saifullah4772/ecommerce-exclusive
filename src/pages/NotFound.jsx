import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container">
        <div className="pb-8 text-neutral-500">
          Home / <span className="font-bold text-neutral-800">404 Error</span>
        </div>
        <div className="flex flex-col justify-center items-start md:items-center gap-12 py-12">
          <h1 className="text-4xl md:text-7xl font-semibold">404 Not Found</h1>
          <p className="text-md">
            Your visited page not found. You may go home page.
          </p>
          <Link to="/" className="p-4 px-8 md:px-12 bg-gajjar text-white">
            Back to Home page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
