import React, { useState } from 'react';
import { Search, ArrowRight, Menu, X } from 'lucide-react';
import { NavTab } from '../types';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenSearch: () => void;
  onOpenAuth: (mode?: 'login' | 'signup') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onOpenSearch,
  onOpenAuth,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-[#0a3e37]/80 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-none group"
        >
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white transition-transform group-hover:scale-[1.02]">
            Zack<span className="text-[#c6f135]">.</span>
          </span>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#c6f135] rounded-full mx-auto w-5/6 transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          {/* Search Trigger */}
          <button
            id="nav-search-btn"
            onClick={onOpenSearch}
            className="p-2 text-white/85 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Search courses and resources"
            title="Search (⌘K)"
          >
            <Search className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Log in */}
          <button
            id="nav-login-btn"
            onClick={() => onOpenAuth('login')}
            className="text-sm font-medium text-white/90 hover:text-white px-2 py-1 transition-colors focus:outline-none"
          >
            Log in
          </button>

          {/* Get Started Button */}
          <button
            id="nav-get-started-btn"
            onClick={() => onOpenAuth('signup')}
            className="bg-[#c6f135] hover:bg-[#bbf028] active:bg-[#aee61e] text-[#0d2e29] font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 focus:outline-none"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            id="mobile-search-btn"
            onClick={onOpenSearch}
            className="p-2 text-white/90 hover:text-white rounded-lg focus:outline-none"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-white/80 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08352f]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-[#c6f135] text-[#0d2e29] font-semibold' : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/15 flex flex-col gap-2.5">
            <button
              id="mobile-login-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="w-full text-center py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 rounded-lg"
            >
              Log in
            </button>
            <button
              id="mobile-get-started-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('signup');
              }}
              className="w-full bg-[#c6f135] text-[#0d2e29] font-bold py-2.5 rounded-full flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
