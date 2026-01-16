import React from 'react';
import happyTeams1 from '../../assets/images/happy_teams1.png';
import happyTeams2 from '../../assets/images/happy_teams2.png';
import happyTeams3 from '../../assets/images/happy_teams3.png';
import happyTeams4 from '../../assets/images/happy_teams4.png';

const HappyTeamsSection: React.FC = () => {
  const images = [
    { id: 1, src: happyTeams1, alt: 'Happy Team 1' },
    { id: 2, src: happyTeams2, alt: 'Happy Team 2' },
    { id: 3, src: happyTeams3, alt: 'Happy Team 3' },
    { id: 4, src: happyTeams4, alt: 'Happy Team 4' },
  ];

  return (
    <section id="happy-teams" className="w-full bg-white scroll-smooth overflow-x-hidden">
      {/* Heading */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex justify-center">
        <div className="text-center">
          <h2 className="font-impact text-5xl sm:text-6xl md:text-7xl font-normal">
            <span 
              className="inline-block mr-2"
              style={{
                color: '#F78022',
                transform: 'rotate(-1deg)',
                backgroundColor: '#000000',
                padding: '0 12px',
                borderRadius: '4px',
              }}
            >
              Happy Teams
            </span>
            <span className="text-dark">We've Served</span>
          </h2>
        </div>
      </div>

      {/* Images Grid */}
      <div className="w-full bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
          {images.map((image) => (
            <div key={image.id} className="w-full aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyTeamsSection;
