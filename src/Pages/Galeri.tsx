"use client";

import { useState } from 'react';

type GalleryItem = {
  id: string;
  img: string;
  url: string;
  height: number;
};

const items = [
  {
    id: "1",
    img: "./assets/galeri/01.JPG",
    url: "/",
    height: 400,
  },
  {
    id: "2",
    img: "./assets/galeri/02.jpg",
    url: "/",
    height: 350,
  },
  {
    id: "3",
    img: "./assets/galeri/03.jpg",
    url: "/",
    height: 600,
  },
  {
    id: "4",
    img: "./assets/galeri/04.JPG",
    url: "/",
    height: 400,
  },
  {
    id: "5",
    img: "./assets/galeri/05.JPG",
    url: "/",
    height: 600,
  },
  {
    id: "6",
    img: "./assets/galeri/06.jpg",
    url: "/",
    height: 400,
  },
];

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className='mx-auto max-w-7xl px-4 pb-24'>
      <div className='px-3 max-w-4xl pt-28'>
        <h1 className='text-5xl md:text-6xl mb-6 italic tracking-wider edu-vic-wa-nt-hand'>Galeri</h1>
        <p className='mb-12 max-w-2xl text-xl text-gray-600 roboto-mono'>
          Puskesmas Pantai Amal berkomitmen untuk menyediakan layanan kesehatan terbaik bagi masyarakat di sekitar kawasan puskesmas.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3'>
        {items.map((item, index) => (
          <div
            key={item.id}
            className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-100'
            style={{
              height: `${item.height}px`,
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.img}
              alt={`Gallery ${item.id}`}
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)}
        >
          <button
            className='absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors'
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage.img}
            alt={`Gallery ${selectedImage.id}`}
            className='max-w-full max-h-full object-contain rounded-lg shadow-2xl'
            style={{ animation: 'scaleIn 0.3s ease-out' }}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}