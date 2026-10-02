import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';
import { GoldSectionDivider } from './GemFacetOrnament';

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  // Auto slide timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <GoldSectionDivider
          subtitle="VOICES OF BRILLIANCE"
          title="Customer Stories & Love"
        />

        <p className="text-center text-brand-espresso/70 max-w-2xl mx-auto -mt-2 mb-14 text-sm sm:text-base font-sans">
          Over 5,000 delighted women and gift givers across India celebrate life's most precious occasions in Saisha jewellery.
        </p>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Card */}
          <div className="bg-brand-ivory/70 rounded-3xl p-8 sm:p-12 border-2 border-brand-gold/40 shadow-xl relative min-h-[300px] flex flex-col justify-between">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-brand-gold/15 pointer-events-none" />

            <div>
              {/* Stars & Verified Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-label uppercase tracking-wider font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Buyer</span>
                </div>
              </div>

              {/* Title & Comment */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-espresso mb-3">
                “{TESTIMONIALS[currentIndex].title}”
              </h3>

              <p className="text-brand-espresso/80 text-base sm:text-lg leading-relaxed font-sans italic mb-6">
                "{TESTIMONIALS[currentIndex].comment}"
              </p>
            </div>

            {/* Author details */}
            <div className="pt-6 border-t border-brand-gold/25 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-gold-dark text-white font-serif font-bold text-xl flex items-center justify-center shadow-md">
                  {TESTIMONIALS[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-brand-espresso leading-none">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <span className="text-xs text-brand-brown font-label uppercase tracking-wider">
                    {TESTIMONIALS[currentIndex].city}, India
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-brand-brown font-label block">Purchased Piece:</span>
                <span className="text-xs font-semibold text-brand-espresso font-sans">
                  {TESTIMONIALS[currentIndex].product}
                </span>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-brand-gold/50 bg-white hover:bg-gold-gradient text-brand-espresso transition-all shadow-sm active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === i ? 'w-7 bg-brand-gold' : 'w-2 bg-brand-gold/30 hover:bg-brand-gold/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-brand-gold/50 bg-white hover:bg-gold-gradient text-brand-espresso transition-all shadow-sm active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
