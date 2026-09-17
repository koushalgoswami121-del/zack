import { ConsultingTier, BookingSlot } from '../types';

export const CONSULTING_TIERS: ConsultingTier[] = [
  {
    id: 'tier-architecture',
    title: 'AI Architecture & Stack Audit',
    tagline: 'Fix bottlenecks, slash LLM latency and costs, and validate your production AI design.',
    duration: '60 Minutes',
    price: 50,
    format: '1:1 Video Call',
    badge: 'Most Popular',
    description: 'A deep-dive technical surgery into your existing or planned AI system. We inspect your vector search, model choice, prompt chains, evaluation pipeline, and cost bottlenecks.',
    idealFor: 'Tech Leads, Staff Engineers, and CTOs shipping LLMs to production.',
    deliverables: [
      'Comprehensive live code & architecture diagram review',
      'Actionable latency & API cost reduction roadmap',
      'Vector DB & embedding model recommendation matrix',
      'Follow-up written action plan + full HD session recording',
      '7 days of async follow-up via private Slack/email',
    ],
    slotsAvailable: 3,
  },
  {
    id: 'tier-enterprise-strategy',
    title: 'Enterprise AI Strategy & Adoption',
    tagline: 'Cut through vendor noise and build an unstoppable AI product strategy.',
    duration: '90 Minutes',
    price: 100,
    format: '1:1 Video Call',
    badge: 'Executive',
    description: 'Designed for engineering leaders and product executives deciding where to invest in AI, how to organize technical teams, and how to protect proprietary data.',
    idealFor: 'VP of Engineering, Chief Product Officers, and Enterprise Directors.',
    deliverables: [
      'Custom Build vs Buy decision framework for your stack',
      'Enterprise data privacy, security & copyright safeguards',
      'AI team hiring, staffing, and internal upskilling playbook',
      'Executive summary presentation deck ready for stakeholders',
      '14 days of async executive advisory support',
    ],
    slotsAvailable: 2,
  },
  {
    id: 'tier-mentorship',
    title: '1:1 AI Career & Engineering Mentorship',
    tagline: 'Transition from traditional software engineering to high-earning AI Engineer.',
    duration: '45 Minutes',
    price: 30,
    format: '1:1 Video Call',
    description: 'Targeted guidance on high-impact AI skills, portfolio projects that actually get you hired, resume positioning, and system design interviews.',
    idealFor: 'Senior & Mid-level developers breaking into AI Engineering roles.',
    deliverables: [
      'Personalized skills gap analysis and tailored 90-day learning plan',
      'Portfolio & GitHub code review with concrete improvements',
      'AI System Design interview walkthrough & feedback',
      'Curated list of high-leverage job boards & founder networks',
      'Direct email access for 1 resume revision',
    ],
    slotsAvailable: 4,
  },
];

export const AVAILABLE_SLOTS: BookingSlot[] = [
  { id: 'slot-1', date: 'Thursday, Oct 22', time: '09:00 AM PST' },
  { id: 'slot-2', date: 'Thursday, Oct 22', time: '01:30 PM PST' },
  { id: 'slot-3', date: 'Friday, Oct 23', time: '11:00 AM PST' },
  { id: 'slot-4', date: 'Monday, Oct 26', time: '10:00 AM PST' },
  { id: 'slot-5', date: 'Monday, Oct 26', time: '03:00 PM PST' },
  { id: 'slot-6', date: 'Tuesday, Oct 27', time: '02:00 PM PST' },
];

export const CLIENT_LOGOS = [
  { name: 'Anthropic Ecosystem', symbol: '✦' },
  { name: 'Stripe Build', symbol: 'S' },
  { name: 'Linear', symbol: '◬' },
  { name: 'Supabase', symbol: '⚡' },
  { name: 'Vercel Partner', symbol: '▲' },
];
