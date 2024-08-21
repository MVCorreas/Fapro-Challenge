"use client";
import { useRouter } from "next/navigation";
import { OutlinedButton } from "../utility/Buttons";
import Image from "next/image";
import styles from '../components/HeroSection/HeroSection.module.css'
import { RegisterForm } from "../components/RegisterForm";

export const RegisterScreen = () => {
  const router = useRouter();

  const logIn = () => {
    router.push("/signin");
  };

  const navigateHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col h-screen">
         
      <div className="navbar fixed top-0 left-0 right-0 z-50 bg-violet-100 backdrop-blur-lg h-24 flex items-center px-6">
        <div className="navbar-start flex-1">
          <Image
            src="/Logo.png"
            width={100}
            height={100}
            onClick={navigateHome}
            style={{ borderRadius: "10px" }}
            priority
          />
        </div>
        <div className="navbar-end">
          <OutlinedButton onClick={logIn} name="Sign In" />
        </div>
      </div>
      <div className="flex flex-grow mt-24 ">
        <div className="w-1/2 h-full p-6 flex items-center justify-center" style={{
            backgroundImage: "url('/FormBackground.avif')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
            backgroundRepeat: 'no-repeat',
           
          }}>
          <RegisterForm />
        </div>
        <div className="w-1/2 h-full p-6 bg-gray-100 flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-700 via-amber-100 to-transparent rounded-full h-[500px] w-[500px] blur-xl z-0"></div>
          </div>
          <h1 className={`${styles.heroTitle} text-6xl font-bold relative z-10`}>
            There are ample opportunities on each byte of data
          </h1>
        </div>
      </div>
    </div>
  );
};