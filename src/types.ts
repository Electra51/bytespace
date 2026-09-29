export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  comments: number;
  price: number;
  priceType: string;
  category: string;
  thumbnail: string;
  studentCount: number;
  isFeatured?: boolean;
}

export interface Tag {
  id: string;
  name: string;
}
