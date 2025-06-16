import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Globe } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 'bangladesh-garments',
    country: 'Bangladesh',
    sector: 'Garments',
    image: 'https://images.pexels.com/photos/3855539/pexels-photo-3855539.jpeg?auto=compress&cs=tinysrgb&w=1600',
    startYear: 1980,
    metrics: {
      exportValue: '33.1 billion USD (2019)',
      growth: '15.9% annually (1990-2020)',
      employment: '4.4 million people',
      gdpContribution: '11% of GDP'
    },
    summary: 'Bangladesh transformed from having virtually no garment exports in the early 1980s to becoming the world\'s second-largest garment exporter behind China. The industry now accounts for more than 80% of Bangladesh\'s export earnings and has played a crucial role in reducing poverty and empowering women.',
    keyFactors: [
      'Low labor costs and large workforce',
      'Supportive government policies including duty-free access to inputs',
      'Market access through preferential trade agreements',
      'Private sector entrepreneurship'
    ]
  },
  {
    id: 'taiwan-semiconductors',
    country: 'Taiwan',
    sector: 'Semiconductors',
    image: 'https://images.pexels.com/photos/2765876/pexels-photo-2765876.jpeg?auto=compress&cs=tinysrgb&w=1600',
    startYear: 1980,
    metrics: {
      exportValue: '115 billion USD (2020)',
      growth: '12.3% annually (1980-2020)',
      employment: '520,000 people',
      gdpContribution: '15% of GDP'
    },
    summary: 'Taiwan has built a world-leading semiconductor industry that dominates global chip production, particularly in advanced manufacturing processes. Taiwanese firms, led by TSMC, are critical to the global technology supply chain with a unique business model focused on manufacturing rather than design.',
    keyFactors: [
      'Government-funded research institutions (ITRI)',
      'Strategic public-private partnerships',
      'Focused human capital development for high-tech industries',
      'Strong relationships with US technology firms'
    ]
  },
  {
    id: 'vietnam-electronics',
    country: 'Vietnam',
    sector: 'Electronics',
    image: 'https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg?auto=compress&cs=tinysrgb&w=1600',
    startYear: 2000,
    metrics: {
      exportValue: '95.8 billion USD (2020)',
      growth: '21.5% annually (2000-2020)',
      employment: '640,000 people',
      gdpContribution: '23% of export value'
    },
    summary: 'Vietnam has emerged as a major electronics manufacturing hub in just two decades, rapidly shifting from an agricultural exporter to a significant player in global technology supply chains. The country has attracted major investments from Samsung, Intel, LG, and other global tech giants.',
    keyFactors: [
      'Strategic FDI policies to attract technology firms',
      'Young workforce with strong math and science skills',
      'Competitive wages and proximity to China',
      'Extensive network of free trade agreements'
    ]
  }
];

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(CASE_STUDIES[0]);

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Success Stories in Detail</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how these countries built globally competitive export sectors through strategic policy choices, 
            catalytic pioneer firms and private investment, and key external factors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case study selector sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {CASE_STUDIES.map((study) => (
              <div 
                key={study.id}
                onClick={() => setActiveStudy(study)}
                className={`
                  p-4 rounded-lg cursor-pointer transition-all
                  ${activeStudy.id === study.id 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}
                `}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-12 h-12 rounded-full bg-cover bg-center`}
                    style={{ backgroundImage: `url(${study.image})` }}
                  ></div>
                  <div>
                    <h3 className={`font-bold ${activeStudy.id === study.id ? 'text-white' : 'text-primary'}`}>
                      {study.country}
                    </h3>
                    <p className={activeStudy.id === study.id ? 'text-blue-100' : 'text-secondary'}>
                      {study.sector}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Case study details */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
            <div 
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeStudy.image})` }}
            >
              <div className="h-full w-full bg-primary bg-opacity-50 flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm text-blue-200">Success Story</p>
                  <h2 className="text-3xl font-bold">{activeStudy.country}: {activeStudy.sector}</h2>
                  <p className="text-blue-100">Growth since {activeStudy.startYear}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Key metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-5 w-5 text-secondary" />
                    <p className="text-xs text-gray-500 font-medium">Export Value</p>
                  </div>
                  <p className="text-sm font-bold text-primary">{activeStudy.metrics.exportValue}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <p className="text-xs text-gray-500 font-medium">Growth Rate</p>
                  </div>
                  <p className="text-sm font-bold text-primary">{activeStudy.metrics.growth}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-secondary" />
                    <p className="text-xs text-gray-500 font-medium">Employment</p>
                  </div>
                  <p className="text-sm font-bold text-primary">{activeStudy.metrics.employment}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-secondary" />
                    <p className="text-xs text-gray-500 font-medium">GDP Impact</p>
                  </div>
                  <p className="text-sm font-bold text-primary">{activeStudy.metrics.gdpContribution}</p>
                </div>
              </div>
              
              {/* Summary */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Summary</h3>
                <p className="text-gray-700 leading-relaxed">{activeStudy.summary}</p>
              </div>
              
              {/* Key success factors */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Key Success Factors</h3>
                <ul className="space-y-3">
                  {activeStudy.keyFactors.map((factor, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-accent flex-shrink-0"></div>
                      <p className="text-gray-700">{factor}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="bg-secondary hover:bg-secondary-dark text-white py-2 px-6 rounded-md text-sm font-medium transition-colors">
                  Read Full Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;