import React from "react";

const Auth = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center content-center py-16 gap-y-16">
      <div className="h-[75vh] bg-[#CBE4E8]">
        <img
          src="/images/signup.png"
          alt="signup image"
          className="h-full w-4/5 object-cover"
        />
      </div>
      <div className="px-8 flex justify-center items-center">{children}</div>
    </div>
  );
};

export default Auth;
