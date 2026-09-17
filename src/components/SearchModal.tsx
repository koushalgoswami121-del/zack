import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, BookOpen, Users, ArrowRight } from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { CONSULTING_TIERS } from '../data/consultingData';
import { Course, ConsultingTier, NavTab } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
  onNavigate: (tab: NavTab) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filtered results
  const filteredCourses = useMemo(() => {
    if (!query.trim()) return COURSES_DATA.slice(0, 3);
    const q = query.toLowerCase();
    return COURSES_DATA.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.skills.some((s) => s.toLowerCase().includes(q))
    );
  }, [query]);

  const filteredConsulting = useMemo(() => {
    if (!query.trim()) return CONSULTING_TIERS.slice(0, 2);
    const q = query.toLowerCase();
    return CONSULTING_TIERS.filter(
      (tier) =>
        tier.title.toLowerCase().includes(q) ||
        tier.tagline.toLowerCase().includes(q) ||
        tier.description.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI courses, consulting topics, prompt guides..."
            className="w-full text-base sm:text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-1 rounded font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Courses Category */}
          {filteredCourses.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                  Courses ({filteredCourses.length})
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('courses');
                  }}
                  className="text-teal-600 hover:underline flex items-center gap-1"
                >
                  View all <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-2">
                {filteredCourses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => {
                      onClose();
                      onSelectCourse(course);
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-start gap-3.5 group"
                  >
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-12 h-12 rounded-lg object-cover shrink-0 mt-0.5"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-50 text-teal-700">
                          {course.level}
                        </span>
                        <span className="text-xs text-slate-400">{course.duration}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors truncate mt-0.5">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {course.summary}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-slate-900 shrink-0">
                      ${course.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Consulting Category */}
          {filteredConsulting.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  1:1 Consulting ({filteredConsulting.length})
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('consulting');
                  }}
                  className="text-teal-600 hover:underline flex items-center gap-1"
                >
                  Book slot <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-2">
                {filteredConsulting.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => {
                      onClose();
                      onNavigate('consulting');
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-start justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                          {tier.duration}
                        </span>
                        {tier.badge && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                            {tier.badge}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mt-1">
                        {tier.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {tier.tagline}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-slate-900 shrink-0">
                      ${tier.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredCourses.length === 0 && filteredConsulting.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sm text-slate-500">
                No exact matches for &quot;{query}&quot;. Try &quot;RAG&quot;, &quot;Prompt&quot;, or &quot;Agents&quot;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
