
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';

const beltImages = [
  '/lovable-uploads/belt1.jpg',
  '/lovable-uploads/belt2.jpg',
  '/lovable-uploads/belt3.jpg',
  '/lovable-uploads/belt4.jpg',
];

const BeltCarousel: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollPosition * 0.15; // Parallax effect based on scroll
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-raelan-bg/80 via-raelan-bg/70 to-raelan-bg z-[1]"></div>
      
      {/* Belt carousel */}
      <Carousel 
        className="h-full w-full" 
        opts={{ loop: true, align: "center" }}
      >
        <CarouselContent className="h-full">
          {beltImages.map((src, index) => (
            <CarouselItem key={index} className="h-full">
              <div 
                className="relative h-full w-full"
                style={{ 
                  transform: `translateY(${parallaxOffset}px)`, 
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img 
                  src={src} 
                  alt={`Luxury RAELAN belt ${index + 1}`} 
                  className="object-cover w-full h-full opacity-50"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Animated scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[2] flex flex-col items-center"
        style={{ opacity: Math.max(1 - scrollPosition / 300, 0) }}
      >
        <span className="text-raelan-gold mb-2 text-sm">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-raelan-gold to-transparent relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-raelan-gold rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-raelan-gold rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default BeltCarousel;
