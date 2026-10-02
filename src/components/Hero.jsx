import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import ThreeJewelryCanvas from './ThreeJewelryCanvas';

export default function Hero() {
  const [activeVisualTab, setActiveVisualTab] = useState('3d'); // '3d' or 'photo'

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-facet-pattern overflow-hidden border-b border-brand-gold/20"
    >
      {/* Decorative Gold Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold-light/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Animated Sparkles (SVG) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-24 left-[10%] text-brand-gold-dark/40 animate-float text-xl">✦</span>
        <span className="absolute top-1/3 left-[2%] text-brand-gold/50 animate-sparkle text-lg">✧</span>
        <span className="absolute top-1/4 right-[8%] text-brand-gold-light/60 animate-sparkle text-2xl">✦</span>
        <span className="absolute bottom-1/3 right-[3%] text-brand-gold/40 animate-float text-sm">✧</span>
        <span className="absolute bottom-20 left-[25%] text-brand-gold-dark/30 animate-pulse text-xs">✦</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cream/80 border border-brand-gold/40 text-brand-brown text-xs font-label uppercase tracking-[0.25em] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-sparkle" />
              <span>Shine in Every Facet</span>
              <span className="text-brand-gold/60">•</span>
              <span className="text-brand-espresso font-semibold">Fine Fashion Jewellery</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-brand-espresso leading-[1.12] mb-6">
              Jewellery That <br className="hidden sm:inline" />
              <span className="text-gold-gradient relative inline-block">
                Shines Like You
                {/* Underline accent line */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-brand-gold"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-brand-espresso/80 text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-sans">
              Bracelets, Earrings & Fine Jewellery Crafted for Every Occasion. Radiant 18K gold finishes, anti-tarnish protection, and brilliant faceted cut gemstones.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gold-gradient text-brand-espresso font-label font-bold text-xs uppercase tracking-widest shadow-gold-md hover:shadow-gold-lg hover:brightness-105 active:scale-95 transition-all shimmer-button border border-brand-gold-light/40"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <WhatsAppButton
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-label text-xs uppercase tracking-widest px-8 py-3.5 bg-white/70"
                customMessage="Hi Saisha Jewelry! I saw your stunning collection on the website and would like to chat with a stylist."
              >
                CHAT ON WHATSAPP
              </WhatsAppButton>
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-6 border-t border-brand-gold/25 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-brand-gold/15 text-brand-gold-dark shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-brand-espresso leading-tight">Anti-Tarnish</p>
                  <p className="text-[10px] text-brand-brown">18K Gold Guard</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-brand-gold/15 text-brand-gold-dark shrink-0">
                  <Gem className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-brand-espresso leading-tight">Faceted Gems</p>
                  <p className="text-[10px] text-brand-brown">AAA+ Sparkle</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-brand-gold/15 text-brand-gold-dark shrink-0">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-brand-espresso leading-tight">Gift Ready</p>
                  <p className="text-[10px] text-brand-brown">Luxury Box</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Jewelry & Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Elegant Outer Gem Halo Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Geometric Facet Ring border */}
              <div className="absolute -inset-4 rounded-[36px] border border-brand-gold/30 bg-gradient-to-b from-brand-gold/10 via-transparent to-brand-gold/10 blur-[1px] pointer-events-none" />

              <div className="relative rounded-[28px] bg-white/75 backdrop-blur-md border border-brand-gold/40 shadow-xl overflow-hidden p-3 sm:p-5">
                
                {/* Visual View Switcher (3D Model vs High-Res Editorial Photography) */}
                <div className="flex items-center justify-between mb-3 px-2">
                  <span className="font-label text-[11px] uppercase tracking-wider text-brand-brown font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-gold" />
                    Signature Solitaire & Bracelet
                  </span>

                  <div className="inline-flex rounded-full bg-brand-ivory border border-brand-gold/30 p-0.5 text-[10px] font-label font-medium uppercase tracking-wider">
                    <button
                      onClick={() => setActiveVisualTab('3d')}
                      className={`px-3 py-1 rounded-full transition-all ${
                        activeVisualTab === '3d'
                          ? 'bg-brand-espresso text-brand-gold-light shadow-sm'
                          : 'text-brand-brown hover:text-brand-espresso'
                      }`}
                    >
                      3D Studio
                    </button>
                    <button
                      onClick={() => setActiveVisualTab('photo')}
                      className={`px-3 py-1 rounded-full transition-all ${
                        activeVisualTab === 'photo'
                          ? 'bg-brand-espresso text-brand-gold-light shadow-sm'
                          : 'text-brand-brown hover:text-brand-espresso'
                      }`}
                    >
                      Model Look
                    </button>
                  </div>
                </div>

                {/* Display Area */}
                {activeVisualTab === '3d' ? (
                  <div className="relative bg-gradient-to-b from-[#FFFDF8] to-[#F5ECE0] rounded-2xl overflow-hidden border border-brand-gold/20">
                    <ThreeJewelryCanvas />
                  </div>
                ) : (
                  <div className="relative h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden border border-brand-gold/20">
                    <img
                      src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
                      alt="Saisha Luxury Jewellery"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <span className="text-[10px] uppercase font-label tracking-widest text-brand-gold-light">Editorial Showcase</span>
                        <h4 className="font-serif text-xl font-bold">18K Anti-Tarnish Heritage Ensemble</h4>
                        <p className="text-xs text-white/80 mt-1">Crafted with precision cut solitaire facets and gold filigree.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Floating Micro Badge */}
                <div className="mt-3.5 px-3 py-2 bg-brand-ivory/90 rounded-xl border border-brand-gold/25 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white border border-brand-gold/40 flex items-center justify-center p-1">
                      <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-brand-espresso text-xs block leading-none">Saisha Facet Cut</span>
                      <span className="text-[10px] text-brand-brown">Hand-finished jewellery</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-gold-dark font-label">
                    From ₹499 to ₹4,999
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
