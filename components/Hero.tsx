import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=1043')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white p-4">
        <h2 className="text-5xl md:text-7xl font-serif font-bold drop-shadow-lg">Alex Doe</h2>
        <p className="mt-4 text-xl md:text-2xl drop-shadow-md">Capturing the Soul of the Alps</p>
      </div>
    </section>
  );
};

export default Hero;