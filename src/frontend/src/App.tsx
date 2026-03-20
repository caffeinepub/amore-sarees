import {
  ChevronRight,
  Eye,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

function whatsappOrderLink(productName: string) {
  return `${WHATSAPP_BASE}?text=Hi%2C%20I%20want%20to%20order%20${encodeURIComponent(productName)}`;
}

const NAV_LINKS = [
  { label: "Collections", href: "#products" },
  { label: "Silk Sarees", href: "#categories" },
  { label: "Cotton", href: "#categories" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: "₹4,999",
    image: "/assets/generated/saree-silk.dim_400x500.jpg",
  },
  {
    id: 2,
    name: "Pure Cotton Saree",
    price: "₹1,899",
    image: "/assets/generated/saree-cotton.dim_400x500.jpg",
  },
  {
    id: 3,
    name: "Party Wear Saree",
    price: "₹3,499",
    image: "/assets/generated/saree-party.dim_400x500.jpg",
  },
  {
    id: 4,
    name: "Bridal Saree",
    price: "₹12,999",
    image: "/assets/generated/saree-bridal.dim_400x500.jpg",
  },
  {
    id: 5,
    name: "Chiffon Saree",
    price: "₹2,299",
    image: "/assets/generated/saree-chiffon.dim_400x500.jpg",
  },
  {
    id: 6,
    name: "Kanjivaram Silk",
    price: "₹8,999",
    image: "/assets/generated/saree-kanjivaram.dim_400x500.jpg",
  },
  {
    id: 7,
    name: "Georgette Saree",
    price: "₹2,799",
    image: "/assets/generated/saree-georgette.dim_400x500.jpg",
  },
  {
    id: 8,
    name: "Designer Saree",
    price: "₹5,499",
    image: "/assets/generated/saree-designer.dim_400x500.jpg",
  },
];

const CATEGORIES = [
  {
    name: "Silk Sarees",
    image: "/assets/generated/saree-silk.dim_400x500.jpg",
    href: "#products",
  },
  {
    name: "Cotton Sarees",
    image: "/assets/generated/saree-cotton.dim_400x500.jpg",
    href: "#products",
  },
  {
    name: "Party Wear",
    image: "/assets/generated/saree-party.dim_400x500.jpg",
    href: "#products",
  },
  {
    name: "Bridal Collection",
    image: "/assets/generated/saree-bridal.dim_400x500.jpg",
    href: "#products",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/assets/generated/saree-silk.dim_400x500.jpg",
    alt: "Banarasi Silk Saree",
  },
  {
    src: "/assets/generated/saree-cotton.dim_400x500.jpg",
    alt: "Cotton Saree",
  },
  {
    src: "/assets/generated/saree-party.dim_400x500.jpg",
    alt: "Party Wear Saree",
  },
  {
    src: "/assets/generated/saree-bridal.dim_400x500.jpg",
    alt: "Bridal Saree",
  },
  {
    src: "/assets/generated/saree-chiffon.dim_400x500.jpg",
    alt: "Chiffon Saree",
  },
  {
    src: "/assets/generated/saree-kanjivaram.dim_400x500.jpg",
    alt: "Kanjivaram Silk",
  },
  {
    src: "/assets/generated/saree-georgette.dim_400x500.jpg",
    alt: "Georgette Saree",
  },
  {
    src: "/assets/generated/saree-designer.dim_400x500.jpg",
    alt: "Designer Saree",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "I ordered a Banarasi silk saree from Amore and it was absolutely breathtaking. The fabric quality is exquisite and the zari work is intricate beyond words. Will definitely be a loyal customer!",
    stars: 5,
  },
  {
    name: "Meera Nair",
    location: "Kochi",
    text: "The Kanjivaram saree I purchased for my daughter's wedding was the highlight of the ceremony. Everyone kept asking where I got it. Amore Sarees truly understands traditional craftsmanship.",
    stars: 5,
  },
  {
    name: "Ananya Patel",
    location: "Ahmedabad",
    text: "Stunning collection and super easy ordering via WhatsApp! The saree arrived beautifully packaged. The chiffon saree fits perfectly and the colour is exactly as shown. Highly recommend!",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {count >= 1 && (
        <Star size={16} className="fill-brand-gold text-brand-gold" />
      )}
      {count >= 2 && (
        <Star size={16} className="fill-brand-gold text-brand-gold" />
      )}
      {count >= 3 && (
        <Star size={16} className="fill-brand-gold text-brand-gold" />
      )}
      {count >= 4 && (
        <Star size={16} className="fill-brand-gold text-brand-gold" />
      )}
      {count >= 5 && (
        <Star size={16} className="fill-brand-gold text-brand-gold" />
      )}
    </div>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label="WhatsApp"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PromoBar() {
  return (
    <div className="bg-brand-brown text-brand-cream text-center py-2 px-4 text-xs tracking-widest uppercase font-sans">
      Free shipping on orders above ₹999 &nbsp;·&nbsp; Handcrafted with love
      &nbsp;·&nbsp; Easy WhatsApp ordering
    </div>
  );
}

function Header({
  menuOpen,
  setMenuOpen,
}: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 bg-brand-cream-deep border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex flex-col leading-none"
            data-ocid="nav.link"
          >
            <span className="font-playfair text-2xl md:text-3xl font-bold text-brand-brown tracking-wider">
              AMORE
            </span>
            <span className="text-xs tracking-[0.3em] text-brand-gold font-sans uppercase">
              SAREES
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-sans text-brand-brown-mid hover:text-brand-gold transition-colors duration-200 tracking-wide uppercase"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-blush text-white text-xs px-4 py-2 rounded-full font-sans uppercase tracking-widest hover:bg-brand-gold transition-colors duration-200"
              data-ocid="nav.button"
            >
              <WhatsAppIcon size={14} /> Order Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden text-brand-brown p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brand-cream-deep border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-sans text-brand-brown hover:text-brand-gold transition-colors duration-200 tracking-wide uppercase py-1 border-b border-border"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-blush text-white text-xs px-4 py-3 rounded-full font-sans uppercase tracking-widest mt-2"
                data-ocid="nav.button"
              >
                <WhatsAppIcon size={14} /> Order on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/generated/saree-hero.dim_1200x700.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase font-sans mb-4">
            New Collection 2025
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Elegant Sarees
            <br />
            <span className="italic font-light">for Every</span>
            <br />
            Occasion
          </h1>
          <p className="text-white/80 text-base md:text-lg font-sans mb-10 leading-relaxed">
            Discover handcrafted sarees with timeless beauty —
            <br className="hidden md:block" />
            woven with tradition, worn with grace.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-brown px-8 py-3.5 rounded-full font-sans text-sm font-semibold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-lg"
              data-ocid="hero.primary_button"
            >
              Shop Now <ChevronRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-8 py-3.5 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-white/10 transition-colors duration-300"
              data-ocid="hero.secondary_button"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase font-sans mb-2">
            Browse
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-brown">
            Explore Categories
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.name}
              href={cat.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-lg aspect-[3/4] block"
              data-ocid={`categories.item.${i + 1}`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-end justify-center pb-6">
                <span className="font-playfair text-white text-center text-lg font-semibold leading-tight drop-shadow-lg">
                  {cat.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: { product: (typeof PRODUCTS)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
      className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 hover:-translate-y-1"
      data-ocid={`products.item.${index + 1}`}
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-playfair text-base font-semibold text-brand-brown mb-1">
          {product.name}
        </h3>
        <p className="text-brand-gold font-bold font-sans text-lg mb-3">
          {product.price}
        </p>
        <a
          href={whatsappOrderLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-brand-blush text-white text-xs py-2.5 px-4 rounded-full font-sans uppercase tracking-widest hover:bg-brand-gold transition-colors duration-200"
          data-ocid={`products.button.${index + 1}`}
        >
          <WhatsAppIcon size={14} /> Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase font-sans mb-2">
            Handpicked
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-brown">
            Featured Collections
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          data-ocid="products.list"
        >
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-cream-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold text-xs tracking-[0.3em] uppercase font-sans mb-2">
              Who we are
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-brown mb-6">
              Our Story
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mb-8" />
            <p className="text-brand-brown-mid font-sans leading-relaxed mb-5">
              Amore Sarees was born from a deep love for India's rich textile
              heritage. Founded by a family of weavers with generations of
              expertise, we bring you the finest handcrafted sarees that blend
              tradition with contemporary elegance.
            </p>
            <p className="text-brand-brown-mid font-sans leading-relaxed mb-5">
              Each saree in our collection is a labour of love — woven on
              traditional looms by skilled artisans who have perfected their
              craft over decades. We work directly with weavers across Varanasi,
              Kanchipuram, and Dharmavaram to bring you authentic,
              premium-quality sarees.
            </p>
            <p className="text-brand-brown-mid font-sans leading-relaxed mb-8">
              At Amore, we believe a saree is more than just a garment — it is
              an heirloom, a story, a celebration of femininity and grace. Our
              commitment is to make this timeless tradition accessible to every
              woman who loves beautiful things.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { value: "500+", label: "Saree Designs" },
                { value: "10K+", label: "Happy Customers" },
                { value: "15+", label: "Years of Craft" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair text-2xl font-bold text-brand-gold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-brand-brown-mid font-sans uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover aspect-[3/4]">
              <img
                src="/assets/generated/saree-bridal.dim_400x500.jpg"
                alt="Amore Sarees craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-card">
                <p className="font-playfair italic text-brand-brown text-sm">
                  "Woven with tradition, worn with grace"
                </p>
                <p className="text-brand-gold text-xs font-sans uppercase tracking-widest mt-1">
                  — Amore Sarees
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-gold/20 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-blush/20 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase font-sans mb-2">
            Visual
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-brown">
            Saree Gallery
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          data-ocid="gallery.list"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] shadow-xs cursor-pointer"
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Eye
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-brand-cream-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase font-sans mb-2">
            Customer Love
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-brown">
            Voices of Amore
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border relative"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="text-brand-gold text-5xl font-playfair leading-none mb-4 absolute top-4 right-6 opacity-20 select-none">
                &ldquo;
              </div>
              <StarRating count={t.stars} />
              <p className="text-brand-brown-mid font-sans text-sm leading-relaxed mt-4 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="w-9 h-9 rounded-full bg-brand-blush flex items-center justify-center text-white font-playfair font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-sans font-semibold text-brand-brown text-sm">
                    {t.name}
                  </p>
                  <p className="text-brand-brown-mid text-xs font-sans">
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase font-sans mb-2">
            Reach Us
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-brown">
            Connect With Us
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="font-playfair text-xl font-semibold text-brand-brown mb-4">
              Get in Touch
            </h3>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-blush/30 flex items-center justify-center shrink-0 mt-0.5">
                <Phone size={16} className="text-brand-blush" />
              </div>
              <div>
                <p className="text-xs text-brand-brown-mid font-sans uppercase tracking-wide mb-0.5">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-brown font-sans font-medium hover:text-brand-gold transition-colors"
                  data-ocid="contact.link"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-blush/30 flex items-center justify-center shrink-0 mt-0.5">
                <Instagram size={16} className="text-brand-blush" />
              </div>
              <div>
                <p className="text-xs text-brand-brown-mid font-sans uppercase tracking-wide mb-0.5">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/amoresarees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-brown font-sans font-medium hover:text-brand-gold transition-colors"
                  data-ocid="contact.link"
                >
                  @amoresarees
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-blush/30 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={16} className="text-brand-blush" />
              </div>
              <div>
                <p className="text-xs text-brand-brown-mid font-sans uppercase tracking-wide mb-0.5">
                  Address
                </p>
                <p className="text-brand-brown font-sans text-sm leading-relaxed">
                  12, Silk Weaver's Lane,
                  <br />
                  Varanasi, UP – 221001
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-playfair text-xl font-semibold text-brand-brown mb-6">
              Send a Message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  className="block text-xs font-sans uppercase tracking-wide text-brand-brown-mid mb-1.5"
                  htmlFor="contact-name"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Priya Sharma"
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm font-sans bg-card text-brand-brown placeholder:text-brand-brown-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 transition"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-sans uppercase tracking-wide text-brand-brown-mid mb-1.5"
                  htmlFor="contact-phone"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="+91 99999 00000"
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm font-sans bg-card text-brand-brown placeholder:text-brand-brown-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 transition"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-sans uppercase tracking-wide text-brand-brown-mid mb-1.5"
                  htmlFor="contact-message"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="I'd love to know more about your Bridal Collection..."
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm font-sans bg-card text-brand-brown placeholder:text-brand-brown-mid/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 transition resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-blush text-white py-3 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-brand-gold transition-colors duration-200"
                data-ocid="contact.submit_button"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Brand Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-brown rounded-2xl p-8 flex flex-col justify-between text-center shadow-card-hover"
          >
            <div>
              <p className="font-playfair text-3xl font-bold text-brand-gold tracking-wider">
                AMORE
              </p>
              <p className="text-xs tracking-[0.3em] text-white/60 font-sans uppercase mb-6">
                SAREES
              </p>
              <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6" />
              <p className="text-white/80 font-sans text-sm leading-relaxed italic">
                &ldquo;Every saree tells a story of craftsmanship, culture, and
                timeless elegance.&rdquo;
              </p>
            </div>
            <div className="mt-8">
              <p className="text-white/60 text-xs font-sans uppercase tracking-widest mb-4">
                Follow our journey
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com/amoresarees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold transition-colors"
                  data-ocid="contact.link"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold transition-colors"
                  data-ocid="contact.link"
                >
                  <WhatsAppIcon size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-cream-deep border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-playfair text-2xl font-bold text-brand-brown tracking-wider">
              AMORE
            </p>
            <p className="text-xs tracking-[0.3em] text-brand-gold font-sans uppercase mb-3">
              SAREES
            </p>
            <p className="text-sm text-brand-brown-mid font-sans leading-relaxed">
              Handcrafted sarees with timeless beauty, woven with love and
              tradition.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-brand-brown-mid mb-4">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-brand-brown hover:text-brand-gold transition-colors font-sans"
                  data-ocid="footer.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-brand-brown-mid mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/amoresarees"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-brand-brown hover:text-brand-gold transition-colors font-sans"
                data-ocid="footer.link"
              >
                <Instagram size={15} /> @amoresarees
              </a>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-brand-brown hover:text-brand-gold transition-colors font-sans"
                data-ocid="footer.link"
              >
                <WhatsAppIcon size={15} /> +91 98765 43210
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-brand-brown-mid font-sans">
            © {year} Amore Sarees. All rights reserved.
          </p>
          <p className="text-xs text-brand-brown-mid font-sans">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_BASE}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-400 transition-colors duration-200 whatsapp-pulse"
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp.button"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <PromoBar />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
