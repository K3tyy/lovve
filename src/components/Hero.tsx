import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
          alt="Elegant hair salon model"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] mb-4"
        >
          LoVve frizerske storitve
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight"
        >
          Moja umetnost. <br />
          <span className="italic font-light">Vaša lepota.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-salon-black min-w-[200px] hover:bg-salon-gold hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
          >
            Naročite se
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-white text-white min-w-[200px] hover:bg-white hover:text-salon-black transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
          >
            Storitve
          </a>
        </motion.div>
      </div>
    </section>
  );
}
