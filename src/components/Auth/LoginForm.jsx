import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start gap-12 w-4/5 lg:w-3/5">
        <div>
          <h2 className="text-3xl">Log in to Exclusive</h2>
          <h5 className="mt-4">Enter your details below</h5>
        </div>

        <form className="flex flex-col justify-center items-center gap-8 w-full">
          <input
            type="text"
            name="email"
            placeholder="Email or Phone Number"
            className="border-b border-neutral-300 bg-neutral-100 w-full pb-2 outline-none focus:border-neutral-600 transition-all duration-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-b border-neutral-300 bg-neutral-100 w-full pb-2 outline-none focus:border-neutral-600 transition-all duration-300"
          />
          <div className="w-full flex justify-between items-center">
            <button className="bg-gajjar p-4 px-12 text-white">Log In</button>
            <Link className="text-gajjar p-4 text-lg text-white">
              Forget Password?
            </Link>
          </div>
        </form>
        <div className="flex justify-center items-center self-center gap-2">
          <p className="text-neutral-600">Don't have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
