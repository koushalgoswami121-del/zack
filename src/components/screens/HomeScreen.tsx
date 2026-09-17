import React, { useState } from 'react';
import { HeroSection } from '../HeroSection';
import { TrustedByMarquee } from '../TrustedByMarquee';
import { COURSES_DATA } from '../../data/coursesData';
import { REVIEWS_DATA, FAQ_DATA } from '../../data/reviewsData';
import { Course, NavTab } from '../../types';
import { ArrowRight, Star, Clock, BookOpen, Check, ChevronDown, Sparkles, Terminal, ShieldCheck, Zap, Video, CheckCircle } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (tab: NavTab) => void;
  onOpenVideo: () => void;
  onOpenAuth: (mode?: 'login' | 'signup') => void;
  onSelectCourse: (course: Course) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenVideo,
  onOpenAuth,
  onSelectCourse,
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQ_DATA[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const featuredCourses = COURSES_DATA.slice(0, 3);

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Exact Hero Section from prompt */}
      <HeroSection
        onNavigate={onNavigate}
        onOpenVideo={onOpenVideo}
        onOpenAuth={onOpenAuth}
      />

      {/* Dynamic Looping Marquee: Trusted by Builders & Engineers */}
      <TrustedByMarquee />

      {/* Featured Practical Courses Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Applied AI Courses
              </h2>
              <p className="text-base text-slate-600 max-w-2xl mt-2">
                Every course is built from live production systems—no toy notebook wrappers, just real architectures and deployed code.
              </p>
            </div>

            <button
              id="view-all-courses-btn"
              onClick={() => onNavigate('courses')}
              className="group inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950 focus:outline-none"
            >
              <span>Explore All 50+ Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Courses 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col overflow-hidden group"
              >
                {/* Thumbnail & Badge */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {course.badge && (
                    <span className="absolute top-4 left-4 bg-[#c6f135] text-[#0d2e29] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {course.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#c6f135]" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#c6f135]" />
                      {course.lessonsCount} lessons
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {course.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{course.rating}</span>
                        <span className="text-slate-400 font-normal">({course.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors leading-snug mb-2">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {course.summary}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {course.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/60 px-2 py-0.5 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-xl font-black text-slate-900">
                        ${course.price}
                      </div>
                      <div className="text-[11px] text-slate-400 line-through">
                        ${course.originalPrice}
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectCourse(course)}
                      className="bg-[#0d554d] hover:bg-[#0a463f] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>View Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1:1 Advisory & Code Review Section with Meeting Visual */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0d554d] via-[#09413a] to-[#062c27] rounded-3xl p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden shadow-2xl border border-emerald-500/20">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 hero-grid opacity-25 pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c6f135]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Content & CTA */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Need Zack to Review Your AI Architecture Directly?
                </h2>
                <p className="text-sm sm:text-base text-emerald-100/90 mt-4 leading-relaxed max-w-xl mb-8">
                  Book a private 1:1 video session to audit your LLM retrieval accuracy, slash token costs, stress-test multi-agent routing, or train your engineering leadership on production reliability.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    id="home-book-consulting-btn"
                    onClick={() => onNavigate('consulting')}
                    className="bg-[#c6f135] hover:bg-[#b8eb2a] active:bg-[#aee61e] text-[#0d2e29] font-extrabold text-sm px-7 py-3.5 rounded-full shadow-xl transition-all flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Schedule 1:1 Strategy Session</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.8]" />
                  </button>
                  <span className="text-xs text-emerald-200/80 font-medium">
                    Limited to 5 client slots per week
                  </span>
                </div>
              </div>

              {/* Right Column: High Quality 1:1 Advisory Meeting Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Glow */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-[#c6f135]/30 to-emerald-500/30 rounded-3xl blur-lg opacity-70" />
                  
                  {/* Main Meeting Image Card */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 group">
                    <img
                      src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1000&q=80"
                      alt="1:1 Advisory & Code Review meeting discussing software architecture"
                      className="w-full h-72 sm:h-80 lg:h-88 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Verified Reviews Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Real Results from 25,000+ Learners
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Stories from Engineers & Technical Leaders
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              From Series-A startups to Fortune 500 engineering orgs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      Verified Learner
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg inline-block mb-3 border border-teal-100/60">
                    🎯 {rev.outcome}
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-teal-600/20 shadow-xs shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{rev.name}</div>
                      <div className="text-[11px] text-slate-600 font-medium">{rev.role} • {rev.company}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-medium">{rev.courseTaken}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Questions & Answers
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Everything you need to know about our courses, 1:1 consulting, and team licenses.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-700' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action Strip */}
      <section className="bg-[#0d554d] bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,#115d54_0%,#0d554d_50%,#0a403a_100%)] text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Build a <span className="text-[#c6f135]">Bigger</span> Future in AI?
          </h2>
          <p className="text-base text-emerald-100/85 mt-3 max-w-xl mx-auto leading-relaxed">
            Gain immediate lifetime access to 50+ real-world AI engineering curriculums or book a 1:1 strategy session with Zack today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => onNavigate('courses')}
              className="bg-[#c6f135] hover:bg-[#b8eb2a] active:bg-[#aee61e] text-[#0d2e29] font-extrabold text-base px-8 py-3.5 rounded-full shadow-xl transition-all flex items-center gap-2"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-4 h-4 stroke-[2.8]" />
            </button>
            <button
              onClick={() => onNavigate('consulting')}
              className="bg-transparent hover:bg-white/10 text-white font-bold text-base px-7 py-3.5 rounded-full border border-white/40 transition-colors"
            >
              Book 1:1 Consulting
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
