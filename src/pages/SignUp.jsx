import React, { useEffect } from "react";
import Auth from "../components/Auth/Auth";
import SignUpForm from "../components/Auth/SignUpForm";
import { useLocation } from "react-router-dom";

const SignUp = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Auth>
      <SignUpForm />
    </Auth>
  );
};

export default SignUp;
