import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Search, 
  Star,
  Navigation,
  ExternalLink,
  Menu as MenuIcon,
  X,
  ArrowRight
} from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from './data/menu';

// Constants
const DOOR_DASH_LINK = "https://www.doordash.com/store/speedway-market-4760-s-spring-ave-saint-louis-38975183/89360148/";
const PHONE_NUMBER = "(314) 352-5752";
const ADDRESS = "4760 S Spring Ave, St. Louis, MO 63116";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === "Popular" ? item.popular : item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-brand-black font-sans selection:bg-brand-red selection:text-white">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-gray-100">
              <img src="/assets/menu/speedway_logo_square_safe_1024.png" alt="Speedway Market" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tighter uppercase italic leading-none text-brand-black">Speedway</h1>
              <p className="text-[10px] text-brand-red font-bold tracking-widest uppercase opacity-80">Market & Takeout</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-400">
            <a href="#menu" className="hover:text-brand-red transition-colors">Menu</a>
            <a href="#location" className="hover:text-brand-red transition-colors">Location</a>
            <a href="#hours" className="hover:text-brand-red transition-colors">Hours</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={DOOR_DASH_LINK} 
              target="_blank" 
              className="bg-brand-red text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-brand-red/20 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order Now</span>
            </a>
            <button 
              className="md:hidden p-2 text-brand-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-8 flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-6 right-6 p-2 text-brand-black" onClick={() => setIsMenuOpen(false)}><X /></button>
            <a href="#menu" className="text-4xl font-black italic uppercase text-brand-black" onClick={() => setIsMenuOpen(false)}>Menu</a>
            <a href="#location" className="text-4xl font-black italic uppercase text-brand-black" onClick={() => setIsMenuOpen(false)}>Location</a>
            <a href="#hours" className="text-4xl font-black italic uppercase text-brand-black" onClick={() => setIsMenuOpen(false)}>Hours</a>
            <a href={`tel:${PHONE_NUMBER}`} className="text-brand-red font-bold text-xl">{PHONE_NUMBER}</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-brand-light">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 -skew-x-12 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Open Now • Kitchen until 7:55 PM</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8 text-brand-black"
          >
            Hot. Fresh. <br />
            <span className="text-brand-red drop-shadow-sm">Speedway.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium italic"
          >
            St. Louis’ favorite neighborhood spot for 12" Pizzas, Whole Wings, and the best Philly Cheesesteak in the 63116.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#menu" className="w-full sm:w-auto btn-primary group">
              Explore Menu
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={DOOR_DASH_LINK} target="_blank" className="w-full sm:w-auto btn-secondary">
              Order DoorDash
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
          </div>
        </div>
      </section>

      {/* --- Popular Horizontal Scroll --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black italic uppercase tracking-tight text-brand-black">Locals Love <span className="text-brand-red">These.</span></h2>
              <div className="w-16 h-1.5 bg-brand-red mt-2"></div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-gray-300 text-[10px] font-black uppercase tracking-widest">
              Swipe to explore <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 snap-x no-scrollbar">
            {MENU_ITEMS.filter(item => item.popular).map((item) => (
              <div key={item.id} className="min-w-[300px] md:min-w-[380px] snap-center glass-card group flex flex-col border-2 border-transparent hover:border-brand-red/10">
                <div className="h-56 bg-gray-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="text-brand-red/5 font-black text-7xl italic">
                      {item.name[0]}
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-black italic uppercase tracking-tight text-2xl text-brand-black">{item.name}</h3>
                  <span className="text-brand-red font-black text-xl">${item.price}</span>
                </div>
                <p className="text-sm text-gray-400 mb-8 line-clamp-2 italic flex-grow leading-relaxed">{item.description}</p>
                <a href={DOOR_DASH_LINK} target="_blank" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-brand-red hover:translate-x-1 transition-transform">
                  Add to order <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Main Menu Explorer --- */}
      <section className="py-24 px-6 bg-brand-light" id="menu">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4 text-brand-black">Full Menu</h2>
            <p className="text-gray-400 font-medium italic">Everything we make is made with speed and soul.</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300" />
            <input
              type="text"
              placeholder="Search for Wings, Pizza, Tacos..."
              className="w-full bg-white border border-gray-200 rounded-2xl py-6 pl-16 pr-6 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 transition-all italic text-lg shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className="relative mb-12 pt-2">
            <div className="overflow-x-auto category-scroll pb-4">
              <div className="flex gap-3 justify-start md:justify-center px-4 min-w-max md:min-w-0">
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                      activeCategory === cat
                        ? "bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20"
                        : "bg-white border-gray-100 text-gray-400 hover:border-brand-red hover:text-brand-red"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="menu-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={item.id}
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-brand-red/20 transition-all group flex flex-col"
                >
                  <div className="h-64 bg-gray-50 flex items-center justify-center overflow-hidden relative">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="text-brand-red/5 font-black text-7xl italic">
                        {item.name[0]}
                      </div>
                    )}
                    {item.popular && (
                      <div className="absolute top-4 right-4 bg-brand-yellow text-brand-black px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3 fill-brand-black" /> Popular
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="font-black italic uppercase tracking-tight text-lg leading-tight text-brand-black flex-1">{item.name}</h4>
                      <div className="text-brand-red font-black text-xl italic whitespace-nowrap">${item.price.toFixed(2)}</div>
                    </div>
                    {item.description && (
                      <p className="text-sm text-gray-400 italic mb-6 flex-grow leading-relaxed">{item.description}</p>
                    )}
                    <a
                      href={DOOR_DASH_LINK}
                      target="_blank"
                      className="w-full bg-brand-red text-white py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest hover:bg-brand-red-dark transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to order
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- Location & Hours --- */}
      <section className="py-32 px-6 bg-white border-t border-gray-100" id="location">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-black italic uppercase mb-10 text-brand-black">Visit <span className="text-brand-red">Us.</span></h2>
            <div className="space-y-10">
              <div className="flex items-start gap-8">
                <div className="w-14 h-14 bg-brand-red/5 rounded-2xl flex items-center justify-center text-brand-red shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray-300 text-[11px] font-black uppercase tracking-widest mb-1">Address</p>
                  <p className="text-2xl font-bold italic text-brand-black">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="w-14 h-14 bg-brand-red/5 rounded-2xl flex items-center justify-center text-brand-red shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray-300 text-[11px] font-black uppercase tracking-widest mb-1">Phone</p>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-2xl font-bold italic text-brand-black hover:text-brand-red transition-colors">{PHONE_NUMBER}</a>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="w-14 h-14 bg-brand-red/5 rounded-2xl flex items-center justify-center text-brand-red shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div id="hours">
                  <p className="text-gray-300 text-[11px] font-black uppercase tracking-widest mb-2">Kitchen Hours</p>
                  <div className="space-y-1">
                    <p className="text-lg font-bold italic text-brand-black/80">Sun: 9:00 AM – 8:00 PM</p>
                    <p className="text-lg font-bold italic text-brand-black/80">Mon – Thu: 9:00 AM – 9:00 PM</p>
                    <p className="text-lg font-bold italic text-brand-black/80">Fri – Sat: 9:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square bg-brand-light rounded-[3rem] overflow-hidden border border-gray-100 shadow-inner">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <Navigation className="w-16 h-16 text-brand-red mb-6 animate-bounce" />
              <h3 className="text-3xl font-black italic uppercase mb-4 tracking-tight text-brand-black">Open in Maps</h3>
              <p className="text-gray-400 mb-10 italic text-lg">Get turn-by-turn directions to Speedway Market.</p>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`} 
                target="_blank"
                className="btn-primary scale-110"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Google Reviews Section --- */}
      <section className="py-32 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5 text-brand-yellow">
                  <Star className="w-5 h-5 fill-brand-yellow" />
                  <Star className="w-5 h-5 fill-brand-yellow" />
                  <Star className="w-5 h-5 fill-brand-yellow" />
                  <Star className="w-5 h-5 fill-brand-yellow" />
                  <Star className="w-5 h-5 fill-brand-yellow" />
                </div>
                <span className="font-black italic text-brand-black">4.8 / 5.0</span>
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter text-brand-black leading-none">
                Local <span className="text-brand-red">Love.</span>
              </h2>
              <div className="w-16 h-1.5 bg-brand-red mt-4"></div>
            </div>
            <p className="text-gray-400 italic font-medium max-w-sm text-left md:text-right">
              Join the 500+ locals who make Speedway Market their daily go-to for fresh-cut fries and whole wings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "John D.", 
                text: "Best whole wings in St. Louis, hands down. The fries are fresh-cut and they don't skimp on the portions. A neighborhood gem!", 
                date: "2 weeks ago" 
              },
              { 
                name: "Sarah M.", 
                text: "The Philly Cheesesteak is elite. Fast service, friendly staff, and the food is always piping hot. My kids love the 12\" cheese pizza.", 
                date: "1 month ago" 
              },
              { 
                name: "Mike T.", 
                text: "If you're in the 63116, this is the spot. I've tried the entire menu and you can't go wrong. The combination plate is the best value in town.", 
                date: "3 months ago" 
              }
            ].map((review, i) => (
              <div key={i} className="bg-brand-light p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-brand-red border border-gray-100 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    {review.name[0]}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-300 italic">{review.date}</div>
                </div>
                <div className="flex items-center gap-0.5 text-brand-yellow mb-4">
                  <Star className="w-3 h-3 fill-brand-yellow" />
                  <Star className="w-3 h-3 fill-brand-yellow" />
                  <Star className="w-3 h-3 fill-brand-yellow" />
                  <Star className="w-3 h-3 fill-brand-yellow" />
                  <Star className="w-3 h-3 fill-brand-yellow" />
                </div>
                <p className="text-gray-500 italic leading-relaxed mb-6">"{review.text}"</p>
                <div className="flex items-center gap-2">
                  <span className="font-black italic uppercase text-brand-black text-xs">{review.name}</span>
                  <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-red bg-brand-red/5 px-2 py-0.5 rounded-full">Verified Local</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://share.google/GUhZh9h5XwuOzzV8R" 
              target="_blank" 
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand-red transition-colors"
            >
              View all 500+ Google Reviews <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-32 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black italic uppercase tracking-tight mb-4 text-brand-black">Common <span className="text-brand-red">Questions.</span></h2>
            <div className="w-16 h-1.5 bg-brand-red mx-auto"></div>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long do orders usually take?", a: "Most orders are ready for pickup in 15–25 minutes. During peak hours (Friday/Saturday night), it may take up to 35 minutes." },
              { q: "Do you offer delivery?", a: "Yes! We partner with DoorDash for all local deliveries. Click the 'Order Now' button to start your delivery order." },
              { q: "What's the 'Combination Plate'?", a: "Our most popular deal! You pick any 2 main items (like 2 wings and a taco) and we serve it with a mountain of our fresh-cut fries." },
              { q: "Can I call in an order?", a: "Absolutely. Call us at (314) 352-5752 and we'll have it ready when you arrive." },
              { q: "Do you offer catering?", a: "Yes, we handle large party wing orders and pizza bundles for local events. Please call 24 hours in advance for large orders." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-3xl p-8 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <summary className="list-none flex justify-between items-center font-black italic uppercase tracking-wide text-lg text-brand-black">
                  {faq.q}
                  <ChevronRight className="w-6 h-6 text-brand-red group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-6 text-gray-400 italic text-lg leading-relaxed border-t border-gray-50 pt-6">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-gray-100">
                <img src="/assets/menu/speedway_logo_square_safe_1024.png" alt="Speedway Market" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-lg font-black tracking-tighter uppercase italic leading-none text-brand-black">Speedway Market</h1>
            </div>
            <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest italic">© 2026 • 4wardmotion Site Design</p>
          </div>

          <div className="flex gap-10 text-[11px] font-black uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-brand-red transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-red transition-colors">Accessibility</a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
             <div className="flex items-center gap-1.5 text-brand-yellow">
                <Star className="w-5 h-5 fill-brand-yellow" />
                <Star className="w-5 h-5 fill-brand-yellow" />
                <Star className="w-5 h-5 fill-brand-yellow" />
                <Star className="w-5 h-5 fill-brand-yellow" />
                <Star className="w-5 h-5 fill-brand-yellow" />
             </div>
             <span className="text-[11px] font-black uppercase tracking-widest text-brand-black">4.8 Stars • 500+ Reviews</span>
          </div>
        </div>
      </footer>

    </div>
  );
}