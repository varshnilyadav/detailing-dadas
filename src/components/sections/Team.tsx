'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Team.module.css';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Team Member Name',
    role: 'Detailing Specialist',
    image: '/assets/founder-placeholder.svg',
  },
  {
    id: 2,
    name: 'Team Member Name',
    role: 'Paint Correction Specialist',
    image: '/assets/founder-placeholder.svg',
  },
  {
    id: 3,
    name: 'Team Member Name',
    role: 'Ceramic Coating Specialist',
    image: '/assets/founder-placeholder.svg',
  },
  {
    id: 4,
    name: 'Team Member Name',
    role: 'PPF Specialist',
    image: '/assets/founder-placeholder.svg',
  }
];

export default function Team() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.teamSection} ${isVisible ? styles.visible : ''}`} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            Our Team
          </div>
          <h2 className={styles.sectionTitle}>The People Behind the Craft</h2>
          <p className={styles.sectionSubtitle}>
            Uncompromising attention to detail, extensive expertise, and a true passion for automotive perfection.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={member.id} 
              className={styles.teamCard}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardImageWrapper}>
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                />
                <div className={styles.cardOverlay}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
