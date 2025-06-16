import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorldMap from './components/WorldMap';
import CaseStudies from './components/CaseStudies';
import DataVisualization from './components/DataVisualization';
import Footer from './components/Footer';
import { X, Plus, Minus } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WorldMap />
      <CaseStudies />
      <DataVisualization />
      <Footer />
    </div>
  );
}

export default App;