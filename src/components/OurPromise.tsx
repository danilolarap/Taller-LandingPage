import React from 'react';
import { Clock, Sparkles, Award, Truck } from 'lucide-react';
import { PhotoGallery } from './PhotoGallery';

export const OurPromise: React.FC = () => {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-lg font-bold text-[#852222]">Our Promise</h3>
        <p className="text-[11px] text-gray-600 font-medium">
          Therts no secret spell – only honest the wark!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="bg-[#FFF2EC] rounded-2xl p-4 border border-[#F2D8CD]">
            <p className="text-[10px] text-gray-700 font-semibold mb-3 text-center">
              A glinpes ras secret spell – only hocial world!
            </p>

            <div className="grid grid-cols-4 gap-1.5 text-center">
              {[
                { label: 'ON TIME DELIVERY', icon: Clock },
                { label: '5000+ DESIGNS', icon: Sparkles },
                { label: '2 CR+ ORDERS', icon: Award },
                { label: 'BAKED FRESH', icon: Truck },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#F2D8CD] flex items-center justify-center text-[#852222] mb-1 shadow-2xs">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[8px] font-bold text-[#852222] leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FFF2EC] border border-[#F2D8CD] rounded-2xl p-4 flex items-center justify-between gap-3">
            <div className="w-16 h-16 bg-amber-200/80 rounded-xl transform -rotate-6 border border-dashed border-amber-600 flex flex-col items-center justify-center font-black text-amber-900 text-[8px] shadow-xs text-center flex-shrink-0">
              <span>MAGICAL</span>
              <span>TICKET</span>
            </div>

            <div className="text-right flex flex-col items-end">
              <h4 className="text-[11px] font-black text-[#852222] uppercase tracking-wider">
                THE MAGICAL TICKET
              </h4>
              <p className="text-[10px] text-gray-600 mt-0.5 max-w-[170px] leading-snug">
                Add 3 reminders in your account. Win offers worth Rs. 750
              </p>
              <button className="mt-2.5 bg-[#852222] text-white text-[9px] font-bold px-3.5 py-1 rounded-full shadow-xs hover:bg-[#6E1B1B] transition">
                UNLOCK NOW
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white p-2.5 rounded-2xl border border-[#F2D8CD]">
            <div className="flex -space-x-1.5">
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <div key={idx} className="w-6 h-6 rounded-full border-2 border-white bg-[#852222]/20 flex items-center justify-center text-[8px] font-bold text-[#852222]">
                  •
                </div>
              ))}
            </div>
            <span className="text-[11px] font-bold text-[#852222]">Follow us on social!</span>
          </div>
        </div>

        <PhotoGallery />
      </div>
    </section>
  );
};