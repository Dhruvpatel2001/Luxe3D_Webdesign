import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductViewer from './ProductViewer';

const materialOptions = {
  jewelry: {
    metals: [
      { name: 'Gold', value: '#FFD700', metalness: 1, roughness: 0.1 },
      { name: 'Silver', value: '#C0C0C0', metalness: 1, roughness: 0.2 },
      { name: 'Rose Gold', value: '#B76E79', metalness: 1, roughness: 0.1 },
      { name: 'Platinum', value: '#E5E4E2', metalness: 1, roughness: 0.1 },
    ],
    gemstones: [
      { name: 'Diamond', value: '#B9F2FF', metalness: 0.5, roughness: 0 },
      { name: 'Ruby', value: '#E0115F', metalness: 0.3, roughness: 0.1 },
      { name: 'Sapphire', value: '#0F52BA', metalness: 0.3, roughness: 0.1 },
      { name: 'Emerald', value: '#50C878', metalness: 0.3, roughness: 0.1 },
    ],
  },
  rugs: {
    materials: [
      { name: 'Wool', value: '#F5F5DC', metalness: 0, roughness: 0.8 },
      { name: 'Silk', value: '#F0EAD6', metalness: 0.1, roughness: 0.5 },
      { name: 'Cotton', value: '#FFFFFF', metalness: 0, roughness: 0.7 },
      { name: 'Jute', value: '#D4B886', metalness: 0, roughness: 0.9 },
    ],
    colors: [
      { name: 'Ivory', value: '#FFFFF0', metalness: 0, roughness: 0.7 },
      { name: 'Navy', value: '#000080', metalness: 0, roughness: 0.7 },
      { name: 'Burgundy', value: '#800020', metalness: 0, roughness: 0.7 },
      { name: 'Forest Green', value: '#228B22', metalness: 0, roughness: 0.7 },
    ],
  },
};

const CustomizationTool = ({ productType = 'jewelry' }) => {
  const [selectedMaterial, setSelectedMaterial] = useState(
    productType === 'jewelry' 
      ? materialOptions.jewelry.metals[0] 
      : materialOptions.rugs.materials[0]
  );
  
  const [selectedAccent, setSelectedAccent] = useState(
    productType === 'jewelry' 
      ? materialOptions.jewelry.gemstones[0] 
      : materialOptions.rugs.colors[0]
  );

  const [customText, setCustomText] = useState('');
  const [selectedSize, setSelectedSize] = useState('medium');

  const handleMaterialChange = (material) => {
    setSelectedMaterial(material);
  };

  const handleAccentChange = (accent) => {
    setSelectedAccent(accent);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 3D Product Viewer */}
        <div>
          <ProductViewer 
            productType={productType} 
            initialMaterials={{
              color: selectedMaterial.value,
              metalness: selectedMaterial.metalness,
              roughness: selectedMaterial.roughness
            }}
          />
        </div>

        {/* Customization Controls */}
        <div className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Customize Your {productType === 'jewelry' ? 'Jewelry' : 'Rug'}</h2>
          
          {/* Material Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">
              {productType === 'jewelry' ? 'Metal' : 'Material'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(productType === 'jewelry' ? materialOptions.jewelry.metals : materialOptions.rugs.materials).map((material) => (
                <button
                  key={material.name}
                  onClick={() => handleMaterialChange(material)}
                  className={`p-3 rounded-lg transition-all ${
                    selectedMaterial.name === material.name
                      ? 'bg-purple-600 ring-2 ring-purple-400'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <div 
                    className="w-full h-8 rounded mb-2" 
                    style={{ backgroundColor: material.value }}
                  ></div>
                  <span className="text-sm">{material.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Accent Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">
              {productType === 'jewelry' ? 'Gemstone' : 'Color'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(productType === 'jewelry' ? materialOptions.jewelry.gemstones : materialOptions.rugs.colors).map((accent) => (
                <button
                  key={accent.name}
                  onClick={() => handleAccentChange(accent)}
                  className={`p-3 rounded-lg transition-all ${
                    selectedAccent.name === accent.name
                      ? 'bg-purple-600 ring-2 ring-purple-400'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <div 
                    className="w-full h-8 rounded mb-2" 
                    style={{ backgroundColor: accent.value }}
                  ></div>
                  <span className="text-sm">{accent.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Size</h3>
            <div className="flex space-x-3">
              {['small', 'medium', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all ${
                    selectedSize === size
                      ? 'bg-purple-600'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Engraving/Pattern */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">
              {productType === 'jewelry' ? 'Engraving' : 'Custom Pattern'}
            </h3>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder={productType === 'jewelry' ? 'Add your engraving text...' : 'Describe your custom pattern...'}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Price and Add to Cart */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <span className="text-gray-400 text-sm">Price</span>
              <p className="text-2xl font-bold">$1,299.00</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationTool;