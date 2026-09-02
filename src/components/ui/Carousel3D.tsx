'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Carousel3D.module.css';

const CARS = [
  { src: '/assets/gallery/gallery-1.jpeg', alt: 'Premium Detailing Exterior Finish' },
  { src: '/assets/gallery/gallery-2.jpeg', alt: 'Ceramic Coating Application' },
  { src: '/assets/gallery/gallery-3.jpeg', alt: 'PPF Installation' },
  { src: '/assets/gallery/gallery-4.jpeg', alt: 'Interior Deep Clean' },
  { src: '/assets/gallery/gallery-5.jpeg', alt: 'Gloss Enhancement and Polishing' },
];

export const Carousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at middle
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CARS.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CARS.length) % CARS.length);
  };

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  const getStyle = (index: number) => {
    const diff = (index - currentIndex + CARS.length) % CARS.length;
    
    // Normalize diff to -2, -1, 0, 1, 2 assuming 5 items
    let offset = diff;
    if (offset > 2) offset -= CARS.length;

    const absOffset = Math.abs(offset);
    const zIndex = 10 - absOffset;
    
    let transform = '';
    let opacity = 1;
    let filter = 'none';

    if (offset === 0) {
      transform = 'translateX(0) scale(1) translateZ(0)';
      filter = 'brightness(1.1)'; // Center card pops more
    } else if (offset === 1) {
      transform = 'translateX(30%) scale(0.8) translateZ(-100px) rotateY(-15deg)';
      opacity = 0.8;
      filter = 'brightness(0.7)';
    } else if (offset === -1) {
      transform = 'translateX(-30%) scale(0.8) translateZ(-100px) rotateY(15deg)';
      opacity = 0.8;
      filter = 'brightness(0.7)';
    } else if (offset === 2) {
      transform = 'translateX(60%) scale(0.6) translateZ(-200px) rotateY(-25deg)';
      opacity = 0.4;
      filter = 'brightness(0.4)';
    } else if (offset === -2) {
      transform = 'translateX(-60%) scale(0.6) translateZ(-200px) rotateY(25deg)';
      opacity = 0.4;
      filter = 'brightness(0.4)';
    }

    return { transform, zIndex, opacity, filter };
  };

  return (
    <div 
      className={styles.carouselSection}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.carouselContainer}>
        {CARS.map((car, index) => (
          <div 
            key={index}
            className={styles.cardWrapper}
            style={getStyle(index)}
            onClick={() => setCurrentIndex(index)}
          >
            <div className={`${styles.card} ${index === currentIndex ? styles.activeCard : ''}`}>
              <Image 
                src={car.src} 
                alt={car.alt} 
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.cardImage}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.controlBtn} aria-label="Previous">
          <ChevronLeft size={24} />
        </button>
        <div className={styles.indicators}>
          {CARS.map((_, idx) => (
            <button 
              key={idx}
              className={`${styles.indicator} ${idx === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button onClick={handleNext} className={styles.controlBtn} aria-label="Next">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
