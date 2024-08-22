import React from "react";
import { BellIcon, DarkModeIcon, HamburgerIcon, SearchIcon } from "../../../public/Icons";
import { RiSearchLine } from "@remixicon/react";
import Image from "next/image";

export const Header = () => {
    return (
        <div className="navbar bg-base-100 h-12 border-b border-gray-200">
  <div className="flex-1">
  <button className="btn btn-square btn-ghost">
     <HamburgerIcon/>
    </button>
    <div className="form-control relative">
  <RiSearchLine className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
  <input 
    type="text" 
    placeholder="Search" 
    className="input input-bordered w-24 md:w-auto h-8 text-sm pl-8" 
  />
</div>
   
  </div>
  <div className="flex-none gap-2">
    <div className="m-2 flex justify-between space-x-4">
    <DarkModeIcon/>
    <BellIcon />
    </div>
  
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full border-gray-300 border">
          <Image
            alt="profile pic"
            src="/Avatar.jpeg" 
            width={30}
            height={30}
            priority/>
         
        </div>
      
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    )
}