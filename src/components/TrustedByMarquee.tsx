import React from 'react';

interface CompanyLogo {
  name: string;
  renderLogo: () => React.ReactNode;
}

const ClaudeOriginalLogo = () => (
  <div className="flex items-center gap-2.5">
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none">
      <path
        d="M12 2C12.5 7 17 11.5 22 12C17 12.5 12.5 17 12 22C11.5 17 7 12.5 2 12C7 11.5 11.5 7 12 2Z"
        fill="#D97757"
      />
      <circle cx="12" cy="12" r="2.2" fill="#FFFFFF" />
    </svg>
    <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">Claude</span>
  </div>
);

const OpenAIOriginalLogo = () => (
  <div className="flex items-center gap-2.5">
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 text-[#0f172a]" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2594 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.747-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.66-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1402-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.872zm16.597 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.9934-2.88a4.5045 4.5045 0 0 1 6.5146 2.9332v.004zM10.2974 13.7l-2.617-1.5148L12 9.5398l4.3196 2.4925-2.617 1.5148-3.4052-1.968z" />
    </svg>
    <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">OpenAI</span>
  </div>
);

const SkoolOriginalLogo = () => (
  <div className="flex items-center gap-1.5">
    <span className="text-2xl sm:text-3xl font-black lowercase tracking-tight">
      <span className="text-[#f59e0b]">s</span>
      <span className="text-[#ef4444]">k</span>
      <span className="text-[#0284c7]">o</span>
      <span className="text-[#10b981]">o</span>
      <span className="text-[#8b5cf6]">l</span>
    </span>
  </div>
);

const AmazonOriginalLogo = () => (
  <div className="flex items-center">
    <span className="text-2xl sm:text-[26px] font-bold tracking-tighter text-slate-900 font-sans relative inline-block pb-1">
      amazon
      <svg className="absolute -bottom-1 left-0 w-full h-3.5 overflow-visible" viewBox="0 0 84 14" fill="none">
        <path d="M4 3.5C27 11 58 10 77 3.5" stroke="#FF9900" strokeWidth="2.4" strokeLinecap="round"/>
        <path d="M75 1.5L81 3.5L76 6" fill="#FF9900"/>
      </svg>
    </span>
  </div>
);

const MicrosoftOriginalLogo = () => (
  <div className="flex items-center gap-2.5">
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0">
      <rect x="2" y="2" width="9.2" height="9.2" fill="#F25022" />
      <rect x="12.8" y="2" width="9.2" height="9.2" fill="#7FBA00" />
      <rect x="2" y="12.8" width="9.2" height="9.2" fill="#00A4EF" />
      <rect x="12.8" y="12.8" width="9.2" height="9.2" fill="#FFB900" />
    </svg>
    <span className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-700">Microsoft</span>
  </div>
);

const PARTNER_COMPANIES: CompanyLogo[] = [
  {
    name: 'Claude',
    renderLogo: () => <ClaudeOriginalLogo />,
  },
  {
    name: 'OpenAI',
    renderLogo: () => <OpenAIOriginalLogo />,
  },
  {
    name: 'Skool',
    renderLogo: () => <SkoolOriginalLogo />,
  },
  {
    name: 'Amazon',
    renderLogo: () => <AmazonOriginalLogo />,
  },
  {
    name: 'Microsoft',
    renderLogo: () => <MicrosoftOriginalLogo />,
  },
];

export const TrustedByMarquee: React.FC = () => {
  // Repeat list 6 times for a seamless infinite loop in normal size
  const marqueeList = [
    ...PARTNER_COMPANIES,
    ...PARTNER_COMPANIES,
    ...PARTNER_COMPANIES,
    ...PARTNER_COMPANIES,
    ...PARTNER_COMPANIES,
    ...PARTNER_COMPANIES,
  ];

  return (
    <section className="relative mt-4 sm:mt-6 py-8 sm:py-9 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-y border-slate-200/80 overflow-hidden">
      {/* Top Header Label with pulsing status dot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-xs">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <span>Trusted by builders</span>
        </div>
      </div>

      {/* Marquee Strip Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />

        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10" />

        {/* Infinite Looping Track of Original Logos in Normal Size */}
        <div className="animate-marquee py-3 flex items-center gap-12 sm:gap-16 lg:gap-20">
          {marqueeList.map((company, idx) => (
            <div
              key={`${company.name}-${idx}`}
              title={company.name}
              className="flex items-center shrink-0 cursor-default select-none grayscale-[25%] hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-200 hover:scale-105"
            >
              {company.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
