'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Founder.module.css';

export default function Founder() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.founderSection} ${isVisible ? styles.visible : ''}`} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/founder-placeholder.svg" 
                alt="Ajay Dasari - Founder"
                fill
                className={styles.founderImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>

          {/* Content Column */}
          <div className={styles.contentColumn}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Meet the Founder
            </div>
            <h2 className={styles.name}>Ajay Dasari</h2>
            <h3 className={styles.title}>Founder</h3>
            
            <div className={styles.description}>
              <p>
                Passion for automotive perfection isn't just a business—it's a pursuit of excellence. I founded Detailing Dadas with a singular vision: to elevate the standard of car care through uncompromising quality, precision engineering, and premium products.
              </p>
              <p>
                Every vehicle that enters our studio is treated as a masterpiece. We don't just wash cars; we restore, protect, and redefine them. Our commitment is to deliver an experience that matches the luxury of the vehicles we service.
              </p>
            </div>
            
            <div className={styles.signatureWrapper}>
              <div className={styles.signatureLine}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
