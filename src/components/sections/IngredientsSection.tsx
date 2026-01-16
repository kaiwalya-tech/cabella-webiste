import React from 'react';
import sourdoughIcon from '../../assets/icons/sourdough.png';
import cheeseIcon from '../../assets/icons/cheese.png';
import tomatoesIcon from '../../assets/icons/tomato.png';
import oliveOilIcon from '../../assets/icons/olive_oil.png';
import flourIcon from '../../assets/icons/flour.png';
import vegetablesIcon from '../../assets/icons/vegetables.png';
import textLinesIcon from '../../assets/icons/text_3_lines_right.png';

const IngredientsSection: React.FC = () => {
  const ingredients = [
    {
      id: 1,
      name: 'Sourdough',
      icon: sourdoughIcon,
      description: 'Our dough is made fresh on site every day and fermented for 24 hours from an 18th century starter. Your pizza might take seconds to devour, but it was hundreds of years in the making. Our dough is fermented in the absence of any external chemical yeast and is baked in our oven at 400°c for 90 seconds. The slow levitation and blast cooking process locks in the flour\'s natural aroma and moisture giving a soft and easily digestible crust. An important by-product of this century old process is the edge of your pizza (cornicione) which shouldn\'t be discarded but instead savored.',
      column: '1 / 3'
    },
    {
      id: 2,
      name: 'Cheese',
      icon: cheeseIcon,
      description: 'Our dough is made fresh on site every day and fermented for 24 hours from an 18th century starter. Your pizza might take seconds to devour, but it was hundreds of years in the making. Our dough is fermented in the absence of any external chemical yeast and is baked in our oven at 400°c for 90 seconds. The slow levitation and blast cooking process locks in the flour\'s natural aroma and moisture giving a soft and easily digestible crust. An important by-product of this century old process is the edge of your pizza (cornicione) which shouldn\'t be discarded but instead savored.',
      column: '3 / 5'
    },
    {
      id: 3,
      name: 'Tomatoes',
      icon: tomatoesIcon,
      description: 'Our tomato base finds its origin from 100% pureed plum tomatoes grown in Oliveto Citra, a small town in the Campania region of south – western Italy. The processing and packaging of our tomatoes are completed within 24 hours of harvesting to ensure the fresh taste of newly harvested tomatoes are preserved and passed on in every bite.',
      column: '1 / 3'
    },
    {
      id: 4,
      name: 'Olive Oil',
      icon: oliveOilIcon,
      description: 'Our olive oil is made up of mature Mediterranean olives created in rare, selected territories and is harvested by a DOP & PGI certified family run company set up in 1888 just outside Palermo, Italy. This carefully selected olive oil has a rich, gold-green texture and leaves a slightly fruity flavor on the palate.',
      column: '3 / 4'
    },
    {
      id: 5,
      name: 'Flour',
      icon: flourIcon,
      description: 'In order to give you the perfect neapolitan bite, we have worked tirelessly to capture the perfect balance of protein and moisture, combining different varieties of flour from all over India. The result – a unique, one of a kind, blend of flour, using nonna\'s traditional recipe, from our kitchen to your plate.',
      column: '4 / 5'
    },
    {
      id: 6,
      name: 'Vegetables',
      icon: vegetablesIcon,
      description: 'Our mission from the get-go was to support local indian communities to the best of our ability, to be sustainable and to leverage the latest innovation to ensure that you have the highest quality ingredients on your plate. We strongly believe that all the ingredients that go into making your food from the olive oil to the tomatoes, should be of the highest quality as your body deserves nothing but the best. Vegetables are sourced locally using hydroponics, a method of growing plants without soil. As opposed to original farming techniques, by delivering nutrients and water to the roots directly, vegetables boast a higher nutritional content, are grown using a much smaller footprint, use significantly less water and the need for any added fertilizer to enhance the quality of the soil or top up nutrients that the soil loses over time is eliminated. Additionally, because hydroponic vegetables are contained within a maintained greenhouse structure, the crop is not susceptible to insects and pests and therefore there is no need for any insecticides or pesticides as seen in traditional farming, resulting in nutritionally packed produce that is beneficial for you, your loved ones and the environment.',
      column: '1 / 5'
    }
  ];

  return (
    <section id="ingredients" className="w-full bg-white scroll-smooth overflow-x-hidden py-12 md:py-16 lg:py-20">
      {/* Heading */}
      <div className="w-full flex justify-center mb-12 md:mb-16 px-10 sm:px-16 lg:px-20">
        <h2 className="font-impact text-5xl sm:text-6xl md:text-7xl font-normal" style={{
          color: '#F78022',
          transform: 'rotate(-1deg)',
          backgroundColor: '#000000',
          padding: '0 16px',
          borderRadius: '4px',
          display: 'inline-block',
        }}>
          Ingredients
        </h2>
      </div>

      {/* Ingredients Grid */}
      <div className="w-full px-10 sm:px-16 lg:px-20">
        {/* Row 1: Sourdough and Cheese */}
        <div className="grid grid-cols-2 gap-0 max-w-full mx-auto border-b-2 border-dotted" style={{ borderBottomColor: '#F78022' }}>
          {ingredients.slice(0, 2).map((ingredient) => (
            <div
              key={ingredient.id}
              style={{
                paddingBottom: '32px',
                paddingLeft: ingredient.id === 2 ? '24px' : '0',
                paddingRight: ingredient.id === 1 ? '24px' : '0',
              }}
            >
              {/* Icon and Name Container */}
              <div className="flex flex-col items-start gap-4 mb-6">
                {/* Icon */}
                <img src={ingredient.icon} alt={ingredient.name} className="w-20 h-20 object-contain" />
                
                {/* Name with wavy underline and decorative icon */}
                <div className="flex items-center gap-0 justify-start">
                  <h3
                    className="font-lexend font-extrabold text-lg md:text-xl text-dark text-left"
                    style={{
                      textDecoration: 'underline wavy #F78022',
                      textDecorationThickness: '2px',
                      textUnderlineOffset: '4px',
                    }}
                  >
                    {ingredient.name}
                  </h3>
                  <img src={textLinesIcon} alt="Lines" className="w-7 h-7 object-contain flex-shrink-0" />
                </div>
              </div>

              {/* Description */}
              <p className="font-lexend font-normal text-sm md:text-base text-gray-700 leading-relaxed text-left">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: Tomatoes, Olive Oil, and Flour */}
        <div className="grid grid-cols-3 gap-0 max-w-full mx-auto border-b-2 border-dotted" style={{ borderBottomColor: '#F78022' }}>
          {ingredients.slice(2, 5).map((ingredient, index) => (
            <div
              key={ingredient.id}
              style={{
                paddingTop: '32px',
                paddingBottom: '32px',
                paddingLeft: index > 0 ? '24px' : '0',
                paddingRight: index < 2 ? '24px' : '0',
              }}
            >
              {/* Icon and Name Container */}
              <div className="flex flex-col items-start gap-4 mb-6">
                {/* Icon */}
                <img src={ingredient.icon} alt={ingredient.name} className="w-20 h-20 object-contain" />
                
                {/* Name with wavy underline and decorative icon */}
                <div className="flex items-center gap-0 justify-start">
                  <h3
                    className="font-lexend font-extrabold text-lg md:text-xl text-dark text-left"
                    style={{
                      textDecoration: 'underline wavy #F78022',
                      textDecorationThickness: '2px',
                      textUnderlineOffset: '4px',
                    }}
                  >
                    {ingredient.name}
                  </h3>
                  <img src={textLinesIcon} alt="Lines" className="w-7 h-7 object-contain flex-shrink-0" />
                </div>
              </div>

              {/* Description */}
              <p className="font-lexend font-normal text-sm md:text-base text-gray-700 leading-relaxed text-left">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 3: Vegetables */}
        <div className="grid grid-cols-1 gap-0 max-w-full mx-auto">
          {ingredients.slice(5, 6).map((ingredient) => (
            <div
              key={ingredient.id}
              style={{
                paddingTop: '32px',
              }}
            >
              {/* Icon and Name Container */}
              <div className="flex flex-col items-start gap-4 mb-6">
                {/* Icon */}
                <img src={ingredient.icon} alt={ingredient.name} className="w-20 h-20 object-contain" />
                
                {/* Name with wavy underline and decorative icon */}
                <div className="flex items-center gap-0 justify-start">
                  <h3
                    className="font-lexend font-extrabold text-lg md:text-xl text-dark text-left"
                    style={{
                      textDecoration: 'underline wavy #F78022',
                      textDecorationThickness: '2px',
                      textUnderlineOffset: '4px',
                    }}
                  >
                    {ingredient.name}
                  </h3>
                  <img src={textLinesIcon} alt="Lines" className="w-7 h-7 object-contain flex-shrink-0" />
                </div>
              </div>

              {/* Description */}
              <p className="font-lexend font-normal text-sm md:text-base text-gray-700 leading-relaxed text-left">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
