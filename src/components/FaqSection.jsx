import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/products';
import { GoldSectionDivider } from './GemFacetOrnament';
import WhatsAppButton from './WhatsAppButton';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-brand-ivory/60 relative border-b border-brand-gold/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <GoldSectionDivider
          subtitle="FREQUENTLY ASKED"
          title="Questions & Care Guide"
        />

        <p className="text-center text-brand-espresso/70 max-w-xl mx-auto -mt-2 mb-12 text-sm sm:text-base font-sans">
          Everything you need to know about our anti-tarnish metals, ordering via WhatsApp, and pan-India express shipping.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-brand-gold/30 overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif font-bold text-base sm:text-lg text-brand-espresso">
                  {faq.q}
                </span>
                <span
                  className={`p-1.5 rounded-full bg-brand-cream text-brand-gold-dark transition-transform duration-300 shrink-0 ${
                    openIndex === idx ? 'rotate-180 bg-brand-gold/20' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-sm text-brand-espresso/80 font-sans leading-relaxed border-t border-brand-gold/15 bg-brand-ivory/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-brand-gold/30">
          <p className="text-xs uppercase font-label tracking-widest text-brand-brown font-semibold mb-2">
            Still Have a Question?
          </p>
          <p className="text-sm text-brand-espresso mb-4">
            Our jewellery care consultants are online 7 days a week on WhatsApp to assist you.
          </p>
          <WhatsAppButton
            variant="solid"
            size="sm"
            customMessage="Hi Saisha Jewelry! I have a question before placing an order."
          >
            Chat Directly on WhatsApp
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
}
