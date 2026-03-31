import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Clock, Wine, UtensilsCrossed, Music } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const RESERVATION_LINK = "https://www.opentable.com/booking/restref/availability?lang=en-US&correlationId=c059ea79-2aa4-4c48-92aa-8e29b7d1ff17&restRef=1389850&otSource=Restaurant%20website";

export default function App() {
  return (
    <div className="min-h-screen bg-flyerCream text-flyerPurple font-sans selection:bg-flyerRed selection:text-flyerCream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper-2.png")' }}></div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-flyerCream/90 backdrop-blur-md border-b border-flyerPurple/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src="/RBBB%204C%20Logo.png" alt="Rebellion Beachside Bar & Bistro" className="h-12 md:h-16 w-auto object-contain drop-shadow-sm" />
          </div>
          <a
            href={RESERVATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-flyerRed hover:bg-flyerDarkRed text-flyerCream px-6 py-3 border-2 border-flyerPurple rounded-sm font-bold transition-all hover:scale-105 tracking-wide text-sm uppercase shadow-[4px_4px_0px_#4c2d43]"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservations</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 lg:pt-56 lg:pb-32 flex flex-col justify-center min-h-[90vh] overflow-hidden">
        
        {/* Sophisticated Editorial Background (Aurora + Grid) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle architectural dot grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #4c2d43 1px, transparent 0)', backgroundSize: '48px 48px' }} />
          
          {/* Elegant, slow-moving blurred orbs (Aurora effect) */}
          <motion.div 
             animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
             transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
             className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-flyerTeal/20 blur-[160px] rounded-full" 
          />
          <motion.div 
             animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
             transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
             className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-flyerRed/10 blur-[160px] rounded-full" 
          />
          <motion.div 
             animate={{ x: [0, 40, 0], y: [0, 60, 0], scale: [1, 0.95, 1] }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute -bottom-[20%] left-[30%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-flyerPurple/10 blur-[160px] rounded-full" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-5xl mx-auto flex flex-col items-center"
          >
            <motion.p variants={fadeIn} className="text-flyerRed text-xl font-caveat font-bold mb-4 tracking-wider">
              Cocoa Beach, FL
            </motion.p>
            
            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl lg:text-9xl font-amatic text-flyerPurple mb-8 leading-[0.9] tracking-widest drop-shadow-sm">
              Rebel against <br />
              <span className="text-flyerTeal">the ordinary.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-flyerPurple/90 font-caveat mb-12 max-w-2xl text-center font-bold">
              Big wines. Big plates. An experience that would make Napoleon Bonaparte jealous.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-4">
              <a
                href={RESERVATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 bg-flyerPurple text-flyerCream px-10 py-4 font-bold text-sm tracking-widest uppercase transition-all shadow-[6px_6px_0px_#6baabf] hover:bg-flyerDarkRed hover:text-flyerCream hover:translate-y-1 hover:shadow-none"
              >
                Book a Table
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#menu"
                className="flex items-center gap-3 border-2 border-flyerPurple text-flyerPurple px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-flyerPurple/5 transition-colors shadow-[6px_6px_0px_#ad2337] hover:translate-y-1 hover:shadow-none bg-flyerCream"
              >
                The Happy Meal
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-dashed border-flyerPurple text-flyerPurple font-bold tracking-widest uppercase bg-flyerCream shadow-sm mb-12">
              <Clock className="w-5 h-5 text-flyerRed" />
              Monday - Friday • 3:30 PM - 6:30 PM
            </div>
            
            {/* The Reble's Hours STANDOUT BOX */}
            <div className="w-full max-w-lg mx-auto bg-flyerRed text-flyerCream p-6 md:p-8 mt-2 border-4 border-flyerPurple shadow-[8px_8px_0px_#4c2d43] transform rotate-1 mb-16 hover:-rotate-1 transition-transform cursor-pointer">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Music className="w-6 h-6 md:w-8 md:h-8 animate-bounce text-flyerCream" />
                <h3 className="text-5xl md:text-6xl font-amatic font-bold tracking-widest drop-shadow-md text-flyerCream">Reble's Hours</h3>
                <Music className="w-6 h-6 md:w-8 md:h-8 animate-bounce text-flyerCream" />
              </div>
              <p className="font-sans font-bold tracking-widest text-lg md:text-xl uppercase drop-shadow-sm text-flyerCream">Saturday • 10:00 PM - 12:00 AM</p>
              <p className="font-caveat font-bold text-xl md:text-2xl mt-3 text-flyerCream drop-shadow-sm">Late night beats, bites, and drinks with a DJ.</p>
            </div>

            <h2 className="text-6xl md:text-7xl font-amatic mb-4 text-flyerPurple tracking-widest font-bold">
              The Cocoa Beach<br/>Happy Meal
            </h2>
            <p className="text-flyerTeal text-xl md:text-2xl max-w-2xl mx-auto font-caveat font-bold">
              Half off all wells, draft beer, and wine by the glass.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
            
            {/* Box 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 border-2 border-flyerPurple shadow-[6px_6px_0px_#4c2d43] relative group transition-all"
            >
              <div className="absolute -top-3 left-10 w-12 h-6 bg-flyerCream border border-black/20 shadow-md rotate-3"></div>

              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-14 h-14 bg-flyerTeal/20 text-flyerTeal flex items-center justify-center rounded-full border border-flyerTeal/30">
                  <UtensilsCrossed className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-4xl font-amatic text-flyerPurple font-bold tracking-wider">Includes your choice of:</h3>
                </div>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="border-b-2 border-dashed border-flyerPurple/20 pb-6">
                  <h4 className="text-xl font-caveat font-bold text-flyerPurple tracking-wider mb-2">1. Classic Martini</h4>
                  <p className="text-flyerTeal font-bold text-lg font-sans">Ford's Gin <span className="text-flyerPurple/60 mx-3 italic font-serif">or</span> Luksusowa Vodka</p>
                </div>

                <div className="border-b-2 border-dashed border-flyerPurple/20 pb-6">
                  <h4 className="text-xl font-caveat font-bold text-flyerPurple tracking-wider mb-4">2. Select Your Dishes</h4>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-flyerPurple font-bold font-sans text-md">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-flyerRed"></span>Smashburger</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-flyerRed"></span>Pomme Frites</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-flyerRed"></span>Caesar Salad</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-flyerRed"></span>Mussels</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-flyerRed"></span>Hamachi Tartare</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-flyerRed"></span>Meatball</li>
                  </ul>
                </div>

                <div className="pt-2 flex items-end justify-between text-3xl text-flyerRed font-amatic font-bold">
                  <div className="flex flex-col gap-1 items-center">
                    <span className="text-xs font-sans font-bold text-flyerPurple tracking-[0.2em] uppercase">Pick 2</span>
                    $15
                  </div>
                  <div className="w-px h-10 bg-flyerPurple/30"></div>
                  <div className="flex flex-col gap-1 items-center">
                    <span className="text-xs font-sans font-bold text-flyerPurple tracking-[0.2em] uppercase">Pick 3</span>
                    $22
                  </div>
                  <div className="w-px h-10 bg-flyerPurple/30"></div>
                  <div className="flex flex-col gap-1 items-center text-flyerRed">
                    <span className="text-xs font-sans font-bold text-flyerRed tracking-[0.2em] uppercase">Pick 4</span>
                    $30
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 2 - Signature Cocktails */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-12 border-2 border-flyerPurple shadow-[6px_6px_0px_#4c2d43] relative group transition-all"
            >
              <div className="absolute -top-3 right-10 w-12 h-6 bg-flyerCream border border-black/20 shadow-md -rotate-3"></div>

              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-14 h-14 bg-flyerTeal/20 text-flyerTeal flex items-center justify-center rounded-full border border-flyerTeal/30">
                  <Wine className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-4xl font-amatic text-flyerPurple font-bold tracking-wider">Signature Daily</h3>
                  <p className="text-flyerPurple/80 text-xs tracking-wider uppercase mt-1 font-bold">Featured Cocktail Specials</p>
                </div>
              </div>

              <div className="space-y-3 relative z-10">
                {[
                  { day: 'Monday', drink: 'The Guillotine' },
                  { day: 'Tuesday', drink: 'Tennis Court Oath' },
                  { day: 'Wednesday', drink: 'Versailles Garden' },
                  { day: 'Thursday', drink: 'Bastille Blanc' },
                  { day: 'Friday', drink: 'King Louis' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-baseline py-3 border-b-2 border-dashed border-flyerPurple/20">
                    <span className="text-flyerRed font-bold font-sans tracking-widest uppercase text-xs w-1/3">{item.day}</span>
                    <span className="text-2xl md:text-3xl font-amatic font-bold text-flyerTeal tracking-wider">{item.drink}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section className="py-24 px-6 md:py-32 relative bg-white border-y-2 border-flyerPurple">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-amatic mb-4 text-flyerPurple font-bold tracking-widest">Taste the Rebellion</h2>
            <p className="text-flyerRed font-bold text-xl max-w-2xl mx-auto font-caveat">Actual favorites from our kitchen.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 w-full mt-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group flex flex-col bg-flyerCream border-4 border-flyerPurple shadow-[8px_8px_0px_#4c2d43] transform hover:-rotate-2 transition-all"
            >
              <div className="relative aspect-square overflow-hidden border-b-4 border-flyerPurple">
                <img src="/rebellion-beachside-bar-and-bistro_burger-meta-ad-title_260312_d4741d.png" alt="Smashburger" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-4xl md:text-5xl font-amatic font-bold text-flyerPurple tracking-widest leading-none mb-2">The Smashburger</h3>
                <p className="text-flyerRed font-sans text-xs uppercase tracking-widest font-bold">Juicy, crispy edges.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group flex flex-col bg-flyerCream border-4 border-flyerPurple shadow-[8px_8px_0px_#4c2d43] transform hover:rotate-2 transition-all mt-4 md:mt-0"
            >
              <div className="relative aspect-square overflow-hidden border-b-4 border-flyerPurple">
                <img src="/rebellion-beachside-bar-and-bistro_enhanced-clam-photography_260312_5aae4c.png" alt="Mussels and Pomme Frites" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-4xl md:text-5xl font-amatic font-bold text-flyerPurple tracking-widest leading-none mb-2">Mussels & Frites</h3>
                <p className="text-flyerRed font-sans text-xs uppercase tracking-widest font-bold">Steaming hot mussels.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group flex flex-col bg-flyerCream border-4 border-flyerPurple shadow-[8px_8px_0px_#4c2d43] transform hover:-rotate-1 transition-all mt-4 md:mt-0"
            >
              <div className="relative aspect-square overflow-hidden border-b-4 border-flyerPurple">
                <img src="/rebellion-beachside-bar-and-bistro_meta-ad-food-photography_260312_d5efdb.png" alt="Chef's Special" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-4xl md:text-5xl font-amatic font-bold text-flyerPurple tracking-widest leading-none mb-2">Caesar Salad</h3>
                <p className="text-flyerRed font-sans text-xs uppercase tracking-widest font-bold">Crisp, fresh, and classic.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative bg-[#f6ead9] pt-24 pb-20 px-6 overflow-hidden flex flex-col items-center text-center mt-0 border-t-8 border-flyerRed border-dashed">
        <div className="relative z-10 max-w-4xl">
          <a
            href={RESERVATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-flyerRed text-flyerCream px-12 py-5 border-4 border-flyerPurple font-bold tracking-widest text-sm uppercase transition-all hover:bg-white hover:text-flyerRed shadow-[8px_8px_0px_#4c2d43] hover:translate-y-1 hover:shadow-none"
          >
            <Calendar className="w-5 h-5" />
            Sign the Oath
          </a>
        </div>
      </footer>
    </div>
  );
}
