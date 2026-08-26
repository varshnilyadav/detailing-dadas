'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';

export const HeroVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className={styles.fallbackContainer}>
        <Image 
          src="/assets/hero/hero-fallback.jpg" 
          alt="Detailing Dadas Hero" 
          fill 
          priority
          className={styles.fallbackImage}
        />
      </div>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="metadata"
        className={`${styles.videoBackground} ${isLoaded ? styles.loaded : ''}`}
        onCanPlay={() => setIsLoaded(true)}
      >
        <source src="/assets/hero/hero-video.mp4" type="video/mp4" />
      </video>
    </>
  );
};
