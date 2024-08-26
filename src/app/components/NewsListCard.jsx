import React from "react";
import { NewsIcon } from "../../../public/Icons";
import Image from "next/image";

const chatMessages = [
  {
    id: 1,
    image: "/Assets/BBC.png",
    name: "BBC News",
    time: "2:01 am",
    message: "Bitcoin price set to hit 66k.",
  },
  {
    id: 2,
    image: "/Assets/TheTimes.png",
    name: "The New York Times",
    time: "12:21 am",
    message: "Former Citygroup executive suing bank was fired for performance.",
  },
  {
    id: 3,
    image: "/Assets/CNBC.png",
    name: "CNBC",
    time: "10:41 pm",
    message: "China slams US for adding export control list.",
  },
  {
    id: 4,
    image: "/Assets/TheTimes.png",
    name: "The New York Times",
    time: "9:01 pm",
    message: "Oil climbs on Mideast escalation fears.",
  },
];

export const NewsListCard = () => {
  return (
    <div className="relative overflow-x-auto bg-base-100 w-full mr-12 shadow-2xl rounded-sm h-80">
      <div className="card-body p-4">
        <div className="stat-desc flex items-center font-semibold text-black mb-4">
          <NewsIcon className="w-5 h-5 mr-2" />
          Latest International News
        </div>
        {chatMessages.map(({ id, image, name, time, message }) => (
          <div key={id} className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2 w-full">
              <div className="rounded-md p-1 border border-gray-50">
                <Image
                  src={image}
                  alt="user"
                  width={40}
                  height={40}
                  priority
                  style={{ width: "auto", height: "auto" }}
                />
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
          <button className="btn bg-dark-teal text-white btn-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
