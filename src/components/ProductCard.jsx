import React, { useState } from 'react';
import { Eye, Star, Sparkles, MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function ProductCard({ product, onQuickView }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-brand-gold/30 hover:border-brand-gold card-gold-hover flex flex-col h-full"
      onMouseEnter={() => {
        if (product.images.length > 1) setCurrentImageIndex(1);
      }}
      onMouseLeave={() => {
        setCurrentImageIndex(0);
      }}
    >
      {/* Product Image Stage */}
      <div className="relative aspect-square w-full overflow-hidden bg-brand-cream/60">
        <img
          src={product.images[currentImageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge Overlay */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="px-2.5 py-1 rounded-full bg-brand-espresso/90 text-brand-gold-light text-[10px] font-label uppercase tracking-widest font-bold shadow-sm backdrop-blur-sm border border-brand-gold/40">
              {product.badge}
            </span>
          </div>
        )}

        {/* Anti-Tarnish Guarantee Micro Badge */}
        <div className="absolute bottom-2.5 left-2.5 z-10 hidden sm:block">
          <span className="px-2 py-0.5 rounded-full bg-white/90 text-brand-espresso text-[9px] font-label font-semibold tracking-wider border border-brand-gold/30 backdrop-blur-sm">
            ✨ Anti-Tarnish
          </span>
        </div>

        {/* Quick View Button */}
        <button
          type="button"
          onClick={() => onQuickView(product)}
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-brand-espresso hover:text-brand-gold-dark shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0"
          title="Quick View Details"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Subtle image indicator dots if multi-image */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2.5 right-2.5 flex gap-1 z-10">
            {product.images.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentImageIndex === i ? 'bg-brand-gold w-3' : 'bg-black/25'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Reviews */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-semibold text-brand-espresso">
              {product.rating}
            </span>
            <span className="text-[11px] text-brand-brown/70 font-sans">
              ({product.reviewsCount})
            </span>
            <span className="text-brand-gold/50 text-[10px] ml-auto uppercase font-label">
              18K Vermeil
            </span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif font-bold text-sm sm:text-base text-brand-espresso hover:text-brand-gold-dark transition-colors line-clamp-1 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-base sm:text-lg font-bold text-brand-espresso font-sans">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-brand-brown/60 line-through font-sans">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-[10px] text-emerald-700 font-semibold font-label uppercase">
                Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            )}
          </div>
        </div>

        {/* WhatsApp Enquiry Button */}
        <div className="mt-3.5 pt-3 border-t border-brand-gold/15">
          <WhatsAppButton
            productName={product.name}
            price={product.price}
            variant="solid"
            size="sm"
            className="w-full text-[11px] sm:text-xs py-2 tracking-wider uppercase font-semibold"
          >
            Enquire on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
