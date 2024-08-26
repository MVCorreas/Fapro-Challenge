import Image from "next/image";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "../../../public/Icons";

export const Footer = () => {
  return (
    <footer className="footer footer-center bg-dark-teal text-white ">
      <Image
        src="/Assets/PinkLogo.png"
        alt="logo"
        width={200}
        height={200}
        style={{ borderRadius: "10px" }}
        priority
      />
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <TwitterIcon />
          </a>
          <a>
            <YoutubeIcon />
          </a>
          <a>
            <FacebookIcon />
          </a>
        </div>
      </nav>
      <aside>
        <p className="mb-12">
          Copyright © {new Date().getFullYear()} - All right reserved by
          MVCorreas Ltd
        </p>
      </aside>
    </footer>
  );
};
