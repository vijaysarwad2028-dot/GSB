import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: "Regenerative Finance",
      description: "Building financial systems that heal rather than extract, creating abundance for all stakeholders."
    },
    {
      icon: Target,
      title: "Systemic Solutions",
      description: "Addressing root causes through interconnected approaches that create lasting positive change."
    },
    {
      icon: Heart,
      title: "Community Centered",
      description: "Empowering local communities with tools and resources for sustainable development."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Fostering breakthrough technologies and methodologies for planetary regeneration."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">Geosymbinomics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are pioneering a new paradigm of regenerative economics that recognizes the 
            interconnectedness of all life systems. Through innovative financial mechanisms, 
            community empowerment, and technological solutions, we're building a future where 
            economic activity enhances rather than degrades our planetary ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-6">The DARE Initiative</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Our flagship Bankable Scheme-DARE (Development, Acceleration, Regeneration, Empowerment) 
            creates sustainable financial pathways for communities to thrive while healing the Earth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More About DARE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}