import { useEffect, useRef } from 'react';
import clientLogos from '../helper/clientLogos';

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { top } = scrollRef.current.getBoundingClientRect();
        if (top < window.innerHeight) {
          scrollRef.current.classList.add('animate-carousel');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto">
        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex space-x-16 py-8 px-4">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate logos for continuous scrolling effect */}
            {clientLogos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;