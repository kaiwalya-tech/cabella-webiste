import React from 'react';
import heroSlice from '../../assets/hero_section_pizza_slice.png';
import cabellaBrand from '../../assets/logo.png';
import character1 from '../../assets/icons/character1.png';
import character2 from '../../assets/icons/character2.png';
import character3 from '../../assets/icons/character3.png';
import textLinesLeft from '../../assets/icons/text_3_lines_left.png';
import textLinesRight from '../../assets/icons/text_3_lines_right.png';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white relative overflow-hidden pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="relative">
          {/* Center Content */}
          <div className="flex flex-col items-center pt-0 md:pt-0">
            {/* Brand Logo */}
            <div className="mb-8 md:mb-10 flex justify-center">
              <img
                src={cabellaBrand}
                alt="Cabella Pizzeria"
                className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain"
              />
            </div>

            {/* Main Headline - Two Lines */}
            <div className="text-center mb-6 md:mb-8 relative">
              {/* Character 1 - Positioned relative to headline with adjustable inline styles */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-6rem',
                  left: '0vw',
                  zIndex: 10,
                }}
              >
                <img
                  src={character1}
                  alt="Character 1"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain"
                />
              </div>

              {/* First Line */}
              <h2 className="font-impact text-5xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.21] text-dark font-normal mb-1 md:mb-2">
                Wood-fired. Sourdough.
              </h2>

              {/* Second Line with Rotated Background */}
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
                  <span className="font-impact text-5xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.21] text-dark font-normal">
                    Pure Veg.
                  </span>

                  {/* Rotated Background Box for "Real Italian Taste" - 2 deg rotation */}
                  <div className="relative inline-block">
                    <div
                      className="absolute inset-0 bg-black"
                      style={{
                        transform: 'rotate(-1deg)',
                        borderRadius: '0 8px 0 8px',
                      }}
                    />
                    <span
                      className="relative font-impact text-5xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.21] text-primary font-normal px-2 sm:px-3 md:px-4 py-0.5 block"
                    >
                      Real Italian Taste.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="font-lexend text-base sm:text-lg md:text-xl text-dark font-semibold text-center mb-6 md:mb-8 max-w-2xl">
              It's A Craft, A Commitment & An Italian Culture
            </p>

            {/* Description Text */}
            <p className="font-lexend text-sm sm:text-base md:text-lg text-dark leading-relaxed text-center max-w-3xl mb-6 md:mb-8">
              At Cabella, pizza is an art – slow-fermented sourdough, wood-fired perfection, premium cheeses, and San Marzano sauce. True Neapolitan craft, vegetarian style.
            </p>

            {/* No Shortcuts Section with Decorative Elements */}
            <div className="flex flex-col items-center gap-2 md:gap-3 mb-8 md:mb-10">
              {/* Text with decorative lines */}
              <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 flex-nowrap w-full px-1 sm:px-2 md:px-4">
                {/* Left decoration */}
                <div className="flex-shrink-0 min-w-fit">
                  <img
                    src={textLinesLeft}
                    alt="Decorative left"
                    className="h-6 sm:h-8 md:h-10 lg:h-14 w-auto object-contain"
                  />
                </div>

                {/* Main text with wavy text decoration */}
                <p className="font-lexend text-xs sm:text-sm md:text-base lg:text-lg text-dark font-extrabold text-center flex-shrink"
                   style={{
                     textDecoration: 'underline wavy #F78022',
                     textDecorationThickness: '2px',
                     textUnderlineOffset: '4px',
                   }}
                >
                  No Shortcuts. No Artificial Yeast. No Gimmicks.
                </p>

                {/* Right decoration */}
                <div className="flex-shrink-0 min-w-fit">
                  <img
                    src={textLinesRight}
                    alt="Decorative right"
                    className="h-6 sm:h-8 md:h-10 lg:h-14 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Subtext with medium font */}
              <p className="font-lexend text-xs sm:text-sm md:text-base text-dark font-medium text-center max-w-2xl">
                Just Honest, Authentic, And Lovingly Made Pizzas.
              </p>
            </div>

            {/* Pizza Image - Mobile reduced 20%, Desktop increased 20% */}
            <div className="flex justify-center mb-0 w-full">
              <div className="w-3/4 sm:w-3/4 md:w-3/5 lg:w-3/5">
                <img
                  src={heroSlice}
                  alt="Cabella Pizza Slice"
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Character 2 - Right Bottom */}
          <div className="absolute bottom-12 right-0 sm:bottom-16 md:bottom-20 lg:bottom-24 z-5 transform translate-x-1/4 sm:translate-x-1/3">
            <img
              src={character2}
              alt="Character 2"
              className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain"
            />
          </div>

          {/* Character 3 - Left Bottom */}
          <div className="absolute bottom-12 left-0 sm:bottom-16 md:bottom-20 lg:bottom-24 z-5 transform -translate-x-1/4 sm:-translate-x-1/3">
            <img
              src={character3}
              alt="Character 3"
              className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
