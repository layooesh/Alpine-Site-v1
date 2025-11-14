import React, { useState } from 'react';
import PayPalIcon from './icons/PayPalIcon';
import ApplePayIcon from './icons/ApplePayIcon';

const photos = [
  {
    id: 1,
    src: 'https://picsum.photos/800/600?image=1060',
    title: 'Serene Peaks',
    description: 'A quiet morning overlooking the majestic mountain range.',
  },
  {
    id: 2,
    src: 'https://picsum.photos/800/600?image=835',
    title: 'Winter\'s Embrace',
    description: 'Snow-covered pines standing tall against the winter sky.',
  },
];

const PhotoCard: React.FC<{ photo: typeof photos[0] }> = ({ photo }) => {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-xl">
      <img src={photo.src} alt={photo.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-serif font-bold">{photo.title}</h3>
        <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{photo.description}</p>
        <div className="mt-4">
          {!showPayment ? (
            <button onClick={() => setShowPayment(true)} className="bg-brand-accent text-brand-charcoal px-4 py-2 rounded-md font-bold hover:bg-white transition-colors duration-300">
              Buy Print
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-black/50 p-3 rounded-lg">
              <p className="text-sm font-semibold">Pay with:</p>
              <div className="flex gap-2">
                <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <ApplePayIcon /> Apple Pay
                </button>
                <button className="bg-[#ffc439] text-[#003087] px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <PayPalIcon /> PayPal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-brand-charcoal">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12 text-white">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;