import React from 'react';
import gallery1 from '../../assets/images/gallery1_c1r1.png';
import gallery2 from '../../assets/images/gallery2_c2r1.png';
import gallery3 from '../../assets/images/gallery3_c3r1.png';
import gallery4 from '../../assets/images/gallery4_c2r2.png';
import gallery5 from '../../assets/images/gallery5_c3r2.png';
import gallery6 from '../../assets/images/gallery6_c4r2.png';
import gallery7 from '../../assets/images/gallery7_c1r3.png';
import gallery8 from '../../assets/images/gallery8_c3r3.png';
import gallery9 from '../../assets/images/gallery9_c4r3.png';

const GallerySection: React.FC = () => {
  const textContent = "At Cabella, pizza is an art — slow-fermented sourdough, wood-fired perfection, premium cheeses, and San Marzano sauce. True Neapolitan craft, vegetarian style.";

  // Column 1: gallery1, text_yellow, gallery7
  const column1Items = [
    { type: 'image', src: gallery1, alt: 'Gallery 1' },
    { type: 'text', bgColor: '#F9E6AC', textColor: 'black' },
    { type: 'image', src: gallery7, alt: 'Gallery 7' },
  ];

  // Column 2: gallery2, gallery4, text_orange
  const column2Items = [
    { type: 'image', src: gallery2, alt: 'Gallery 2' },
    { type: 'image', src: gallery4, alt: 'Gallery 4' },
    { type: 'text', bgColor: '#F78022', textColor: 'white' },
  ];

  // Column 3: gallery3, gallery5, gallery8
  const column3Items = [
    { type: 'image', src: gallery3, alt: 'Gallery 3' },
    { type: 'image', src: gallery5, alt: 'Gallery 5' },
    { type: 'image', src: gallery8, alt: 'Gallery 8' },
  ];

  // Column 4: text_brown, gallery6, gallery9
  const column4Items = [
    { type: 'text', bgColor: '#581B04', textColor: 'white' },
    { type: 'image', src: gallery6, alt: 'Gallery 6' },
    { type: 'image', src: gallery9, alt: 'Gallery 9' },
  ];

  const renderColumn = (items: any[]) => (
    <div className="flex flex-col w-full h-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={item.type === 'image' ? 'flex-shrink-0 w-full' : 'flex-grow w-full'}
        >
          {item.type === 'image' ? (
            <img 
              src={item.src} 
              alt={item.alt}
              className="w-full h-auto object-cover block"
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center p-4 md:p-6 lg:p-8"
              style={{ backgroundColor: item.bgColor }}
            >
              <p 
                className="font-lexend text-xs sm:text-sm md:text-base leading-relaxed text-center"
                style={{ color: item.textColor }}
              >
                {textContent}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section id="gallery" className="w-full bg-white scroll-smooth overflow-x-hidden py-8 md:py-12 lg:py-16">
      {/* Gallery Heading */}
      <div className="w-full mb-8 md:mb-12 lg:mb-16 flex justify-center px-4">
        <h2 
          className="font-impact text-4xl sm:text-5xl md:text-6xl font-normal px-8 py-3 rounded-sm"
          style={{
            color: '#F78022',
            backgroundColor: '#000000',
          }}
        >
          Gallery
        </h2>
      </div>

      {/* Gallery Container - Column-Driven Layout */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop: 4 columns */}
        <div className="hidden lg:flex w-full gap-0" style={{ height: 'auto' }}>
          <div className="flex-1 min-h-screen">
            {renderColumn(column1Items)}
          </div>
          <div className="flex-1 min-h-screen">
            {renderColumn(column2Items)}
          </div>
          <div className="flex-1 min-h-screen">
            {renderColumn(column3Items)}
          </div>
          <div className="flex-1 min-h-screen">
            {renderColumn(column4Items)}
          </div>
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden md:flex lg:hidden w-full gap-0 flex-wrap">
          <div className="w-1/2">
            {renderColumn(column1Items)}
          </div>
          <div className="w-1/2">
            {renderColumn(column2Items)}
          </div>
          <div className="w-1/2">
            {renderColumn(column3Items)}
          </div>
          <div className="w-1/2">
            {renderColumn(column4Items)}
          </div>
        </div>

        {/* Mobile: 1 column */}
        <div className="flex md:hidden w-full flex-col gap-0">
          <div className="w-full">
            {renderColumn(column1Items)}
          </div>
          <div className="w-full">
            {renderColumn(column2Items)}
          </div>
          <div className="w-full">
            {renderColumn(column3Items)}
          </div>
          <div className="w-full">
            {renderColumn(column4Items)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
