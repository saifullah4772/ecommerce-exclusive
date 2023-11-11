import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start gap-12 w-4/5 lg:w-3/5">
        <div>
          <h2 className="text-3xl">Create an account</h2>
          <h5 className="mt-4">Enter your details below</h5>
        </div>
        <form className="flex flex-col justify-center items-center gap-8 w-full">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-b border-neutral-300 w-full pb-2 outline-none focus:border-neutral-600 transition-all duration-300"
          />
          <input
            type="text"
            name="email"
            placeholder="Email or Phone Number"
            className="border-b border-neutral-300 w-full pb-2 outline-none focus:border-neutral-600 transition-all duration-300"
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            className="border-b border-neutral-300 w-full pb-2 outline-none focus:border-neutral-600 transition-all duration-300"
          />
          <div className="w-full">
            <button className="bg-gajjar w-full p-4 text-white">
              Create Account
            </button>
            <button className="border border-neutral-400 mt-4 rounded-md p-4 w-full flex justify-center items-center gap-3">
              <img src="/images/icon-google.png" alt="" />
              <span>Sign up with Google</span>
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center self-center gap-2">
          <p className="text-neutral-600">Already have account?</p>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
