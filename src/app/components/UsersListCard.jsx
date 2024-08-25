import React from "react";
import { ChatIcon } from "../../../public/Icons";
import Image from "next/image";

const chatMessages = [
  {
    id: 1,
    image: "/Person3.jpeg",
    name: "Mia Johnson",
    time: "2:01 am",
    message: "It is called Dreamscape. A must watch!",
  },
  {
    id: 2,
    image: "/Person1.webp",
    name: "Ethan Pathel",
    time: "12:21 am",
    message: "Just got a new book, excited to start.",
  },
  {
    id: 3,
    image: "/Person2.jpeg",
    name: "Sophia Nguyen",
    time: "10:41 pm",
    message: "How's your day going?",
  },
  {
    id: 4,
    image: "/Person3.jpeg",
    name: "Emily Chen",
    time: "9:01 pm",
    message: "Did you see that amazing sunset yesterday?",
  },
];

export const UsersListCard = () => {
  return (
    <div className="relative overflow-x-auto bg-base-100 w-full mr-12 shadow-2xl rounded-sm h-80">
      <div className="card-body p-4">
        <div className="stat-desc flex items-center font-semibold text-black mb-4">
          <ChatIcon className="w-5 h-5 mr-2" />
          Quick Chat
        </div>
        {chatMessages.map(({ id, image, name, time, message }) => (
          <div key={id} className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2 w-full">
              <div className="rounded-md p-1 border border-gray-50">
                <Image src={image} alt="user" width={40} height={40} priority style={{ width: 'auto', height: 'auto' }} />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center w-full mb-1">
                  <span className="text-black font-semibold">{name}</span>
                  <span className="text-gray-500 text-sm">{time}</span>
                </div>
                <p className="text-xs text-left">{message}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="card-actions flex justify-center mt-4">
          <button className="btn btn-outline btn-sm">Go to Chat</button>
        </div>
      </div>
    </div>
  );
};