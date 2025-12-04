// src/components/FeaturedCard.jsx
import React from 'react';

const FeaturedCard = ({ imageUrl, title, linkHref, hasSale }) => {
  return (
    <div className="relative bg-white border border-gray-100 shadow-md p-4 flex flex-col items-center">
      {hasSale && (
        <div className="absolute top-4 left-4 bg-orange-400 text-white text-xs font-roboto font-medium px-2 py-1 rotate-[-90deg] transform origin-top-left">
          SALE
        </div>
      )}
      <div className="mb-4">
        <img src={imageUrl} alt={title} className="w-auto h-60 object-contain" />
      </div>
      <div className="text-center mb-6">
        <h3 className="font-roboto font-bold text-lg tracking-wider text-gray-700">{title}</h3>
      </div>
      <a
        href={linkHref}
        className="bg-gray-800 text-white font-roboto font-medium text-sm px-8 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300"
      >
        Explore
      </a>
    </div>
  );
};

export default FeaturedCard;