import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import InnovationSection from '@/components/InnovationSection';
import VideoSection from '@/components/VideoSection';
import TaglineSection from '@/components/TaglineSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';

const Index = () => {
  const logosRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !hasScrolled && window.scrollY > 500) {
          scroller.scrollTo('about-us-section', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          setHasScrolled(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.0,
      }
    );

    if (logosRef.current) {
      observer.observe(logosRef.current);
    }

    return () => {
      if (logosRef.current) {
        observer.unobserve(logosRef.current);
      }
    };
  }, [hasScrolled]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div ref={logosRef}>
          <ClientLogos />
        </div>
        <div id="about-us-section">
          <InnovationSection />
        </div>
        <VideoSection />
        <TaglineSection />
        <WhatWeDoSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
