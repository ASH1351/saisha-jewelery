import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { getWhatsAppLink } from '../data/products';
import { FacetedGemIcon } from './GemFacetOrnament';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Footer({ onSelectCategory }) {
  const currentYear = new Date().getFullYear();

  const categories = [
    { name: 'Bracelets', id: 'bracelets' },
    { name: 'Earrings', id: 'earrings' },
    { name: 'Necklaces', id: 'necklaces' },
    { name: 'Rings', id: 'rings' },
    { name: 'Bangles', id: 'bangles' },
    { name: 'Gift Sets', id: 'gift-sets' },
  ];

  return (
    <footer id="contact" className="bg-brand-dark text-brand-ivory relative border-t border-brand-gold/30 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-white border border-brand-gold p-0.5 overflow-hidden">
                <img src="/logo.png" alt="Saisha Jewelry" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-white tracking-wider block leading-none">
                  SAISHA
                </span>
                <span className="font-label text-[10px] tracking-[0.35em] text-brand-gold-light uppercase font-semibold">
                  JEWELRY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brand-ivory/70 font-sans leading-relaxed mb-6 max-w-sm">
              Fine fashion jewellery designed to celebrate everyday brilliance and sacred Indian celebrations. Handcrafted with 18K gold finishes and anti-tarnish assurance.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppLink("Hi Saisha Jewelry! Connecting with you from your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-espresso border border-brand-gold/40 flex items-center justify-center text-brand-gold-light hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-espresso border border-brand-gold/40 flex items-center justify-center text-brand-gold-light hover:bg-brand-gold hover:text-brand-dark transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-espresso border border-brand-gold/40 flex items-center justify-center text-brand-gold-light hover:bg-brand-gold hover:text-brand-dark transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-base text-brand-gold-light mb-4 uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-brand-ivory/80">
              <li>
                <a href="#home" className="hover:text-brand-gold-light transition-colors">Home</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-brand-gold-light transition-colors">Collections</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-gold-light transition-colors">The Brand Story</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brand-gold-light transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-gold-light transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Categories (Cols 7-9) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base text-brand-gold-light mb-4 uppercase tracking-wider text-xs">
              Fine Collections
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-sans text-brand-ivory/80">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#collection-section"
                    onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                    className="hover:text-brand-gold-light transition-colors"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Concierge Contact (Cols 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-base text-brand-gold-light mb-4 uppercase tracking-wider text-xs">
              Direct Concierge
            </h4>
            <div className="space-y-3 text-xs text-brand-ivory/80 font-sans">
              <a
                href={getWhatsAppLink("Hi Saisha Jewelry! I'd like to get in touch with customer care.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-brand-gold-light transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: +91 70399 66335</span>
              </a>

              <a
                href="tel:+917039966335"
                className="flex items-center gap-2.5 hover:text-brand-gold-light transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold-light shrink-0" />
                <span>Call: +91 70399 66335</span>
              </a>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold-light shrink-0" />
                <span>Pan-India Courier & Express Dispatch</span>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-brand-gold-light/70 uppercase tracking-widest block font-label">
                  Client Service Hours
                </span>
                <span className="text-xs text-brand-ivory/90">
                  Mon – Sun: 10:00 AM – 9:00 PM IST
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Gold Divider with Gem Icon */}
        <div className="flex items-center justify-center gap-3 my-8">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-brand-gold/40 to-brand-gold" />
          <div className="p-1 rounded-full border border-brand-gold/60 bg-brand-espresso text-brand-gold">
            <FacetedGemIcon className="w-3.5 h-3.5" color="#D6B25E" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-brand-gold/40 to-brand-gold" />
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-ivory/60 gap-3 font-sans">
          <p>© {currentYear} Saisha Jewelry. All rights reserved.</p>
          <p className="italic font-serif text-brand-gold-light/80 text-xs">
            “Shine in Every Facet.”
          </p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-brand-gold-light transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#home" className="hover:text-brand-gold-light transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#home" className="hover:text-brand-gold-light transition-colors">Shipping & Returns</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
