import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="bg-salon-black text-white py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-salon-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-salon-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Info & Hours */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="mb-12">
              <span className="text-salon-gold uppercase tracking-widest text-sm font-medium flex items-center gap-4 mb-4">
                <span className="w-8 h-px bg-salon-gold"></span>
                Kontakt
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                Naročite se
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Ste pripravljeni na spremembo? Pokličite me in si rezervirajte svoj termin. Veselim se vašega obiska v salonu LoVve.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-salon-gold transition-colors duration-300">
                  <MapPin className="text-salon-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2 text-white/90">Lokacija</h4>
                  <p className="text-gray-400 leading-relaxed">Veliki Brebrovnik 12<br />2275 Miklavž pri Ormožu</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-salon-gold transition-colors duration-300">
                  <Phone className="text-salon-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2 text-white/90">Kontakt</h4>
                  <a href="tel:040704995" className="text-gray-400 hover:text-salon-gold transition-colors text-lg">040 704 995</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-salon-gold transition-colors duration-300">
                  <Clock className="text-salon-gold" size={20} />
                </div>
                <div className="w-full max-w-sm">
                  <h4 className="font-serif text-xl mb-4 text-white/90">Delovni čas</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-400 border-b border-white/10 pb-3">
                      <span>Ponedeljek - Petek</span>
                      <span className="text-white/80">09:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between text-gray-400 border-b border-white/10 pb-3">
                      <span>Sobota</span>
                      <span className="text-white/80">09:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between text-gray-400 pt-1">
                      <span>Nedelja</span>
                      <span className="text-salon-gold">Zaprto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 h-[500px] lg:h-[700px] w-full relative"
          >
            <div className="absolute inset-0 bg-salon-gold/20 translate-x-4 translate-y-4 -z-10"></div>
            <div className="w-full h-full bg-gray-800 relative grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.673895475264!2d16.1833!3d46.4500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDI3JzAwLjAiTiAxNsKwMTEnMDAuMCJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Salon Location"
                className="opacity-80 hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
