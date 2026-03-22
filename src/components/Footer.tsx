import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-bold tracking-widest mb-2">LoVve</h3>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} LoVve, Valentina Žalar s.p. Vse pravice pridržane.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-salon-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-salon-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-salon-gold transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
