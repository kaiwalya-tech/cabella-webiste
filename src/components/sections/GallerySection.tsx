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
  return (
    <section id="gallery" className="w-full bg-white scroll-smooth overflow-x-hidden">
      {/* Gallery Heading */}
      <div className="w-full py-8 md:py-12 flex justify-center">
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

      {/* Gallery Grid - 4 Columns, Variable Heights */}
      <div className="w-full" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        gridAutoRows: 'max-content',
        backgroundColor: '#ffffff',
      }}>
        {/* C1R1 - Gallery Image (Tall) */}
        <div className="w-full bg-white overflow-hidden" style={{ gridColumn: '1 / 2' }}>
          <img 
            src={gallery1} 
            alt="Gallery 1"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* C2R1 - Gallery Image (Medium) */}
        <div className="w-full bg-white overflow-hidden" style={{ gridColumn: '2 / 3' }}>
          <img 
            src={gallery2} 
            alt="Gallery 2"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* C3R1 - Gallery Image (Medium) */}
        <div className="w-full bg-white overflow-hidden" style={{ gridColumn: '3 / 4' }}>
          <img 
            src={gallery3} 
            alt="Gallery 3"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* C4R1 - Text Box Brown (Tall) */}
        <div 
          className="w-full flex items-center justify-center p-6"
          style={{ gridColumn: '4 / 5', backgroundColor: '#581B04', minHeight: '200px' }}
        >
          <p className="font-lexend text-sm md:text-base text-white text-center leading-relaxed">
            At Cabella, pizza is an art — slow-fermented sourdough, wood-fired perfection, premium cheeses, and San Marzano sauce. True Neapolitan craft, vegetarian style.
          </p>
        </div>

        {/* C1R2 - Text Box Yellow (Medium) */}
        <div 
          className="w-full flex items-center justify-center p-6"
          style={{ gridColumn: '1 / 2', backgroundColor: '#F9E6AC', minHeight: '150px' }}
        >
          <p className="font-lexend text-sm md:text-base text-dark text-center leading-relaxed">
            At Cabella, pizza is an art — slow-fermented sourdough, wood-fired perfection, premium cheeses, and San Marzano sauce. True Neapolitan craft, vegetarian style.
          </p>
        </div>

        {/* C2R2 - Gallery Image (Medium) */}
        <div className="w-full bg-white overflow-hidden" style={{ gridColumn: '2 / 3' }}>
          <img 
            src={gallery4} 
            alt="Gallery 4"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* C3R2 - Gallery Image (Medium) */}
        <div className="w-full bg-white overflow-hidden" style={{ gridColumn: '3 / 4' }}>
          <img 
            src={gallery5} 
            alt="Gallery 5"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* C4R2 - Gallery Image (Medium) */}
        <div className="w-full bg-white overflow-hidden" style={{ gridColumn: '4 / 5' }}>
          <img 
            src={gallery6} 
            alt="Gallery 6"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* C1R3 - Gallery Image (Medium) */}
        <div className="w-full bg-white overflow-hidden" style={{ gridColumn: '1 / 2' }}>
          <img 
            src={gallery7} 
            alt="Gallery 7"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* C2R3 - Text Box Orange (Tall) */}
        <div 
          className="w-full flex items-center justify-center p-6"
          style={{ gridColumn: '2 / 3', backgroundColor: '#F78022', minHeight: '200px' }}
        >
          <p className="font-lexend text-sm md:text-base text-white text-center leading-relaxed">
            At Cabella, pizza is an art — slow-fermented sourdough, wood-fired perfection, premium cheeses, and San Marzano sauce. True Neapolitan craft, vegetarian style.
          </p>
        </div>

        {/* C3R3 - Gallery Image (Medium) */}
        <div className="w-full bg-white overflow-hidden" style={{ gridColumn: '3 / 4' }}>
          <img 
            src={gallery8} 
            alt="Gallery 8"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* C4R3 - Gallery Image (Medium) */}
        <div className="w-full bg-white overflow-hidden" style={{ gridColumn: '4 / 5' }}>
          <img 
            src={gallery9} 
            alt="Gallery 9"
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
