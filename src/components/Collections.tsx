
import React from 'react';

// Collection data
const collections = [
  {
    id: 'vireaux',
    name: 'House Vireaux',
    description: 'Lion-marked belts symbolizing strength and leadership',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3h8l4 9-4 9H8l-4-9 4-9z"/>
      </svg>
    ),
  },
  {
    id: 'kaedryn',
    name: 'Guild Kaedryn',
    description: 'Snake-inspired elegance representing wisdom and rebirth',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      </svg>
    ),
  },
  {
    id: 'thalara',
    name: 'Dynasty Thalara',
    description: 'Leaf-motif legacy symbolizing growth and heritage',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
  },
  {
    id: 'draevant',
    name: 'Legion Draevant',
    description: 'Wolf-forged belts representing loyalty and pack strength',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
        <path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    ),
  },
];

const Collections: React.FC = () => {
  return (
    <section id="collections" className="py-20 bg-raelan-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">Featured Collections</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-raelan-gold/50 z-0"></span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-raelan-offwhite/80">
            Each collection tells a story, bound in leather and adorned with symbols that represent the guilds of RAELAN's realm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="collection-card group">
              <div className="text-raelan-gold mb-6 group-hover:scale-110 transform transition-transform">
                {collection.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-raelan-gold">
                {collection.name}
              </h3>
              <p className="text-raelan-offwhite/80 mb-6">
                {collection.description}
              </p>
              <a 
                href={`#${collection.id}`} 
                className="inline-flex items-center text-raelan-gold hover:text-raelan-white transition-colors"
              >
                <span className="mr-2">Discover</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#"
            className="px-8 py-3 inline-block border border-raelan-gold text-raelan-gold rounded hover:bg-raelan-gold/10 transition-colors"
          >
            View All Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collections;
