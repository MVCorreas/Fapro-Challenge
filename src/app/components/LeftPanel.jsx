import Image from "next/image";
import {
  EcommerceIcon,
  FileManagerIcon,
  LandingIcon,
  ComponentsIcon,
  AuthIcon,
  DashboardIcon,
} from "../../../public/Icons";

export const LeftPanel = () => {
  return (
    <div className="join join-vertical w-full min-h-screen bg-violet-400 rounded-none mt-24 md:mt-32 lg:mt-24 text-white">
      <div className="flex justify-center">
        <button className="btn text-xs btn-active btn-ghost bg-[#d1d5db] w-lg mt-3">
          <DashboardIcon className="w-4 h-4" />
          Dashboard
        </button>
      </div>
      <div className="menu w-24">
        <li className="menu-title text-xs">Apps</li>
      </div>
      <ul className="menu menu-xs  rounded-lg w-full max-w-xs">
        <li>
          <details open>
            <summary>
              <EcommerceIcon />
              Ecommerce
            </summary>
            <ul>
              <li>
                <a>Orders</a>
              </li>
              <li>
                <a>Order Details</a>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Sellers</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
              <li>
                <a>Shops</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>
            <FileManagerIcon />
            File Manager
          </a>
        </li>
      </ul>
      <div className="menu w-24">
        <li className="menu-title text-xs">Pages</li>
      </div>
      <ul className="menu menu-xs  rounded-lg w-full max-w-xs">
        <li>
          <a>
            <LandingIcon />
            Landing
          </a>
        </li>
        <li>
          <details open>
            <summary>
              <AuthIcon />
              Auth
            </summary>
            <ul>
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Register</a>
              </li>
              <li>
                <a>Forgot Password</a>
              </li>
              <li>
                <a>Reset Password</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <div className="menu w-32">
        <li className="menu-title text-xs">UI Showcase</li>
      </div>
      <ul className="menu menu-xs  rounded-lg w-full max-w-xs">
        <li>
          <a>
            <ComponentsIcon />
            Components
          </a>
        </li>
      </ul>
      <div className="card bg-[#d1d5db] text-black text-xs w-full mt-4 border-4 border-white p-3 flex flex-col items-center text-center rounded-md">
        <p className="text-md font-bold">Need Premium?</p>
        <p>Access all features with single time purchase</p>
        <div className="card-actions mt-2">
          <button className="btn btn-primary btn-sm text-xs">Purchase</button>
        </div>
      </div>
    </div>
  );
};
