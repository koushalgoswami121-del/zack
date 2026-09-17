import React, { useState } from 'react';
import { Sparkles, Globe, Users, BookOpen, Send, CheckCircle2, Award, Terminal, Play } from 'lucide-react';

interface AboutScreenProps {
  onOpenVideo?: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenVideo }) => {
  const [question, setQuestion] = useState('');
  const [askEmail, setAskEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setQuestion('');
      setAskEmail('');
      setSent(false);
    }, 4000);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#0d554d] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c6f135] bg-white/10 px-3.5 py-1 rounded-full">
            Behind the Brand
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            Meet Zack: Practical AI Practitioner
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/85 max-w-2xl mx-auto mt-3">
            Demystifying machine learning, large language models, and autonomous agents for engineers who build for production.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section: Photo & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/30 bg-[#0d554d] text-white flex flex-col justify-end">
              {/* Background Orthogonal Grid & Ambient Lighting matching Hero */}
              <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#c6f135]/15 rounded-full blur-3xl pointer-events-none" />
              
              {/* Image Container: Zack image with bottom of torso tucking seamlessly into the info bar */}
              <div className="relative pt-6 px-4 flex justify-center -mb-5 z-10">
                <img
                  src="https://res.cloudinary.com/qptzllkm/image/upload/v1789631029/ChatGPT_Image_Sep_17_2026_01_13_42_PM.png"
                  alt="Zack - AI Engineer and Instructor"
                  className="w-auto h-[380px] sm:h-[420px] max-w-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)] select-none block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lead Instructor & Founder Container: flush to bottom, no gap, image torso tucks directly behind */}
              <div className="relative z-20 w-full bg-[#0a3833]/95 backdrop-blur-md p-5 border-t border-white/15 text-white shadow-xl">
                <div className="text-xs font-bold text-[#c6f135] uppercase tracking-wider mb-1">Lead Instructor & Founder</div>
                <div className="text-xl font-extrabold tracking-tight">Zack</div>
                <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
                  AI Researcher, Staff Architect, and Mentor to 25,000+ developers worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              <Award className="w-4 h-4 text-teal-700" />
              <span>10+ Years Building Applied Systems</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why I Founded Zack AI: Moving Past the Toy Demo Era
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              When the Generative AI revolution took off, I watched thousands of talented engineers get trapped in an endless loop of theoretical machine learning tutorials or simplistic 5-line wrapper scripts. In the real world, models hallucinate, latencies spike, token bills balloon, and autonomous agents get stuck in infinite loops.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              I created <strong>Zack.</strong> to teach the raw, unvarnished reality of building with AI. Every lesson, cheat sheet, and 1:1 consultation is based on production battle scars: how to architect resilient RAG pipelines, how to write deterministic guardrails, and how to measure real system ROI.
            </p>

            {/* Video Intro trigger button */}
            {onOpenVideo && (
              <div className="pt-2">
                <button
                  id="about-play-intro-btn"
                  onClick={onOpenVideo}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0d554d] hover:bg-[#0a423c] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#c6f135] transition-colors">
                    <Play className="w-2.5 h-2.5 text-white group-hover:text-[#0d2e29] fill-current ml-0.5" />
                  </div>
                  <span>Watch Zack's 2-Min Intro Video</span>
                </button>
              </div>
            )}

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">25K+</div>
                <div className="text-xs text-slate-500 mt-0.5">Global Learners</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">50+</div>
                <div className="text-xs text-slate-500 mt-0.5">Production Courses</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">40+</div>
                <div className="text-xs text-slate-500 mt-0.5">Countries Represented</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Our Educational Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              The 4 Rules of Applied AI
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 font-bold flex items-center justify-center mb-4">
                01
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Production First</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If code cannot run reliably in a container with metrics and logging, it does not belong in our curriculum.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-4">
                02
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Cost & Latency Aware</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Great AI engineers don&apos;t just throw the biggest model at everything. We engineer for speed, caching, and budget.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 font-bold flex items-center justify-center mb-4">
                03
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Deterministic Guardrails</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We implement strict type validation (Zod, Pydantic) and evaluation suites to eradicate unpredictable outputs.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4">
                04
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Continuous Evolution</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As foundation models advance each week, all our student repos and videos are continually updated.
              </p>
            </div>
          </div>
        </div>

        {/* Ask Zack Anything Form */}
        <div className="bg-[#0d554d] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
          <div className="max-w-2xl relative z-10">
            <h3 className="text-2xl font-bold tracking-tight">
              Have a Question for Zack?
            </h3>
            <p className="text-sm text-emerald-100/80 mt-1">
              Drop a quick note about your team, tech stack, or career question. Zack answers community questions in his weekly AI Dispatch.
            </p>

            {sent ? (
              <div className="mt-6 p-4 bg-white/10 rounded-2xl border border-white/20 flex items-center gap-3 text-emerald-200 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#c6f135]" />
                <span>Question received! Look out for Zack&apos;s answer in the weekly newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleAsk} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    value={askEmail}
                    onChange={(e) => setAskEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6f135]"
                  />
                  <input
                    type="text"
                    required
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Your AI engineering question..."
                    className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6f135]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#c6f135] hover:bg-[#b8eb2a] text-[#0d2e29] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full flex items-center gap-2 shadow-md"
                >
                  <span>Submit Question</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
