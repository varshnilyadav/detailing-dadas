import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ slug, title, description, image }) => {
  return (
    <Link href={`/services/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image} 
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.link}>
          View Details <ArrowRight size={18} className={styles.icon} />
        </div>
      </div>
    </Link>
  );
};
