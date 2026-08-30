'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './Brands.module.css';

const BRANDS = [
  { name: 'HYUNDAI', type: 'normal' },
  { name: 'BMW', type: 'luxury' },
  { name: 'MERCEDES', type: 'luxury' },
  { name: 'AUDI', type: 'luxury' },
  { name: 'TOYOTA', type: 'normal' },
  { name: 'VOLKSWAGEN', type: 'normal' },
  { name: 'HONDA', type: 'normal' },
  { name: 'KIA', type: 'normal' },
  { name: 'TATA', type: 'normal' },
  { name: 'MAHINDRA', type: 'normal' },
  { name: 'MG', type: 'bold' },
  { name: 'SUZUKI', type: 'normal' },
  { name: 'JEEP', type: 'bold' },
  { name: 'ŠKODA', type: 'normal' },
  { name: 'CHEVROLET', type: 'normal' },
  { name: 'MITSUBISHI', type: 'normal' },
  { name: 'FORD', type: 'normal' },
  { name: 'LEXUS', type: 'luxury' },
  { name: 'RENAULT', type: 'normal' },
  { name: 'JAGUAR', type: 'luxury' },
];

const PREMIUM_BRANDS = [
  { name: '3M', img: '/images/logo-3m.png' },
  { name: "Meguiar's", img: '/images/logo-meguiars.png' },
  { name: 'Gtechniq', img: '/images/logo-gtechniq.png' },
  { name: 'Koch-Chemie', img: '/images/logo-koch-chemie.png' },
  { name: 'Rupes', img: '/images/logo-rupes.png' },
  { name: 'Kärcher', img: '/images/logo-karcher.png' },
  { name: 'CarPro', img: '/images/logo-carpro.png' },
  { name: 'Menzerna', img: '/images/logo-menzerna.png' },
];

export default function Brands() {
  return (
    <>
      {/* BRANDS WE SERVICE */}
      <section className={styles.section}>
        <div className={styles.brandsLabel}>
          <motion.span 
            className={styles.sectionTag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            BRANDS WE SERVICE
          </motion.span>
        </div>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            {[...BRANDS, ...BRANDS].map((brand, idx) => (
              <div className={styles.brandItem} key={idx}>
                <div className={clsx(
                  styles.brandText, 
                  brand.type === 'luxury' && styles.brandLuxury,
                  brand.type === 'bold' && styles.brandBold
                )}>
                  {brand.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.spacer} />

        {/* PREMIUM BRANDS WE USE */}
        <div className={styles.brandsLabel}>
          <motion.span 
            className={styles.sectionTag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            PREMIUM BRANDS WE USE
          </motion.span>
        </div>
        <div className={styles.marqueeWrapper}>
          <div className={clsx(styles.marquee, styles.marqueeReverse)}>
            {[...PREMIUM_BRANDS, ...PREMIUM_BRANDS].map((brand, idx) => (
              <div className={styles.brandItem} key={idx} title={brand.name}>
                {/* Fallback to text if images are not uploaded yet by the user */}
                <div className={styles.brandText}>{brand.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
