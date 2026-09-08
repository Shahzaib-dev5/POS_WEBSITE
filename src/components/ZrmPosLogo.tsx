import React from 'react';

interface ZrmPosLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'iconOnly';
  showTagline?: boolean;
}

export const ZrmPosLogo: React.FC<ZrmPosLogoProps> = ({
  className = 'h-10',
  variant = 'light',
  showTagline = true
}) => {
  const isDark = variant === 'dark';
  const isIconOnly = variant === 'iconOnly';

  if (isIconOnly) {
    return (
      <svg 
        viewBox="0 0 340 340" 
        className={className} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ZRM POS Icon"
      >
        <defs>
          <linearGradient id="iconSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isDark ? '#1e3a8a' : '#0b1a48'} />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="iconCart" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0066d6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {/* Speed Motion Lines */}
        <path d="M 38 152 L 125 152" stroke={isDark ? '#38bdf8' : '#0066d6'} strokeWidth="12" strokeLinecap="round" />
        <path d="M 38 206 L 165 206" stroke={isDark ? '#38bdf8' : '#0066d6'} strokeWidth="12" strokeLinecap="round" />
        <path d="M 80 240 L 140 240" stroke={isDark ? '#38bdf8' : '#0066d6'} strokeWidth="12" strokeLinecap="round" />

        {/* Swoosh Circle */}
        <path 
          d="M 230 46 C 140 46 68 115 68 202 C 68 238 80 270 102 296 C 112 308 126 318 142 324 C 185 340 246 332 295 285 C 316 265 328 238 328 214" 
          stroke="url(#iconSwoosh)" 
          strokeWidth="11" 
          strokeLinecap="round" 
        />

        {/* Receipt Paper */}
        <g transform="translate(178, 62)">
          <path d="M 0 45 L 6 12 L 18 18 L 30 10 L 42 18 L 54 12 L 60 45 Z" fill="#ffffff" stroke="#0284c7" strokeWidth="4" strokeLinejoin="round" />
          <line x1="12" y1="26" x2="48" y2="26" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="12" y1="34" x2="48" y2="34" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* Register Body */}
        <g transform="translate(170, 105)">
          <rect x="0" y="0" width="138" height="74" rx="14" fill={isDark ? '#0f172a' : '#0b1a48'} stroke={isDark ? '#1e293b' : 'none'} strokeWidth="3" />
          <rect x="12" y="14" width="22" height="18" rx="4" fill="#ffffff" />
          <rect x="42" y="14" width="22" height="18" rx="4" fill="#ffffff" />
          <rect x="72" y="14" width="22" height="18" rx="4" fill="#ffffff" />
          <rect x="102" y="14" width="22" height="18" rx="4" fill="#ffffff" />
          <rect x="12" y="40" width="22" height="18" rx="4" fill="#ffffff" />
          <rect x="42" y="40" width="22" height="18" rx="4" fill="#ffffff" />
          <rect x="72" y="40" width="22" height="18" rx="4" fill="#ffffff" />
          <rect x="102" y="40" width="22" height="18" rx="4" fill="#ffffff" />
        </g>

        {/* Basket */}
        <path 
          d="M 125 125 L 158 125 L 202 246 L 298 246 L 312 170 L 175 170" 
          stroke="url(#iconCart)" 
          strokeWidth="17" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <line x1="125" y1="125" x2="160" y2="125" stroke="#1e40af" strokeWidth="16" strokeLinecap="round" />

        {/* Wheels */}
        <circle cx="212" cy="282" r="18" fill={isDark ? '#38bdf8' : '#0b1a48'} />
        <circle cx="268" cy="282" r="18" fill={isDark ? '#38bdf8' : '#0b1a48'} />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={isDark ? '/zrm-pos-logo-dark.svg' : '/zrm-pos-logo.svg'}
        alt="ZRM POS - Smart Sales • Simple Management • Better Business"
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
