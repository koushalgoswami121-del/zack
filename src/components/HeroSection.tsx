import React from 'react';
import { Play, ArrowRight, Star, Globe, Users, BookOpen } from 'lucide-react';
import { NavTab } from '../types';

interface HeroSectionProps {
  onNavigate: (tab: NavTab) => void;
  onOpenVideo: () => void;
  onOpenAuth: (mode?: 'login' | 'signup') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenVideo,
  onOpenAuth,
}) => {
  const cutoutSrc = 'https://res.cloudinary.com/qptzllkm/image/upload/v1789631029/ChatGPT_Image_Sep_17_2026_01_13_42_PM.png';

  return (
    <div className="relative bg-[#0d554d] text-white overflow-hidden">
      {/* Background Orthogonal Grid Pattern */}
      <div className="absolute inset-0 hero-grid pointer-events-none opacity-80" />
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#c6f135]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end">
          
          {/* Left Column: Typography, Copy, CTAs, Social Proof */}
          <div className="lg:col-span-7 relative z-30 pb-14 sm:pb-20 lg:pb-28">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-emerald-100/90 uppercase">
                AI COURSES &nbsp;•&nbsp; CONSULTING &nbsp;•&nbsp; REAL RESULTS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.06] mb-6">
              Learn AI.<br />
              Build Skills.<br />
              Create a <span className="text-[#c6f135]">Bigger</span><br />
              Future.
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-emerald-100/85 max-w-xl leading-relaxed mb-8 sm:mb-10 font-normal">
              Practical AI courses and 1:1 consulting to help you master machine learning, AI tools, and real-world applications.
            </p>

            {/* Action Buttons: Explore Courses & Watch Intro */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <button
                id="hero-explore-courses-btn"
                onClick={() => onNavigate('courses')}
                className="bg-[#c6f135] hover:bg-[#b8eb2a] active:bg-[#aee61e] text-[#0d2e29] font-bold text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 focus:outline-none"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 stroke-[2.8]" />
              </button>

              <button
                id="hero-watch-intro-btn"
                onClick={() => onNavigate('about')}
                className="group flex items-center gap-3.5 text-left focus:outline-none hover:opacity-95 transition-opacity cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-white/40 group-hover:border-white group-hover:bg-white/10 flex items-center justify-center transition-all shadow-sm">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#c6f135] transition-colors leading-tight">
                    Watch Intro
                  </div>
                  <div className="text-xs text-white/70 font-normal">
                    Meet Zack & Story
                  </div>
                </div>
              </button>
            </div>

            {/* Social Proof Row - guaranteed visible above any overlay */}
            <div className="relative z-30 w-full max-w-[656px] flex flex-wrap items-center gap-4 sm:gap-5 pt-2 pb-2 mb-2 sm:mb-4">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0d554d] object-cover"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Elena Rostova - ML Engineer"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0d554d] object-cover"
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Marcus Chen - Software Architect"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0d554d] object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Sophia Patel - Product Lead"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0d554d] object-cover"
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="David O'Connor - Staff Dev"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text rating and count */}
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white tracking-tight">
                  25,000+ learners worldwide
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-white">4.8/5</span>
                  <span className="text-xs text-emerald-100/70">based on 10,000+ reviews</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Cutout Figure with Floating Badges */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Main Cutout Wrapper - adjusted height and bottom margin */}
            <div className="relative isolate w-full max-w-[420px] sm:max-w-[540px] lg:max-w-[580px] flex items-end justify-center min-h-[390px] sm:min-h-[500px] lg:min-h-[546px] -translate-y-2 sm:-translate-y-5 lg:-translate-y-7 mb-4 sm:mb-6">
              
              {/* Soft decorative backdrop circle matching the reference design */}
              <div className="absolute bottom-4 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full bg-gradient-to-tr from-[#083c35] via-[#0d584f] to-[#126b61] border border-emerald-400/20 shadow-[0_0_80px_rgba(14,92,83,0.55)] -z-10" />
              
              {/* Subtle radial emerald glow */}
              <div className="absolute bottom-8 w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] bg-emerald-400/15 rounded-full blur-3xl -z-20 pointer-events-none" />

              {/* Decorative background dashed ring */}
              <div
                className="absolute bottom-2 w-[290px] h-[290px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] rounded-full border border-dashed border-emerald-300/20 pointer-events-none -z-10 animate-spin"
                style={{ animationDuration: '60s' }}
              />

              {/* Floating Card 1: Top-Left "Members 40+ countries" - sits BEHIND the guy (z-10) */}
              <div className="absolute top-4 sm:top-10 left-0 sm:-left-7 lg:-left-9 scale-[0.82] sm:scale-100 origin-top-left bg-white border border-slate-100/90 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-[0_20px_35px_rgba(0,0,0,0.25)] flex items-center gap-2.5 sm:gap-3 z-10 transition-all hover:scale-105 hover:z-30">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">Members</div>
                  <div className="text-xs sm:text-base font-extrabold text-slate-900 tracking-tight">40+ countries</div>
                </div>
              </div>

              {/* Floating Card 2: Bottom-Left "1:1 Consulting" - sits BEHIND the guy (z-10) */}
              <div className="absolute bottom-16 sm:bottom-24 left-0 sm:-left-7 lg:-left-9 scale-[0.82] sm:scale-100 origin-bottom-left bg-white border border-slate-100/90 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-[0_20px_35px_rgba(0,0,0,0.25)] flex items-center gap-2.5 sm:gap-3 z-10 transition-all hover:scale-105 hover:z-30">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-teal-700" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-lg font-black text-slate-900 leading-tight">1:1</div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">Consulting</div>
                </div>
              </div>

              {/* Floating Card 3: Mid-Right "50+ Courses" + Lime Ray Sparks - sits BEHIND the guy (z-10) */}
              <div className="absolute top-1/2 -translate-y-8 right-0 sm:-right-7 lg:-right-9 scale-[0.82] sm:scale-100 origin-center-right flex items-center gap-2 sm:gap-3 z-10 transition-all hover:scale-105 hover:z-30">
                <div className="bg-white border border-slate-100/90 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-[0_20px_35px_rgba(0,0,0,0.25)] flex items-center gap-2.5 sm:gap-3 text-left">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-lime-50 border border-lime-200/90 flex items-center justify-center text-lime-700 shrink-0">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-lime-700" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg font-black text-slate-900 leading-tight">50+</div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">Courses</div>
                  </div>
                </div>

                {/* Lime Sparkle / Ray accent lines positioned cleanly to the right side */}
                <div className="text-[#c6f135] shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-6 sm:w-6 sm:h-7">
                    <line x1="2" y1="6" x2="16" y2="2" stroke="#c6f135" strokeWidth="2.8" strokeLinecap="round" />
                    <line x1="6" y1="14" x2="22" y2="12" stroke="#c6f135" strokeWidth="2.8" strokeLinecap="round" />
                    <line x1="4" y1="22" x2="18" y2="24" stroke="#c6f135" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Cutout Photo of the Person (Isolated, transparent background) - in FRONT of floating cards (z-20) */}
              <div className="relative z-20 w-full flex justify-center items-end overflow-hidden pointer-events-none">
                <img
                  src={cutoutSrc}
                  alt="Zack - AI Engineer and Instructor"
                  className="w-auto h-[380px] sm:h-[490px] lg:h-[620px] max-w-full object-contain object-bottom drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)] select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Feature Card - sits in front (z-30) to cleanly overlay and hide the bottom of the guy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 pb-8 sm:pb-12">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 p-6 sm:p-8 lg:p-10 text-slate-900 transition-all -mt-10 sm:-mt-14 lg:-mt-18">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y md:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* Feature 1: Practical Learning */}
            <div className="pt-4 md:pt-0 lg:px-4 first:lg:pl-0 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#f0fdfa] border border-teal-100 flex items-center justify-center text-teal-700 mb-4 shadow-sm">
                <div className="flex items-center justify-center font-bold text-xs tracking-wider border border-teal-500/80 rounded-md px-1.5 py-0.5 bg-teal-100/70 text-teal-900">
                  AI
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                Practical Learning
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hands-on projects and real world applications.
              </p>
            </div>

            {/* Feature 2: Expert Guidance */}
            <div className="pt-6 md:pt-0 lg:px-6 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#ecfdf5] border border-emerald-100 flex items-center justify-center mb-4 shadow-sm">
                <div className="flex items-end gap-1 h-5">
                  <div className="w-1.5 h-2.5 bg-emerald-500 rounded-full" />
                  <div className="w-1.5 h-4 bg-emerald-500 rounded-full" />
                  <div className="w-1.5 h-5.5 bg-emerald-600 rounded-full" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                Expert Guidance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn directly from Zack, an AI practitioner.
              </p>
            </div>

            {/* Feature 3: Flexible Learning */}
            <div className="pt-6 md:pt-0 lg:px-6 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] border border-blue-100 flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                Flexible Learning
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn at your own pace, anytime, anywhere.
              </p>
            </div>

            {/* Feature 4: Real Results */}
            <div className="pt-6 md:pt-0 lg:px-6 last:lg:pr-0 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[#fffbeb] border border-amber-100 flex items-center justify-center text-amber-500 mb-4 shadow-sm">
                <Star className="w-6 h-6 stroke-[2] fill-amber-400 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                Real Results
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Join thousands who’ve advanced their careers with AI.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
