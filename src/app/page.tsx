'use client';

import React from 'react';
import { Navbar } from '@/components/NavBar';
import { HeroBanner } from '@/components/HeroBanner';
import { MenuCategories } from '@/components/MenuCategories';
import { Bestsellers } from '@/components/BestSellers';
import { OurPromise } from '@/components/OurPromise';
import { TrustBanner } from '@/components/TrustBanner';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="max-w-[720px] mx-auto bg-[#FFF7F3] rounded-[32px] shadow-xl overflow-hidden border border-[#F2D8CD] pb-8">
      <Navbar />

      <main className="px-5 mt-4 space-y-6">
        <HeroBanner />
        <MenuCategories />
        <Bestsellers />
        <OurPromise />
        <TrustBanner />
      </main>

      <Footer />
    </div>
  );
}