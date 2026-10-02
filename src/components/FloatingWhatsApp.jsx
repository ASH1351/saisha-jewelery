import React, { useState } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/products';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getWhatsAppLink("Hi Saisha Jewelry! I'm browsing your jewellery website and would love to speak with a stylist.");

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button (Bottom-Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2">
        {/* Tooltip message */}
        {showTooltip && (
          <div className="relative bg-white text-brand-espresso px-4 py-2.5 rounded-2xl shadow-xl border border-brand-gold/40 text-xs font-sans max-w-[220px] flex items-center justify-between gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <p className="leading-snug">
                <strong className="text-brand-espresso font-semibold block">Chat with us</strong>
                Ask questions or request live piece videos!
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-brand-brown hover:text-brand-espresso p-0.5 rounded focus:outline-none"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Tooltip arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-brand-gold/40 transform rotate-45" />
          </div>
        )}

        {/* The Pulsing WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-3.5 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-white ring-4 ring-brand-gold/30 hover:ring-brand-gold/60"
          aria-label="Chat on WhatsApp with Saisha Jewelry"
        >
          {/* Gentle Pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
          
          <MessageCircle className="w-7 h-7 fill-current relative z-10" />

          {/* Gold Sparkle accent */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-gold flex items-center justify-center text-[10px] text-brand-dark shadow-sm z-20">
            ✦
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Sticky Full-Width CTA) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-gold/30 p-2.5 shadow-2xl flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gold-gradient text-brand-espresso font-label font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-gold-sm shimmer-button border border-brand-gold-light/40 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-current text-emerald-800" />
          <span>ENQUIRE ON WHATSAPP</span>
        </a>

        <a
          href="tel:+917039966335"
          className="px-3.5 py-3.5 rounded-xl border border-brand-gold/40 bg-brand-ivory text-brand-espresso text-xs font-semibold flex items-center justify-center shrink-0 active:scale-95"
          aria-label="Call Saisha Jewelry"
        >
          📞
        </a>
      </div>
    </>
  );
}
