import React from "react";
import { ChatIcon } from "../../../public/Icons";
import Image from "next/image";

const chatMessages = [
  {
    id: 1,
    image: "/profileAvatar.jpeg",
    name: "Mia Johnson",
    time: "2:01 am",
    message: "It is called Dreamscape. A must watch!",
  },
  {
    id: 2,
    image: "/profileAvatar.jpeg",
    name: "Ethan Pathel",
    time: "12:21 am",
    message: "Just got a new book, excited to start.",
  },
  {
    id: 3,
    image: "/profileAvatar.jpeg",
    name: "Sophia Nguyen",
    time: "10:41 pm",
    message: "How's your day going?",
  },
  {
    id: 4,
    image: "/profileAvatar.jpeg",
    name: "Emily Chen",
    time: "9:01 pm",
    message: "Did you see that amazing sunset yesterday?",
  },
];

export const UsersListCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow rounded-sm">
      <div className="card-body">
        <div className="stat-desc flex flex-row font-semibold text-black">
          <ChatIcon />
          Quick Chat
        </div>
        {chatMessages.map(({ id, image, name, time, message }) => (
          <div key={id} className="flex flex-row items-start justify-between mt-1">
            <div className="flex items-center space-x-2">
              <div className="rounded-md p-1">
                <Image src={image} width={40} height={40} priority />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center w-full">
                  <span className="stat-desc text-black font-semibold">{name}</span>
                  <span className="stat-desc text-right text-gray-500 text-sm ml-4">{time}</span>
                </div>
                <p className="text-xs text-left mt-1">{message}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-outline btn-sm">Go to Chat</button>
        </div>
      </div>
    </div>
  );
};
