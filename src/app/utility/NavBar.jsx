import { useRouter } from "next/navigation";
import { HamburgerIcon } from "../../../public/Icons";
import Image from "next/image";
import { LightButton, MainButton, OutlinedButton } from "./Buttons";

const navLinks = [
  {
    title: "Home",
    path: "#hero",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Solutions",
    path: "#solutions",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const NavBarLanding = () => {
  const router = useRouter();

  const logIn = () => {
    router.push("/signin");
  };

  const signUp = () => {
    router.push("/register");
  };

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-blur-lg h-24  z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <HamburgerIcon />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={link.path}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/Logo.png"
          alt="logo"
          width={100}
          height={100}
          style={{ borderRadius: "10px" }}
          priority
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 justify-between space-x-6 text-violet-100 text-lg">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <MainButton onClick={logIn} name="Sign In" />

        <OutlinedButton onClick={signUp} name="Sign Up" />
      </div>
    </div>
  );
};

export const NavBarSignIn = () => {
  const router = useRouter();

  const signUp = () => {
    router.push("/register");
  };

  const navigateHome = () => {
    router.push("/");
  };


  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-slate-900 bg-opacity-90 h-24 flex items-center px-6">
    <div className="navbar-start flex-1">
      <Image
        src="/Logo.png"
        alt="logo"
        width={100}
        height={100}
        onClick={navigateHome}
        style={{ borderRadius: "10px" }}
        priority
      />
    </div>
    <div className="navbar-end">
      <OutlinedButton onClick={signUp} name="Sign Up" />
    </div>
    </div>
  )
}
