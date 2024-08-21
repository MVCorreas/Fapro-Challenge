"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  const router = useRouter()

  const logIn = () => {
    router.push("/signin");
  };


  return (
    <section className={styles.section} id="hero">

      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-700 via-amber-100 to-transparent rounded-full h-[500px] w-[500px] z-0 blur-xl absolute top-1/8 -left-1 ml-[50px] transform -translate-x-1/8 -translate-1/2"></div>
      
      <div className="w-1/2 relative flex flex-col items-center z-10">
        <h1 className={`${styles.heroTitle} text-black mb-4 text-3xl sm:text-5xl lg:text-8xl lg:leading-normal font-bold-700`} style={{ fontWeight: '700' }}>
          A NEW GENERATION OF DATA {''}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-900 via-purple-700 to-amber-200">
            MANAGEMENT
          </span>
        </h1>
        <p className={`${styles.heroSubTitle} font-lighter text-xs m-8`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <br/>
        <button
          onClick={logIn}
          className="btn w-32 bg-violet-400 hover:bg-slate-200 text-white rounded-md"
        >
          Get Started
        </button>
      </div>
      
      <div className="w-1/2 relative grid grid-cols-3 gap-4 mt-10 z-10">
        <div className="col-span-1 ml-20 w-full mb-[200px]">
          <Image 
            src='/HeroImage1.webp'
            width={700}
            height={700}
            priority
            className={`${styles.heroTitle} object-cover`}
            style={{ borderRadius: '10px' }}
          />
        </div>

        <div className="col-span-2 relative -ml-10 mt-10 z-10">
          <Image 
            src='/HeroImage6.webp'
            width={300}
            height={300}
            priority
            className={`${styles.heroTitle} object-cover`}
          />
        </div>

        <div className="col-span-1 -mt-40 -ml-30">
          <Image 
           src='/HeroImage4.png'
            width={300}
            height={300}
            priority
            className={`${styles.heroTitle} object-cover`}
          />
        </div>

        <div className="col-span-2 ml-20 w-full mb-[100px] -mt-10 z-10">
          <Image 
            src='/HeroImage7.jpg'
            width={300}
            height={300}
            priority
            className={`${styles.heroTitle} object-cover`}
          />
        </div>
      </div>
    </section>
  );
};
