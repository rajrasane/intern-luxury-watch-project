// src/components/FeaturedCard.jsx
import React from 'react';

const FeaturedCard = ({ imageUrl, title, linkHref, hasSale }) => {
  return (
    <div className="relative bg-white dark:bg-[#1f1f1f] border border-gray-100 dark:border-gray-800 shadow-md p-4 flex flex-col items-center transition-colors duration-300">
      {hasSale && (
        <div className="absolute top-4 left-4 bg-orange-400 text-white text-xs font-roboto font-medium px-2 py-1 rotate-[-90deg] transform origin-top-left">
          SALE
        </div>
      )}
      <div className="mb-4 w-full flex justify-center">
        <img src={imageUrl} alt={title} className="w-auto h-60 object-contain" />
      </div>
      <div className="text-center mb-6">
        <h3 className="font-roboto font-bold text-lg tracking-wider text-gray-700 dark:text-gray-200">{title}</h3>
      </div>
      <a
        href={linkHref}
        className="bg-black dark:bg-gray-700 text-white dark:text-gray-100 font-roboto font-medium text-sm px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
      >
        Explore
      </a>
    </div>
  );
};

export default FeaturedCard;