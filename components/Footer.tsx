import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
            <TwitterIcon />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Alpine Visions Photography. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;