import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Ecosystem from './components/Ecosystem';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PlanetaryConstellationNav from './components/PlanetaryNav';

function App() {
  return (
    <div className="w-full">
      <Navigation />
      <main>
        <Hero />
        <About />
        <div className="py-20 bg-black">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">
              Interactive <span className="text-green-400">Ecosystem Map</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our interconnected network of platforms through this interactive constellation
            </p>
          </div>
          <PlanetaryConstellationNav />
        </div>
        <Ecosystem />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;