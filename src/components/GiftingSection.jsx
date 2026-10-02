import React from 'react';
import { Gift, Heart, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { OCCASIONS, getWhatsAppLink } from '../data/products';
import { GoldSectionDivider } from './GemFacetOrnament';
import WhatsAppButton from './WhatsAppButton';

export default function GiftingSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-ivory/80 relative border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <GoldSectionDivider
          subtitle="CELEBRATE LOVED ONES"
          title="The Perfect Gift for Every Moment"
        />

        <p className="text-center text-brand-espresso/70 max-w-2xl mx-auto -mt-2 mb-14 text-sm sm:text-base font-sans">
          Whether honoring an anniversary, a heartfelt birthday surprise, or an auspicious wedding celebration, find jewellery wrapped in warmth and timeless elegance.
        </p>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {OCCASIONS.map((occ) => (
            <div
              key={occ.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-brand-gold/30 hover:border-brand-gold shadow-sm hover:shadow-gold-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream">
                <img
                  src={occ.image}
                  alt={occ.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-serif font-bold text-xl drop-shadow-md">
                  {occ.title}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs text-brand-brown font-sans mb-4">
                  {occ.tagline}
                </p>

                <a
                  href={getWhatsAppLink(occ.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-brand-gold/50 bg-brand-ivory hover:bg-gold-gradient text-brand-espresso font-label text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Gift className="w-3.5 h-3.5 text-brand-gold-dark" />
                  <span>Curate Gift on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Gifting Box Feature Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-espresso via-brand-dark to-brand-espresso border-2 border-brand-gold p-8 sm:p-12 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/25 border border-brand-gold-light/40 text-brand-gold-light text-xs font-label uppercase tracking-widest mb-4">
              <Gift className="w-3.5 h-3.5" />
              <span>Complimentary Luxury Unboxing Experience</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              Gift-Ready Elegance With Hand-Written Personalised Notes
            </h3>

            <p className="text-white/80 text-sm sm:text-base mb-6 font-sans leading-relaxed">
              Every Saisha parcel comes enclosed in our signature gold-foil embossed keepsake box, resting inside plush velvet pouches with a sealed care card and certificate of authenticity. We can also include your handwritten message for the recipient.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <WhatsAppButton
                variant="solid"
                size="lg"
                className="w-full sm:w-auto font-label text-xs uppercase tracking-widest font-bold px-8 py-4"
                customMessage="Hi Saisha Jewelry! I'd like help choosing the perfect gift for someone special. What would you suggest?"
              >
                Ask Us for Gift Suggestions
              </WhatsAppButton>

              <span className="text-xs text-brand-gold-light font-label tracking-wider uppercase">
                ★ 1-on-1 Gifting Stylist on Call
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
