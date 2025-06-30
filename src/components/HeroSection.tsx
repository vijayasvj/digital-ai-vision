import { Button } from '@/components/ui/button';
import { Boxes } from '@/components/ui/background-boxes';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-60" style={{ backgroundColor: '#135bfb' }}>
      {/* Background Boxes Component */}
      <Boxes className="opacity-80" />

      <div className="container mx-auto px-4 z-20 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 text-white">
            <span className="font-normal">Driving Growth with </span><span className="font-extrabold text-white">AI.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-white mb-8">
            We craft workflow automations and bespoke AI solutions for forward-thinking companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <Button className="bg-[#2786ff] text-white px-8 py-3 text-base font-semibold rounded-md transition hover:bg-white hover:text-[#135bfb]">
              Our Services
            </Button>
            <Button variant="outline" className="border-white text-[#135bfb] px-8 py-3 text-base font-semibold rounded-md hover:bg-[#135bfb] hover:text-white transition">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
