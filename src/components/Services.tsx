import React from 'react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Žensko striženje",
    description: "Osebno svetovanje, ki mu sledi natančno striženje in profesionalno oblikovanje, prilagojeno vaši obliki obraza in življenjskemu slogu."
  },
  {
    title: "Moško striženje",
    description: "Klasično ali moderno striženje, vključno s pranjem in oblikovanjem z vrhunskimi izdelki za urejen videz."
  },
  {
    title: "Barvanje",
    description: "Barvanje celotne dolžine, barvanje narastka ali preliv z uporabo visokokakovostnih barv za poudarjanje vaše naravne lepote."
  },
  {
    title: "Balayage",
    description: "Ročno barvanje pramenov za naraven, sončen videz z globino in dimenzijo, prilagojeno posebej vam."
  },
  {
    title: "Oblikovanje",
    description: "Fen frizure, spenjanje in oblikovanje za posebne priložnosti, da se boste počutili samozavestno in čudovito."
  },
  {
    title: "Nega las",
    description: "Globinska nega, keratinsko glajenje in tretmaji lasišča za povrnitev zdravja in sijaja vašim lasem."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Storitve</h2>
          <div className="w-24 h-px bg-salon-black mx-auto opacity-20"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            Verjamem v kakovost pred količino. Vsaka storitev je opravljena z natančnostjo in pozornostjo do detajlov, da se boste počutili kar najbolje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-gray-100 hover:border-salon-gold/30 hover:shadow-lg transition-all duration-300 bg-salon-beige/30"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-serif group-hover:text-salon-gold transition-colors">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
