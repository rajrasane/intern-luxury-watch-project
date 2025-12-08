import FeaturedCard from './FeaturedCard';
import featuredClassic from '../assets/images/featured-classic.png';
import featuredSport from '../assets/images/featured-sport.png';
import featuredLimited from '../assets/images/featured-limited.png';

const FeaturedCollections = () => {
  const featuredWatches = [
    {
      id: 1,
      imageUrl: featuredClassic,
      title: "Classic",
      linkHref: "#classic",
      hasSale: true,
    },
    {
      id: 2,
      imageUrl: featuredSport,
      title: "Sport",
      linkHref: "#sport",
      hasSale: true,
    },
    {
      id: 3,
      imageUrl: featuredLimited,
      title: "Limited Edition",
      linkHref: "#limited-edition",
      hasSale: true,
    },
  ];

  return (
    <section id="featured" className="bg-[#e5e5ea] dark:bg-[#2b2b2b] py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-roboto font-medium text-xl tracking-wider text-gray-700 dark:text-gray-200 inline-block relative pb-2">
            FEATURED
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gray-700 dark:bg-gray-200"></span> {/* Line under FEATURED */}
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