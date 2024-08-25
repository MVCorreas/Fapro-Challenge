"use client";
import { useRouter, usePathname } from "next/navigation";
import { DropDownIcon, HamburgerIcon, BellIcon } from "../../../public/Icons";
import Image from "next/image";
import { MainButton, OutlinedButton } from "./Buttons";
import { RiSearchLine } from "@remixicon/react";

const navLinks = [
  { title: "Home", path: "#hero" },
  { title: "About", path: "#about" },
  { title: "Solutions", path: "#solutions" },
  { title: "Contact", path: "#contact" },
];

export const NavBarLanding = () => {
  const router = useRouter();

  const logIn = () => {
    router.push("/signin");
  };

  const signUp = () => {
    router.push("/register");
  };

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-medium-pink bg-opacity-30 backdrop-blur-lg h-24 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <HamburgerIcon />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-light-pink rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  onClick={handleScroll}
                  className="text-dark-teal hover:text-light-teal "
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/Assets/TealLogo.png"
          alt="logo"
          width={200}
          height={200}
          style={{ borderRadius: "10px" }}
          priority
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 justify-between space-x-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                onClick={handleScroll}
                className="text-dark-teal hover:text-light-teal"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <MainButton onClick={logIn} name="Sign In" bgColor='bg-dark-teal' hoverColor="hover-light-teal" />
        <OutlinedButton onClick={signUp} name="Sign Up" />
      </div>
    </div>
  );
};

export const NavBarForms = () => {
  const router = useRouter();
  const pathname = usePathname();

  console.log("Current path:", pathname);

  const signUp = () => {
    router.push("/register");
  };

  const logIn = () => {
    router.push("/signin");
  };

  const navigateHome = () => {
    router.push("/");
  };


  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-medium-pink bg-opacity-90 h-24 flex items-center px-6">
    <div className="navbar-start flex-1">
    <Image
          src="/Assets/TealLogo.png"
          alt="logo"
          width={200}
          height={200}
          style={{ borderRadius: "10px", cursor: 'pointer' }}
          onClick={navigateHome}
          priority
        />
    </div>
    <div className="navbar-end">
        {pathname === "/signin" ? (
          <OutlinedButton onClick={signUp} name="Sign Up" />
        ) : (
          <OutlinedButton onClick={logIn} name="Sign In" />
        )}
      </div>
    </div>
  );
};


export const NavBarDashboard = () => {
  const router = useRouter();

  const firstName = typeof window !== "undefined" ? localStorage.getItem("UserName") : null;
  const navigateHome = () => {
    router.push("/");
  };

  const navigateProfile = () => {
    router.push('/profile')
  }
  
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-medium-pink bg-opacity-90 h-24 flex items-center">
      <div className="flex-1">
        <Image
          src="/Assets/TealLogo.png"
          alt="logo"
          width={200}
          height={200}
          style={{ borderRadius: "10px", cursor: "pointer" }}
          onClick={navigateHome}
          priority
        />
      </div>
      <div className="flex-none flex items-center gap-4">
        <div className="form-control relative">
          <RiSearchLine className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto h-8 text-sm pl-8"
          />
        </div>
  
        <div className="flex items-center">

          <BellIcon />
        </div> 
  
        <div className="dropdown dropdown-end flex items-center">
        <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-12 rounded-full">
              <Image
                alt="profile pic"
                src="/Emoji.png"
                width={50}
                height={50}
                priority
              />
            </div>
            <span className="text-dark-teal text-md mr-1">{firstName}</span>
          </div>
         
           
          <button className="btn btn-square btn-ghost ml-2">
            <DropDownIcon />
          </button>
  
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between" onClick={navigateProfile}>
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={navigateHome}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}  