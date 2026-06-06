export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  slug: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  link?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  tags: string[];
}

export interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
}

export interface Industry {
  id: number;
  name: string;
  icon: string;
}

export interface CareerPosition {
  id: number;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface CareerApplication {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
}
