import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, getProductWhatsAppLink } from '../data/products';

export default function WhatsAppButton({
  productName,
  price,
  customMessage,
  variant = 'solid', // 'solid', 'outline', 'dark', 'floating', 'mobile-bar'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  children,
  iconOnly = false,
  showIcon = true,
}) {
  const href = productName && price !== undefined
    ? getProductWhatsAppLink(productName, price)
    : getWhatsAppLink(customMessage);

  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full tracking-wide";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    // Polished gold gradient button with shimmer
    solid: "bg-gold-gradient text-brand-espresso font-semibold shadow-gold-sm hover:shadow-gold-md hover:brightness-105 active:scale-95 shimmer-button border border-brand-gold-light/40",
    
    // Luxurious gold outline button
    outline: "border border-brand-gold text-brand-gold-dark hover:bg-brand-gold/10 hover:text-brand-espresso font-semibold backdrop-blur-sm active:scale-95",
    
    // Dark espresso with gold glow for high contrast sections
    dark: "bg-brand-dark text-brand-gold-light border border-brand-gold/50 hover:border-brand-gold hover:bg-brand-espresso shadow-gold-sm hover:shadow-gold-glow active:scale-95",
    
    // Full width mobile sticky bottom button
    'mobile-bar': "w-full bg-gold-gradient text-brand-espresso font-bold py-3.5 text-sm uppercase tracking-wider shadow-gold-md border-t border-brand-gold-light/60 shimmer-button",
    
    // Floating circular button
    floating: "w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variant !== 'floating' ? sizeStyles[size] : ''} ${variantStyles[variant]} ${className}`}
      aria-label={children ? String(children) : "Enquire on WhatsApp"}
    >
      {showIcon && (
        <MessageCircle className={`${size === 'lg' ? 'w-5 h-5' : size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} shrink-0 fill-current`} />
      )}
      {!iconOnly && (children || "Enquire on WhatsApp")}
    </a>
  );
}
