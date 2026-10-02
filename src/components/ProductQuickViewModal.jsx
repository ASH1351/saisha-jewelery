import React, { useState } from 'react';
import { X, Star, ShieldCheck, Gem, Sparkles, Check, MessageCircle, Heart } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function ProductQuickViewModal({ product, onClose }) {
  if (!product) return null;

  const [selectedImg, setSelectedImg] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-dark/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-brand-gold/40 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-ivory hover:bg-brand-gold/20 text-brand-espresso transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Gallery */}
          <div className="p-4 sm:p-6 bg-brand-ivory/60 flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-gold/20">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-brand-cream border border-brand-gold/25 shadow-inner">
              <img
                src={product.images[selectedImg] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-espresso text-brand-gold-light text-xs font-label uppercase tracking-widest font-bold">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImg === idx
                        ? 'border-brand-gold shadow-gold-sm scale-105'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-4 p-3 rounded-xl bg-white/80 border border-brand-gold/20 text-center">
              <p className="text-[11px] text-brand-brown font-medium">
                ✨ 1-Year Anti-Tarnish Guarantee • Certified Skin-Safe Alloy
              </p>
            </div>
          </div>

          {/* Right: Product Details & WhatsApp Ordering */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-label text-xs uppercase tracking-widest text-brand-gold-dark font-semibold">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                  <span className="text-brand-brown/60">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-espresso mb-3">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-brand-espresso font-sans">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-brand-brown/60 line-through font-sans">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold font-label">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-brand-espresso/80 text-sm leading-relaxed mb-6 font-sans">
                {product.description}
              </p>

              {/* Specifications Matrix */}
              <div className="bg-brand-ivory/80 rounded-2xl p-4 border border-brand-gold/20 mb-6 space-y-2 text-xs">
                <h4 className="font-label font-bold text-brand-espresso uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  Jewellery Specifications
                </h4>
                {product.specs && Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-brand-gold/10 last:border-b-0">
                    <span className="text-brand-brown capitalize font-medium">
                      {key.replace(/([A-Z])/g, ' $1')}:
                    </span>
                    <span className="text-brand-espresso font-semibold text-right max-w-[60%]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-3 border-t border-brand-gold/20">
              <WhatsAppButton
                productName={product.name}
                price={product.price}
                variant="solid"
                size="lg"
                className="w-full text-xs sm:text-sm uppercase tracking-wider py-3.5 font-bold shadow-gold-md"
              >
                Instant Order on WhatsApp
              </WhatsAppButton>

              <div className="flex items-center justify-between text-[11px] text-brand-brown font-label">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Dispatches in 24 Hours
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Free Luxury Gift Box
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
