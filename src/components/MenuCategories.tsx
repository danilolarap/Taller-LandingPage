import React from 'react';
import { Cake, UtensilsCrossed, Utensils, Cookie } from 'lucide-react';

export const MenuCategories: React.FC = () => {
  return (
    <section className="bg-white rounded-3xl p-5 border border-[#F2D8CD] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Lado Izquierdo */}
      <div className="flex flex-col justify-between self-start sm:self-center">
        <div>
          <h3 className="text-xl font-bold text-[#852222]">Menu</h3>
          <p className="text-xs text-gray-500 font-medium">What will you wish for?</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="w-6 h-6 rounded-full bg-[#FFF2EC] border border-[#F2D8CD] flex items-center justify-center text-[#852222]">
            <Cake className="w-3.5 h-3.5" />
          </div>
          <div className="w-6 h-6 rounded-full bg-[#FFF2EC] border border-[#F2D8CD] flex items-center justify-center text-[#852222]">
            <UtensilsCrossed className="w-3.5 h-3.5" />
          </div>
          <div className="w-6 h-6 rounded-full bg-[#FFF2EC] border border-[#F2D8CD] flex items-center justify-center text-[#852222]">
            <Cookie className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Lado Derecho */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full sm:w-auto">
        {[
          { title: 'CLASSIC', icon: Cake },
          { title: 'GOURMET', icon: UtensilsCrossed },
          { title: 'DESSERTS', icon: Utensils },
          { title: 'COOKIES', icon: Cookie },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FFF2EC] border border-[#F2D8CD] rounded-2xl px-4 py-3 flex flex-col items-center justify-center cursor-pointer hover:shadow-xs transition"
          >
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#852222] mb-1.5 shadow-2xs border border-[#F2D8CD]/40">
              <item.icon className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-bold text-[#852222] tracking-wider">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};