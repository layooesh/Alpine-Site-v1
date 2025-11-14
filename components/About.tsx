import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12 text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://picsum.photos/500/500?image=823" 
              alt="Photographer Alex Doe" 
              className="rounded-full shadow-lg mx-auto border-4 border-brand-accent"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg leading-relaxed text-brand-light">
              Hi, I'm Alex Doe, a landscape photographer with a deep passion for the raw, untamed beauty of the mountains. Based near the stunning landscapes of the Swiss Alps, I spend my days exploring remote trails and chasing the perfect light.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-brand-light">
              My goal is to capture not just a picture, but the feeling of being there—the crisp mountain air, the profound silence, and the awe-inspiring scale of nature. Through my lens, I hope to share these moments of wonder with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;