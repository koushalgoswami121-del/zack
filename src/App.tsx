/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavTab, Course } from './types';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/screens/HomeScreen';
import { CoursesScreen } from './components/screens/CoursesScreen';
import { ConsultingScreen } from './components/screens/ConsultingScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { CourseModal } from './components/CourseModal';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: 'login' | 'signup';
  }>({
    isOpen: false,
    mode: 'signup',
  });
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Global Cmd+K / Ctrl+K listener for quick search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuth = (mode: 'login' | 'signup' = 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleAuthSuccess = (userName: string) => {
    setUser(userName);
    showToast(`Welcome, ${userName}! You're logged into Zack AI.`);
  };

  const handleEnrollCourse = (course: Course) => {
    showToast(`Successfully enrolled in "${course.title}"!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#c6f135] selection:text-[#0d2e29]">
      {/* User Welcome Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0d554d] text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle className="w-5 h-5 text-[#c6f135] shrink-0" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Bar matching the image */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Screen Views */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeScreen
            onNavigate={handleTabChange}
            onOpenVideo={() => setIsVideoOpen(true)}
            onOpenAuth={handleOpenAuth}
            onSelectCourse={(course) => setSelectedCourse(course)}
          />
        )}

        {activeTab === 'courses' && (
          <CoursesScreen
            onSelectCourse={(course) => setSelectedCourse(course)}
          />
        )}

        {activeTab === 'consulting' && <ConsultingScreen />}

        {activeTab === 'about' && (
          <AboutScreen onOpenVideo={() => setIsVideoOpen(true)} />
        )}

        {activeTab === 'contact' && <ContactScreen />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleTabChange}
        onOpenAuth={handleOpenAuth}
      />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onExploreCourses={() => {
          setIsVideoOpen(false);
          handleTabChange('courses');
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={(course) => setSelectedCourse(course)}
        onNavigate={handleTabChange}
      />

      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ isOpen: false, mode: 'signup' })}
        onSuccess={handleAuthSuccess}
      />

      <CourseModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollCourse}
      />
    </div>
  );
}

