import React from 'react';
import storyImage from '../../assets/images/rectangle_pizza_our_story.png';

const OurStorySection: React.FC = () => {
  return (
    <section id="story" className="w-full bg-white scroll-smooth pt-8 overflow-x-hidden">
      {/* Story Image with Overlay Text - Full Width */}
      <div className="relative w-full mb-12 md:mb-16 overflow-hidden shadow-lg">
        <img
          src={storyImage}
          alt="Cabella Pizzeria Story"
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
        
        {/* Overlay Text - OUR STORY */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 
            className="font-impact text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal drop-shadow-lg"
            style={{
              color: '#ffffff',
              WebkitTextStroke: '2px #521717',
            } as React.CSSProperties}
          >
            OUR STORY
          </h2>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 md:py-6 lg:py-7">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* First Text - Semi Bold */}
          <p className="font-lexend text-lg sm:text-xl md:text-2xl text-dark font-semibold text-center max-w-5xl leading-relaxed">
            Pizza that loves you back, light, gut-friendly sourdough base.
          </p>

          {/* Second Text - Regular */}
          <p className="font-lexend text-base sm:text-lg md:text-xl text-dark font-normal text-center max-w-5xl leading-relaxed">
            Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.
          </p>

          {/* Third Text - Long Description */}
          <div className="font-lexend text-sm sm:text-base md:text-lg text-dark font-normal text-center max-w-6xl leading-relaxed space-y-6">
            <p>
              At Cabella Pizzeria, every pizza begins with patience and passion. Our journey started with a love for authentic Italian sourdough — slow-fermented, hand-stretched, and baked to perfection in traditional wood-fired ovens. We believe that a great pizza is not just made; it's crafted. From sourcing the finest flour and farm-fresh ingredients to perfecting the golden char on every crust, our chefs pour their heart into every slice. Cabella isn't just a pizzeria — it's an experience that brings the warmth of Italy to your table, one sourdough pizza at a time.
            </p>
            <p>
              Cabella Pizzeria was born from a simple belief — that great pizza shouldn't be a compromise between health, taste, or price. We do not believe in using processed dough and cheap ingredients to make more profits, so we decided to bring Pune something better.
            </p>
          </div>

          {/* Discover More Button */}
          <button className="mt-6 md:mt-8 px-8 py-3 bg-dark text-white font-lexend font-semibold rounded-full hover:bg-primary hover:text-dark transition-all duration-300 shadow-md hover:shadow-lg">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
