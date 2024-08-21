import { useRouter, usePathname } from "next/navigation";
import { HamburgerIcon } from "../../../public/Icons";
import Image from "next/image";
import { MainButton, OutlinedButton } from "../utility/Buttons";

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
  const pathname = usePathname();

  const logIn = () => {
    router.push("/signin");
  };

  const signUp = () => {
    router.push("/register");
  };

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-50 backdrop-blur-lg h-24">
      {/* Always displayed elements */}
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
          alt='logo'
          width={100}
          height={100}
          style={{ borderRadius: "10px" }}
          priority
        />
      </div>

      {/* Conditionally displayed elements */}
      {pathname === "/" && (
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 justify-between space-x-6 text-black text-lg">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={link.path}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {pathname === "/signin" || pathname === "/register" ? (
        <div className="navbar-end gap-4">
          {pathname === "/signin" ? (
            <MainButton onClick={signUp} name="Sign Up" />
          ) : (
            <MainButton onClick={logIn} name="Sign In" />
          )}
        </div>
      ) : (
        <div className="navbar-end gap-4">
          <MainButton onClick={logIn} name="Sign In" />
          <OutlinedButton onClick={signUp} name="Sign Up" />
        </div>
      )}

      {pathname !== "/" && pathname !== "/signin" && pathname !== "/register" && (
        <div className="navbar-end flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
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
      )}
    </div>
  );
};
