import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PlanetaryConstellationNav() {
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [hubExpanded, setHubExpanded] = useState(false);

  const sisterPlatforms = [
    {
      name: "The Realm of Wealth",
      url: "https://www.therealmofwealth.com",
      description: "A portal into regenerative financial systems.",
    },
    {
      name: "The Wake Up Movement",
      url: "https://www.thewakeupmovement.com",
      description: "A global citizen-led awakening for Earth.",
    },
    {
      name: "She Drives It",
      url: "https://www.shedrivesit.com",
      description: "Empowering women-led innovation and mobility.",
    },
    {
      name: "Namma Mane Foundation",
      url: "https://www.nammamanefoundation.com",
      description: "Grassroots ecological development initiatives.",
    },
    {
      name: "Namma Mane TV",
      url: "https://www.nammamanetv.com",
      description: "Media for sustainable futures.",
    },
    {
      name: "The Great Indian Platform",
      url: "https://www.thegreatindianplatform.com",
      description: "Omnichannel commerce ecosystem for rural India.",
    },
  ];

  const hubMenu = [
    { name: "About", url: "#about" },
    { name: "Disciplines", url: "#disciplines" },
    { name: "Ecosystem", url: "#ecosystem" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Orbital Rings */}
      {sisterPlatforms.map((_, index) => (
        <div
          key={index}
          className="absolute rounded-full border border-blue-500/30 animate-spin-slow"
          style={{
            width: `${200 + index * 120}px`,
            height: `${200 + index * 120}px`,
            animationDuration: `${60 + index * 10}s`,
          }}
        />
      ))}

      {/* Sister Platforms */}
      {sisterPlatforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          className="absolute flex flex-col items-center justify-center"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${index *
              (360 / sisterPlatforms.length)}deg) translate(${200 +
              index * 60}px) rotate(-${index *
              (360 / sisterPlatforms.length)}deg)`,
          }}
          whileHover={{ scale: 1.2 }}
          onHoverStart={() => setExpandedNode(platform.name)}
          onHoverEnd={() => setExpandedNode(null)}
          whileTap={{ scale: 1.4 }}
          onClick={() => window.open(platform.url, "_blank")}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg cursor-pointer transition-shadow duration-300 hover:shadow-blue-500/50" />
          {expandedNode === platform.name && (
            <motion.div
              className="absolute top-20 text-center text-white text-sm bg-black/80 backdrop-blur-sm p-3 rounded-lg shadow-xl w-48 border border-blue-500/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <h3 className="font-semibold text-blue-300 mb-1">{platform.name}</h3>
              <p className="text-gray-300">{platform.description}</p>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Central Hub */}
      <motion.div
        className="w-28 h-28 rounded-full bg-gradient-to-r from-green-400 to-blue-600 shadow-2xl flex items-center justify-center cursor-pointer relative z-10 border-2 border-white/20"
        whileHover={{ scale: 1.2, boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)" }}
        whileTap={{ scale: 1.4 }}
        onClick={() => setHubExpanded(!hubExpanded)}
      >
        <span className="text-white font-bold text-center text-xs leading-tight">Geosymbinomics</span>
      </motion.div>

      {/* Radial Menu Expansion */}
      {hubExpanded && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {hubMenu.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              className="absolute bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-md hover:bg-white/40 transition-all duration-300 border border-white/30"
              style={{
                transform: `rotate(${index * (360 / hubMenu.length)}deg) translate(150px) rotate(-${index *
                  (360 / hubMenu.length)}deg)`,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
}