"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GradientButton, MainButton } from '@/app/components/Buttons';

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
        src="/Assets/PinkVideo.mp4" 
      ></video>
      <div className="relative w-[40%] flex flex-col items-center z-10 gap-2 text-center">
        <p className="text-dark-teal mb-4 text-5xl font-bold sm:text-5xl lg:text-7xl lg:leading-normal animate-slideUp delay-500 mt-12"
           style={{ fontSize: '3.5rem' }}> 
          A NEW GENERATION OF DATA  MANAGEMENT
         
        </p>
        <p className="font-light text-3xl text-dark-pink m-8 animate-slideUp delay-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex w-full justify-center">
          <MainButton
            onClick={logIn}
            name='Get Started'
            className='text-lg'
            bgColor='bg-dark-teal'
            hoverColor='hover:bg-light-teal'
          />
        </div>
      </div>
    </section>
  );
};
