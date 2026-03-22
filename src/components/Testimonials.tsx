import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Ana Novak",
    role: "Redna stranka",
    text: "Najbolj profesionalen salon, kar sem jih obiskala. Pozornost do detajlov je neprimerljiva in vedno odidem kot nova oseba.",
    rating: 5
  },
  {
    name: "Maja Kovač",
    role: "Prvi obisk",
    text: "Čudovit ambient in še boljša storitev. Moj balayage je izpadel točno tako, kot sem si zamislila. Toplo priporočam!",
    rating: 5
  },
  {
    name: "Luka Horvat",
    role: "Stranka",
    text: "Odlično vzdušje in vrhunsko striženje. Res si vzame čas, da razume, kaj želiš. Najboljše moško striženje daleč naokoli.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-salon-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Mnenja strank</h2>
          <div className="w-24 h-px bg-salon-black mx-auto opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 text-salon-gold mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <h4 className="font-serif text-lg">{testimonial.name}</h4>
                <span className="text-xs uppercase tracking-widest text-gray-400">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
