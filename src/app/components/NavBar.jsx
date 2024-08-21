import { useRouter } from "next/navigation";
import { HamburgerIcon } from "../../../public/Icons";
import Image from "next/image";

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
    title: "Contact",
    path: "#contact",
  },
];

export const NavBar = () => {
  const router = useRouter();

  const logIn = () => {
    router.push("/signin");
  };

  const signUp = () => {
    router.push("/register");
  };

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-50 backdrop-blur-lg h-24">
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
          width={100}
          height={100}
          style={{ borderRadius: "10px" }}
          priority
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 justify-between space-x-6 text-black text-lg">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <button
          onClick={logIn}
          className="btn w-32 bg-violet-400 hover:bg-slate-200 text-white rounded-md"
        >
          Sign In
        </button>
        <button onClick={signUp} className="btn btn-outline text-violet-800">
          Sign Up
        </button>
      </div>
    </div>
  );
};
