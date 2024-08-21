import { useRouter } from "next/navigation"
import { HamburgerIcon } from "../../../public/Icons"
import Image from "next/image"

export const NavBar = () => {
    const router = useRouter()

    const logIn = () => {
        router.push('/signin')
    }

    const signUp = () => {
        router.push('/register')
    }
    return (
        <div className="navbar bg-transparent ">
  <div className="navbar-start">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <HamburgerIcon/>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        
        <li><a>Item 3</a></li>
      </ul>
    </div>
 <Image 
 src='/Logo.png'
 width={100}
 height={100}
 style={{borderRadius: '10px'}}
 priority/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-black">
      <li><a>Item 1</a></li>
     
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <button onClick={logIn} className="btn w-32 bg-violet-400 hover:bg-slate-200 text-white rounded-md">Sign In</button>
    <button onClick={signUp} className="btn btn-outline text-violet-800">Sign Up</button>
  </div>
  
</div>
    )
}