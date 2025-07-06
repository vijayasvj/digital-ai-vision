import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useData } from '@/context/DataContext';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}

interface TestimonialsData {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const TestimonialsSection = () => {
  const { testimonialsData, isLoading } = useData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const totalGroups = testimonialsData ? Math.ceil(testimonialsData.testimonials.length / 2) : 0;
  const maxSlide = totalGroups - 1;

  const nextSlide = () => {
    setCurrentSlide((current) => (current >= maxSlide ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current === 0 ? maxSlide : current - 1));
  };

  // Slide transition
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * (100 / totalGroups)}%)`;
    }
  }, [currentSlide, totalGroups]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, maxSlide]);

  if (isLoading || !testimonialsData || !testimonialsData.testimonials || testimonialsData.testimonials.length === 0) {
    return (
      <section className="py-20 bg-adrig-gray" id="testimonials">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-48 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const data: TestimonialsData = testimonialsData;

  return (
    <section className="py-20 bg-adrig-gray" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
          <p className="text-gray-600">{data.subtitle}</p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div
              ref={slideRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${totalGroups * 100}%` }}
            >
              {Array.from({ length: totalGroups }, (_, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex gap-8"
                  style={{ width: `${100 / totalGroups}%` }}
                >
                  {data.testimonials
                    .slice(groupIndex * 2, groupIndex * 2 + 2)
                    .map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-white p-8 rounded-xl shadow-md flex-1"
                      >
                        <Quote className="h-8 w-8 text-blue-500 mb-4" />
                        <p className="text-gray-700 mb-6 italic">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {testimonial.position} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalGroups }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
