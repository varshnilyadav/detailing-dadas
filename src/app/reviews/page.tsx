import { Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ReviewCard } from '@/components/ui/ReviewCard';
import { reviews } from '@/data/reviews';
import { siteConfig } from '@/data/config';
import styles from './page.module.css';

export const metadata = {
  title: 'Customer Reviews | Detailing Dadas',
  description: 'Read real Google reviews from satisfied customers of Detailing Dadas in Vijayawada.',
};

export default function ReviewsPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.title}>Real Words. Real Results.</h1>
          <p className={styles.subtitle}>See what customers are saying about their experience at Detailing Dadas.</p>
        </div>
      </header>

      <section className={styles.container}>
        <div className={styles.statsRow}>
          <div className={styles.ratingNumber}>{siteConfig.reviews.rating}</div>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={32} 
                fill={i < Math.floor(siteConfig.reviews.rating) ? "currentColor" : (i < siteConfig.reviews.rating ? "url(#half)" : "none")} 
                color="currentColor"
              />
            ))}
          </div>
          <div className={styles.reviewCount}>{siteConfig.reviews.count} Google Reviews</div>
        </div>

        <div className={styles.grid}>
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

        <div className={styles.ctaWrapper}>
          <h3>Want to see more?</h3>
          <Button href={siteConfig.location.googleMapsUrl}>Read All Google Reviews</Button>
        </div>
      </section>

      {/* SVG for Half Star if needed */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
