import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactScreen: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('Enterprise Team Training');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#0d554d] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c6f135] bg-white/10 px-3.5 py-1 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            Contact Zack & The Team
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/85 max-w-2xl mx-auto mt-3">
            Inquiries regarding enterprise licensing, keynote speaking, custom workshops, and curriculum questions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Locations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Let&apos;s Build Together
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Whether you want to upskill 50 engineers on production LLMs or have questions about a specific course, we respond to all technical inquiries within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Direct Email</div>
                  <div className="text-sm font-bold text-slate-900">zack@zackai.dev</div>
                  <div className="text-xs text-slate-500 mt-0.5">For press, partners, and custom engagements</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Response Time</div>
                  <div className="text-sm font-bold text-slate-900">&lt; 24 Hours Guaranteed</div>
                  <div className="text-xs text-slate-500 mt-0.5">Monday through Friday (PST & GMT)</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Hubs</div>
                  <div className="text-sm font-bold text-slate-900">San Francisco & London</div>
                  <div className="text-xs text-slate-500 mt-0.5">Serving developers in 40+ countries globally</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{name}</span>. Zack&apos;s team has received your inquiry regarding <span className="font-bold text-teal-800">{inquiryType}</span> and will reply to <span className="font-bold text-slate-900">{email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-[#0d554d] text-white text-xs font-bold px-6 py-2.5 rounded-full"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Inquiry Category
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Enterprise Team Training',
                      '1:1 Consulting Question',
                      'Keynote / Speaking',
                      'Course Support & Billing',
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all ${
                          inquiryType === type
                            ? 'bg-[#0d554d] text-white border-[#0d554d] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Taylor"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d554d] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d554d] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    How Can We Help?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your team size, project timeline, or specific curriculum questions..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d554d] focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#c6f135] hover:bg-[#b8eb2a] active:bg-[#aee61e] text-[#0d2e29] font-black text-sm py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                  <Send className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>We protect your privacy. No marketing lists without permission.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
