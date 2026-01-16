import React from 'react';
import loyaltyCardBack from '../../assets/Cabella Loyalty Card Back.png';
import loyaltyCardFront from '../../assets/Cabella Loyalty Card Front.png';
import textLinesLeft from '../../assets/icons/text_3_lines_left.png';
import textLinesRight from '../../assets/icons/text_3_lines_right.png';

const LoyaltyRewardsSection: React.FC = () => {
  return (
    <section id="loyalty" className="w-full bg-white scroll-smooth overflow-x-hidden py-12 md:py-16 lg:py-20">
      {/* Heading */}
      <div className="w-full flex justify-center mb-12 md:mb-16 px-4">
        <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl font-normal text-black">
          Your Pizza Should Come With Rewards
        </h2>
      </div>

      {/* Loyalty Cards Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Loyalty Card Back */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={loyaltyCardBack} 
              alt="Cabella Loyalty Card Back" 
              className="w-full h-auto object-contain"
              style={{ maxWidth: '32rem' }}
            />
          </div>

          {/* Loyalty Card Front */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={loyaltyCardFront} 
              alt="Cabella Loyalty Card Front" 
              className="w-full h-auto object-contain"
              style={{ maxWidth: '32rem' }}
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Main Text */}
        <p className="font-lexend text-lg sm:text-xl md:text-2xl font-semibold text-dark text-center mb-8 md:mb-10">
          Get A Stamp Every Visit. After 8 Stamps → Free Pizza!
        </p>

        {/* Join Button */}
        <button 
          className="bg-black text-white font-lexend font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full mb-8 md:mb-10 hover:bg-gray-800 transition-colors"
          style={{
            fontSize: '0.95rem',
            letterSpacing: '0.5px'
          }}
        >
          JOIN CABELLA CLUB
        </button>

        {/* Ask Our Team Text with Decorative Icons */}
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap max-w-2xl">
          {/* Left decoration */}
          <img
            src={textLinesLeft}
            alt="Decorative left"
            className="h-6 sm:h-8 md:h-10 w-auto object-contain flex-shrink-0"
          />

          {/* Main text */}
          <p className="font-lexend text-sm sm:text-base md:text-lg text-dark font-normal text-center flex-shrink">
            Ask Our Team When You Visit
          </p>

          {/* Right decoration */}
          <img
            src={textLinesRight}
            alt="Decorative right"
            className="h-6 sm:h-8 md:h-10 w-auto object-contain flex-shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default LoyaltyRewardsSection;
