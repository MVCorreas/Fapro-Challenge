import { FacebookIcon, TwitterIcon, YoutubeIcon } from "../../../public/Icons"

export const Footer = () => {
    return (
        <footer className="footer footer-center bg-[#0f172a] text-neutral-content rounded p-10">
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
    <p>Copyright © {new Date().getFullYear()} - All right reserved by MVCorreas Ltd</p>
  </aside>
</footer>
    )
}