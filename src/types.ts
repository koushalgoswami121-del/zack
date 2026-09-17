export type NavTab = 'home' | 'courses' | 'consulting' | 'about' | 'contact';

export interface Course {
  id: string;
  title: string;
  category: 'LLMs & Generative AI' | 'Autonomous Agents' | 'Full-Stack AI' | 'Computer Vision' | 'Enterprise & Product';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  lessonsCount: number;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  badge?: 'Bestseller' | 'New' | 'Hands-on Lab' | 'Popular';
  description: string;
  summary: string;
  thumbnail: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  skills: string[];
  syllabus: {
    module: number;
    title: string;
    duration: string;
    topics: string[];
  }[];
  prerequisites: string[];
}

export interface ConsultingTier {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  price: number;
  format: '1:1 Video Call' | 'Team Workshop' | 'Monthly Retainer';
  badge?: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  slotsAvailable: number;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  courseTaken: string;
  outcome: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Courses' | '1:1 Consulting' | 'Enterprise';
}

export interface BookingSlot {
  date: string; // e.g. "Tomorrow, Oct 18"
  time: string; // e.g. "10:00 AM PST"
  id: string;
}
