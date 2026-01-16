import React from 'react';
import bulkOrderIcon from '../../assets/icons/bulk_order.png';
import corporateOrderIcon from '../../assets/icons/corporate_orders.png';

const ReservationSection: React.FC = () => {
  return (
    <section id="reserve" className="w-full bg-white scroll-smooth overflow-x-hidden py-12 md:py-16 lg:py-20">
      {/* Title */}
      <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl font-normal text-dark text-center mb-12 md:mb-16 px-4">
        Planning a Celebration Or Office Lunch?
      </h2>

      {/* Two Column Layout with Divider */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">
          {/* Dotted Vertical Divider - Only visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
            <div className="h-full w-px border-l-2 border-primary border-dashed"></div>
          </div>

          {/* Left Section - Bulk Party Orders */}
          <div className="flex flex-col items-center justify-center py-8 md:py-12 md:pr-8">
            {/* Icon */}
            <div className="mb-6 md:mb-8">
              <img 
                src={bulkOrderIcon} 
                alt="Bulk Party Orders"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="font-impact text-2xl md:text-3xl font-normal text-dark text-center mb-6">
              Bulk Party Orders
            </h3>

            {/* Button */}
            <button className="px-8 py-3 bg-primary text-white font-lexend font-normal text-base md:text-lg rounded-full hover:opacity-90 transition-opacity duration-300 shadow-md hover:shadow-lg">
              Plan Your Party With Us
            </button>
          </div>

          {/* Right Section - Corporate Orders */}
          <div className="flex flex-col items-center justify-center py-8 md:py-12 md:pl-8">
            {/* Icon */}
            <div className="mb-6 md:mb-8">
              <img 
                src={corporateOrderIcon} 
                alt="Corporate Orders"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="font-impact text-2xl md:text-3xl font-normal text-dark text-center mb-6">
              Corporate Orders
            </h3>

            {/* Button */}
            <button className="px-8 py-3 bg-primary text-white font-lexend font-normal text-base md:text-lg rounded-full hover:opacity-90 transition-opacity duration-300 shadow-md hover:shadow-lg">
              Contact Our Corporate Team
            </button>
          </div>

          {/* Mobile Divider - Only visible on mobile */}
          <div className="md:hidden col-span-1 flex justify-center py-6">
            <div className="h-px w-16 border-t-2 border-primary border-dashed"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
