import Image from "next/image";
import {
  EcommerceIcon,
  FileManagerIcon,
  LandingIcon,
  ComponentsIcon,
  AuthIcon,
  DashboardIcon,
} from "../../../public/Icons";
import { MainButton } from "./Buttons";

export const LeftPanel = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="join join-vertical w-full h-[900px] bg-violet-400 rounded-none mt-24 md:mt-32 lg:mt-24 text-white flex flex-col justify-center items-center">
        <div className="flex justify-center mb-4">
          <button className="btn text-xs btn-active btn-ghost bg-[#d1d5db] w-lg">
            <DashboardIcon className="w-4 h-4" />
            Dashboard
          </button>
        </div>
        <div className="menu w-24 mb-1">
          <li className="menu-title text-xs">Apps</li>
        </div>
        <ul className="menu menu-xs rounded-lg w-full max-w-xs mb-1">
          <li>
            <details open>
              <summary>
                <EcommerceIcon />
                Ecommerce
              </summary>
              <ul>
                <li><a>Orders</a></li>
                <li><a>Order Details</a></li>
                <li><a>Products</a></li>
                <li><a>Sellers</a></li>
                <li><a>Customers</a></li>
                <li><a>Shops</a></li>
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
        <div className="menu w-24 mb-1">
          <li className="menu-title text-xs">Pages</li>
        </div>
        <ul className="menu menu-xs rounded-lg w-full max-w-xs mb-1">
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
                <li><a>Login</a></li>
                <li><a>Register</a></li>
                <li><a>Forgot Password</a></li>
                <li><a>Reset Password</a></li>
              </ul>
            </details>
          </li>
        </ul>
        <div className="menu w-32 mb-1">
          <li className="menu-title text-xs">UI Showcase</li>
        </div>
        <ul className="menu menu-xs rounded-lg w-full max-w-xs mb-1">
          <li>
            <a>
              <ComponentsIcon />
              Components
            </a>
          </li>
        </ul>
        <div className="card text-black text-xs w-[80%] bg-white p-3 flex flex-col text-center justify-center rounded-md">
          <p className="text-md font-bold">Need Premium?</p>
          <p>Access all features with single time purchase</p>
          <div className="card-actions mt-2">
            <MainButton name='Purchase'/>
          </div>
        </div>
      </div>
    </div>
  );
};
