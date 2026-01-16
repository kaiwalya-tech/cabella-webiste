import React from 'react';
import comboImage from '../../assets/combos/combo1.png';

const OffersComboSection: React.FC = () => {
  const combos = [
    {
      id: 1,
      name: 'Pasta',
      price: 249,
      description: 'Pizza, Pasta, Desserts, Soft Drink',
      image: comboImage
    },
    {
      id: 2,
      name: 'Pasta',
      price: 249,
      description: 'Pizza, Pasta, Desserts, Soft Drink',
      image: comboImage
    },
    {
      id: 3,
      name: 'Pasta',
      price: 249,
      description: 'Pizza, Pasta, Desserts, Soft Drink',
      image: comboImage
    },
    {
      id: 4,
      name: 'Pasta',
      price: 249,
      description: 'Pizza, Pasta, Desserts, Soft Drink',
      image: comboImage
    },
  ];

  return (
    <section id="offers" className="w-full bg-white scroll-smooth overflow-hidden">
      {/* OFFERS & COMBOS Heading - Center Aligned */}
      <div className="w-full py-6 md:py-8 flex justify-center">
        <h2 
          className="font-impact text-5xl sm:text-6xl md:text-7xl font-normal drop-shadow-lg px-12 py-4 rounded-lg"
          style={{
            color: '#ffffff',
            WebkitTextStroke: '1.5px #521717',
            backgroundColor: '#F78022',
          } as React.CSSProperties}
        >
          OFFERS & COMBOS
        </h2>
      </div>

      {/* Combos Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 max-w-7xl mx-auto">
          {combos.map((combo) => (
            <div 
              key={combo.id} 
              className="flex flex-col items-center relative h-auto pb-12"
            >
              {/* Image Container - Base Layer */}
              <div className="w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-lg bg-white" style={{ boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)' }}>
                <img 
                  src={combo.image} 
                  alt={combo.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 p-4"
                />
              </div>

              {/* Content Box - Overlapping on Top */}
              <div className="absolute top-40 sm:top-48 md:top-56 left-4 right-4 bg-white rounded-3xl pt-8 px-6 pb-14" style={{ boxShadow: '0 -6px 8px -2px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                {/* Combo Name */}
                <h3 className="font-lexend text-2xl md:text-3xl font-bold text-dark text-center">
                  {combo.name}
                </h3>

                {/* Price */}
                <p className="font-lexend text-base md:text-lg text-gray-700 text-center font-semibold mt-2">
                  Starting @ ₹{combo.price}
                </p>

                {/* Description */}
                <p className="font-lexend text-sm md:text-base text-gray-600 text-center mt-3 leading-relaxed">
                  {combo.description}
                </p>

                {/* Add to Cart Button - Half outside the box */}
                <div className="flex justify-center absolute bottom-0 left-0 right-0 transform translate-y-1/2">
                  <button className="px-8 py-2 bg-white border-2 border-primary text-primary font-lexend text-sm md:text-base font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersComboSection;
