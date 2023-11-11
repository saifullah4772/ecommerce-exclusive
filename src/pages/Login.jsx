import React, { useEffect } from "react";
import Auth from "../components/Auth/Auth";
import LoginForm from "../components/Auth/LoginForm";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Auth>
      <LoginForm />
    </Auth>
  );
};

export default Login;
