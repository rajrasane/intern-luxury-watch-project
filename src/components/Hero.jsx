// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Left Content Area */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-roboto font-medium text-6xl leading-tight tracking-[-0.025em] text-[#2e2e2e] mb-6">
            Crafted for the Moments That Matter
          </h1>
          <p className="font-roboto-serif font-normal text-base leading-relaxed text-[#f2f2f7] mb-10"> {/* Using the light color from Penpot, might need adjustment */}
            Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.
          </p>
          <button className="bg-black text-white font-roboto font-bold text-3xl px-12 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Image Area */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="http://localhost:9001/assets/by-file-media-id/dceca7c4-6ded-8178-8007-3588fce7c332" // From Penpot design
            alt="Luxury Watch"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;