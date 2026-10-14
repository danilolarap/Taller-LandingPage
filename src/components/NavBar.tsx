import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { NAV_LINKS } from '@/constants/data';

export const Navbar: React.FC = () => {
  return (
    <header className="bg-[#FFF5F0] px-6 pt-4 pb-3 border-b border-[#F2D8CD] w-full rounded-t-[32px]">
      {/* Fila Superior */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-black text-[#852222] tracking-tight cursor-pointer">
          Dakingo
        </h1>

        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3" />
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-8 py-1 bg-white border border-[#F2D8CD] rounded-full text-xs outline-none focus:border-[#852222] w-40 md:w-52 placeholder:text-gray-400"
            />
            <button className="absolute right-1 bg-[#852222] p-1 rounded-full text-white hover:bg-[#6E1B1B] transition">
              <Search className="w-2.5 h-2.5" />
            </button>
          </div>

          <a href="#" className="flex items-center gap-1.5 text-xs font-bold text-[#852222] hover:opacity-80">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span className="text-[11px]">Login/Signup</span>
          </a>
        </div>
      </div>

      {/* Fila Inferior */}
      <div className="flex items-center justify-between border-t border-[#F2D8CD]/50 pt-2.5">
        <nav className="flex items-center gap-4 text-[11px] font-bold text-gray-800 overflow-x-auto">
          {NAV_LINKS.map((link, idx) => (
            <a key={idx} href="#" className="hover:text-[#852222] transition whitespace-nowrap">
              {link}
            </a>
          ))}
        </nav>

        <button className="bg-[#852222] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-[#6E1B1B] transition shadow-xs flex-shrink-0 ml-2">
          ORDER NOW
        </button>
      </div>
    </header>
  );
};