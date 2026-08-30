'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/config';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Logo priority={true} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={styles.navLink}
              style={{ color: pathname === link.href ? 'var(--color-green)' : '' }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.navActions}>
          <Button href="/contact">Book Your Detail</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.open : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Panel */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={styles.mobileNavLink}
              style={{ color: pathname === link.href ? 'var(--color-green)' : '' }}
            >
              {link.name}
            </Link>
          ))}
          <Button href="/contact" style={{ marginTop: '2rem' }}>Book Your Detail</Button>
        </div>
      </div>
    </header>
  );
};
