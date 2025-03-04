import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Diamond Eternity Ring',
    type: 'jewelry',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Sapphire Pendant',
    type: 'jewelry',
    price: 899,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Persian Silk Rug',
    type: 'rug',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Moroccan Wool Rug',
    type: 'rug',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collections</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our handcrafted pieces, each one a unique blend of artistry and innovation.
            Experience them in stunning 3D detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden rounded-xl aspect-square mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="px-3 py-1 bg-purple-600 text-xs uppercase tracking-wider rounded-full">
                        View in 3D
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-400">${product.price.toLocaleString()}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/collections"
            className="inline-block px-8 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg transition-colors duration-300"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;