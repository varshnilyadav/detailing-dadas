export interface Review {
  id: string;
  name: string;
  profileImage: string;
  rating: number;
  reviewText: string;
  date: string;
  googleReviewUrl: string;
}

export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "Customer Name",
    profileImage: "/assets/reviews/placeholder-user.jpg",
    rating: 5,
    reviewText: "Placeholder for a verified Google review. The actual review text will go here describing their great experience.",
    date: "1 month ago",
    googleReviewUrl: "https://maps.google.com"
  },
  {
    id: "rev-2",
    name: "Customer Name",
    profileImage: "/assets/reviews/placeholder-user.jpg",
    rating: 5,
    reviewText: "Placeholder for another verified Google review about Ceramic Coating or PPF.",
    date: "2 months ago",
    googleReviewUrl: "https://maps.google.com"
  },
  {
    id: "rev-3",
    name: "Customer Name",
    profileImage: "/assets/reviews/placeholder-user.jpg",
    rating: 5,
    reviewText: "Placeholder for a verified Google review regarding interior detailing or regular maintenance wash.",
    date: "3 months ago",
    googleReviewUrl: "https://maps.google.com"
  }
];
