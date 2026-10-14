import React from 'react';

const GALLERY_IMAGES = [
  '/images/gallery/photo-1.jpg',
  '/images/gallery/photo-2.jpg',
  '/images/gallery/photo-3.jpg',
  '/images/gallery/photo-4.jpg',
  '/images/gallery/photo-5.jpg',
  '/images/gallery/photo-6.jpg',
];

export const PhotoGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {GALLERY_IMAGES.map((src, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden h-28 md:h-32 border border-[#F2D8CD] shadow-2xs bg-[#F7EBE5]"
        >
          <img
            src={src}
            alt={`Gallery photo ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};