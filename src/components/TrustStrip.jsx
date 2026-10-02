import React from 'react';
import { Sparkles, Shield, Gift, Truck, Scissors } from 'lucide-react';
import { TRUST_POINTS } from '../data/products';

export default function TrustStrip() {
  const icons = [
    <Sparkles className="w-3.5 h-3.5 text-brand-espresso" />,
    <Shield className="w-3.5 h-3.5 text-brand-espresso" />,
    <Gift className="w-3.5 h-3.5 text-brand-espresso" />,
    <Scissors className="w-3.5 h-3.5 text-brand-espresso" />,
    <Truck className="w-3.5 h-3.5 text-brand-espresso" />
  ];

  return (
    <div className="bg-gold-gradient py-3.5 px-4 shadow-sm relative overflow-hidden border-y border-brand-gold-dark/20">
      {/* Subtle shimmer sweep overlay */}
      <div className="absolute inset-0 bg-gold-shimmer opacity-20 pointer-events-none animate-shimmer" />

      <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-center justify-around w-full min-w-max gap-8 md:gap-4 text-brand-espresso">
          {TRUST_POINTS.map((point, index) => (
            <div key={point} className="flex items-center gap-2.5">
              <span className="p-1 rounded-full bg-white/30 backdrop-blur-sm">
                {icons[index % icons.length]}
              </span>
              <span className="font-label text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase">
                {point}
              </span>
              {index < TRUST_POINTS.length - 1 && (
                <span className="text-brand-brown/50 hidden md:inline ml-4 text-xs">◆</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
