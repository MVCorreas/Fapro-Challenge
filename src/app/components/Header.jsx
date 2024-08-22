"use client"
import React from "react";
import { BellIcon, DarkModeIcon, HamburgerIcon, SearchIcon } from "../../../public/Icons";
import { RiSearchLine } from "@remixicon/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter()

  const navigateHome = () => {
    router.push("/");
  };
    return (
      <div className="navbar fixed top-0 left-0 right-0 z-50 bg-slate-900 bg-opacity-90 h-24">
  <div className="flex-1">
  <Image
          src="/Logo.png"
          alt="logo"
          width={100}
          height={100}
          style={{ borderRadius: "10px" }}
          onClick={navigateHome}
          priority
        />
 

    
   
  </div>
  <div className="flex-none gap-2">
    {/* <div className="m-2 flex justify-between space-x-4">
    <DarkModeIcon/>
    <BellIcon />
    </div> */}
  <div className="form-control relative">
  <RiSearchLine className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
  <input 
    type="text" 
    placeholder="Search" 
    className="input input-bordered w-24 md:w-auto h-8 text-sm pl-8" 
  />
</div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full border-gray-300 border">
          <Image
            alt="profile pic"
            src="/profileAvatar.jpeg" 
            width={30}
            height={30}
            priority/>
         
        </div>
      
      </div>
      <button className="btn btn-square btn-ghost">
     <HamburgerIcon/>
    </button>
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
