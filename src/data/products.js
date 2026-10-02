export const WHATSAPP_NUMBER = "917039966335";

export const getWhatsAppLink = (customMessage) => {
  const defaultText = "Hi Saisha Jewelry! I'd like to know more about your jewellery collection.";
  const message = customMessage || defaultText;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const getProductWhatsAppLink = (productName, price) => {
  const message = `Hi Saisha Jewelry! I'm interested in ${productName} (₹${price.toLocaleString('en-IN')}). Could you share more details?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const CATEGORIES = [
  {
    id: "bracelets",
    name: "Bracelets",
    tagline: "Graceful wrists adorned in gold",
    count: "24+ Styles",
    image: "https://images.unsplash.com/photo-1611591475150-a931441b8c2c?auto=format&fit=crop&w=800&q=80",
    badge: "Most Loved"
  },
  {
    id: "earrings",
    name: "Earrings",
    tagline: "From subtle sparkle to royal drop",
    count: "38+ Styles",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller"
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Faceted brilliance close to your heart",
    count: "19+ Styles",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    badge: "Signature"
  },
  {
    id: "rings",
    name: "Rings",
    tagline: "Statement silhouettes with radiant gems",
    count: "22+ Styles",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    badge: "Trending"
  },
  {
    id: "bangles",
    name: "Bangles",
    tagline: "Traditional elegance meets modern polish",
    count: "15+ Styles",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    badge: "Festive Ready"
  },
  {
    id: "gift-sets",
    name: "Gift Sets",
    tagline: "Curated luxury in signature golden packaging",
    count: "10+ Sets",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    badge: "Gift Box Included"
  }
];

export const PRODUCTS = [
  {
    id: "prod-1",
    name: "Saisha Gem Charm Bracelet",
    category: "bracelets",
    price: 1899,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    images: [
      "https://images.unsplash.com/photo-1611591475150-a931441b8c2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Our signature piece featuring an intricate oval faceted gem charm nestled in an 18K gold polished band. Engineered with an anti-tarnish protective coating for everyday luxury.",
    specs: {
      finish: "18K Yellow Gold Vermeil",
      baseMaterial: "Surgical Grade 316L Stainless Steel",
      gemstone: "AAA+ Hand-cut Faceted Solitaire Gem",
      size: "Adjustable 6.5\" to 8.2\" with Lobster Clasp",
      hypoallergenic: "100% Nickel & Lead Free",
      waterResistance: "Sweat & Water Resistant (Anti-Tarnish)"
    }
  },
  {
    id: "prod-2",
    name: "Golden Facet Drop Earrings",
    category: "earrings",
    price: 1499,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 96,
    badge: "New Arrival",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Architectural geometric facet cuts that catch golden rays from every angle. Lightweight luxury designed for all-day comfort without earlobe strain.",
    specs: {
      finish: "High-Lustre 18K Micron Gold Plated",
      baseMaterial: "Eco-Brass Alloy",
      gemstone: "Prism Cut CZ Crystals",
      size: "38mm Drop Length",
      hypoallergenic: "Hypoallergenic Titanium Posts",
      waterResistance: "Moisture Protected"
    }
  },
  {
    id: "prod-3",
    name: "Radiance Chain Bracelet",
    category: "bracelets",
    price: 1299,
    originalPrice: 1799,
    rating: 4.9,
    reviewsCount: 118,
    badge: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591475150-a931441b8c2c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An Italian-inspired herringbone flat chain with interlocking mirror facets. Glides effortlessly on your wrist with a fluid golden glow.",
    specs: {
      finish: "Triple Dipped 18K Gold Coating",
      baseMaterial: "Stainless Steel Core",
      gemstone: "Subtle Micro-Pave Accent",
      size: "17cm + 4cm Extension",
      hypoallergenic: "Safe for sensitive skin",
      waterResistance: "100% Anti-Tarnish Guarantee"
    }
  },
  {
    id: "prod-4",
    name: "Oval Brilliance Pendant",
    category: "necklaces",
    price: 2199,
    originalPrice: 2899,
    rating: 5.0,
    reviewsCount: 204,
    badge: "Signature Piece",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Directly inspired by the Saisha gem insignia. Features a brilliant-cut center gem enveloped by a sculpted golden wire halo on an ultra-fine link chain.",
    specs: {
      finish: "18K Rich Antique Gold Dip",
      baseMaterial: "Solid 925 Sterling Silver / Steel",
      gemstone: "Oval Brilliant Solitaire (2.5 Carat Eq.)",
      size: "Chain 42cm + 5cm Adjustable",
      hypoallergenic: "Certified Nickel-Free",
      waterResistance: "Anti-Oxidation Seal"
    }
  },
  {
    id: "prod-5",
    name: "Aurora Stud Earrings",
    category: "earrings",
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 88,
    badge: "Daily Essential",
    images: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Minimalist yet captivating. Hexagonal facet-cut studs that deliver crisp diamond-like fire suitable for everyday office wear or gala evenings.",
    specs: {
      finish: "18K Yellow Gold Bezel",
      baseMaterial: "Hypoallergenic Pure Brass",
      gemstone: "Laboratory Grown High-Fire CZ",
      size: "8mm Diameter",
      hypoallergenic: "Comfort Push-Back Backings",
      waterResistance: "Shower Friendly"
    }
  },
  {
    id: "prod-6",
    name: "Heritage Gold Cuff",
    category: "bangles",
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviewsCount: 165,
    badge: "Bestseller",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591475150-a931441b8c2c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Bold open-ended cuff bangle with embossed geometric facet motifs along the curved rim. Flexes gently to fit any wrist size comfortably.",
    specs: {
      finish: "Polished Satin Gold Dual Finish",
      baseMaterial: "Forged Brass Core",
      gemstone: "Twin End Bezel Crystals",
      size: "Adjustable Free Size (58-65mm diameter)",
      hypoallergenic: "Skin-Safe Organic Lacquer",
      waterResistance: "Anti-Tarnish Formula"
    }
  },
  {
    id: "prod-7",
    name: "Solitaire Crown Ring",
    category: "rings",
    price: 1199,
    originalPrice: 1699,
    rating: 4.9,
    reviewsCount: 132,
    badge: "Trending",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A show-stopping 6-prong crown holding a radiant oval facet stone, framed by a tapered micro-pave band. Fits like an heirloom piece.",
    specs: {
      finish: "18K Gold Electroplated",
      baseMaterial: "Premium Jeweller's Brass",
      gemstone: "Faceted Cushion Cut CZ",
      size: "Adjustable Band (Fits US sizes 5-9)",
      hypoallergenic: "Zero Irritation Guaranteed",
      waterResistance: "Anti-Fade Coating"
    }
  },
  {
    id: "prod-8",
    name: "Celestial Tiered Choker",
    category: "necklaces",
    price: 2799,
    originalPrice: 3899,
    rating: 4.8,
    reviewsCount: 79,
    badge: "Festive Pick",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Double-layered luxury choker combining a delicate paperclip chain with a cascading faceted drop droplet pendant. The ultimate festive showpiece.",
    specs: {
      finish: "Warm 18K Artisan Gold",
      baseMaterial: "Stainless Steel with PVD Gold Coating",
      gemstone: "Multi-Faceted Teardrop Gem",
      size: "Layer 1: 38cm, Layer 2: 44cm + 6cm ext",
      hypoallergenic: "Dermatologically Tested Safe",
      waterResistance: "Anti-Tarnish Lifetime Guard"
    }
  },
  {
    id: "prod-9",
    name: "Eternity Band Ring",
    category: "rings",
    price: 999,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 110,
    badge: "Stackable",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Continuous circle of micro-faceted gems embedded in a 2mm gold band. Designed to be stacked with your engagement ring or worn solo.",
    specs: {
      finish: "Mirror Polish 18K Gold Plated",
      baseMaterial: "Solid Stainless Steel",
      gemstone: "Micro-Pave CZ Stones 360°",
      size: "Sizes: US 6, 7, 8 (or Open Free Size)",
      hypoallergenic: "Non-Reactive Metal",
      waterResistance: "Anti-Tarnish"
    }
  },
  {
    id: "prod-10",
    name: "Empress Royal Bangles (Set of 2)",
    category: "bangles",
    price: 3499,
    originalPrice: 4499,
    rating: 5.0,
    reviewsCount: 89,
    badge: "Bridal & Festive",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591475150-a931441b8c2c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Twin Kada bangles featuring screw-hinge lockets and ornate facet filigree work. Handcrafted to accompany lehengas, sarees, or cocktail gowns.",
    specs: {
      finish: "Micro-Casted 22K Finish Tone",
      baseMaterial: "Jewellery Grade Copper-Brass Alloy",
      gemstone: "Polki Cut Faceted Zircons",
      size: "Sizes 2.4, 2.6, 2.8 available",
      hypoallergenic: "Skin Friendly Lining",
      waterResistance: "Special Anti-Moisture Dip"
    }
  },
  {
    id: "prod-11",
    name: "Saisha Luxury Royal Gift Hamper",
    category: "gift-sets",
    price: 4499,
    originalPrice: 5999,
    rating: 5.0,
    reviewsCount: 220,
    badge: "Gift Box Included",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The quintessential gifting experience. Contains our best-selling Saisha Charm Bracelet, Aurora Studs, and Oval Pendant presented in an espresso-velvet gold-embossed keepsake box.",
    specs: {
      finish: "Matched 18K Gold Signature Set",
      baseMaterial: "Hypoallergenic Mixed Metals",
      gemstone: "Full Matching Faceted Suite",
      size: "Complete 3-Piece Coordinated Box",
      hypoallergenic: "Gentle on Sensitive Skin",
      waterResistance: "Includes Microfiber Care Cloth & Certificate"
    }
  },
  {
    id: "prod-12",
    name: "Petite Golden Clover Bracelet",
    category: "bracelets",
    price: 1149,
    originalPrice: 1599,
    rating: 4.8,
    reviewsCount: 74,
    badge: "New",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591475150-a931441b8c2c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Four-leaf clover motif symbolizing good fortune, outlined in polished gold with mother-of-pearl style faceted white inlay.",
    specs: {
      finish: "18K Gold PVD Coating",
      baseMaterial: "Stainless Steel 316L",
      gemstone: "Natural Sheen Inlay Motif",
      size: "Adjustable 16cm + 4cm Extension",
      hypoallergenic: "Safe for 24/7 wear",
      waterResistance: "Waterproof & Anti-Tarnish"
    }
  }
];

export const TRUST_POINTS = [
  "PREMIUM QUALITY",
  "ANTI-TARNISH",
  "GIFT READY",
  "CUSTOM ORDERS",
  "PAN-INDIA DELIVERY"
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    icon: "Sparkles",
    title: "18K Long-Lasting Finish",
    desc: "Triple micron gold plating with an advanced anti-tarnish protective shield ensuring long-lasting radiant brilliance."
  },
  {
    id: 2,
    icon: "ShieldCheck",
    title: "Skin-Friendly Materials",
    desc: "100% hypoallergenic, nickel-free and lead-free alloys designed for sensitive skin and effortless daily wear."
  },
  {
    id: 3,
    icon: "Gift",
    title: "Signature Gift Packaging",
    desc: "Every order arrives in our embossed gold & espresso gift box with a soft velvet pouch and certificate."
  },
  {
    id: 4,
    icon: "Gem",
    title: "Custom Designs on Request",
    desc: "Want a bespoke length, gemstone color, or bridal pairing? Connect directly on WhatsApp with our jewelry artisans."
  }
];

export const OCCASIONS = [
  {
    id: "birthday",
    title: "Birthdays",
    tagline: "Celebrate another radiant year",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
    message: "Hi Saisha Jewelry! I'm looking for a birthday gift recommendations. Could you assist?"
  },
  {
    id: "anniversary",
    title: "Anniversary",
    tagline: "Golden milestones forever cherished",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
    message: "Hi Saisha Jewelry! Looking for an anniversary gift for someone special. What do you recommend?"
  },
  {
    id: "wedding",
    title: "Weddings & Festive",
    tagline: "Shine brightest on sacred days",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    message: "Hi Saisha Jewelry! I'm shopping for wedding and festive jewellery. Please share your catalog!"
  },
  {
    id: "self-love",
    title: "Self-Love & Daily Chic",
    tagline: "Because you deserve to shine every day",
    image: "https://images.unsplash.com/photo-1611591475150-a931441b8c2c?auto=format&fit=crop&w=600&q=80",
    message: "Hi Saisha Jewelry! Looking for everyday chic pieces for myself. What are your bestsellers?"
  }
];

export const LOOKBOOK_ITEMS = [
  {
    id: "look-1",
    title: "Radiance Stacking Set",
    subtitle: "Heritage Cuff paired with Saisha Charm Bracelet",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    span: "col-span-1 md:col-span-2 row-span-2",
    inquiry: "Hi Saisha Jewelry! I love the Radiance Stacking Set lookbook styling. How can I purchase this look?"
  },
  {
    id: "look-2",
    title: "Evening Glamour",
    subtitle: "Golden Facet Drops & Solitaire Ring",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80",
    span: "col-span-1 md:col-span-1 row-span-1",
    inquiry: "Hi Saisha Jewelry! I'd like details on the Evening Glamour lookbook pieces."
  },
  {
    id: "look-3",
    title: "The Minimalist Collar",
    subtitle: "Oval Brilliance Pendant in 18K Gold",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    span: "col-span-1 md:col-span-1 row-span-1",
    inquiry: "Hi Saisha Jewelry! Could you share pricing and delivery for the Oval Brilliance necklace look?"
  },
  {
    id: "look-4",
    title: "Festive Royalty",
    subtitle: "Empress Kada Bangles in rich gold lustre",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    span: "col-span-1 md:col-span-1 row-span-1",
    inquiry: "Hi Saisha Jewelry! Inquiring about the Festive Royalty bangles."
  },
  {
    id: "look-5",
    title: "Modern Wrist Duo",
    subtitle: "Herringbone Chain & Petite Clover",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80",
    span: "col-span-1 md:col-span-1 row-span-1",
    inquiry: "Hi Saisha Jewelry! I'm interested in the Modern Wrist Duo set shown on Instagram."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ananya Deshmukh",
    city: "Mumbai",
    rating: 5,
    title: "Absolutely stunning quality & shine!",
    comment: "I ordered the Saisha Gem Charm Bracelet for my sister's birthday and was blown away by the packaging and facet sparkle. It has not tarnished at all even after 3 months of daily wear. WhatsApp ordering was so swift!",
    verified: true,
    product: "Saisha Gem Charm Bracelet"
  },
  {
    id: 2,
    name: "Pooja Singhania",
    city: "Delhi NCR",
    rating: 5,
    title: "Looks just like real heirloom gold!",
    comment: "The finish of the Golden Facet Drop Earrings is impeccable. They have a rich 18K tone without being overly flashy. Super lightweight on the ears. Will definitely be ordering the necklace next.",
    verified: true,
    product: "Golden Facet Drop Earrings"
  },
  {
    id: 3,
    name: "Rhea Sundaram",
    city: "Bangalore",
    rating: 5,
    title: "Best gifting service in India",
    comment: "Needed a personalized gift for my best friend on tight notice. The Saisha team on WhatsApp responded in 2 minutes, helped me customize a message card, and delivered the luxury hamper in 2 days. 10/10!",
    verified: true,
    product: "Saisha Luxury Royal Gift Hamper"
  },
  {
    id: 4,
    name: "Tanvi Kapoor",
    city: "Jaipur",
    rating: 5,
    title: "Hypoallergenic and so radiant",
    comment: "I have sensitive skin and usually get rashes from artificial jewellery. Saisha's anti-tarnish stainless steel pieces are a godsend! Wore the cuff all day during a wedding with zero irritation.",
    verified: true,
    product: "Heritage Gold Cuff"
  },
  {
    id: 5,
    name: "Dr. Meera Nambiar",
    city: "Kochi",
    rating: 5,
    title: "Exceptional craftsmanship",
    comment: "The Oval Brilliance pendant catches the light like a genuine mined gem. The monogram detail and gold chain are so finely crafted. Extremely proud to wear an Indian luxury label of this calibre.",
    verified: true,
    product: "Oval Brilliance Pendant"
  }
];

export const FAQS = [
  {
    q: "Is Saisha Jewelry anti-tarnish and water resistant?",
    a: "Yes! Our jewellery is crafted with premium surgical grade stainless steel or brass cores, finished with triple micron 18K gold vermeil and sealed with an anti-tarnish oxidation barrier. They withstand sweat, perfume, and daily water exposure without fading or turning green."
  },
  {
    q: "How do I order or enquire?",
    a: "We offer a direct, personalized VIP shopping experience via WhatsApp (+91 70399 66335). Simply click 'Enquire on WhatsApp' on any piece, and our jewellery consultant will verify availability, share live product videos, and process your order securely."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Cash on Delivery (COD) across serviceable pin codes in India."
  },
  {
    q: "How long does Pan-India delivery take?",
    a: "Orders are dispatched within 24 hours in our luxury gift packaging. Standard delivery takes 2 to 4 business days for metro cities (Mumbai, Delhi, Bangalore, etc.) and 3 to 6 days for other regions."
  },
  {
    q: "Can I request custom lengths or custom designs?",
    a: "Absolutely! We cater to custom chain extensions, bespoke ring sizes, and curated bridal/festive sets. Just message us on WhatsApp with your requirements."
  }
];
