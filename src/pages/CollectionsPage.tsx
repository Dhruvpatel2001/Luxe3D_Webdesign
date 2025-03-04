import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Diamond Eternity Ring',
    type: 'jewelry',
    category: 'rings',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Sapphire Pendant',
    type: 'jewelry',
    category: 'necklaces',
    price: 899,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Gold Hoop Earrings',
    type: 'jewelry',
    category: 'earrings',
    price: 599,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Emerald Tennis Bracelet',
    type: 'jewelry',
    category: 'bracelets',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Persian Silk Rug',
    type: 'rug',
    category: 'persian',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Moroccan Wool Rug',
    type: 'rug',
    category: 'moroccan',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'Turkish Kilim Rug',
    type: 'rug',
    category: 'turkish',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1588362951121-9c29a7d9e927?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Modern Geometric Rug',
    type: 'rug',
    category: 'modern',
    price: 999,
    image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const CollectionsPage = () => {
  const [activeType, setActiveType] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  
  // Filter products based on selected type and category
  const filteredProducts = products.filter(product => {
    if (activeType !== 'all' && product.type !== activeType) return false;
    if (activeCategory !== 'all' && product.category !== activeCategory) return false;
    return true;
  });
  
  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    // Default: featured (no specific sort)
    return 0;
  });
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Collections</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our handcrafted pieces, each one a unique blend of artistry and innovation.
            Experience them in stunning 3D detail.
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Product Type Filter */}
            <div className="flex space-x-2">
              <button
                onClick={() => { setActiveType('all'); setActiveCategory('all'); }}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeType === 'all' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => { setActiveType('jewelry'); setActiveCategory('all'); }}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeType === 'jewelry' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                Jewelry
              </button>
              <button
                onClick={() => { setActiveType('rug'); setActiveCategory('all'); }}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeType === 'rug' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                Rugs
              </button>
            </div>
            
            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-800 text-white px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Category Filters - Only show if a type is selected */}
          {activeType !== 'all' && (
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === 'all' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                All {activeType === 'jewelry' ? 'Jewelry' : 'Rugs'}
              </button>
              
              {activeType === 'jewelry' ? (
                <>
                  <button
                    onClick={() => setActiveCategory('rings')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === 'rings' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Rings
                  </button>
                  <button
                    onClick={() => setActiveCategory('necklaces')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === 'necklaces' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Necklaces
                  </button>
                  <button
                    onClick={() => setActiveCategory('earrings')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === 'earrings' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Earrings
                  </button>
                  <button
                    onClick={() => setActiveCategory('bracelets')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === 'bracelets' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Bracelets
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setActiveCategory('persian')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === 'persian' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Persian
                  </button>
                  <button
                    onClick={() => setActiveCategory('moroccan')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === 'moroccan' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Moroccan
                  </button>
                  <button
                    onClick={() => setActiveCategory('turkish')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === 'turkish' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Turkish
                  </button>
                  <button
                    onClick={() => setActiveCategory('modern')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === 'modern' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Modern
                  </button>
                </>
              )}
            </div>
          )}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
        
        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No products found matching your criteria.</p>
            <button
              onClick={() => { setActiveType('all'); setActiveCategory('all'); }}
              className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CollectionsPage;