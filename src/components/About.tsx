import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-salon-beige">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2000&auto=format&fit=crop" 
                alt="Valentina Zalar" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute top-8 left-8 w-full h-full border border-salon-gold/50 z-0 hidden lg:block"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-salon-gold uppercase tracking-widest text-sm font-medium">O meni</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8 leading-tight">
              Sem Valentina, <br/><span className="italic text-gray-600">vaša osebna stilistka</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Dobrodošli v mojem salonu. Sem Valentina Žalar, ustanoviteljica in frizerka v salonu LoVve. Moja strast do las in lepote vodi vse, kar počnem. Verjamem, da pričeska ni le videz, ampak odraz vaše osebnosti.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Samostojno delo mi omogoča, da se vam popolnoma posvetim. Ko sedite na mojem stolu, sva le midva, osredotočena na ustvarjanje videza, s katerim se boste počutili samozavestno in sijoče. Združujem leta izkušenj z osebnim pristopom, da zagotovim sproščujočo in preobrazbeno izkušnjo ob vsakem obisku.
            </p>
            
            <div className="flex gap-8 mt-12">
              <div>
                <span className="block text-4xl font-serif mb-2">100%</span>
                <span className="text-sm uppercase tracking-wider text-gray-500">Osebna obravnava</span>
              </div>
              <div>
                <span className="block text-4xl font-serif mb-2">Strast</span>
                <span className="text-sm uppercase tracking-wider text-gray-500">Do dela</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
