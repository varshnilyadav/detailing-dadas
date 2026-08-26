'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import styles from './BookingForm.module.css';

type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

export const BookingForm = () => {
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'loading', message: '' });
    
    // Simulate API call
    setTimeout(() => {
      setFormState({ 
        status: 'success', 
        message: 'Thank you! Your booking request has been received. Our team will contact you shortly to confirm.' 
      });
      // e.currentTarget.reset(); // Optionally reset form
    }, 1500);
  };

  return (
    <div className={styles.formContainer}>
      {formState.status === 'success' && (
        <div className={styles.successMessage}>{formState.message}</div>
      )}
      
      {formState.status === 'error' && (
        <div className={styles.errorMessage}>{formState.message}</div>
      )}

      <form onSubmit={handleSubmit} className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Full Name *</label>
          <input type="text" id="name" name="name" required className={styles.input} placeholder="John Doe" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Phone Number *</label>
          <input type="tel" id="phone" name="phone" required className={styles.input} placeholder="+91 XXXXX XXXXX" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <input type="email" id="email" name="email" className={styles.input} placeholder="john@example.com" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="vehicleType" className={styles.label}>Vehicle Type *</label>
          <select id="vehicleType" name="vehicleType" required className={styles.select} defaultValue="">
            <option value="" disabled>Select vehicle type</option>
            <option value="hatchback">Hatchback</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury</option>
            <option value="sports">Sports Car</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="vehicleMake" className={styles.label}>Vehicle Make & Model *</label>
          <input type="text" id="vehicleMake" name="vehicleMake" required className={styles.input} placeholder="e.g. BMW 3 Series" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service" className={styles.label}>Service Interested In *</label>
          <select id="service" name="service" required className={styles.select} defaultValue="">
            <option value="" disabled>Select a service</option>
            <option value="foam-wash">Foam Wash</option>
            <option value="ceramic-coating">Ceramic Coating</option>
            <option value="ppf">Paint Protection Film (PPF)</option>
            <option value="wrap">Vehicle Wrap</option>
            <option value="sunfilm">Sunfilm</option>
            <option value="interior-detailing">Interior Detailing</option>
            <option value="exterior-detailing">Exterior Detailing</option>
            <option value="ac-sterilization">A/C Sterilization</option>
            <option value="engine-degreasing">Engine Degreasing</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="date" className={styles.label}>Preferred Date</label>
          <input type="date" id="date" name="date" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="time" className={styles.label}>Preferred Time</label>
          <input type="time" id="time" name="time" className={styles.input} />
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label htmlFor="message" className={styles.label}>Additional Message</label>
          <textarea id="message" name="message" className={styles.textarea} placeholder="Any specific requirements or questions?"></textarea>
        </div>

        <div className={styles.fullWidth}>
          <Button 
            type="submit" 
            variant="primary" 
            className={styles.submitBtn}
            disabled={formState.status === 'loading'}
          >
            {formState.status === 'loading' ? 'Submitting...' : 'Request Booking'}
          </Button>
        </div>
      </form>
    </div>
  );
};
