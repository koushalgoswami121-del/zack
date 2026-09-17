import React, { useState } from 'react';
import { X, Star, Clock, BookOpen, CheckCircle, ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  isOpen,
  onClose,
  onEnroll,
}) => {
  const [enrolled, setEnrolled] = useState(false);

  if (!isOpen || !course) return null;

  const handleEnrollClick = () => {
    setEnrolled(true);
    setTimeout(() => {
      onEnroll(course);
      setEnrolled(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner with Course Thumbnail */}
        <div className="relative h-56 sm:h-64 bg-slate-900 overflow-hidden shrink-0">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover filter brightness-[0.65]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-6 inset-x-6 sm:inset-x-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#c6f135] text-[#0d2e29] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {course.badge || course.category}
              </span>
              <span className="text-xs text-emerald-200/90 font-medium">
                {course.level}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {course.title}
            </h2>
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300 mt-2">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#c6f135]" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-[#c6f135]" />
                {course.lessonsCount} lessons
              </span>
              <span className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-white font-bold">{course.rating}</span>
                <span className="text-slate-400">({course.reviewsCount} reviews)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Course Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Skills You Master */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Production Skills Mastered
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-emerald-50 text-teal-800 border border-teal-100 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Complete Syllabus Modules */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3">
              Curriculum Syllabus ({course.syllabus.length} Core Modules)
            </h3>
            <div className="space-y-3">
              {course.syllabus.map((mod) => (
                <div
                  key={mod.module}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#0d554d] text-white text-xs font-bold flex items-center justify-center">
                        {mod.module}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        {mod.title}
                      </h4>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      {mod.duration}
                    </span>
                  </div>

                  <ul className="pl-8 space-y-1">
                    {mod.topics.map((t, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                        <Play className="w-3 h-3 text-teal-600 fill-teal-600 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Card */}
          <div className="p-4 rounded-2xl bg-[#0d554d]/5 border border-[#0d554d]/15 flex items-center gap-4">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-14 h-14 rounded-full object-cover object-top shrink-0 ring-2 ring-[#0d554d] bg-[#0d554d]"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Lead Instructor
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {course.instructor.name}
              </h4>
              <p className="text-xs text-slate-600">
                {course.instructor.role} • 10+ years building deployed machine learning systems
              </p>
            </div>
          </div>

          {/* Guarantee info */}
          <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>30-Day 100% Money-Back Guarantee • Lifetime Access & Updates Included</span>
          </div>
        </div>

        {/* Footer with Price & Enroll Action */}
        <div className="border-t border-slate-200 p-4 sm:p-6 bg-slate-50 flex flex-col sm:flex-row gap-3 sm:gap-0 items-stretch sm:items-center justify-between shrink-0">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-slate-900">
                ${course.price}
              </span>
              <span className="text-sm text-slate-400 line-through">
                ${course.originalPrice}
              </span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">
                Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
              </span>
            </div>
            <span className="text-[11px] text-slate-500 block sm:inline">Includes verified certificate & Discord lab access</span>
          </div>

          <button
            onClick={handleEnrollClick}
            disabled={enrolled}
            className="w-full sm:w-auto justify-center bg-[#c6f135] hover:bg-[#b8eb2a] active:bg-[#aee61e] text-[#0d2e29] font-extrabold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            {enrolled ? (
              <>
                <CheckCircle className="w-5 h-5 stroke-[2.5]" />
                <span>Enrolled! Loading Portal...</span>
              </>
            ) : (
              <>
                <span>Enroll in Course</span>
                <ArrowRight className="w-4 h-4 stroke-[2.8]" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
