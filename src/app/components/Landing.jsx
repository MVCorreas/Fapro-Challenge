"use client"
import { useRouter } from "next/navigation"
import {HeroSection} from './HeroSection/HeroSection'
import { AboutSection } from "./About/About"
import { InterestsSection } from "./Interests/Interests"

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
              <HeroSection />
              <AboutSection />
            

 {/* <button className='btn btn-outline btn-sm' onClick={logIn}>Sign In</button>
 <button className='btn btn-outline btn-sm' onClick={signUp}>Sign Up</button> */}

    </div>
   
)
}