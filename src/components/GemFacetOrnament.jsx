import React from 'react';

// Geometric Faceted Gem SVG Icon matching the logo motif
export function FacetedGemIcon({ className = "w-6 h-6", color = "#D6B25E" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="50,5 88,25 88,75 50,95 12,75 12,25"
        stroke={color}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <polygon
        points="50,22 75,37 75,63 50,78 25,63 25,37"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <line x1="50" y1="5" x2="50" y2="22" stroke={color} strokeWidth="2.5" />
      <line x1="88" y1="25" x2="75" y2="37" stroke={color} strokeWidth="2.5" />
      <line x1="88" y1="75" x2="75" y2="63" stroke={color} strokeWidth="2.5" />
      <line x1="50" y1="95" x2="50" y2="78" stroke={color} strokeWidth="2.5" />
      <line x1="12" y1="75" x2="25" y2="63" stroke={color} strokeWidth="2.5" />
      <line x1="12" y1="25" x2="25" y2="37" stroke={color} strokeWidth="2.5" />
      <circle cx="50" cy="50" r="12" stroke={color} strokeWidth="2" strokeDasharray="3 3" />
    </svg>
  );
}

// Gold section divider with centered facet gem
export function GoldSectionDivider({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center max-w-3xl mx-auto px-4 ${className}`}>
      {subtitle && (
        <span className="font-label text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold block mb-2">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-espresso mb-4">
          {title}
        </h2>
      )}
      <div className="flex items-center justify-center gap-3 my-4">
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-gold" />
        <div className="p-1.5 rounded-full border border-brand-gold/50 bg-brand-ivory text-brand-gold">
          <FacetedGemIcon className="w-4 h-4" />
        </div>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-gold" />
      </div>
    </div>
  );
}

// Dark variant divider for footer & espresso CTA
export function DarkSectionDivider({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center max-w-3xl mx-auto px-4 ${className}`}>
      {subtitle && (
        <span className="font-label text-xs uppercase tracking-[0.28em] text-brand-gold-light font-semibold block mb-2">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ivory mb-4">
          {title}
        </h2>
      )}
      <div className="flex items-center justify-center gap-3 my-4">
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-gold-light" />
        <div className="p-1.5 rounded-full border border-brand-gold-light/40 bg-brand-dark text-brand-gold-light">
          <FacetedGemIcon className="w-4 h-4" color="#EBCF82" />
        </div>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-gold-light" />
      </div>
    </div>
  );
}
