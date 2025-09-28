import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Globe className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold">Geosymbinomics</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building regenerative systems for a thriving planetary future through 
              innovative finance, community empowerment, and ecological wisdom.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5 text-red-400" />
                <span>Community First</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Leaf className="w-5 h-5 text-green-400" />
                <span>Ecological Wisdom</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>Global Impact</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="text-gray-300 mb-4">
              Join our global community of regenerative changemakers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Geosymbinomics. All rights reserved. 
            <span className="mx-2">•</span>
            Building a regenerative future together.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}