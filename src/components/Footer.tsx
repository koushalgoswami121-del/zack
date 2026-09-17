import React from 'react';
import { NavTab } from '../types';
import { Github, Twitter, Youtube, Linkedin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
  onOpenAuth: (mode?: 'login' | 'signup') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAuth }) => {
  return (
    <footer className="bg-[#093530] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-3xl font-extrabold tracking-tight text-white focus:outline-none"
            >
              Zack<span className="text-[#c6f135]">.</span>
            </button>
            <p className="text-sm text-emerald-100/75 max-w-sm leading-relaxed">
              Practical AI engineering courses and 1:1 advisory to help you master production machine learning, autonomous multi-agent systems, and latency-optimized RAG.
            </p>
            <div className="flex items-center gap-3 pt-2 text-white/70">
              <a href="#github" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#c6f135] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors">
                  All AI Courses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('consulting')} className="hover:text-white transition-colors">
                  1:1 Consulting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Zack
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Enterprise Training
                </button>
              </li>
            </ul>
          </div>

          {/* Curriculums */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#c6f135] mb-4">
              Core Tracks
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors">
                  Production RAG
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors">
                  Multi-Agent Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors">
                  Prompt Engineering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors">
                  Local LLMs & vLLM
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors">
                  Full-Stack AI SaaS
                </button>
              </li>
            </ul>
          </div>

          {/* Member Portal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#c6f135] mb-4">
              Learner Portal
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <button onClick={() => onOpenAuth('login')} className="hover:text-white transition-colors">
                  Student Sign In
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAuth('signup')} className="hover:text-white transition-colors">
                  Create Account
                </button>
              </li>
              <li>
                <a href="#discord" className="hover:text-white transition-colors">
                  Discord Community
                </a>
              </li>
              <li>
                <a href="#certificate" className="hover:text-white transition-colors">
                  Verify Certificate
                </a>
              </li>
              <li>
                <a href="#billing" className="hover:text-white transition-colors">
                  Invoice & Receipts
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <div>
            © {new Date().getFullYear()} Zack AI. All rights reserved. Built for production engineers worldwide.
          </div>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#security" className="hover:text-white transition-colors">Security & Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
