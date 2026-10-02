/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#D6B25E',
        'brand-gold-light': '#EBCF82',
        'brand-gold-dark': '#A9803A',
        'brand-brown': '#7A5632',
        'brand-espresso': '#2B1D12',
        'brand-dark': '#17110B',
        'brand-ivory': '#FBF7EE',
        'brand-ivory-light': '#FFFDF9',
        'brand-cream': '#F4EEDA',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', '"Inter"', 'sans-serif'],
        label: ['"Montserrat"', '"Jost"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #A9803A 0%, #EBCF82 50%, #D6B25E 75%, #A9803A 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #EBCF82 0%, #D6B25E 50%, #A9803A 100%)',
        'gold-radial': 'radial-gradient(circle, rgba(235,207,130,0.25) 0%, rgba(214,178,94,0.05) 50%, transparent 70%)',
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(169, 128, 58, 0.15)',
        'gold-md': '0 4px 20px rgba(169, 128, 58, 0.22)',
        'gold-lg': '0 10px 30px rgba(169, 128, 58, 0.28)',
        'gold-glow': '0 0 25px rgba(235, 207, 130, 0.5)',
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'float': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(250%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
