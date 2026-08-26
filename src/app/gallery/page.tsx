'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import styles from './page.module.css';

const GALLERY_ITEMS = [
  { id: 1, src: '/assets/gallery/gallery-01.jpg', category: 'Exterior', title: 'Paint Correction' },
  { id: 2, src: '/assets/gallery/gallery-02.jpg', category: 'Ceramic', title: 'Ceramic Coating Application' },
  { id: 3, src: '/assets/gallery/gallery-03.jpg', category: 'PPF', title: 'Front Bumper PPF' },
  { id: 4, src: '/assets/gallery/gallery-04.jpg', category: 'Interior', title: 'Deep Leather Cleaning' },
  { id: 5, src: '/assets/gallery/gallery-05.jpg', category: 'Exterior', title: 'Foam Wash' },
  { id: 6, src: '/assets/gallery/gallery-06.jpg', category: 'Ceramic', title: 'Gloss Enhancement' },
];

const CATEGORIES = ['All', 'Exterior', 'Interior', 'Ceramic', 'PPF'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const openLightbox = (src: string) => {
    setCurrentImage(src);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <header className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.title}>The Dadas Standard</h1>
          <p className={styles.subtitle}>Cinematic gallery of our premium automotive transformations.</p>
        </div>
      </header>

      <section className={styles.container}>
        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={styles.galleryItem}
              onClick={() => openLightbox(item.src)}
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                className={styles.image} 
              />
              <div className={styles.overlay}>
                <span className={styles.itemCategory}>{item.category}</span>
                <span className={styles.itemTitle}>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <div className={`${styles.lightbox} ${lightboxOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={closeLightbox}>
          <X size={32} />
        </button>
        {currentImage && (
          <div className={styles.lightboxContent}>
            <Image 
              src={currentImage} 
              alt="Gallery Preview" 
              fill 
              className={styles.lightboxImage} 
            />
          </div>
        )}
      </div>
    </>
  );
}
