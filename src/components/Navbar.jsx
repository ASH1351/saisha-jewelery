import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function Navbar({ onSelectCategory }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Bracelets', href: '#collection-section', filter: 'bracelets' },
    { name: 'Earrings', href: '#collection-section', filter: 'earrings' },
    { name: 'Necklaces', href: '#collection-section', filter: 'necklaces' },
    { name: 'Rings', href: '#collection-section', filter: 'rings' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (link) => {
    setMobileMenuOpen(false);
    if (link.filter && onSelectCategory) {
      onSelectCategory(link.filter);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-gold/30 py-2.5'
            : 'bg-brand-ivory/80 backdrop-blur-sm border-b border-brand-gold/15 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg p-1"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white border border-brand-gold/40 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Saisha Jewelry Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif font-black tracking-wider text-xl sm:text-2xl text-brand-espresso leading-none group-hover:text-brand-gold-dark transition-colors">
                  SAISHA
                </span>
                <span className="font-label text-[9px] sm:text-[10px] tracking-[0.32em] text-brand-brown uppercase font-semibold">
                  JEWELRY
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link)}
                  className="font-label text-xs uppercase tracking-widest text-brand-espresso/80 hover:text-brand-gold-dark font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side: WhatsApp Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <WhatsAppButton
                  variant="solid"
                  size="sm"
                  className="font-label tracking-wider uppercase text-xs px-4 py-2"
                >
                  Enquire on WhatsApp
                </WhatsAppButton>
              </div>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-brand-espresso hover:text-brand-gold-dark hover:bg-brand-gold/10 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-brand-espresso" />
                ) : (
                  <Menu className="w-6 h-6 text-brand-espresso" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Luxury Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-ivory/98 backdrop-blur-xl flex flex-col justify-between pt-20 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col items-center text-center mt-4 space-y-5">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white border border-brand-gold shadow-md p-1 mb-2">
              <img src="/logo.png" alt="Saisha Jewelry" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mb-4">
              <span className="font-serif font-bold text-2xl text-brand-espresso tracking-wider block">
                SAISHA JEWELRY
              </span>
              <span className="text-xs font-label uppercase tracking-widest text-brand-brown">
                Shine In Every Facet
              </span>
            </div>

            <div className="w-24 h-[1px] bg-brand-gold/40 mb-4" />

            <div className="flex flex-col space-y-3.5 w-full max-w-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link)}
                  className="font-serif text-lg tracking-wide text-brand-espresso hover:text-brand-gold-dark py-1.5 transition-colors border-b border-brand-gold/15"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full max-w-sm mx-auto mt-8 flex flex-col gap-3">
            <WhatsAppButton
              variant="solid"
              size="md"
              className="w-full text-center py-3.5 uppercase text-xs tracking-wider"
            >
              Chat With Jewellery Stylist
            </WhatsAppButton>
            <p className="text-center text-[11px] text-brand-brown tracking-wide font-sans">
              Direct consultation via +91 70399 66335
            </p>
          </div>
        </div>
      )}
    </>
  );
}
