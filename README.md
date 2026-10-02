# Saisha Jewelry – Premium Fine Fashion Jewellery Website

A luxury, fully mobile-responsive e-commerce and catalog showcase for **SAISHA JEWELRY** (Bracelets, Earrings, Necklaces, Rings, Bangles, and Gift Sets). Built with **React**, **Vite**, **Tailwind CSS**, and **Three.js** interactive 3D studio rendering.

---

## 🌟 Brand Highlights & Theme
- **Brand Name**: SAISHA JEWELRY
- **Tagline**: *"Shine in Every Facet."*
- **Brand Colors**:
  - Soft Ivory (`#FBF7EE`) & Pure White (`#FFFFFF`)
  - Primary Brand Gold (`#D6B25E`)
  - Light Gold Highlight (`#EBCF82`)
  - Deep Antique Gold / Bronze (`#A9803A`)
  - Rich Wordmark Brown (`#7A5632`)
  - Dark Espresso (`#2B1D12`) & Midnight Espresso (`#17110B`)
  - Polished Gold Gradients (`#A9803A` → `#EBCF82` → `#D6B25E` → `#A9803A`)
- **Typography**: Playfair Display, Cormorant Garamond, Jost, and Montserrat

---

## 💎 Features & Website Structure

1. **Page-Load Intro Animation**:
   - Dynamic SVG drawing of the golden bracelet oval and faceted gem outline, revealing the white "S" monogram and wordmark.
2. **Sticky Luxury Navbar**:
   - Crisp brand emblem, fast navigation links, responsive mobile drawer, and direct WhatsApp enquiry CTA.
   - Smooth transition from translucent ivory to white glass with gold bottom hairline on scroll.
3. **Hero Section with 3D Studio Showcase**:
   - Split layout with bold typography, tagline, and dual buttons.
   - Interactive **Three.js 3D gemstone and gold bracelet band** mimicking the logo with studio lighting reflections and sparkles (plus toggle to view high-res editorial model photography).
4. **Trust Strip**:
   - Continuous gold ribbon highlighting: `PREMIUM QUALITY • ANTI-TARNISH • GIFT READY • CUSTOM ORDERS • PAN-INDIA DELIVERY`.
5. **Shop By Category**:
   - Interactive tiles for *Bracelets*, *Earrings*, *Necklaces*, *Rings*, *Bangles*, and *Gift Sets* with image zoom and gold glow effects.
6. **Signature Collection (Featured Products)**:
   - Category filter tabs (*All Pieces*, *Bracelets*, *Earrings*, *Necklaces*, *Rings*, *Bangles*, *Gift Sets*).
   - 4-column desktop / 2-column mobile responsive grid.
   - Product cards with hover second image, badges, ratings, and instant WhatsApp inquiry.
   - **Quick View Modal** with multi-angle gallery, specifications (finish, base alloy, stone, sizing, water-resistance), and WhatsApp checkout.
7. **Brand Story**:
   - The Story of Saisha in an oval faceted gem model frame echoing the brand logo.
   - Metrics: `500+ Designs`, `5,000+ Happy Customers`, `100% Quality Checked`.
8. **Why Choose Saisha**:
   - 4 luxury cards covering 18K Long-Lasting Finish, Skin-Friendly Hypoallergenic Materials, Signature Gift Packaging, and Custom Designs.
9. **Editorial Lookbook & Gallery**:
   - Masonry styling inspiration cards with direct "Enquire About This Piece" WhatsApp links.
   - Instagram community banner (`@saishajewelry`).
10. **Gifting & Occasion Curations**:
    - Occasion cards for *Birthdays*, *Anniversaries*, *Weddings & Festive*, and *Self-Love*.
    - Unboxing experience banner with gold-embossed keepsake box, velvet pouches, and customized notes.
11. **Customer Reviews Carousel**:
    - Touch-swipeable and auto-sliding reviews carousel featuring verified buyers from Mumbai, Delhi NCR, Bangalore, Jaipur, and Kochi.
12. **FAQ & Care Guide**:
    - Accordion addressing anti-tarnish protection, WhatsApp concierge ordering, payment modes (UPI, Cards, COD), and shipping.
13. **High-Contrast Final CTA**:
    - Deep midnight espresso background (`#17110B`) with faceted gem silhouette and VIP WhatsApp stylist link.
14. **Luxury Footer**:
    - Brand emblem, quick links, category navigation, social links, customer service hours, and gold gem divider.
15. **WhatsApp Integration (Critical)**:
    - Dedicated business number: `+91 70399 66335`.
    - Every product card opens WhatsApp with pre-filled product name and price.
    - Floating pulsing gold/emerald WhatsApp button with "Chat with us" tooltip on desktop.
    - Full-width sticky bottom WhatsApp bar on mobile.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Modifying Products & Information
All products, pricing, categories, customer reviews, FAQs, and WhatsApp phone numbers are configured in:
```
src/data/products.js
```
To update the WhatsApp number or link message, simply edit `WHATSAPP_NUMBER` at the top of `src/data/products.js`.
