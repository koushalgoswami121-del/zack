import React, { useState } from 'react';
import { CONSULTING_TIERS, AVAILABLE_SLOTS, CLIENT_LOGOS } from '../../data/consultingData';
import { ConsultingTier, BookingSlot } from '../../types';
import { Check, Calendar, Clock, Video, ArrowRight, ShieldCheck, User, Mail, Building, CheckCircle2 } from 'lucide-react';

export const ConsultingScreen: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<ConsultingTier>(CONSULTING_TIERS[0]);
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot>(AVAILABLE_SLOTS[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [challenge, setChallenge] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed(true);
    }, 900);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#0d554d] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c6f135] bg-white/10 px-3.5 py-1 rounded-full mb-4">
            <Video className="w-3.5 h-3.5" />
            <span>Private 1:1 Advisory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            1:1 AI Architecture & Strategy Consulting
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/85 max-w-2xl mx-auto mt-3">
            Direct code and systems architecture surgery with Zack. Fix vector latency, build deterministic agents, and audit token economics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tier Selector Cards */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Select Your Consultation Tier
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CONSULTING_TIERS.map((tier) => {
              const isSelected = selectedTier.id === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  className={`rounded-3xl p-7 border-2 cursor-pointer transition-all flex flex-col justify-between relative ${
                    isSelected
                      ? 'bg-white border-[#0d554d] shadow-xl ring-2 ring-[#0d554d]/20'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                  }`}
                >
                  {tier.badge && (
                    <span className="absolute -top-3 right-6 bg-[#c6f135] text-[#0d2e29] text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                      {tier.badge}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                        {tier.format}
                      </span>
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {tier.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mt-2">
                      {tier.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {tier.tagline}
                    </p>

                    <div className="my-5 pb-5 border-b border-slate-100">
                      <span className="text-3xl font-black text-slate-900">
                        ${tier.price}
                      </span>
                      <span className="text-xs text-slate-400 ml-1">/ session</span>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        What&apos;s Included:
                      </div>
                      {tier.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`mt-6 w-full py-2.5 rounded-full text-xs font-bold transition-colors ${
                      isSelected
                        ? 'bg-[#0d554d] text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? 'Selected Package' : 'Choose Package'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking Form & Slot Picker */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          {bookingConfirmed ? (
            <div className="py-12 text-center max-w-xl mx-auto space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                1:1 Consultation Confirmed!
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{name || 'Builder'}</span>. We have scheduled your <span className="font-semibold text-teal-800">{selectedTier.title}</span> for <span className="font-bold text-slate-900">{selectedSlot.date} at {selectedSlot.time}</span>.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 text-left space-y-1.5">
                <div>• A Google Meet video link has been sent to <span className="font-semibold text-slate-800">{email || 'your email'}</span>.</div>
                <div>• You will receive a prep questionnaire to attach GitHub repos, PRs, or architecture diagrams.</div>
                <div>• Full HD recording & written roadmap will be delivered within 24 hours of the call.</div>
              </div>
              <button
                onClick={() => setBookingConfirmed(false)}
                className="mt-4 bg-[#0d554d] text-white text-xs font-bold px-6 py-2.5 rounded-full"
              >
                Book Another Slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Date & Slot Selection */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-teal-700" />
                    1. Select Available Live Slot
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    All times displayed in US Pacific (PST). Automatic calendar invite sent upon booking.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {AVAILABLE_SLOTS.map((slot) => {
                    const isSlotSelected = selectedSlot.id === slot.id;
                    return (
                      <button
                        type="button"
                        key={slot.id}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          isSlotSelected
                            ? 'bg-[#0d554d] text-white border-[#0d554d] shadow-md'
                            : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        <div className={`text-xs font-semibold ${isSlotSelected ? 'text-emerald-200' : 'text-slate-500'}`}>
                          {slot.date}
                        </div>
                        <div className="text-sm font-bold mt-0.5">
                          {slot.time}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Summary Card */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Booking Summary
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">{selectedTier.title}</span>
                    <span className="text-sm font-black text-slate-900">${selectedTier.price}</span>
                  </div>
                  <div className="text-xs text-teal-700 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedTier.duration} • {selectedSlot.date} at {selectedSlot.time}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Intake Information */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-teal-700" />
                    2. Your Details & Context
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Help Zack prepare beforehand so every minute of your call delivers high ROI.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Jenkins"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d554d] focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@acme.ai"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d554d] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Technologies"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d554d] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    What is the primary AI challenge or goal?
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    placeholder="e.g., We have a multi-agent workflow that hallucinates on tool arguments, or we need to reduce Pinecone & OpenAI bill by 40%..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0d554d] focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#c6f135] hover:bg-[#b8eb2a] active:bg-[#aee61e] text-[#0d2e29] font-black text-sm py-3.5 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <span>{isSubmitting ? 'Confirming Reservation...' : `Confirm & Reserve Slot ($${selectedTier.price})`}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.8]" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Satisfaction Guarantee. Free reschedule up to 24h prior.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
