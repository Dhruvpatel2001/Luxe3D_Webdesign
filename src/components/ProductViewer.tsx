import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, ContactShadows, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Maximize, Minimize, RefreshCw } from 'lucide-react';

// Placeholder model component - in production, you'd use actual 3D models
const Model = ({ modelPath, materials, onMaterialChange }) => {
  const meshRef = useRef();
  
  // This is a placeholder. In a real app, you'd load an actual GLTF model
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial 
        color={materials.color} 
        metalness={materials.metalness} 
        roughness={materials.roughness} 
        envMapIntensity={1.5} 
      />
    </mesh>
  );
};

const ProductViewer = ({ productType = 'jewelry', initialMaterials = { color: '#ffcb8e', metalness: 1, roughness: 0.2 } }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [materials, setMaterials] = useState(initialMaterials);
  const containerRef = useRef();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleMaterialChange = (property, value) => {
    setMaterials(prev => ({
      ...prev,
      [property]: value
    }));
  };

  return (
    <div 
      ref={containerRef}
      className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'h-[500px] w-full rounded-xl overflow-hidden'}`}
    >
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Model 
          modelPath={`/models/${productType}.glb`} 
          materials={materials}
          onMaterialChange={handleMaterialChange}
        />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={isRotating}
          autoRotate={isRotating}
          autoRotateSpeed={2}
        />
        <Environment preset="studio" />
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={5} 
        />
      </Canvas>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button 
          onClick={() => setIsRotating(!isRotating)}
          className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
        >
          <RefreshCw size={20} className={isRotating ? "text-purple-400" : "text-white"} />
        </button>
        <button 
          onClick={toggleFullscreen}
          className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
      </div>

      {/* AR Button (Placeholder - would require AR implementation) */}
      <button 
        className="absolute bottom-4 left-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-colors rounded-full text-sm font-medium"
      >
        Try in AR
      </button>
    </div>
  );
};

export default ProductViewer;