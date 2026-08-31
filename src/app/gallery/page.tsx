'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import styles from './page.module.css';

const GALLERY_ITEMS = [
  { id: 1, src: '/assets/gallery/gallery-1.jpeg', category: 'Exterior', title: 'Detailed Finish' },
  { id: 2, src: '/assets/gallery/gallery-2.jpeg', category: 'Ceramic', title: 'Ceramic Coating Application' },
  { id: 3, src: '/assets/gallery/gallery-3.jpeg', category: 'PPF', title: 'PPF Installation' },
  { id: 4, src: '/assets/gallery/gallery-4.jpeg', category: 'Interior', title: 'Interior Deep Clean' },
  { id: 5, src: '/assets/gallery/gallery-5.jpeg', category: 'Exterior', title: 'Foam Wash' },
  { id: 6, src: '/assets/gallery/gallery-6.jpeg', category: 'Ceramic', title: 'Gloss Enhancement' },
  { id: 7, src: '/assets/gallery/gallery-7.jpeg', category: 'Exterior', title: 'Paint Correction' },
  { id: 8, src: '/assets/gallery/gallery-8.jpeg', category: 'PPF', title: 'Paint Protection Film' },
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
