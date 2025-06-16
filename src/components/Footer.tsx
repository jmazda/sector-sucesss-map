import React from 'react';
import { Globe, Mail, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-bold">Sector Success Map</h2>
            </div>
            <p className="text-blue-200 mb-6">
              Exploring export-led growth success stories from around the world
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Explore</h3>
            <ul className="space-y-2">
              {['World Map', 'Case Studies', 'Data Visualization', 'Methodology', 'About the Project'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {['Data Sources', 'Research Methodology', 'Downloads', 'API Access', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>© 2025 Sector Success Map. A project of Growth Teams. All data and visualizations are available under Creative Commons Attribution 4.0 License.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;