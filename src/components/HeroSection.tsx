import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls, Environment, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder model component - in production, you'd use actual 3D models
const JewelryModel = () => {
  // This is a placeholder. In a real app, you'd load an actual GLTF model
  return (
    <mesh>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial 
        color="#ffcb8e" 
        metalness={1} 
        roughness={0.2} 
        envMapIntensity={1.5} 
      />
    </mesh>
  );
};

const HeroSection = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, -Math.PI / 6, 0]}
            polar={[-Math.PI / 6, Math.PI / 6]}
            azimuth={[-Math.PI / 6, Math.PI / 6]}
          >
            <JewelryModel />
          </PresentationControls>
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              Luxury Reimagined in 3D
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Experience our handcrafted jewelry and artisan rugs in immersive 3D. 
              Customize your own unique pieces or explore our curated collections.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/customize"
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-semibold"
              >
                Design Your Own
              </Link>
              <Link
                to="/collections"
                className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-semibold"
              >
                Shop Collections
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;