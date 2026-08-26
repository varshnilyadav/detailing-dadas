import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Detailing Dadas`,
    description: service.shortDescription,
  };
}

// Generate static params for all services
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          priority
          className={styles.heroImage} 
        />
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.tagline}>{service.tagline}</p>
        </div>
      </section>

      <div className={styles.container}>
        <p className={styles.description}>{service.description}</p>

        <div className={styles.recommended}>
          <span>Recommended For:</span>
          {service.recommendedFor}
        </div>

        <div className={styles.grid}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Benefits</h2>
            <ul className={styles.list}>
              {service.benefits.map((benefit, index) => (
                <li key={index} className={styles.listItem}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>What's Included</h2>
            <ul className={styles.list}>
              {service.included.map((item, index) => (
                <li key={index} className={styles.listItem}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Process</h2>
          <div className={styles.processList}>
            {service.process.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <h4 className={styles.stepTitle}>
                  <span style={{ color: 'var(--color-green)', marginRight: '0.5rem' }}>{index + 1}.</span> 
                  {step.title}
                </h4>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <h3>Ready to book this service?</h3>
          <Button href="/contact">Book {service.title}</Button>
        </div>
      </div>
    </>
  );
}
