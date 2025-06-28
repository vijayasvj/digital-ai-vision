const WhatWeDoSection = () => {
  const services = [
    {
      illustration: (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 w-full h-full flex flex-col justify-center items-center transform scale-90">
          <div className="w-28 h-32 bg-white rounded-xl border border-blue-100 shadow-sm flex flex-col justify-end items-center relative overflow-hidden">
            {/* Robot avatar */}
            <div className="absolute left-3 top-3 w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center border border-blue-200">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" fill="#eaf1fb" stroke="#4a90e2" strokeWidth="1.5" />
                <rect x="9" y="4" width="2" height="3" rx="1" fill="#4a90e2" />
                <circle cx="7.5" cy="11" r="1" fill="#4a90e2" />
                <circle cx="12.5" cy="11" r="1" fill="#4a90e2" />
                <rect x="8" y="13" width="4" height="1" rx="0.5" fill="#4a90e2" />
              </svg>
            </div>
            {/* Chat bubbles */}
            <div className="flex flex-col gap-2 w-full px-3 pb-3">
              <div className="self-end bg-blue-100 text-blue-700 rounded-lg px-3 py-1 text-xs max-w-[80%] shadow-sm">Hi! How can I help you today?</div>
              <div className="self-start bg-gray-100 text-gray-700 rounded-lg px-3 py-1 text-xs max-w-[80%] shadow-sm">Schedule a meeting for 3:45PM tomorrow.</div>
            </div>
          </div>
        </div>
      ),
      title: "Chatbot<br />Development",
      description: "We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes.",
    },
    {
      illustration: (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 font-sans w-full h-full flex flex-col justify-center transform scale-90">
          <div className="h-32 relative border border-gray-200 rounded-md flex items-center justify-center mb-3">
            <span className="text-gray-500 bg-white px-2 py-1 rounded border border-gray-200 text-xs">Building app...</span>
            {[...Array(15)].map((_, i) => (
              <span key={i} className="absolute w-1 h-1 bg-blue-500 rounded-full" style={{ top: `${Math.random() * 85}%`, left: `${Math.random() * 95}%` }}></span>
            ))}
          </div>
          <div className="flex items-center">
            <input type="text" placeholder="Describe your software idea..." className="flex-1 text-sm border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="text-sm bg-white border border-l-0 border-gray-300 rounded-r-md px-4 py-2 text-gray-700 hover:bg-gray-100">Start</button>
          </div>
        </div>
      ),
      title: "Software<br />Development",
      description: "We design and build robust, scalable, and tailored software solutions to solve your unique business challenges, from web and mobile apps to complex enterprise systems.",
    },
    {
      illustration: (
        <div className="bg-gray-50 w-full h-full p-4 rounded-lg border border-gray-200 font-sans flex items-center justify-center transform scale-90">
          <div className="relative w-40 h-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white border-2 border-blue-500 rounded-full flex flex-col items-center justify-center text-center">
              <span className="font-bold text-2xl text-blue-600">100+</span>
              <span className="text-xs text-gray-600">Automation</span>
            </div>
            {/* Icons */}
            <div className="absolute top-4 left-6 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">$</div>
            <div className="absolute top-10 right-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">...</div>
            <div className="absolute bottom-10 left-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">#</div>
            <div className="absolute bottom-4 right-6 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">+</div>
          </div>
        </div>
      ),
      title: "Workflow<br />Automations",
      description: "We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors.",
    },
    {
      illustration: (
        <div className="bg-gray-50 w-full h-full p-4 rounded-lg border border-gray-200 font-sans flex flex-col justify-center transform scale-90">
          <div className="space-y-2">
            <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm self-start">
              <p className="text-xs text-gray-500">#</p>
              <p className="text-sm text-gray-800">Where do Quokka's live?</p>
              <p className="text-xs text-blue-600">Quokka's live on Rottnest Island</p>
            </div>
            <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm self-end ml-auto max-w-[80%]">
              <p className="text-xs text-gray-500">#</p>
              <p className="text-sm text-gray-800">And are Quokka's big?</p>
              <div className="text-right mt-1">
                <svg className="w-4 h-4 text-blue-600 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
              </div>
            </div>
          </div>
        </div>
      ),
      title: "LLM<br />Development",
      description: "We develop Large Language Models that transform how your company interacts with data and customers.",
    },
    {
      illustration: (
        <div className="bg-gray-50 w-full h-full p-4 rounded-lg border border-gray-200 font-sans flex items-center justify-center transform scale-90">
          <div className="w-full">
            <div className="relative h-28">
              <svg width="100%" height="100%" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
                <path d="M 0 50 Q 25 20, 50 30 T 100 10" stroke="#4a90e2" strokeWidth="2" fill="none" />
                <circle cx="50" cy="30" r="3" fill="#4a90e2" />
                <circle cx="80" cy="18" r="3" fill="#4a90e2" />
              </svg>
              <div className="absolute" style={{ top: '25%', left: '45%' }}>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md">Efficiency +103%</span>
              </div>
              <div className="absolute" style={{ top: '55%', left: '60%' }}>
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md">Cost -67%</span>
              </div>
            </div>
          </div>
        </div>
      ),
      title: "AI<br />Consulting",
      description: "Our experts provide strategic guidance, enabling your business to implement AI solutions that drive transformative growth.",
    },
  ];

  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <section className="py-12 bg-white mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          What We Do
        </h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap justify-center gap-8">
            {firstRow.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-transparent flex flex-col text-center shadow-sm hover:shadow-lg hover:border-white hover:border-2 hover:border-opacity-80 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.7)] transition-all duration-300 w-full sm:w-[340px] md:w-[400px] lg:w-[420px]"
              >
                <div className="w-full h-40 mb-6 flex items-center justify-center overflow-hidden">
                  {service.illustration}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-4 text-gray-800"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  />
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {secondRow.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-transparent flex flex-col text-center shadow-sm hover:shadow-lg hover:border-white hover:border-2 hover:border-opacity-80 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.7)] transition-all duration-300 w-full sm:w-[340px] md:w-[400px] lg:w-[420px]"
              >
                <div className="w-full h-40 mb-6 flex items-center justify-center overflow-hidden">
                  {service.illustration}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-4 text-gray-800"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  />
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection; 