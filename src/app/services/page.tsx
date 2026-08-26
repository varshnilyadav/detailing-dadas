import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Services | Detailing Dadas',
  description: 'Explore our premium automotive detailing services including Foam Wash, Ceramic Coating, PPF, and Interior/Exterior Detailing in Vijayawada.',
};

export default function ServicesPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.subtitle}>Professional detailing, long-lasting protection, and immaculate results.</p>
        </div>
      </header>

      <section className={styles.container}>
        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`${styles.serviceItem} ${index % 2 !== 0 ? styles.reverse : ''}`}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className={styles.image} 
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <div className={styles.tagline}>{service.tagline}</div>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.action}>
                  <Button href={`/services/${service.slug}`}>View Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
