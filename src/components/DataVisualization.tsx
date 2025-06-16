import React, { useState } from 'react';
import { BarChart3, TrendingUp, Filter } from 'lucide-react';

const DataVisualization = () => {
  const [activeTab, setActiveTab] = useState('export-growth');
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Data & Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the data behind these export growth success stories, from initial conditions
            to long-term growth trends and economic impact.
          </p>
        </div>
        
        {/* Visualization tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <div className="flex border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('export-growth')} 
              className={`flex items-center gap-2 px-6 py-4 font-medium ${
                activeTab === 'export-growth' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <TrendingUp className="h-5 w-5" />
              <span>Export Growth</span>
            </button>
            <button 
              onClick={() => setActiveTab('sector-comparison')} 
              className={`flex items-center gap-2 px-6 py-4 font-medium ${
                activeTab === 'sector-comparison' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <BarChart3 className="h-5 w-5" />
              <span>Sector Comparison</span>
            </button>
            <button 
              onClick={() => setActiveTab('success-factors')} 
              className={`flex items-center gap-2 px-6 py-4 font-medium ${
                activeTab === 'success-factors' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Filter className="h-5 w-5" />
              <span>Success Factors</span>
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'export-growth' && (
              <div>
                <div className="flex justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary">Export Growth Trajectories</h3>
                  <div className="flex items-center gap-3">
                    <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
                      <option>All Countries</option>
                      <option>Bangladesh</option>
                      <option>Taiwan</option>
                      <option>Vietnam</option>
                      <option>Chile</option>
                      <option>Ethiopia</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
                      <option>1980-2020</option>
                      <option>1990-2020</option>
                      <option>2000-2020</option>
                      <option>2010-2020</option>
                    </select>
                  </div>
                </div>
                
                {/* Placeholder for actual chart component */}
                <div className="bg-gray-100 rounded-lg p-4 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-400 mb-4">
                      <BarChart3 className="h-12 w-12 mx-auto" />
                    </div>
                    <p className="text-gray-600">
                      Export growth visualization would render here with actual data.
                      <br />
                      The chart would show export value growth over time for selected countries.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-5 gap-4 mt-6">
                  {['Bangladesh', 'Taiwan', 'Vietnam', 'Chile', 'Ethiopia'].map((country) => (
                    <button 
                      key={country}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      {country}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 text-sm text-gray-500">
                  <p>Data sources: UN Comtrade, World Bank, National statistics bureaus</p>
                </div>
              </div>
            )}
            
            {activeTab === 'sector-comparison' && (
              <div>
                <div className="flex justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary">Sector Performance Comparison</h3>
                  <div className="flex items-center gap-3">
                    <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
                      <option>All Sectors</option>
                      <option>Garments</option>
                      <option>Semiconductors</option>
                      <option>Electronics</option>
                      <option>Agriculture</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
                      <option>Export Value</option>
                      <option>Growth Rate</option>
                      <option>Employment</option>
                      <option>GDP Contribution</option>
                    </select>
                  </div>
                </div>
                
                {/* Placeholder for actual chart component */}
                <div className="bg-gray-100 rounded-lg p-4 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-400 mb-4">
                      <BarChart3 className="h-12 w-12 mx-auto" />
                    </div>
                    <p className="text-gray-600">
                      Sector comparison visualization would render here with actual data.
                      <br />
                      The chart would compare different sectors across key performance metrics.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'success-factors' && (
              <div>
                <div className="flex justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary">Key Success Factors Analysis</h3>
                  <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
                    <option>All Success Factors</option>
                    <option>Government Policy</option>
                    <option>Private Investment</option>
                    <option>Human Capital</option>
                    <option>Market Access</option>
                  </select>
                </div>
                
                {/* Placeholder for actual chart component */}
                <div className="bg-gray-100 rounded-lg p-4 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-400 mb-4">
                      <BarChart3 className="h-12 w-12 mx-auto" />
                    </div>
                    <p className="text-gray-600">
                      Success factors visualization would render here with actual data.
                      <br />
                      The chart would show the prevalence and importance of different success factors.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary mb-2">Government Policy</h4>
                    <p className="text-sm text-gray-700">
                      Government policies including export incentives, special economic zones, and R&D support
                      were critical in 85% of the success cases studied.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary mb-2">Market Access</h4>
                    <p className="text-sm text-gray-700">
                      Preferential trade agreements and favorable market access conditions were present in 72%
                      of cases, particularly for developing economies.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;