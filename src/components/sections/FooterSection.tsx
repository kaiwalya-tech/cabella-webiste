import React from 'react';
import cabellaBrand from '../../assets/logo.png';

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-white">
      {/* Main Footer Content */}
      <div className="w-full px-10 sm:px-16 lg:px-20 py-12 md:py-16 lg:py-20">
        {/* Logo and Tagline */}
        <div className="mb-12 md:mb-16">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={cabellaBrand} 
              alt="Cabella Pizzeria" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Tagline */}
          <h2 className="font-impact text-2xl sm:text-3xl md:text-4xl font-normal text-dark leading-tight max-w-3xl">
            Wood-fired Sourdough Pizza, Panini & Pasta.
            <br />
            Pure Veg. Real Italian Taste.
          </h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16">
          {/* About Us */}
          <div>
            <h3 className="font-lexend text-base md:text-lg font-semibold text-dark mb-4">
              About us
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="font-lexend text-sm md:text-base font-normal text-gray-600 hover:text-dark transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#story" className="font-lexend text-sm md:text-base font-normal text-gray-600 hover:text-dark transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#ingredients" className="font-lexend text-sm md:text-base font-normal text-gray-600 hover:text-dark transition-colors">
                  Ingredients
                </a>
              </li>
            </ul>
          </div>

          {/* Call Us At */}
          <div>
            <h3 className="font-lexend text-base md:text-lg font-semibold text-dark mb-4">
              Call us at
            </h3>
            <a href="tel:+919860926060" className="font-lexend text-sm md:text-base font-normal text-gray-600 hover:text-dark transition-colors">
              (+91) 986 092 6060
            </a>
          </div>

          {/* Follow Us On */}
          <div>
            <h3 className="font-lexend text-base md:text-lg font-semibold text-dark mb-4">
              Follow us on
            </h3>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark hover:opacity-70 transition-opacity"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark hover:opacity-70 transition-opacity"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full border-t border-black" />

      {/* Copyright Section */}
      <div className="w-full px-10 sm:px-16 lg:px-20 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="font-lexend text-xs sm:text-sm md:text-base font-normal text-dark">
            All Rights Reserved | All product images are original and are our actual products. They are property of Cabella Pizzeria.
            <br className="hidden sm:block" />
            © Cabella Pizzeria 2026
          </p>
          <p className="font-lexend text-xs sm:text-sm md:text-base font-normal text-dark">
            Crafted by <a href="https://www.tubo.digital/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">tubo.digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
