// import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import Bestsellers from './components/NewArrivals';
import BrandStory from './components/BrandStory';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll'; // Import SmoothScroll
import './index.css';
import Header from "./components/Header/Header";

function App() {
  return (
    <SmoothScroll>
      <Header />

      <main className="pt-16 bg-white dark:bg-[#1f1f1f] transition-colors duration-300">
        <Hero />
        <FeaturedCollections />
        <Bestsellers />
        <BrandStory />
        <Testimonial />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;