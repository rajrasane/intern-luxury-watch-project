import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import Bestsellers from '../components/NewArrivals';
import BrandStory from '../components/BrandStory';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <main className="pt-16 bg-white dark:bg-[#1f1f1f] transition-colors duration-300">
      <Hero />
      <div id="collections" className="scroll-mt-15"><FeaturedCollections /></div>
      <div id="new-arrivals" className="scroll-mt-15"><Bestsellers /></div>
      <div id="about" className="scroll-mt-15"><BrandStory /></div>
      <div id="testimonials" className="scroll-mt-15"><Testimonial /></div>
    </main>
  );
};

export default Home;
