import React, { useState } from 'react';
import pizzaImage from '../../assets/menu items/pizza1.png';

const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = [
    'Pasta',
    'Pizza',
    'Sides',
    'Salads',
    'Dips',
    'Extra Topping',
    'Desserts',
    'Beverages',
    'Soft Drinks',
    'Fried'
  ];

  // Food items organized by category
  const menuData: { [key: string]: Array<{ id: number; name: string; rating: number; description: string; price: number; image: string }> } = {
    'Pasta': [
      { id: 1, name: 'Pasta', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 249, image: pizzaImage },
      { id: 2, name: 'Pasta', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 249, image: pizzaImage },
      { id: 3, name: 'Pasta', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 249, image: pizzaImage },
      { id: 4, name: 'Pasta', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 249, image: pizzaImage },
      { id: 5, name: 'Pasta', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 249, image: pizzaImage },
      { id: 6, name: 'Pasta', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 249, image: pizzaImage },
      { id: 7, name: 'Pasta', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 249, image: pizzaImage },
      { id: 8, name: 'Pasta', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 249, image: pizzaImage },
    ],
    'Pizza': [
      { id: 9, name: 'Pizza', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 299, image: pizzaImage },
      { id: 10, name: 'Pizza', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 299, image: pizzaImage },
      { id: 11, name: 'Pizza', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 299, image: pizzaImage },
      { id: 12, name: 'Pizza', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 299, image: pizzaImage },
      { id: 13, name: 'Pizza', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 299, image: pizzaImage },
      { id: 14, name: 'Pizza', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 299, image: pizzaImage },
      { id: 15, name: 'Pizza', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 299, image: pizzaImage },
      { id: 16, name: 'Pizza', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 299, image: pizzaImage },
    ],
    'Sides': [
      { id: 17, name: 'Sides', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 149, image: pizzaImage },
      { id: 18, name: 'Sides', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 149, image: pizzaImage },
      { id: 19, name: 'Sides', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 149, image: pizzaImage },
      { id: 20, name: 'Sides', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 149, image: pizzaImage },
      { id: 21, name: 'Sides', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 149, image: pizzaImage },
      { id: 22, name: 'Sides', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 149, image: pizzaImage },
      { id: 23, name: 'Sides', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 149, image: pizzaImage },
      { id: 24, name: 'Sides', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 149, image: pizzaImage },
    ],
    'Salads': [
      { id: 25, name: 'Salads', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 199, image: pizzaImage },
      { id: 26, name: 'Salads', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 199, image: pizzaImage },
      { id: 27, name: 'Salads', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 199, image: pizzaImage },
      { id: 28, name: 'Salads', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 199, image: pizzaImage },
      { id: 29, name: 'Salads', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 199, image: pizzaImage },
      { id: 30, name: 'Salads', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 199, image: pizzaImage },
      { id: 31, name: 'Salads', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 199, image: pizzaImage },
      { id: 32, name: 'Salads', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 199, image: pizzaImage },
    ],
    'Dips': [
      { id: 33, name: 'Dips', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 99, image: pizzaImage },
      { id: 34, name: 'Dips', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 99, image: pizzaImage },
      { id: 35, name: 'Dips', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 99, image: pizzaImage },
      { id: 36, name: 'Dips', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 99, image: pizzaImage },
      { id: 37, name: 'Dips', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 99, image: pizzaImage },
      { id: 38, name: 'Dips', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 99, image: pizzaImage },
      { id: 39, name: 'Dips', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 99, image: pizzaImage },
      { id: 40, name: 'Dips', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 99, image: pizzaImage },
    ],
    'Extra Topping': [
      { id: 41, name: 'Extra Topping', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 79, image: pizzaImage },
      { id: 42, name: 'Extra Topping', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 79, image: pizzaImage },
      { id: 43, name: 'Extra Topping', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 79, image: pizzaImage },
      { id: 44, name: 'Extra Topping', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 79, image: pizzaImage },
      { id: 45, name: 'Extra Topping', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 79, image: pizzaImage },
      { id: 46, name: 'Extra Topping', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 79, image: pizzaImage },
      { id: 47, name: 'Extra Topping', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 79, image: pizzaImage },
      { id: 48, name: 'Extra Topping', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 79, image: pizzaImage },
    ],
    'Desserts': [
      { id: 49, name: 'Desserts', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 179, image: pizzaImage },
      { id: 50, name: 'Desserts', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 179, image: pizzaImage },
      { id: 51, name: 'Desserts', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 179, image: pizzaImage },
      { id: 52, name: 'Desserts', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 179, image: pizzaImage },
      { id: 53, name: 'Desserts', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 179, image: pizzaImage },
      { id: 54, name: 'Desserts', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 179, image: pizzaImage },
      { id: 55, name: 'Desserts', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 179, image: pizzaImage },
      { id: 56, name: 'Desserts', rating: 5, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 179, image: pizzaImage },
    ],
    'Beverages': [
      { id: 57, name: 'Beverages', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 89, image: pizzaImage },
      { id: 58, name: 'Beverages', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 89, image: pizzaImage },
      { id: 59, name: 'Beverages', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 89, image: pizzaImage },
      { id: 60, name: 'Beverages', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 89, image: pizzaImage },
      { id: 61, name: 'Beverages', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 89, image: pizzaImage },
      { id: 62, name: 'Beverages', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 89, image: pizzaImage },
      { id: 63, name: 'Beverages', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 89, image: pizzaImage },
      { id: 64, name: 'Beverages', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 89, image: pizzaImage },
    ],
    'Soft Drinks': [
      { id: 65, name: 'Soft Drinks', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 59, image: pizzaImage },
      { id: 66, name: 'Soft Drinks', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 59, image: pizzaImage },
      { id: 67, name: 'Soft Drinks', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 59, image: pizzaImage },
      { id: 68, name: 'Soft Drinks', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 59, image: pizzaImage },
      { id: 69, name: 'Soft Drinks', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 59, image: pizzaImage },
      { id: 70, name: 'Soft Drinks', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 59, image: pizzaImage },
      { id: 71, name: 'Soft Drinks', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 59, image: pizzaImage },
      { id: 72, name: 'Soft Drinks', rating: 3, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 59, image: pizzaImage },
    ],
    'Fried': [
      { id: 73, name: 'Fried', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 159, image: pizzaImage },
      { id: 74, name: 'Fried', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 159, image: pizzaImage },
      { id: 75, name: 'Fried', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 159, image: pizzaImage },
      { id: 76, name: 'Fried', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 159, image: pizzaImage },
      { id: 77, name: 'Fried', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 159, image: pizzaImage },
      { id: 78, name: 'Fried', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 159, image: pizzaImage },
      { id: 79, name: 'Fried', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 159, image: pizzaImage },
      { id: 80, name: 'Fried', rating: 4, description: 'Neapolitan-Style Pizzas. Wood-Fired. Pure Veg. All Soul, No Shortcuts.', price: 159, image: pizzaImage },
    ],
  };

  const currentCategoryItems = menuData[categories[selectedCategory]] || [];

  return (
    <section id="menu" className="w-full bg-white scroll-smooth overflow-x-hidden">
      {/* ORDER NOW Heading - Center Aligned */}
      <div className="w-full py-6 md:py-8 flex justify-center">
        <h2 
          className="font-impact text-5xl sm:text-6xl md:text-7xl font-normal drop-shadow-lg px-12 py-4 rounded-lg"
          style={{
            color: '#ffffff',
            WebkitTextStroke: '1.5px #521717',
            backgroundColor: '#F78022',
          } as React.CSSProperties}
        >
          ORDER NOW
        </h2>
      </div>

      {/* Category Tabs */}
      <div className="w-full bg-primary overflow-x-auto shadow-md">
        <div className="flex justify-center gap-0 px-4 sm:px-6 lg:px-8 py-0 min-w-min flex-wrap">
          {categories.map((category, index) => (
            <div key={index} className="flex items-stretch">
              <button
                onClick={() => setSelectedCategory(index)}
                className={`px-6 py-4 font-lexend font-semibold whitespace-nowrap transition-all duration-300 focus:outline-none ${
                  selectedCategory === index
                    ? 'bg-[#E36C0E] text-white'
                    : 'bg-primary text-white hover:bg-[#E36C0E]'
                }`}
              >
                {category}
              </button>
              {/* Separator Line - Not on corners */}
              {index < categories.length - 1 && (
                <div className="w-px bg-white opacity-40"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Food Items Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {currentCategoryItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-white">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col gap-3">
                {/* Name - Center Aligned */}
                <h3 className="font-lexend text-lg md:text-xl font-semibold text-dark text-center">
                  {item.name}
                </h3>

                {/* Rating - Center Aligned */}
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i}
                      className={`text-lg ${i < item.rating ? 'text-primary' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Description - Center Aligned */}
                <p className="font-lexend text-sm md:text-base text-gray-600 leading-relaxed line-clamp-2 text-center">
                  {item.description}
                </p>

                {/* Price and Button - Not Center Aligned */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="font-lexend text-lg md:text-xl font-semibold text-dark">
                    ₹{item.price}
                  </span>
                  <button className="px-4 py-2 bg-white border-2 border-primary text-primary font-lexend text-sm font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md active:scale-95">
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

export default MenuSection;
