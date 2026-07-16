interface Testimonial {
  id: number;
  reviewText: string;
  name: string;
  profession: string;
  image: string;
}
export const testimonials: Testimonial[] = [
  {
    id: 1,
    reviewText:
      "Horizon is a game-changer for business trips. Premium cars, seamless booking, and completely stress-free travel. Highly recommended!",
    name: "Kylian Gyokers",
    profession: "Business Executive",
    image: "/images/person.jpg",
  },
  {
    id: 2,
    reviewText:
      "An absolute pleasure from start to finish. The vehicle was in pristine condition, the pricing was completely transparent, and the customer service was top-notch.",
    name: "David Jenkins",
    profession: "Travel Blogger",
    image: "/images/person2.jpg",
  },
  {
    id: 3,
    reviewText:
      "I needed to extend my rental at the last minute, and the support team handled it effortlessly. Having 24/7 assistance gave me total peace of mind on the road.",
    name: "Marcus Vance",
    profession: "Operations Manager",
    image: "/images/person3.jpg",
  },
  {
    id: 4,
    reviewText:
      "The best car rental service I've used so far. Fast pickup, premium cars, and absolutely no hidden fees. Will definitely book again for my next trip.",
    name: "Oliver Reed",
    profession: "Marketing Director",
    image: "/images/person4.jpg",
  },
];
