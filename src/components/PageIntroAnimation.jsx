import React, { useState, useEffect } from 'react';

export default function PageIntroAnimation({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: drawing, 1: monogram S & wordmark, 2: fadeout, 3: done

  useEffect(() => {
    // Stage 1: Reveal 'S' and wordmark
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 600);

    // Stage 2: Fade out overlay
    const timer2 = setTimeout(() => {
      setStage(2);
    }, 1600);

    // Stage 3: Fully unmount
    const timer3 = setTimeout(() => {
      setStage(3);
      if (onComplete) onComplete();
    }, 2100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (stage === 3) return null;

  return (
    <div
      onClick={() => {
        setStage(3);
        if (onComplete) onComplete();
      }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-brand-dark transition-opacity duration-700 cursor-pointer ${
        stage === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center text-center px-4">
        
        {/* Animated SVG Gem Facet drawing & Golden Band */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6">
          <svg
            viewBox="0 0 140 140"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Golden Bracelet Oval Band */}
            <ellipse
              cx="70"
              cy="70"
              rx="62"
              ry="24"
              stroke="#D6B25E"
              strokeWidth="2.5"
              className="animate-[spin_12s_linear_infinite]"
              style={{
                strokeDasharray: 300,
                strokeDashoffset: stage >= 0 ? 0 : 300,
                transition: 'stroke-dashoffset 1s ease-out',
              }}
            />

            {/* Inner Faceted Gem Outline */}
            <polygon
              points="70,18 105,42 105,98 70,122 35,98 35,42"
              stroke="#EBCF82"
              strokeWidth="2.5"
              fill={stage >= 1 ? "rgba(214, 178, 94, 0.15)" : "none"}
              style={{
                strokeDasharray: 320,
                strokeDashoffset: stage >= 0 ? 0 : 320,
                transition: 'all 1s ease-out',
              }}
            />

            {/* Facet Internal Lines */}
            <line x1="70" y1="18" x2="70" y2="122" stroke="#A9803A" strokeWidth="1.5" />
            <line x1="35" y1="42" x2="105" y2="98" stroke="#A9803A" strokeWidth="1.5" />
            <line x1="35" y1="98" x2="105" y2="42" stroke="#A9803A" strokeWidth="1.5" />

            {/* Center Monogram 'S' */}
            <text
              x="70"
              y="78"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="Playfair Display, serif"
              fontSize="28"
              fontWeight="bold"
              className={`transition-all duration-700 ${
                stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              S
            </text>
          </svg>
        </div>

        {/* Wordmark Fade-In */}
        <div
          className={`transition-all duration-700 transform ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="font-serif font-black text-2xl sm:text-3xl text-gold-gradient tracking-[0.2em] mb-1">
            SAISHA
          </h1>
          <p className="font-label text-[10px] sm:text-xs tracking-[0.45em] text-brand-gold-light uppercase font-semibold">
            JEWELRY
          </p>
          <span className="block text-[10px] text-white/50 mt-3 font-sans">
            Shine in Every Facet
          </span>
        </div>

      </div>
    </div>
  );
}
