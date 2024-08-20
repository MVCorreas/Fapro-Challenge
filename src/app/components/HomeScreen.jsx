"use client"
import { useRouter } from "next/navigation"

export const HomeScreen = () => {
    const router = useRouter()

    const logIn = () => {
        router.push('/signin')
    }

    const signUp = () => {
        router.push('/register')
    }
return (
    <div>
 <h1>HOME</h1>
 <button className='btn btn-outline btn-sm' onClick={logIn}>Sign In</button>
 <button className='btn btn-outline btn-sm' onClick={signUp}>Sign Up</button>

    </div>
   
)
}