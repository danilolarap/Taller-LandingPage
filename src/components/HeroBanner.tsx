import React from 'react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative bg-[#852222] rounded-3xl p-6 md:p-8 text-white overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between min-h-[260px]">
      {/* Torta Principal */}
      <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden flex-shrink-0 bg-[#6E1B1B]">
        <img
          src="/images/hero-cake-main.jpg"
          alt="Decadent Chocolate Bliss"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto Central */}
      <div className="text-center md:text-left my-4 md:my-0 px-4 flex-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-wide uppercase">
          DECADENT<br />CHOCOLATE<br />BLISS!
        </h2>
        <p className="text-xs md:text-sm font-normal italic mt-1 text-rose-100">
          Satisfy Your Sweetest Cravings
        </p>

        <div className="mt-4 inline-flex flex-col items-start bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20">
          <span className="text-[9px] uppercase font-bold tracking-widest text-rose-200">
            Special Offer!
          </span>
          <span className="bg-[#852222] text-white font-black px-4 py-1 rounded-lg text-sm shadow-md mt-0.5">
            SAVE 20%
          </span>
        </div>
      </div>

      {/* Miniaturas */}
      <div className="flex md:flex-col gap-3 flex-shrink-0">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white shadow-md overflow-hidden bg-[#6E1B1B]">
          <img
            src="/images/hero-cake-top.jpg"
            alt="Chocolate Lava Cake"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white shadow-md overflow-hidden bg-[#6E1B1B]">
          <img
            src="/images/hero-cake-bottom.jpg"
            alt="Chocolate Cake Slice"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};