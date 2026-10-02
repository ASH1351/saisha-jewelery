import React from 'react';
import { Sparkles, ShieldCheck, Gift, Gem, ArrowRight } from 'lucide-react';
import { GoldSectionDivider } from './GemFacetOrnament';
import WhatsAppButton from './WhatsAppButton';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Sparkles className="w-7 h-7 text-brand-gold-dark" />,
      title: "18K Long-Lasting Finish",
      desc: "Engineered with triple-micron 18K gold vermeil and anti-tarnish protective sealing. Retains its golden warmth and luster without oxidising.",
      badge: "Anti-Tarnish Seal"
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-brand-gold-dark" />,
      title: "Skin-Friendly Materials",
      desc: "Crafted exclusively with surgical-grade 316L stainless steel and eco-brass. 100% hypoallergenic, nickel-free, and lead-free for sensitive skin.",
      badge: "Dermatologically Safe"
    },
    {
      icon: <Gift className="w-7 h-7 text-brand-gold-dark" />,
      title: "Signature Gift Packaging",
      desc: "Every order arrives ready to delight—presented in our bespoke gold-embossed keepsake box, rich velvet storage pouch, and ribbon.",
      badge: "Complimentary Box"
    },
    {
      icon: <Gem className="w-7 h-7 text-brand-gold-dark" />,
      title: "Custom Designs on Request",
      desc: "Looking for tailored bracelet sizing, custom gemstone hues, or matching bridal suites? Collaborate one-on-one with our jewel artisans.",
      badge: "Bespoke Service"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-facet-pattern relative border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <GoldSectionDivider
          subtitle="THE SAISHA PROMISE"
          title="Why Choose Saisha"
        />

        <p className="text-center text-brand-espresso/70 max-w-2xl mx-auto -mt-2 mb-14 text-sm sm:text-base font-sans">
          We blend fine jewellery aesthetics with everyday wearability, ensuring effortless glamour that endures through every precious milestone.
        </p>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-brand-gold/30 hover:border-brand-gold card-gold-hover flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-brand-cream border border-brand-gold/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>

                {/* Badge */}
                <span className="text-[10px] font-label uppercase tracking-widest text-brand-gold-dark font-bold block mb-2">
                  {item.badge}
                </span>

                {/* Title */}
                <h3 className="font-serif font-bold text-xl text-brand-espresso mb-3 group-hover:text-brand-gold-dark transition-colors">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-xs sm:text-sm text-brand-espresso/75 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              {/* Bottom decorative hairline */}
              <div className="mt-6 pt-4 border-t border-brand-gold/15 flex items-center justify-between text-xs text-brand-brown font-label">
                <span className="tracking-wider uppercase text-[10px]">Guaranteed Quality</span>
                <span className="text-brand-gold font-bold">✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Consultation Banner */}
        <div className="mt-12 text-center">
          <WhatsAppButton
            variant="outline"
            size="md"
            className="bg-white/80 font-label text-xs uppercase tracking-widest font-semibold"
            customMessage="Hi Saisha Jewelry! I have a question regarding your materials and custom design process."
          >
            Have Questions? Ask Our Specialist on WhatsApp
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
}
