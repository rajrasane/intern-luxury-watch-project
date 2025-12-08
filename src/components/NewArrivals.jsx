import ProductCard from './Products';
import product1 from '../assets/images/product-1.png';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import product4 from '../assets/images/product-4.png';

const Prodcuts = () => {
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
  ];

  return (
    <section id='new-arrivals' className="bg-[#fcfcfc] dark:bg-[#121212] pt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-roboto font-medium text-xl tracking-wider text-gray-700 dark:text-gray-200 inline-block relative pb-2">
            New Arrivals
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gray-700 dark:bg-gray-200"></span>
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

export default Prodcuts;