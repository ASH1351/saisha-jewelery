import React from 'react';
import { MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { LOOKBOOK_ITEMS, getWhatsAppLink } from '../data/products';
import { GoldSectionDivider } from './GemFacetOrnament';
import { InstagramIcon } from './SocialIcons';

export default function Lookbook() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <GoldSectionDivider
          subtitle="EDITORIAL INSPIRATION"
          title="The Saisha Lookbook"
        />

        <p className="text-center text-brand-espresso/70 max-w-2xl mx-auto -mt-2 mb-14 text-sm sm:text-base font-sans">
          Curated styling moments captured in natural light. See how layered bracelets, solitaires, and statement drops come alive together.
        </p>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOOKBOOK_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-brand-cream border border-brand-gold/30 hover:border-brand-gold shadow-sm hover:shadow-gold-md transition-all duration-500 aspect-[4/5]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Gold Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content on Image */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="font-label text-[10px] uppercase tracking-widest text-brand-gold-light font-semibold mb-1">
                  Lookbook Style
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 font-sans mb-4 line-clamp-2">
                  {item.subtitle}
                </p>

                {/* WhatsApp Link Action */}
                <a
                  href={getWhatsAppLink(item.inquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-gradient text-brand-espresso font-label text-xs font-bold uppercase tracking-wider shadow-gold-sm hover:brightness-110 active:scale-95 transition-all self-start border border-brand-gold-light/40"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Enquire About This Piece</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Sparkle badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-brand-gold-light">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Strip */}
        <div className="mt-16 pt-10 border-t border-brand-gold/25 flex flex-col sm:flex-row items-center justify-between gap-6 bg-brand-ivory/60 rounded-2xl p-6 sm:p-8 border border-brand-gold/30">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold-dark shrink-0">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg sm:text-xl text-brand-espresso">
                Follow @saishajewelry on Instagram
              </h4>
              <p className="text-xs sm:text-sm text-brand-brown mt-0.5 font-sans">
                Daily styling inspiration, festive unboxings, and behind-the-scenes sparkles.
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-gold text-brand-espresso hover:bg-brand-gold/15 font-label text-xs uppercase tracking-wider font-semibold transition-all"
          >
            <InstagramIcon className="w-4 h-4 text-brand-gold-dark" />
            <span>Join Our Community</span>
          </a>
        </div>

      </div>
    </section>
  );
}
