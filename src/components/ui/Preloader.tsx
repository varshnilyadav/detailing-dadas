'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Preloader.module.css';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    
    const finishLoading = () => {
      // Start fade out transition
      setIsFading(true);
      
      // Wait for CSS transition to complete before unmounting
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = 'auto'; // Restore scrolling
      }, 800); 
    };

    const handleLoad = () => {
      // Small minimum delay to ensure the cinematic effect is seen
      setTimeout(finishLoading, 800); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout in case window load event fails or takes too long
      const timeoutId = setTimeout(finishLoading, 3000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`${styles.preloader} ${isFading ? styles.fadingOut : ''}`}>
      <div className={styles.content}>
        <Image 
          src="/assets/logo.png" 
          alt="Detailing Dadas" 
          width={280} 
          height={60} 
          className={styles.logo}
          priority
          style={{ objectFit: 'contain' }}
        />
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
      </div>
    </div>
  );
};
