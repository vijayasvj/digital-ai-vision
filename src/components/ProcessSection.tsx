import { ClipboardCheck, Code2, TrendingUp } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const ProcessSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      number: "01",
      title: "Analyze",
      description: "We start with a thorough analysis of your current workflows to see how AI could improve your processes.",
      icon: ClipboardCheck,
    },
    {
      number: "02",
      title: "Build & Implement",
      description: "Then, our developers will start crafting custom AI-solutions for your company, continuously prioritising quality and safety.",
      icon: Code2,
    },
    {
      number: "03",
      title: "Maintain & Improve",
      description: "After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions.",
      icon: TrendingUp,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          The Process
        </h2>
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="relative max-w-6xl mx-auto">
            {/* The connecting line */}
            <div className={`absolute top-12 left-0 w-full h-0.5 bg-blue-500 ${isInView ? 'animate-draw-line' : ''}`} />
            
            <div className="flex justify-between items-start">
              {processSteps.map((step) => (
                <div key={step.number} className="w-1/3 text-center px-4">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto bg-white border-2 border-blue-500 rounded-full flex items-center justify-center z-10 relative">
                      <step.icon className="w-12 h-12 text-blue-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    <span className="text-gray-400 mr-3">{step.number}</span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center mb-12">
              <div className="w-24 h-24 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center mb-4 z-10">
                <step.icon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                <span className="text-gray-400 mr-3">{step.number}</span>
                {step.title}
              </h3>
              <p className="text-gray-600 px-4">{step.description}</p>
              
              {index < processSteps.length - 1 && (
                  <div className="w-0.5 h-16 bg-blue-500 my-4" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;