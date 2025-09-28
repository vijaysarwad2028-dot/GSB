import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const platforms = [
    {
      name: "The Realm of Wealth",
      url: "https://www.therealmofwealth.com",
      description: "A portal into regenerative financial systems that create abundance for all.",
      color: "from-yellow-400 to-orange-500",
      details: "Pioneering new models of wealth creation that prioritize ecological and social regeneration alongside financial returns."
    },
    {
      name: "The Wake Up Movement",
      url: "https://www.thewakeupmovement.com",
      description: "A global citizen-led awakening for Earth's healing and transformation.",
      color: "from-purple-400 to-pink-500",
      details: "Mobilizing conscious citizens worldwide to take action for planetary healing through education, activism, and community building."
    },
    {
      name: "She Drives It",
      url: "https://www.shedrivesit.com",
      description: "Empowering women-led innovation and sustainable mobility solutions.",
      color: "from-pink-400 to-red-500",
      details: "Supporting women entrepreneurs and innovators in creating sustainable transportation and mobility solutions for the future."
    },
    {
      name: "Namma Mane Foundation",
      url: "https://www.nammamanefoundation.com",
      description: "Grassroots ecological development initiatives rooted in community wisdom.",
      color: "from-green-400 to-emerald-500",
      details: "Working directly with rural communities to implement sustainable development projects that honor traditional knowledge and ecological principles."
    },
    {
      name: "Namma Mane TV",
      url: "https://www.nammamanetv.com",
      description: "Media platform amplifying voices for sustainable futures.",
      color: "from-blue-400 to-cyan-500",
      details: "Creating and distributing content that educates, inspires, and connects communities working toward regenerative futures."
    },
    {
      name: "The Great Indian Platform",
      url: "https://www.thegreatindianplatform.com",
      description: "Omnichannel commerce ecosystem connecting rural India to global markets.",
      color: "from-indigo-400 to-purple-500",
      details: "Building digital infrastructure that enables rural communities to participate in the global economy while preserving local culture and values."
    }
  ];

  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-green-400">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A constellation of interconnected platforms working together to create 
            regenerative impact across multiple domains of human activity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedPlatform(selectedPlatform === platform.name ? null : platform.name)}
            >
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <div className="w-8 h-8 bg-white rounded-full opacity-90" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
                  {platform.name}
                </h3>
                
                <p className="text-gray-300 text-center leading-relaxed mb-6">
                  {platform.description}
                </p>

                <div className="flex items-center justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(platform.url, '_blank');
                    }}
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPlatform && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {platforms.find(p => p.name === selectedPlatform)?.name}
                </h3>
                <button
                  onClick={() => setSelectedPlatform(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {platforms.find(p => p.name === selectedPlatform)?.details}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}