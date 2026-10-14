import React from 'react';
import { Star, ChevronDown, Heart } from 'lucide-react';
import { BESTSELLERS } from '@/constants/data';

export const Bestsellers: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold text-[#852222]">Bestsellers from Across the Country</h3>
        <button className="bg-[#852222] text-white text-[9px] font-bold px-3 py-1 rounded-full hover:bg-[#6E1B1B] transition">
          VIEW ALL
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {BESTSELLERS.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-2.5 border border-[#F2D8CD] shadow-xs flex flex-col justify-between relative"
          >
            <div>
              <div className="relative w-full h-24 rounded-xl overflow-hidden mb-2 bg-[#F7EBE5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-1.5 left-1.5 bg-white/90 p-1 rounded-full text-[#852222] shadow-xs">
                  <Heart className="w-2.5 h-2.5 fill-[#852222]" />
                </button>
              </div>

              <h4 className="text-[10px] font-bold text-gray-800 leading-tight min-h-[24px]">
                {product.name}
              </h4>

              <div className="mt-1">
                <span className="text-[11px] font-black text-[#852222]">{product.price}</span>
              </div>

              <div className="mt-1.5 space-y-0.5">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-2 h-2 fill-current" />
                  <Star className="w-2 h-2 fill-current" />
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-2 h-2 fill-current" />
                  <Star className="w-2 h-2 fill-current" />
                  <Star className="w-2 h-2 fill-current" />
                  <Star className="w-2 h-2 fill-current" />
                  <Star className="w-2 h-2 fill-current" />
                </div>
              </div>
            </div>

            <button className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-[#852222] text-white flex items-center justify-center hover:bg-[#6E1B1B] transition shadow-xs">
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};