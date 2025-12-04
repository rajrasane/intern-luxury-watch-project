// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import Bestsellers from './components/Bestsellers';
import BrandStory from './components/BrandStory';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer'; // Import Footer
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <FeaturedCollections />
        <Bestsellers />
        <BrandStory />
        <Testimonial />
        <Footer /> {/* Render the Footer component */}
      </main>
    </>
  );
}

export default App;