"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useEaseIn from "../hooks/useEaseIn";
import { MainButton, LightButton } from "@/app/utility/Buttons";

const solutions = [
  {
    id: 1,
    title: "Banking",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: "/ProfileAvatar.jpeg",
  },
  {
    id: 2,
    title: "Financing",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: "/ProfileAvatar.jpeg",
  },
  {
    id: 3,
    title: "Investment",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: "/ProfileAvatar.jpeg",
  },
  {
    id: 4,
    title: "Insuarance",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: "/ProfileAvatar.jpeg",
  },
];

export const SolutionsSection = () => {
  const router = useRouter();
  const sectionsRef = useEaseIn();

  const handleFindOutMore = () => {
    router.push("/signin");
  };

  const handleRegister = () => {
    router.push('/register')
  }

  return (
    <section
      ref={(el) => (sectionsRef.current[1] = el)}
      className="opacity-0 translate-y-10 animate-slideUp mb-20"
      id="solutions"
    >
      <div className="flex flex-col items-center">
        <span className="text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-bold-700 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-900 via-purple-400 to-amber-600">
          SOLUTIONS
        </span>
        <p className="text-lg leading-relaxed mb-10 text-black w-[500px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
        {solutions.map((sol) => (
          <div key={sol.id} className="card bg-amber-100 shadow">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">{sol.title}</h2>
              <p>{sol.description}</p>
              <div className="card-actions">
                <MainButton name="Find out More" onClick={handleFindOutMore} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <div
          className="card w-[700px] h-full mx-auto p-12 rounded-full shadow-lg flex flex-col items-center justify-center text-center rounded-full"
          style={{
            backgroundImage: "url('/Card.jpg')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="card-body text-white flex flex-col items-center justify-center mb-20">
            <h2 className="card-title text-3xl mb-4">Sign Up. Get Started</h2>
            <p className="mb-6">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <LightButton name="Sign Up" onClick={handleRegister} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};