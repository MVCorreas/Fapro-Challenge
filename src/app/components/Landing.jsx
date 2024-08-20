"use client"
import { useRouter } from "next/navigation"
import {HeroSection} from './HeroSection/HeroSection'
import { AboutSection } from "./About"
import { InterestsSection } from "./Interests/Interests"
import { NavBar } from "./NavBar"

export const Landing = () => {
    const router = useRouter()

    const logIn = () => {
        router.push('/signin')
    }

    const signUp = () => {
        router.push('/register')
    }
return (
    <div>
        <NavBar/>
              <HeroSection />
              <AboutSection />
            <InterestsSection/>

 {/* <button className='btn btn-outline btn-sm' onClick={logIn}>Sign In</button>
 <button className='btn btn-outline btn-sm' onClick={signUp}>Sign Up</button> */}

    </div>
   
)
}