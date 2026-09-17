import React, { useState, useMemo } from 'react';
import { COURSES_DATA } from '../../data/coursesData';
import { Course } from '../../types';
import { Search, Filter, Star, Clock, BookOpen, ArrowRight, Check, Sparkles } from 'lucide-react';

interface CoursesScreenProps {
  onSelectCourse: (course: Course) => void;
}

export const CoursesScreen: React.FC<CoursesScreenProps> = ({ onSelectCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'LLMs & Generative AI',
    'Autonomous Agents',
    'Full-Stack AI',
    'Enterprise & Product',
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchCategory =
        selectedCategory === 'All' || course.category === selectedCategory;
      const matchLevel =
        selectedLevel === 'All' || course.level === selectedLevel;
      const matchSearch =
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.skills.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCategory && matchLevel && matchSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Top Banner Header */}
      <div className="bg-[#0d554d] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c6f135] bg-white/10 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>50+ Production Curriculums</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Practical AI Engineering Courses
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/85 max-w-2xl mx-auto mt-3">
            Master the exact architectures, latency optimizations, and agentic workflows used by top AI engineering organizations.
          </p>

          {/* Search bar inside header */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, skill, or framework (e.g., RAG, LangGraph, vLLM)..."
              className="w-full pl-12 pr-4 py-3.5 bg-white text-slate-900 rounded-full shadow-lg placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6f135]"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0d554d] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Level Filter Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Level:
            </span>
            <div className="flex bg-white rounded-lg border border-slate-200 p-1">
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                    selectedLevel === lvl
                      ? 'bg-slate-100 text-slate-900 font-bold'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-6 text-xs text-slate-500">
          <span>Showing {filteredCourses.length} production AI courses</span>
          <span>All courses include lifetime access & Discord community</span>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
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
                      {course.skills.map((skill, i) => (
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
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-base text-slate-600 font-medium">
              No courses found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-teal-800 underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
