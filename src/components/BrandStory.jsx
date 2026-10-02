import React from 'react';
import { Sparkles, Award, Users, CheckCircle2 } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { FacetedGemIcon } from './GemFacetOrnament';

export default function BrandStory() {
  const stats = [
    { label: "500+ Designs", subtext: "Hand-curated fine pieces", icon: <Sparkles className="w-4 h-4 text-brand-gold-dark" /> },
    { label: "5,000+ Happy Customers", subtext: "Across India & abroad", icon: <Users className="w-4 h-4 text-brand-gold-dark" /> },
    { label: "100% Quality Checked", subtext: "Certified anti-tarnish alloys", icon: <CheckCircle2 className="w-4 h-4 text-brand-gold-dark" /> },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background geometric lines */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Model image in an Oval Facet Gem Frame (Echoing Logo Gem Shape) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4]">
              
              {/* Outer Golden Bracelet Band line frame echoing the logo */}
              <div className="absolute -inset-4 rounded-[45%_45%_40%_40%/55%_55%_45%_45%] border-2 border-brand-gold/40 pointer-events-none transform -rotate-2" />
              <div className="absolute -inset-8 rounded-[45%_45%_40%_40%/55%_55%_45%_45%] border border-brand-gold/20 pointer-events-none transform rotate-3" />

              {/* Main Oval Frame with Model */}
              <div className="relative w-full h-full rounded-[45%_45%_40%_40%/55%_55%_45%_45%] overflow-hidden border-4 border-brand-gold shadow-2xl bg-brand-cream">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80"
                  alt="Model wearing Saisha Jewelry"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle gold gradient wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Monogram Gem Tag */}
              <div className="absolute -bottom-5 -right-4 bg-brand-ivory border-2 border-brand-gold p-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-espresso flex items-center justify-center text-brand-gold font-serif font-bold text-xl shadow-inner">
                  S
                </div>
                <div className="text-left pr-2">
                  <span className="font-serif font-bold text-brand-espresso text-xs block leading-tight">
                    Pure Brilliance
                  </span>
                  <span className="font-label text-[9px] uppercase tracking-widest text-brand-brown">
                    Saisha Insignia
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: The Story Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream border border-brand-gold/30 text-brand-brown text-xs font-label uppercase tracking-widest mb-4">
              <FacetedGemIcon className="w-3.5 h-3.5 text-brand-gold-dark" />
              <span>THE HERITAGE OF RADIANCE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-espresso mb-6 leading-tight">
              The Story of <span className="text-gold-gradient">Saisha</span>
            </h2>

            <p className="text-brand-espresso/80 text-base sm:text-lg leading-relaxed mb-6 font-sans">
              Born from a passion for timeless elegance and modern craftsmanship, <strong className="text-brand-espresso font-semibold">Saisha Jewelry</strong> was founded on a singular belief: every woman deserves jewellery that mirrors her inner brilliance—without compromise.
            </p>

            <p className="text-brand-espresso/75 text-sm sm:text-base leading-relaxed mb-8 font-sans">
              Our emblem—a golden bracelet band embracing an oval faceted gem with the signature 'S' monogram—embodies the union of strength and grace. Every bracelet, earring, necklace, and ring is thoughtfully designed to transition seamlessly from boardroom chic to grand festive celebrations. We ensure each design is engineered with high-micron 18K gold finishes, skin-friendly hypoallergenic bases, and an enduring anti-tarnish shield.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-brand-gold/25">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-brand-ivory border border-brand-gold/25 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    {stat.icon}
                    <span className="font-serif font-bold text-xl sm:text-2xl text-brand-espresso">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-xs text-brand-brown font-sans block">
                    {stat.subtext}
                  </span>
                </div>
              ))}
            </div>

            {/* Story CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <WhatsAppButton
                variant="solid"
                size="md"
                className="font-label text-xs uppercase tracking-wider px-6 py-3"
                customMessage="Hi Saisha Jewelry! I'd love to learn more about your brand and custom jewellery craft."
              >
                Connect With Our Founder Stylist
              </WhatsAppButton>
              <span className="text-xs text-brand-brown/80 font-sans italic">
                “Shine in Every Facet.”
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
