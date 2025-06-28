import { ArrowUpRight, Bot, PieChart } from 'lucide-react';

const InnovationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-widest">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            Crafting Tomorrow's Innovation Solution
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            We're consistently pushing the boundaries of innovation to create groundbreaking solutions that effectively meet today's challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 border border-gray-200 rounded-lg">
            <div className="flex justify-center items-center mb-6">
              <ArrowUpRight className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Scalable Solutions</h3>
            <p className="text-gray-600">
              We offers flexible and scalable solutions that evolve with your startup.
            </p>
          </div>
          <div className="text-center p-8 border border-gray-200 rounded-lg">
            <div className="flex justify-center items-center mb-6">
              <Bot className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
            <p className="text-gray-600">
              Leverage our machine learning algorithms to assess results.
            </p>
          </div>
          <div className="text-center p-8 border border-gray-200 rounded-lg">
            <div className="flex justify-center items-center mb-6">
              <PieChart className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Data Analysis</h3>
            <p className="text-gray-600">
              Go beyond Watchlists and obtain the most up-to-date, accurate data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection; 