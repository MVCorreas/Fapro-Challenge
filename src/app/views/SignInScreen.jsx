"use client";

import { SignInForm } from "../components/SignInForm";
import { NavBarForms } from "../components/NavBar";

export const SignInScreen = () => {
  return (
    <div className="flex flex-col h-screen bg-sdark-teal">
      <NavBarForms />
      <div className="flex flex-grow mt-24 ">
        <div
          className="w-1/2 h-full p-6 flex items-center justify-center"
          style={{
            backgroundImage: "url('/Assets/FormBackground2.webp')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            borderRight: "5px solid white",
          }}
        >
          <SignInForm />
        </div>
        <div className="w-1/2 h-full p-6 bg-dark-teal flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-400 via-red-100 to-transparent rounded-full h-[500px] w-[500px] blur-xl opacity-50 z-0"></div>
          </div>
          <p className="text-4xl sm:text-5xl lg:text-5xl font-light relative z-10 text-white animate-slideUp delay-500 text-center">
            There are ample opportunities on each byte of data. Let us do the
            job. You just thrive.
          </p>
        </div>
      </div>
    </div>
  );
};
