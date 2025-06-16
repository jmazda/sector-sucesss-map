import React, { useState } from 'react';
import { Info, Plus, Minus, X } from 'lucide-react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const FEATURED_COUNTRIES = [
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    coordinates: [90.3563, 23.6850],
    sector: 'Garments',
    growth: '15.9% annually (1990-2020)',
    description: 'Transformed from a minor player to the world\'s second-largest garment exporter',
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    coordinates: [121.5654, 25.0330],
    sector: 'Semiconductors',
    growth: '12.3% annually (1980-2020)',
    description: 'Built a world-leading semiconductor industry that powers global technology',
  },
  {
    id: 'chile',
    name: 'Chile',
    coordinates: [-70.6483, -33.4489],
    sector: 'Wine',
    growth: '8.7% annually (1990-2020)',
    description: 'Developed a premium wine industry that competes globally with established producers',
  },
  {
    id: 'ethiopia',
    name: 'Ethiopia',
    coordinates: [38.7578, 9.0084],
    sector: 'Coffee',
    growth: '7.2% annually (2000-2020)',
    description: 'Leveraged unique coffee varieties to build premium positioning in global markets',
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    coordinates: [105.8342, 21.0285],
    sector: 'Electronics',
    growth: '21.5% annually (2000-2020)',
    description: 'Rapidly shifted from agricultural exports to becoming a major electronics manufacturer',
  },
];

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 });

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  return (
    <section id="explore-map" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Explore Export Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover how countries across the globe have successfully developed and scaled export sectors,
            driving economic growth and creating jobs through strategic sector development.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Click on a marker to learn about the country's export growth success story
          </p>
        </div>
        
        <div className="relative aspect-[16/9] bg-[#EBF4F5] rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 150
            }}
          >
            <ZoomableGroup
              zoom={position.zoom}
              center={position.coordinates}
              onMoveEnd={handleMoveEnd}
              maxZoom={4}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#DAECED"
                      stroke="#9BB8BA"
                      strokeWidth={0.5}
                      style={{
                        default: {
                          fill: "#DAECED",
                          outline: "none"
                        },
                        hover: {
                          fill: "#C3DBDE",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#ACC8CB",
                          outline: "none"
                        }
                      }}
                    />
                  ))
                }
              </Geographies>
              
              {FEATURED_COUNTRIES.map((country) => (
                <Marker
                  key={country.id}
                  coordinates={country.coordinates}
                  onMouseEnter={() => setHoveredCountry(country)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  onClick={() => setSelectedCountry(country)}
                >
                  <g
                    transform={`translate(-6, -6) scale(${hoveredCountry === country || selectedCountry === country ? 1.5 : 1})`}
                    style={{ transition: 'transform 0.3s ease-in-out' }}
                  >
                    <circle
                      r={6}
                      fill={hoveredCountry === country || selectedCountry === country ? "#e9c46a" : "#2a9d8f"}
                      stroke="#fff"
                      strokeWidth={2}
                      className="cursor-pointer"
                    />
                  </g>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
          
          {selectedCountry && (
            <div className="absolute bottom-0 right-0 m-4 w-80 bg-white bg-opacity-95 rounded-lg shadow-lg p-4 border-l-4 border-accent">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl text-primary">{selectedCountry.name}</h3>
                  <p className="text-secondary font-semibold">{selectedCountry.sector}</p>
                </div>
                <button 
                  onClick={() => setSelectedCountry(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-gray-600 mt-2 text-sm">{selectedCountry.description}</p>
              <div className="mt-3 bg-gray-100 p-2 rounded-md">
                <p className="text-xs font-medium text-gray-500">Export Growth</p>
                <p className="text-sm font-bold text-primary">{selectedCountry.growth}</p>
              </div>
              <button className="mt-3 w-full bg-secondary hover:bg-secondary-dark text-white text-sm py-2 rounded flex items-center justify-center">
                <Info className="h-4 w-4 mr-1" />
                View Full Case Study
              </button>
            </div>
          )}
          
          <div className="absolute top-4 right-4 bg-white rounded-md shadow-md">
            <button 
              className="p-2 hover:bg-gray-100 rounded-t-md"
              onClick={handleZoomIn}
            >
              <Plus className="h-5 w-5 text-gray-600" />
            </button>
            <div className="h-px bg-gray-200" />
            <button 
              className="p-2 hover:bg-gray-100 rounded-b-md"
              onClick={handleZoomOut}
            >
              <Minus className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;