import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-[#F2D8CD]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-[11px] text-gray-600 mb-6">
        <div>
          <h2 className="text-lg font-black text-[#852222] mb-2">Dakingo</h2>
          <p className="leading-relaxed font-medium">
            Our Story<br />Contact Us<br />Locate Stores<br />Media<br />Careers
          </p>
        </div>

        <div>
          <h5 className="font-bold text-[#852222] uppercase mb-2">KNOW US</h5>
          <p className="leading-relaxed font-medium">Contact Us<br />Blog</p>
        </div>

        <div>
          <h5 className="font-bold text-[#852222] uppercase mb-2">NEED HELP</h5>
          <p className="leading-relaxed font-medium">Cancellation And Refund<br />Privacy Policy</p>
        </div>

        <div>
          <h5 className="font-bold text-[#852222] uppercase mb-2">MORE INFO</h5>
          <p className="leading-relaxed font-medium">Terms And Conditions<br />Customized Enquiries</p>
        </div>

        <div>
          <h5 className="font-bold text-[#852222] uppercase mb-2">MORE INFO</h5>
          <p className="leading-relaxed font-medium">Coupons & Offers<br />Download App</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-3 rounded-2xl border border-[#F2D8CD] gap-3">
        <div className="w-full sm:w-auto flex-1 flex items-center bg-gray-50 rounded-full border border-gray-200 px-4 py-1.5">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="bg-transparent border-none outline-none text-xs w-full text-gray-700"
          />
        </div>
        <button className="bg-[#852222] text-white text-xs font-bold px-6 py-2 rounded-full hover:bg-[#6E1B1B] transition w-full sm:w-auto">
          SUBSCRIBE
        </button>
        <span className="text-[10px] text-gray-500 font-bold whitespace-nowrap cursor-pointer hover:underline">
          Hey, need any help?
        </span>
      </div>
    </footer>
  );
};