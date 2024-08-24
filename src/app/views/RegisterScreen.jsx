"use client";

import { RegisterForm } from "../components/RegisterForm";
import { NavBarForms } from "../components/NavBar"

export const RegisterScreen = () => {

  return (
    <div className="flex flex-col h-screen bg-slate-900">
         
      <NavBarForms/>
      <div className="flex flex-grow mt-24 ">
        <div className="w-1/2 h-full p-6 flex items-center justify-center" style={{
            backgroundImage: "url('/Background1.avif')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '40%',
           
          }}>
          <RegisterForm />
        </div>
        <div className="w-1/2 h-full p-6 bg-[#0f172a] flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-700 via-amber-100 to-transparent rounded-full h-[500px] w-[500px] blur-xl opacity-50 z-0"></div>
          </div>
          <p className='text-4xl sm:text-5xl lg:text-6xl relative z-10 text-white animate-slideUp delay-500 text-center'>
            Sign up today and have access to the most extensive data.
          </p>
        </div>
      </div>
    </div>
  );
};