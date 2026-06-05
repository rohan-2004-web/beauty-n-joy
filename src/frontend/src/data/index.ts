import type {
  FaqItem,
  GalleryImage,
  PricingPlan,
  ServiceItem,
  TestimonialItem,
} from "@/types";

export const services: ServiceItem[] = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    description:
      "Flawless, long-lasting bridal looks crafted to make you radiant on your most special day.",
    price: "Starting ₹4,999",
    image: "/assets/generated/service-bridal.dim_600x450.jpg",
    icon: "Crown",
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    description:
      "Expert cuts, styling, colouring and treatments for every hair type and occasion.",
    price: "Starting ₹799",
    image: "/assets/generated/service-hair.dim_600x450.jpg",
    icon: "Scissors",
  },
  {
    id: "facial-treatment",
    title: "Facial Treatment",
    description:
      "Deeply nourishing facials using premium products for visibly glowing, healthy skin.",
    price: "Starting ₹999",
    image: "/assets/generated/service-facial.dim_600x450.jpg",
    icon: "Sparkles",
  },
  {
    id: "nail-art",
    title: "Nail Art",
    description:
      "Artistic, precision nail designs from classic French tips to elaborate festive nail art.",
    price: "Starting ₹399",
    image: "/assets/generated/service-nails.dim_600x450.jpg",
    icon: "Star",
  },
  {
    id: "skin-care",
    title: "Skin Care",
    description:
      "Customised skin care rituals targeting pigmentation, acne, dryness and dullness.",
    price: "Starting ₹1,299",
    image: "/assets/generated/gallery-3.dim_500x500.jpg",
    icon: "Heart",
  },
  {
    id: "hair-spa",
    title: "Hair Spa",
    description:
      "Restorative spa treatments that strengthen, moisturise and add brilliant shine to hair.",
    price: "Starting ₹699",
    image: "/assets/generated/gallery-2.dim_500x700.jpg",
    icon: "Wind",
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    description:
      "Glamorous event-ready makeup designed to photograph beautifully and last all night.",
    price: "Starting ₹1,499",
    image: "/assets/generated/service-party.dim_600x450.jpg",
    icon: "Gem",
  },
  {
    id: "eyebrow-waxing",
    title: "Eyebrow & Waxing",
    description:
      "Perfectly shaped brows and smooth skin with gentle, expert waxing and threading.",
    price: "Starting ₹199",
    image: "/assets/generated/gallery-4.dim_500x600.jpg",
    icon: "Feather",
  },
];

export const gallery: GalleryImage[] = [
  {
    id: "g1",
    src: "/assets/generated/gallery-1.dim_500x500.jpg",
    alt: "Bridal Makeup",
    span: "normal",
  },
  {
    id: "g2",
    src: "/assets/generated/gallery-2.dim_500x700.jpg",
    alt: "Hair Spa Treatment",
    span: "tall",
  },
  {
    id: "g3",
    src: "/assets/generated/gallery-3.dim_500x500.jpg",
    alt: "Luxury Skincare",
    span: "normal",
  },
  {
    id: "g4",
    src: "/assets/generated/service-bridal.dim_600x450.jpg",
    alt: "Bridal Look",
    span: "normal",
  },
  {
    id: "g5",
    src: "/assets/generated/gallery-4.dim_500x600.jpg",
    alt: "Eyebrow Shaping",
    span: "normal",
  },
  {
    id: "g6",
    src: "/assets/generated/gallery-5.dim_500x500.jpg",
    alt: "Luxury Nail Art",
    span: "normal",
  },
  {
    id: "g7",
    src: "/assets/generated/gallery-6.dim_500x700.jpg",
    alt: "Glam Makeup",
    span: "tall",
  },
  {
    id: "g8",
    src: "/assets/generated/service-party.dim_600x450.jpg",
    alt: "Party Makeup",
    span: "normal",
  },
  {
    id: "g9",
    src: "/assets/generated/service-facial.dim_600x450.jpg",
    alt: "Facial Treatment",
    span: "normal",
  },
  {
    id: "g10",
    src: "/assets/generated/about-salon.dim_700x500.jpg",
    alt: "Salon Interior",
    span: "normal",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Essential",
    price: "₹1,999",
    description: "Perfect for everyday beauty needs and quick touch-ups.",
    features: [
      "Basic facial cleanup",
      "Eyebrow threading & tinting",
      "Basic nail paint application",
      "Blow-dry & styling",
      "Waxing (arms/legs)",
    ],
    highlight: false,
  },
  {
    id: "premium",
    name: "Luxe Premium",
    price: "₹4,999",
    description: "Our signature all-inclusive beauty experience.",
    features: [
      "Premium gold facial",
      "Full hair spa treatment",
      "Nail art (hands + feet)",
      "Full body waxing",
      "Party makeup & hairstyle",
      "Complimentary head massage",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    id: "bridal",
    name: "Bridal Royale",
    price: "₹14,999",
    description: "A comprehensive bridal package for your perfect wedding day.",
    features: [
      "Bridal makeup with airbrush",
      "Bridal hairstyle with accessories",
      "Pre-bridal skin package (3 sessions)",
      "Mehndi application",
      "Full nail art & extension",
      "On-site touch-up service",
    ],
    highlight: false,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Bridal Client",
    avatar: "/assets/generated/testimonial-1.dim_200x200.jpg",
    rating: 5,
    review:
      "Beauty N Joy made me look absolutely stunning on my wedding day. The bridal makeup lasted beautifully through the entire ceremony. Every guest complimented my look — I felt like a queen!",
  },
  {
    id: "t2",
    name: "Ananya Patel",
    role: "Regular Client",
    avatar: "/assets/generated/testimonial-2.dim_200x200.jpg",
    rating: 5,
    review:
      "I have been coming here for over two years for facials and hair treatments. The results are consistently amazing and the staff is so warm and professional. This is truly a premium experience.",
  },
  {
    id: "t3",
    name: "Rhea Kapoor",
    role: "Party Makeup Client",
    avatar: "/assets/generated/testimonial-3.dim_200x200.jpg",
    rating: 5,
    review:
      "The party glam makeup they did for my anniversary event was breathtaking. Everyone kept asking who did my makeup. The team here truly understands luxury beauty.",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq1",
    question: "Do you offer bridal makeup services?",
    answer:
      "Absolutely! We specialise in bridal makeup for all skin tones and wedding styles. Our bridal packages include airbrush makeup, hairstyling, mehndi, and pre-bridal skin prep sessions. We also offer trial sessions before the big day.",
  },
  {
    id: "faq2",
    question: "How can I book an appointment?",
    answer:
      "You can book via WhatsApp on +91 6388989935, call us directly, or use the contact form on this page. We recommend booking at least 3–5 days in advance for regular services and 1–2 months ahead for bridal bookings.",
  },
  {
    id: "faq3",
    question: "Which products do you use?",
    answer:
      "We exclusively use premium international and Indian brands including MAC, Kryolan, Charlotte Tilbury, Forest Essentials, and Kérastase. All products are dermatologist-tested, cruelty-free, and safe for sensitive skin.",
  },
  {
    id: "faq4",
    question: "Do you provide home service?",
    answer:
      "Yes, we offer home beauty services across the city for bridal and party makeup. A travel surcharge applies based on distance. Please contact us in advance to schedule a home visit.",
  },
  {
    id: "faq5",
    question: "What are your working hours?",
    answer:
      "We are open Monday to Saturday from 10:00 AM to 8:00 PM, and Sundays from 11:00 AM to 6:00 PM. On bridal booking days, we may open earlier — please arrange with us in advance.",
  },
];
