import React from 'react';

const LocationSection: React.FC = () => {
//   const locationAddress = "Shop 7, Sai Saheb Building, Shiv Sai lane, Kokane Chowk, opposite Lotus Multi-speciality Hospital, Pimple Saudagar, Pune, Maharashtra 411027";
  const locationTime = "Time: 12 PM – 11 PM";

  return (
    <section id="location" className="w-full bg-white scroll-smooth overflow-x-hidden py-12 md:py-16 lg:py-20">
      <div className="w-full">
        {/* Map Container */}
        <div className="relative w-full h-64 md:h-[325px] lg:h-[390px] overflow-hidden shadow-lg">
          {/* Embedded Google Map */}
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.523!2d73.8419!3d18.5812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sShop%207%2C%20Sai%20Saheb%20Building%2C%20Shiv%20Sai%20Lane%2C%20Pimple%20Saudagar%2C%20Pune%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1704969600000"
          />
        </div>

        {/* Info Box - Positioned to overlap map from bottom */}
        <div className="relative flex justify-center px-4 sm:px-6 lg:px-8" style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
          <div 
            className="w-full md:max-w-2xl bg-white rounded-lg p-6 md:p-8 text-center shadow-lg"
            style={{
              borderTop: '3px solid #F78022',
              borderLeft: '3px solid #F78022',
              borderRight: '3px solid #F78022',
              borderBottom: '3px solid #F78022',
            }}
          >
            <h3 className="font-lexend text-2xl md:text-3xl font-semibold text-dark mb-2">
              Cabella Pizzeria, Pimple Saudagar, Pune
            </h3>
            <p className="font-lexend text-base md:text-lg font-semibold text-dark">
              {locationTime}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 mt-12 md:mt-16 px-4 sm:px-6 lg:px-8 flex-wrap">
          {/* Order or Book a Table Button - WhatsApp */}
          <button 
            className="flex-1 min-w-max sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-lexend font-regular transition-colors hover:opacity-90 whitespace-nowrap"
            style={{
              backgroundColor: '#F78022',
              fontSize: '0.95rem',
              letterSpacing: '0.5px'
            }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.161l-.335-.168-3.476.656.666-2.433-.161-.256a9.874 9.874 0 011.531-4.26 9.748 9.748 0 0113.638 1.118c2.852 2.900 2.752 7.509-.277 10.308-1.855 1.859-4.338 2.760-6.938 2.760-.929 0-1.852-.102-2.747-.298l-.261.043-2.995.566.667-2.434-.161-.256c1.275-1.968 1.969-4.368 1.969-6.842z" />
            </svg>
            ORDER OR BOOK A TABLE
          </button>

          {/* Call Now Button */}
          <button 
            className="flex-1 min-w-max sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-lexend font-regular bg-black transition-colors hover:bg-gray-900 whitespace-nowrap"
            style={{
              fontSize: '0.95rem',
              letterSpacing: '0.5px'
            }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            CALL NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
