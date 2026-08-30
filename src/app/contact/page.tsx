import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';
import { BookingForm } from '@/components/ui/BookingForm';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/config';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | Detailing Dadas',
  description: 'Book your detailing session or visit our studio in Vijayawada. Find our location, hours, and contact information.',
};

export default function ContactPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>Ready to give your car the Dadas treatment?</p>
        </div>
      </header>

      <section className={styles.mainSection}>
        <div className={styles.backgroundWrapper}>
          <Image 
            src="/assets/contact-bg.jpg" 
            alt="Premium Detailing Studio" 
            fill 
            className={styles.bgImage} 
          />
          <div className={styles.bgOverlay}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.grid}>
          {/* Contact Information */}
          <div className={styles.infoColumn}>
            <div>
              <h2 className={styles.sectionTitle}>Find Detailing Dadas</h2>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin size={24} />
                  </div>
                  <div className={styles.contactDetails}>
                    <h4>Location</h4>
                    <p>{siteConfig.location.address}</p>
                    <p>{siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip}</p>
                    <div style={{ marginTop: '0.5rem' }}>
                      <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-green)' }}>
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Phone size={24} />
                  </div>
                  <div className={styles.contactDetails}>
                    <h4>Phone & WhatsApp</h4>
                    <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Mail size={24} />
                  </div>
                  <div className={styles.contactDetails}>
                    <h4>Email</h4>
                    <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className={styles.sectionTitle}>Studio Hours</h2>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Clock size={24} />
                </div>
                <div className={styles.contactDetails} style={{ width: '100%', maxWidth: '300px' }}>
                  <div className={styles.hoursList}>
                    {siteConfig.hours.map((h, i) => (
                      <div key={i} className={styles.hourRow}>
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className={styles.sectionTitle}>Map Location</h2>
              <div className={styles.mapContainer}>
                {/* [GOOGLE_MAPS_IFRAME] placeholder */}
                <div style={{ textAlign: 'center', color: 'var(--color-muted-gray)', padding: '2rem' }}>
                  <MapPin size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                  <p>Google Maps Iframe Placeholder</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Replace this block with the actual Google Maps embed iframe code.</p>
                  <Button 
                    href={siteConfig.location.googleMapsUrl} 
                    target="_blank" 
                    variant="secondary" 
                    style={{ marginTop: '1.5rem' }}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className={styles.formColumn}>
            <h2 className={styles.sectionTitle}>Request a Booking</h2>
            <BookingForm />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
