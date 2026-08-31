import Image from 'next/image';
import Link from 'next/link';
import { Shield, Droplets, Sparkles, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ReviewCard } from '@/components/ui/ReviewCard';
import { Carousel3D } from '@/components/ui/Carousel3D';
import Brands from '@/components/sections/Brands';
import { HeroVideo } from '@/components/ui/HeroVideo';
import { services } from '@/data/services';
import { reviews } from '@/data/reviews';
import { siteConfig } from '@/data/config';
import styles from './page.module.css';

export default function Home() {
  // Select a few services for the preview
  const previewServices = services.slice(0, 3);

  // Instagram Reels
  const instaReels = [
    { url: "https://www.instagram.com/reel/DbnerLwzzaT/" },
    { url: "https://www.instagram.com/reel/DaxcUzHzOaG/" },
    { url: "https://www.instagram.com/reel/DD2JyhUPBCg/" },
    { url: "https://www.instagram.com/reel/DWQrmeEkz2k/" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <HeroVideo />
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>Precision.<br />Protection.<br />Perfection.</h1>
          <p className={styles.heroSubline}>Premium automotive detailing, protection and restoration for cars that deserve more.</p>
          <div className={styles.heroActions}>
            <Button href="/contact">Book Your Detail</Button>
            <Button href="/services" variant="secondary">Explore Services</Button>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div style={{ width: 1, height: 40, backgroundColor: 'var(--color-green)' }}></div>
        </div>
      </section>

      {/* Brands Section */}
      <Brands />

      {/* Intro Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Your Car. Our Craft.</h2>
          </div>
          <div className={styles.introContent}>
            <p className={styles.introText}>
              At Detailing Dadas, automotive care goes beyond cleaning. We combine professional products, meticulous technique and attention to detail to restore, protect and elevate every vehicle we work on.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h4>500+</h4>
              <p>Cars Detailed</p>
            </div>
            <div className={styles.statItem}>
              <h4>100%</h4>
              <p>Premium Products</p>
            </div>
            <div className={styles.statItem}>
              <h4>5+</h4>
              <p>Expert Technicians</p>
            </div>
            <div className={styles.statItem}>
              <h4>4.3★</h4>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <p className={styles.sectionSubtitle}>Professional detailing. Long-lasting protection. Immaculate results.</p>
          </div>

          <div className={styles.servicesGrid}>
            {previewServices.map((service) => (
              <ServiceCard
                key={service.id}
                slug={service.slug}
                title={service.title}
                description={service.shortDescription}
                image={service.image}
              />
            ))}
          </div>

          <div className={styles.centerAction}>
            <Button href="/services" variant="secondary">View All Services →</Button>
          </div>
        </div>
      </section>

      {/* 3D Carousel Showcase */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Built To Turn Heads</h2>
          <p className={styles.sectionSubtitle}>The Detailing Dadas standard of excellence.</p>
        </div>
        <Carousel3D />
      </section>

      {/* Why Us */}
      <section className={`${styles.section} ${styles.whySection}`}>
        <div className={styles.whyBackground}>
          <Image
            src="/assets/why-us-bg.jpg"
            alt="Premium automotive detailing"
            fill
            className={styles.whyBackgroundImage}
          />
          <div className={styles.whyBackgroundOverlay}></div>
        </div>
        <div className={`${styles.container} ${styles.whyContent}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Detailing Dadas?</h2>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <Shield className={styles.whyIcon} size={40} />
              <h4>Protection That Lasts</h4>
              <p>Our services are designed beyond short-term appearance. We use industry-leading ceramic coatings and PPF for years of durability.</p>
            </div>
            <div className={styles.whyItem}>
              <Sparkles className={styles.whyIcon} size={40} />
              <h4>Precision Over Speed</h4>
              <p>Every vehicle receives meticulous attention. We do not rush perfection, ensuring every panel and crevice is treated properly.</p>
            </div>
            <div className={styles.whyItem}>
              <Droplets className={styles.whyIcon} size={40} />
              <h4>Premium Products</h4>
              <p>We only use professional-grade detailing products that are pH-balanced, safe for your paint, and proven to deliver results.</p>
            </div>
            <div className={styles.whyItem}>
              <Trophy className={styles.whyIcon} size={40} />
              <h4>Customer First</h4>
              <p>The goal is not simply a clean car — it is a customer who wants to return. We believe in transparent service and honest recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
            <p className={styles.sectionSubtitle}>Join {siteConfig.reviews.count} satisfied customers on Google.</p>
          </div>

          <div className={styles.reviewsGrid}>
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                profileImage={review.profileImage}
                rating={review.rating}
                reviewText={review.reviewText}
                date={review.date}
                googleReviewUrl={review.googleReviewUrl}
              />
            ))}
          </div>

          <div className={styles.centerAction}>
            <Button href={siteConfig.location.googleMapsUrl} variant="secondary">View All Reviews on Google</Button>
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Follow The Dadas Standard</h2>
            <p className={styles.sectionSubtitle}>More cars. More transformations. More detailing.</p>
          </div>

          <div className={styles.reelsGrid}>
            {instaReels.map((reel, i) => {
              // Ensure clean embed URL
              const baseUrl = reel.url.split('?')[0].replace(/\/$/, '');
              const embedUrl = `${baseUrl}/embed/`;

              return (
                <div key={i} className={styles.reelCard}>
                  <iframe
                    src={embedUrl}
                    className={styles.reelIframe}
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    loading="lazy"
                    title={`Instagram Reel ${i + 1}`}
                  ></iframe>
                  {/* Overlay to handle hover effects and click-through */}
                  <a
                    href={baseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.reelOverlay}
                    aria-label="View Instagram Reel"
                  >
                    <div className={styles.reelIconWrapper}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          <div className={styles.centerAction}>
            <Button href={siteConfig.social.instagram}>Follow @detailingdadas</Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <Image src="/assets/hero/hero-fallback.jpg" alt="Background" fill className={styles.finalCtaBg} />
        <div className={styles.finalCtaContent}>
          <h2>Your Car Deserves Better.</h2>
          <p>Book your next detailing session with Detailing Dadas.</p>
          <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
            <Button href="/contact">Book Now</Button>
            <Button href={`tel:${siteConfig.contact.phone}`} variant="secondary">Call Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
