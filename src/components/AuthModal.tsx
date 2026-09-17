import React, { useState, useEffect } from 'react';
import { X, Check, Lock, Mail, User, ArrowRight, ArrowLeft, Github, Sparkles, Star, ShieldCheck, Eye, EyeOff, AlertCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'signup';
  onClose: () => void;
  onSuccess: (userName: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'signup',
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [regionError, setRegionError] = useState<string | null>(null);

  // Sync mode with props whenever modal opens or initialMode changes
  useEffect(() => {
    setMode(initialMode);
    setRegionError(null);
  }, [initialMode, isOpen]);

  // Escape key handler to easily go back
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAttemptAuth = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setRegionError(null);

    // Trigger requested region restriction message
    setTimeout(() => {
      setIsSubmitting(false);
      setRegionError('Not available in your region');
    }, 450);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container - Desktop Optimized Dual-Column Layout */}
      <div 
        className="w-full max-w-lg md:max-w-4xl lg:max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 flex flex-col md:flex-row relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Column: Desktop Brand & Value Showcase (hidden on mobile, visible on md+) */}
        <div className="hidden md:flex md:w-5/12 lg:w-1/2 bg-[#0d554d] text-white p-8 lg:p-12 flex-col justify-between relative overflow-hidden">
          {/* Background Grid & Ambient Glow */}
          <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#c6f135]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Brand & Back to Home */}
          <div className="relative z-10">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-200 hover:text-white transition-colors mb-6 group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </button>

            <div>
              <span className="text-3xl font-extrabold tracking-tight text-white">
                Zack<span className="text-[#c6f135]">.</span>
              </span>
              <p className="text-xs uppercase tracking-widest text-[#c6f135] font-bold mt-1">
                Applied AI Engineering Academy
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-snug">
                {mode === 'signup'
                  ? 'Join 25,000+ Engineers Building Real Production AI.'
                  : 'Welcome Back to Your Applied AI Workspace.'}
              </h2>
              <p className="text-sm text-emerald-100/85 leading-relaxed">
                {mode === 'signup'
                  ? 'Get instant access to complete course curriculums, verified GitHub templates, and live weekly architecture reviews.'
                  : 'Pick up your lessons, code along with real deployments, and connect with the builder community.'}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="mt-8 space-y-3">
              {[
                '50+ full-stack production courses (RAG, Agents, vLLM)',
                'Direct code feedback & architecture reviews by Zack',
                'Production-tested GitHub repos & deployment blueprints',
                'Private Discord & Skool mastermind builder access',
              ].map((perk, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-emerald-50">
                  <div className="w-4 h-4 rounded-full bg-[#c6f135] text-[#0d2e29] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Testimonial */}
          <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
            <div className="flex items-center gap-1 text-[#c6f135] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-emerald-100/90 italic leading-relaxed">
              "The best investment in my career this year. Zack's lessons on multi-agent cyclic routing solved our team's production latency issues in 48 hours."
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Elena Rostova"
                className="w-7 h-7 rounded-full object-cover border border-[#c6f135]"
              />
              <div>
                <span className="text-xs font-bold text-white block">Elena Rostova</span>
                <span className="text-[10px] text-emerald-200/80 block">Senior AI Architect @ ScaleOps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Authentication Form Container */}
        <div className="w-full md:w-7/12 lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative bg-white">
          {/* Top Bar with "Go Back" button and "X" Close button */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onClose}
              id="auth-go-back-btn"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-1.5 rounded-full transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Go Back</span>
            </button>

            <button
              onClick={onClose}
              id="auth-close-btn"
              aria-label="Close dialog"
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div>
            {/* Form Heading */}
            <div className="mb-6">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {mode === 'signup' ? 'Get Started with Zack AI' : 'Sign in to Your Account'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {mode === 'signup'
                  ? 'Create your free account to access all curriculum overviews and interactive demos.'
                  : 'Welcome back! Enter your details to continue.'}
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => {
                  setMode('signup');
                  setRegionError(null);
                }}
                className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  mode === 'signup'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Get Started
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setRegionError(null);
                }}
                className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  mode === 'login'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Log In
              </button>
            </div>

            {/* Region Restriction Alert */}
            {regionError && (
              <div
                id="auth-region-restriction-msg"
                role="alert"
                className="mb-5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-950 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-amber-950 text-sm">{regionError}</p>
                  <p className="text-amber-800 mt-1 leading-relaxed">
                    {mode === 'signup' ? 'Account registration' : 'Account login'} is currently restricted in your geographic area. Please check back later or contact support.
                  </p>
                </div>
              </div>
            )}

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {mode === 'signup' ? 'Account Created Successfully!' : 'Welcome Back!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Redirecting to your student dashboard...
                </p>
              </div>
            ) : (
              <form onSubmit={handleAttemptAuth} className="space-y-4">
                {/* 1-Click Social Sign-in */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    type="button"
                    onClick={() => handleAttemptAuth()}
                    className="flex items-center justify-center gap-2.5 py-2.5 px-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer shadow-2xs"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span>Google</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAttemptAuth()}
                    className="flex items-center justify-center gap-2.5 py-2.5 px-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer shadow-2xs"
                  >
                    <Github className="w-4 h-4 text-slate-900" />
                    <span>GitHub</span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-[11px] uppercase tracking-wider text-slate-400">
                    <span className="bg-white px-2.5 font-medium">Or with work email</span>
                  </div>
                </div>

                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Rivera"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d554d] focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d554d] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Password
                    </label>
                    {mode === 'login' && (
                      <button
                        type="button"
                        onClick={() => alert('Password reset instructions have been sent to your email.')}
                        className="text-xs text-teal-700 hover:text-teal-900 font-semibold cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d554d] focus:bg-white transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="auth-submit-btn"
                  className="w-full bg-[#c6f135] hover:bg-[#bbf028] active:bg-[#aee61e] text-[#0d2e29] font-extrabold text-sm py-3.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer hover:scale-[1.01]"
                >
                  <span>
                    {isSubmitting
                      ? 'Authenticating...'
                      : mode === 'signup'
                      ? 'Create Free Account & Get Started'
                      : 'Sign In to Your Account'}
                  </span>
                  <ArrowRight className="w-4 h-4 stroke-[2.8]" />
                </button>
              </form>
            )}
          </div>

          {/* Bottom Switcher and Cancel Link */}
          <div className="pt-6 text-center space-y-2">
            <p className="text-xs text-slate-500">
              {mode === 'signup' ? (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="font-bold text-teal-800 hover:underline cursor-pointer"
                  >
                    Log In
                  </button>
                </>
              ) : (
                <>
                  Don't have an account yet?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className="font-bold text-teal-800 hover:underline cursor-pointer"
                  >
                    Get Started
                  </button>
                </>
              )}
            </p>

            <div>
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline cursor-pointer"
              >
                Cancel and return to previous page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
