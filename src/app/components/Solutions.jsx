"use client";
import React from "react";
import Image from "next/image";
import useEaseIn from "../hooks/useEaseIn";

const solutions = [
  {
    id: 1,
    logo: '/Assets/Banking.png',
    title: "Banking",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus",
  },
  {
    id: 2,
    logo: '/Assets/Investment.png',
    title: "Finance",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus",
  },
  {
    id: 3,
    logo: '/Assets/Dart.png',
    title: "Investment",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus",
  },
  {
    id: 4,
    logo: '/Assets/Insuarance.png',
    title: "Insurance",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus",
  },
];

export const SolutionsSection = () => {
  const sectionsRef = useEaseIn();

  return (
    <section
      ref={(el) => (sectionsRef.current[1] = el)}
      className="opacity-0 translate-y-10 animate-slideUp p-10 bg-dark-teal animate-slideUpAndFade delay-500"
      id="solutions"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-5xl sm:text-5xl lg:text-7xl font-bold lg:leading-normal text-medium-pink">
            SOLUTIONS
          </h2>
          <div className="p-6 space-x-16">
            <h3 className="flex items-center text-3xl font-bold text-dark-pink">
              <Image
                src={solutions[0].logo}
                alt="Solution Logo"
                width={60}
                height={60}
                className="mr-4" 
              />
              {solutions[0].title}
            </h3>
            <p className="font-light text-2xl mt-2 text-white">
              {solutions[0].description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {solutions.slice(1).map((sol) => (
            <div key={sol.id} className="p-6 space-x-16">
              <h3 className="flex items-center text-3xl font-bold text-dark-pink">
                <Image
                  src={sol.logo}
                  alt="Solution Logo"
                  width={60}
                  height={60}
                  className="mr-4" 
                />
                {sol.title}
              </h3>
              <p className="font-light text-2xl mt-2 text-white">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};