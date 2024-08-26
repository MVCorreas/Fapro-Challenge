"use client";

import { MainButton } from "./Buttons";
import { useRouter } from "next/navigation";

export const UnderConstruction = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/dashboard");
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen w-screen"
      style={{
        backgroundImage: "url('/Assets/UnderConstruction.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute z-10 text-center text-white p-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Sorry, page under construction
        </h1>
        <MainButton name="Go Back" onClick={handleGoBack} />
      </div>
    </div>
  );
};
