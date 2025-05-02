
import React from 'react';

const Legacy: React.FC = () => {
  return (
    <section id="legacy" className="py-20 bg-raelan-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">Our Legacy</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-raelan-gold/50 z-0"></span>
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-12">
            <span className="text-raelan-gold font-playfair">RAELAN</span> is not just a brand — it's a realm. 
            A sanctuary of craft, character, and cultural excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 border border-raelan-gold/20 rounded-sm hover:border-raelan-gold/40 transition-all">
              <div className="text-raelan-gold mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Artisanal Quality</h3>
              <p className="text-raelan-offwhite/80">Each belt is meticulously crafted using traditional techniques passed down through generations.</p>
            </div>
            
            <div className="p-6 border border-raelan-gold/20 rounded-sm hover:border-raelan-gold/40 transition-all">
              <div className="text-raelan-gold mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 18l-6-6 6-6 6 6-6 6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Symbolic Heritage</h3>
              <p className="text-raelan-offwhite/80">Our guild emblems draw from ancient symbols that represent strength, wisdom, and enduring character.</p>
            </div>
            
            <div className="p-6 border border-raelan-gold/20 rounded-sm hover:border-raelan-gold/40 transition-all">
              <div className="text-raelan-gold mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Eternal Design</h3>
              <p className="text-raelan-offwhite/80">Timeless aesthetics that transcend trends, creating accessories that remain relevant for decades.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
