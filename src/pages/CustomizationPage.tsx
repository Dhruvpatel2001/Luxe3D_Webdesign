import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CustomizationTool from '../components/CustomizationTool';

const CustomizationPage = () => {
  const [productType, setProductType] = useState('jewelry');

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
          <h1 className="text-4xl font-bold mb-4">Design Your Own</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Create a unique piece that reflects your personal style. Our 3D customization tool 
            lets you visualize your creation in real-time.
          </p>
        </div>

        {/* Product Type Selector */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-gray-900/50 backdrop-blur-md rounded-full p-1 flex">
            <button
              onClick={() => setProductType('jewelry')}
              className={`flex-1 py-3 px-6 rounded-full transition-colors ${
                productType === 'jewelry' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Jewelry
            </button>
            <button
              onClick={() => setProductType('rug')}
              className={`flex-1 py-3 px-6 rounded-full transition-colors ${
                productType === 'rug' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Rugs
            </button>
          </div>
        </div>

        {/* Customization Tool */}
        <CustomizationTool productType={productType} />

        {/* How It Works Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl text-center"
            >
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize</h3>
              <p className="text-gray-400">
                Use our 3D tool to select materials, colors, and other design elements. 
                See your changes in real-time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl text-center"
            >
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Review</h3>
              <p className="text-gray-400">
                Examine your design from every angle. Try it in AR if available. 
                Make adjustments until it's perfect.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl text-center"
            >
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Order</h3>
              <p className="text-gray-400">
                Place your order and our artisans will handcraft your custom piece. 
                Receive updates throughout the creation process.
              </p>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">How long does it take to create a custom piece?</h3>
              <p className="text-gray-400">
                Custom jewelry typically takes 3-4 weeks to create, while custom rugs may take 6-8 weeks 
                depending on size and complexity. You'll receive regular updates throughout the process.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Can I make changes after placing my order?</h3>
              <p className="text-gray-400">
                Minor changes can be accommodated within 48 hours of placing your order. 
                For significant changes, additional fees may apply.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">What if I'm not satisfied with my custom piece?</h3>
              <p className="text-gray-400">
                We offer a satisfaction guarantee. If your piece doesn't match the approved design, 
                we'll make adjustments at no additional cost. Custom orders cannot be returned unless there's a defect.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Can I see a sample before ordering?</h3>
              <p className="text-gray-400">
                For jewelry, we can provide material samples. For rugs, we offer small swatches of materials and colors. 
                Our 3D visualization tool is designed to give you an accurate representation of the final product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomizationPage;