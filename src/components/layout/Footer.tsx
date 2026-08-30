import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { Logo } from '@/components/ui/Logo';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBackground}>
        <Image 
          src="/assets/footer-bg.jpg" 
          alt="Automotive Detailing Studio" 
          fill 
          className={styles.bgImage} 
        />
        <div className={styles.bgOverlay}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <Logo />
            </Link>
            <p className={styles.brandDesc}>
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.column}>
            <h3>Navigation</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link href="/">Home</Link></li>
              <li className={styles.linkItem}><Link href="/services">Services</Link></li>
              <li className={styles.linkItem}><Link href="/gallery">Gallery</Link></li>
              <li className={styles.linkItem}><Link href="/reviews">Reviews</Link></li>
              <li className={styles.linkItem}><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h3>Services</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link href="/services/foam-wash">Foam Wash</Link></li>
              <li className={styles.linkItem}><Link href="/services/ceramic-coating">Ceramic Coating</Link></li>
              <li className={styles.linkItem}><Link href="/services/ppf-wrap-sunfilm">PPF & Wrap</Link></li>
              <li className={styles.linkItem}><Link href="/services/interior-detailing">Interior Detailing</Link></li>
              <li className={styles.linkItem}><Link href="/services/exterior-detailing">Exterior Detailing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h3>Location</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={20} />
                <span>
                  {siteConfig.location.address},<br />
                  {siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip}
                </span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={20} />
                <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; {currentYear} {siteConfig.name}. All Rights Reserved.
          </div>
          <div className={styles.socialLinks}>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Google Maps">
              <MapPin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
