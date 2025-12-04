// src/components/FeaturedCollections.jsx
import React from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedCollections = () => {
  const featuredWatches = [
    {
      id: 1,
      imageUrl: "http://localhost:9001/assets/by-file-media-id/dceca7c4-6ded-8178-8007-3588fce7c331",
      title: "Classic",
      linkHref: "#classic",
      hasSale: true,
    },
    {
      id: 2,
      imageUrl: "http://localhost:9001/assets/by-file-media-id/dceca7c4-6ded-8178-8007-3588fce7c338",
      title: "Sport",
      linkHref: "#sport",
      hasSale: true,
    },
    {
      id: 3,
      imageUrl: "http://localhost:9001/assets/by-file-media-id/dceca7c4-6ded-8178-8007-3588fce7c32c",
      title: "Limited Edition",
      linkHref: "#limited-edition",
      hasSale: true,
    },
  ];

  return (
    <section className="bg-[#e5e5ea] py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-roboto font-medium text-xl tracking-wider text-gray-700 inline-block relative pb-2">
            FEATURED
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gray-700"></span> {/* Line under FEATURED */}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWatches.map((watch) => (
            <FeaturedCard
              key={watch.id}
              imageUrl={watch.imageUrl}
              title={watch.title}
              linkHref={watch.linkHref}
              hasSale={watch.hasSale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;