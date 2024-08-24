"use client";
import React from "react";
import useEaseIn from "../hooks/useEaseIn";

const solutions = [
  {
    id: 1,
    title: "Banking",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus",
  },
  {
    id: 2,
    title: "Financing",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus",
  },
  {
    id: 3,
    title: "Investment",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reiciendis nisi laboriosam corrupti libero omnis quis non quia labore excepturi? Error tenetur alias, eius quas ipsum corrupti eveniet quos doloribus",
  },
  {
    id: 4,
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
      className="opacity-0 translate-y-10 animate-slideUp p-10 bg-slate-900 animate-slideUpAndFade delay-500"
      id="solutions"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-5xl sm:text-5xl lg:text-7xl font-200 lg:leading-normal  text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-200 to-amber-400">
            SOLUTIONS
          </h2>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white">
              {solutions[0].title}
            </h3>
            <p className="font-lighter text-lg mt-2 text-white">
              {solutions[0].description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {solutions.slice(1).map((sol) => (
            <div key={sol.id} className="p-6">
              <h3 className="text-2xl font-bold text-white">{sol.title}</h3>
              <p className="font-lighter text-lg mt-2 text-white">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
