// src/components/Bestsellers.jsx
import React from 'react';
import ProductCard from './ProductCard';
import product1 from '../assets/images/product-1.png';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import product4 from '../assets/images/product-4.png';
import product5 from '../assets/images/product-5.png';

const Bestsellers = () => {
  const products = [
    {
      id: 1,
      name: "First One",
      price: "₹890",
      imageUrl: product1,
    },
    {
      id: 2,
      name: "Second One",
      price: "₹890",
      imageUrl: product2,
    },
    {
      id: 3,
      name: "Third One",
      price: "₹890",
      imageUrl: product3,
    },
    {
      id: 4,
      name: "Fourth One",
      price: "₹890",
      imageUrl: product4,
    },
    {
      id: 5,
      name: "Fifth One",
      price: "₹890",
      imageUrl: product5,
    },
  ];

  return (
    <section className="bg-[#fcfcfc] py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-roboto font-medium text-xl tracking-wider text-gray-700 inline-block relative pb-2">
            PRODUCTS
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gray-700"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;