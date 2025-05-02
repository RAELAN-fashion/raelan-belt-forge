
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Legacy from '../components/Legacy';
import Collections from '../components/Collections';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-raelan-bg text-raelan-offwhite relative">
      {/* Leather texture overlay */}
      <div className="absolute inset-0 leather-texture opacity-20 pointer-events-none"></div>
      
      {/* Royal leather craft decorative elements */}
      <div className="absolute top-1/2 left-0 w-24 h-64 royal-leather-element opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-24 h-64 royal-leather-element-right opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Legacy />
        <Collections />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
