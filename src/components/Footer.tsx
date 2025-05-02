import React from 'react';
const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return <footer className="bg-raelan-footer py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img src="/lovable-uploads/d18289fb-da89-4ae7-ad58-bd2fae118e07.png" alt="RAELAN Logo" className="h-10" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <h4 className="text-raelan-gold font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-raelan-offwhite/80 hover:text-raelan-gold transition-colors">Home</a></li>
                <li><a href="#legacy" className="text-raelan-offwhite/80 hover:text-raelan-gold transition-colors">Legacy</a></li>
                <li><a href="#collections" className="text-raelan-offwhite/80 hover:text-raelan-gold transition-colors">Collections</a></li>
                <li><a href="#" className="text-raelan-offwhite/80 hover:text-raelan-gold transition-colors">Guilds</a></li>
                <li><a href="#" className="text-raelan-offwhite/80 hover:text-raelan-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-raelan-gold font-bold mb-4">Collections</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-raelan-offwhite/80 hover:text-raelan-gold transition-colors">House Vireaux</a></li>
                <li><a href="#" className="text-raelan-offwhite/80 hover:text-raelan-gold transition-colors">Guild Kaedryn</a></li>
                <li><a href="#" className="text-raelan-offwhite/80 hover:text-raelan-gold transition-colors">Dynasty Thalara</a></li>
                <li><a href="#" className="text-raelan-offwhite/80 hover:text-raelan-gold transition-colors">Legion Draevant</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-raelan-gold font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-raelan-offwhite/80">raelanfashion@gmail.com</li>
                <li className="text-raelan-offwhite/80">+91 7904622479
+91 9791196485</li>
                <li className="text-raelan-offwhite/80">Chennai, IN
Raelan.store</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-raelan-gold/20 mt-12 pt-8 text-center text-raelan-offwhite/60 text-sm">
          <p>© {year} RAELAN. Wear authority. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;