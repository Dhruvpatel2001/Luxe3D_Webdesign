import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductViewer from '../components/ProductViewer';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';

// Mock product data - in a real app, this would come from an API
const products = [
  {
    id: '1',
    name: 'Diamond Eternity Ring',
    type: 'jewelry',
    price: 1299,
    description: 'This stunning eternity ring features brilliant-cut diamonds set in 18k gold. Each diamond is carefully selected for exceptional clarity and brilliance.',
    details: [
      'Material: 18k Gold',
      'Gemstone: Diamond',
      'Carat Total Weight: 1.5ct',
      'Clarity: VS1-VS2',
      'Color: F-G'
    ],
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '2',
    name: 'Sapphire Pendant',
    type: 'jewelry',
    price: 899,
    description: 'A breathtaking sapphire pendant featuring a 2-carat blue sapphire surrounded by a halo of diamonds, suspended on an 18k white gold chain.',
    details: [
      'Material: 18k White Gold',
      'Main Stone: Blue Sapphire',
      'Accent Stones: Diamonds',
      'Chain Length: 18 inches',
      'Pendant Size: 12mm x 8mm'
    ],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '3',
    name: 'Persian Silk Rug',
    type: 'rug',
    price: 2499,
    description: 'Handcrafted by master artisans, this Persian silk rug features intricate traditional patterns in vibrant colors. Each rug takes months to complete using ancient techniques.',
    details: [
      'Material: 100% Natural Silk',
      'Origin: Isfahan, Iran',
      'Size: 6\' x 9\'',
      'Knot Density: 400 KPSI',
      'Age: New'
    ],
    images: [
      'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588362951121-9c29a7d9e927?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '4',
    name: 'Moroccan Wool Rug',
    type: 'rug',
    price: 1899,
    description: 'This authentic Moroccan rug is hand-knotted by Berber artisans using traditional techniques. The geometric patterns and plush wool create a stunning focal point for any room.',
    details: [
      'Material: 100% Wool',
      'Origin: Atlas Mountains, Morocco',
      'Size: 5\' x 8\'',
      'Pile Height: 1.5 inches',
      'Style: Beni Ourain'
    ],
    images: [
      'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588362951121-9c29a7d9e927?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  }
];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Find the product based on the ID from the URL
  const product = products.find(p => p.id === id) || products[0];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images and 3D Viewer */}
          <div>
            <div className="mb-4">
              <ProductViewer productType={product.type} />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-purple-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl text-purple-400 mb-6">${product.price.toLocaleString()}</p>
            
            <div className="mb-6">
              <p className="text-gray-300">{product.description}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quantity Selector */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-gray-800 rounded-l-lg flex items-center justify-center"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-10 bg-gray-800 text-center focus:outline-none"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-gray-800 rounded-r-lg flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                <ShoppingCart className="mr-2" size={20} />
                Add to Cart
              </motion.button>
              
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-lg transition-colors"
                >
                  <Heart className="mr-2" size={20} />
                  Wishlist
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-lg transition-colors"
                >
                  <Share2 className="mr-2" size={20} />
                  Share
                </motion.button>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Customize This Design
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPage;