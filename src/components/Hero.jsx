// src/components/Hero.jsx
import React from 'react';
import heroWatch from '../assets/images/hero-watch.png';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[80vh] lg:min-h-screen flex items-center justify-center py-16 bg-[#ffb568] lg:bg-[#ffb568]"> {/* Orange bg for mobile/tablet matching design */}
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 gap-12 lg:gap-0">
        {/* Left Content Area (Desktop) / Bottom Content (Mobile) */}
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <h1 className="font-roboto font-medium text-4xl md:text-5xl lg:text-6xl leading-tight tracking-[-0.025em] text-[#2e2e2e] mb-6">
            Crafted for the Moments That Matter
          </h1>
          <p className="font-roboto-serif font-normal text-base md:text-lg leading-relaxed text-[#2e2e2e] lg:text-[#595959] mb-10 max-w-md mx-auto lg:mx-0">
            Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.
          </p>
          <button className="bg-white text-black font-roboto font-bold text-lg md:text-xl lg:text-3xl px-10 py-3 lg:px-12 lg:py-4 rounded-full hover:bg-gray-900 dark:bg-black dark:text-white dark:hover:bg-gray-900 transition-colors duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Image Area (Desktop) / Top Image (Mobile) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
           {/* Mobile/Tablet Background Image if needed */}
          <img
            src={heroWatch} // Watch Image
            alt="Luxury Watch"
            className="max-w-[80%] md:max-w-[60%] lg:max-w-full h-auto object-cover drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
