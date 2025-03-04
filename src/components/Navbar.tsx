import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          LUXE3D
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/collections"
            className="hover:text-purple-400 transition-colors"
          >
            Collections
          </Link>
          <Link
            to="/customize"
            className="hover:text-purple-400 transition-colors"
          >
            Customize
          </Link>
          <Link
            to="/about"
            className="hover:text-purple-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Search className="w-5 h-5 cursor-pointer hover:text-purple-400 transition-colors" />
          <User className="w-5 h-5 cursor-pointer hover:text-purple-400 transition-colors" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-purple-400 transition-colors" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/collections"
              className="py-2 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/customize"
              className="py-2 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Customize
            </Link>
            <Link
              to="/about"
              className="py-2 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="py-2 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-6 py-2">
              <Search className="w-5 h-5 cursor-pointer" />
              <User className="w-5 h-5 cursor-pointer" />
              <ShoppingCart className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;