import React from 'react';
import { MessageCircle, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { DarkSectionDivider, FacetedGemIcon } from './GemFacetOrnament';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-facet-pattern-dark relative overflow-hidden border-t-2 border-brand-gold text-brand-ivory">
      
      {/* Decorative Radial Gold Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative Large Background Gem Silhouette */}
      <div className="absolute right-[-80px] bottom-[-80px] w-96 h-96 opacity-10 pointer-events-none">
        <FacetedGemIcon className="w-full h-full" color="#EBCF82" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Emblem & Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-dark/80 border border-brand-gold-light/40 text-brand-gold-light text-xs font-label uppercase tracking-[0.25em] mb-6 shadow-gold-sm">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold-light animate-sparkle" />
          <span>VIP SHOPPING ASSISTANCE</span>
          <span className="text-brand-gold/60">•</span>
          <span>WHATSAPP CONCIERGE</span>
        </div>

        {/* Big Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
          Looking for the Perfect Piece? <br />
          <span className="text-gold-gradient-intense">
            Chat With Us Now
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-brand-ivory/80 text-base sm:text-xl font-normal max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Speak with our jewellery consultants for live videos, personalized sizing advice, bridal curations, or custom gift wrapping. We respond in minutes.
        </p>

        {/* Big CTA WhatsApp Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <WhatsAppButton
            variant="solid"
            size="lg"
            className="w-full sm:w-auto font-label text-sm uppercase tracking-widest font-extrabold px-10 py-4 shadow-gold-glow border-2 border-brand-gold-light"
            customMessage="Hi Saisha Jewelry! I'm browsing your online collection and would love personalized guidance."
          >
            START WHATSAPP CHAT
          </WhatsAppButton>

          <a
            href="tel:+917039966335"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-brand-gold-light/50 text-brand-gold-light hover:bg-brand-gold-light/10 font-label text-xs uppercase tracking-widest font-semibold transition-all backdrop-blur-sm"
          >
            Call +91 70399 66335
          </a>
        </div>

        {/* Highlights Row */}
        <div className="pt-8 border-t border-brand-gold/20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-brand-ivory/70 text-xs font-label">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold-light" />
            <span>Anti-Tarnish Certified Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-gold-light" />
            <span>Express Pan-India Insured Dispatch</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HeartHandshake className="w-4 h-4 text-brand-gold-light" />
            <span>Dedicated 1-on-1 Jewellery Stylist</span>
          </div>
        </div>

      </div>
    </section>
  );
}
