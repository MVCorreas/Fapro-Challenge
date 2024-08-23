"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useEaseIn from "../hooks/useEaseIn";
import { LightButton } from "@/app/components/Buttons";
import styles from '../styles/SpecificStyles.module.css'

const solutions = [
  {
    id: 1,
    title: "Banking",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus',
  },
  {
    id: 2,
    title: "Financing",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus',
  },
  {
    id: 3,
    title: "Investment",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus',
  },
  {
    id: 4,
    title: "Insurance",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus',
  },
];

export const SolutionsSection = () => {
  const router = useRouter();
  const sectionsRef = useEaseIn();

  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <section
      ref={(el) => (sectionsRef.current[1] = el)}
      className="opacity-0 translate-y-10 animate-slideUp mb-20 bg-[#0f172a]"
      id="solutions"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-900 via-purple-400 to-amber-600 mb-4">
            SOLUTIONS
          </h2>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white">{solutions[0].title}</h3>
            <p className="text-lg mt-2 text-white">{solutions[0].description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {solutions.slice(1).map((sol) => (
            <div key={sol.id} className="p-6">
              <h3 className="text-2xl font-bold text-white">{sol.title}</h3>
              <p className="text-lg mt-2 text-white">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div
          className={styles.funContainer}
          style={{
            backgroundImage: "url('/BackgroundCard.jpg')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right'
          }}
        >
          <div className="text-white flex flex-col items-center">
            <h2 className="text-4xl mb-8 text-violet-900">Sign Up. Get Started</h2>
            <p className="mb-8 text-2xl text-violet-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <LightButton name="Sign Up" onClick={handleRegister} className='mt-auto' />
        </div>
      </div>
    </section>
  );
};
