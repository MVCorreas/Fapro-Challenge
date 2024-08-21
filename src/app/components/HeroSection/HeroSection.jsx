"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true); 
  };

  return (
    <section className={styles.section} id="hero">
     
      <h1 className={styles.heroTitle}>A LITTLE ABOUT MARIA</h1>
      {/* <div className='shadow-lg'>
      <Image 
      src='/CreditCard.avif'
      width={300}
      height={300}
      priority
      style={{rotate: '100px' }}
      />
      </div> */}
     
    </section>
  );
};


