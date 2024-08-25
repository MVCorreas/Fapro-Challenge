"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GradientButton } from '@/app/components/Buttons';

export const HeroSection = () => {
  const router = useRouter();

  const logIn = () => {
    router.push("/signin");
  };

  return (
    <section className='text-white min-h-screen overflow-y-clip flex justify-center items-center space-x-12 pt-10 mb-8' id="hero">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Assets/BackgroundVideo.mp4" // Replace with your video file
      ></video>
      <div className="w-[40%] relative flex flex-col items-center z-10 gap-2">
        <p className='text-white mb-4 text-5xl sm:text-5xl lg:text-7xl lg:leading-normal  animate-slideUp delay-500 mt-12' style={{fontSize: '200'}}>
          A NEW GENERATION OF DATA {''}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-amber-400">
            MANAGEMENT
          </span>
        </p>
        <p className='font-lighter text-2xl m-8 animate-slideUp delay-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <br />
        <div className='flex w-full'>
        <div className="flex justify-start px-6">
          <GradientButton
            onClick={logIn}
            name='Get Started'
          />
        </div>
        </div>
       
      </div>

     
      
    </section>
  );
};
