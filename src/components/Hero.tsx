
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-raelan-bg via-raelan-bg to-raelan-secondary z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-raelan-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-raelan-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-raelan-white">
            RAELAN
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            <span className="text-raelan-gold">Bound to Last. Born to Lead.</span> Discover the legacy of crafted leather through a house of symbols, strength, and stories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#collections" 
              className="px-8 py-3 bg-raelan-gold text-raelan-bg font-medium rounded hover:bg-raelan-gold/90 transition-colors"
            >
              Explore Collections
            </a>
            <a 
              href="#legacy" 
              className="px-8 py-3 border border-raelan-gold text-raelan-gold rounded hover:bg-raelan-gold/10 transition-colors"
            >
              Our Legacy
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-raelan-gold"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
