
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// const CtaSection = () => {
//   return (
//     <section className="py-20 bg-adrig-blue text-white">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold mb-6 text-white">Let's Build the Future Together!</h2>
//         <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
//           Ready to transform your business with cutting-edge AI solutions? 
//           Our team of experts is ready to help you navigate the future of technology.
//         </p>
//         <Link to="/contact">
//           <Button className="bg-white text-adrig-blue hover:bg-gray-100 transition-colors text-lg px-8 py-6 font-semibold hover:scale-105 transform transition-transform">
//             Schedule a Consultation
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default CtaSection;
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useData } from '@/context/DataContext';

const CtaSection = () => {
  const { ctaData, isLoading } = useData();

  if (isLoading || !ctaData) {
    return (
      <section className="py-20 bg-adrig-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-10 bg-white/20 rounded w-96 mx-auto mb-6"></div>
            <div className="h-6 bg-white/20 rounded w-80 mx-auto mb-8"></div>
            <div className="h-12 bg-white/20 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-adrig-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">{ctaData.heading}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          {ctaData.subheading}
        </p>
        <Link to={ctaData.buttonLink}>
          <Button className="bg-white text-adrig-blue hover:bg-gray-100 transition-colors text-lg px-8 py-6 font-semibold hover:scale-105 transform transition-transform">
            {ctaData.buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;