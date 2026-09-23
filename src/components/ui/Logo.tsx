import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/config';
import styles from './Logo.module.css';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  width = 200, 
  height = 40, 
  className = '', 
  priority = false 
}) => {
  // Add a 'large' class for logos 250px or wider to adjust the trademark size proportionally
  const isLarge = width >= 250;

  return (
    <div className={`${styles.logoContainer} ${isLarge ? styles.large : ''} ${className}`}>
      <Image 
        src="/assets/logo.png" 
        alt={siteConfig.name} 
        width={width} 
        height={height} 
        className={styles.logoImage}
        priority={priority}
      />
      <span className={styles.trademark}>&trade;</span>
    </div>
  );
};
