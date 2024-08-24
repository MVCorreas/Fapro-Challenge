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
    <section className='bg-slate-900 text-white min-h-screen overflow-y-clip flex justify-center items-center space-x-12 pt-10 mb-8' id="hero">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-700 via-amber-100 to-transparent rounded-full h-[500px] w-[500px] z-0 blur-xl opacity-50 absolute top-1/8 -left-1 ml-[50px] transform -translate-x-1/8 -translate-1/2"></div>

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

      <div className="w-1/2 relative grid grid-cols-3 gap-4 mt-10 z-10">
        <div className="col-span-1 ml-20 w-full mb-[200px]">
          <Image
            src='/HeroImage1.webp'
            alt='hero1'
            width={700}
            height={700}
            priority
            className={`animate-slideUp delay-500`}
            style={{ borderRadius: '10px' }}
          />
        </div>

        <div className="col-span-2 relative -ml-10 mt-10 z-10">
          <Image
            src='/HeroImage6.png'
            alt='hero1'
            width={300}
            height={300}
            priority
            className="animate-slideUp delay-500"
          />
        </div>

        <div className="col-span-1 -mt-40 -ml-30">
          <Image
            src='/HeroImage4.png'
            alt='hero1'
            width={300}
            height={300}
            priority
            className="animate-slideUp delay-500"
          />
        </div>

        <div className="col-span-2 ml-20 w-full mb-[100px] -mt-10 z-10 h-auto">
          <Image
            src='/HeroImage7.jpg'
            alt='hero1'
            width={300}
            height={300}
            priority
            className="rounded-md w-auto h-auto animate-slideUp delay-500"
          />
        </div>
      </div>
    </section>
  );
};
