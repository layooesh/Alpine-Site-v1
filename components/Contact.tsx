import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const recipientEmail = 'alps3massage@gmail.com';
  const address = 'Adlergass 5, 6490 Andermatt';

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Message from ${name} via Alpine Visions Photography`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const directionsUrl = `https://maps.google.com/maps?daddr=${encodeURIComponent(address)}`;

  return (
    <section id="contact" className="py-20 bg-brand-charcoal">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12 text-white">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-light">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full bg-brand-charcoal border-brand-accent border-2 p-3 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-light">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full bg-brand-charcoal border-brand-accent border-2 p-3 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-light">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full bg-brand-charcoal border-brand-accent border-2 p-3 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent"></textarea>
              </div>
              <a 
                href={generateMailtoLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-brand-accent text-brand-charcoal py-3 px-4 rounded-md font-bold hover:bg-white transition-colors duration-300">
                Send Message
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-white mb-4">Contact Details</h3>
              <div className="space-y-4 text-brand-light">
                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>{address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${recipientEmail}`} className="hover:text-brand-accent transition-colors">{recipientEmail}</a>
                  </div>
                </div>
              </div>
            </div>
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${address}`}
              className="group relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl border-2 border-brand-accent flex-grow cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white z-10">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="font-bold">Get Directions</span>
                </div>
              </div>
               <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ pointerEvents: 'none' }}
              ></iframe>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;