import clientLogos from '../helper/clientLogos';

const majorBrands = [
  'Southern Railways',
  'VIT University',
  "St. Joseph's College of Engineering",
  'DMI Group of Institutions',
  'LIFCO Books',
];

const fullNames: { [key: string]: string } = {
  'southern_railway': 'Southern Railways',
  'vit': 'VIT University',
  'stj': "St. Joseph's College of Engineering",
  'dmi': 'DMI Group of Institutions',
  'lifco': 'LIFCO Books',
  'bts': 'Barron Tech Serve Pvt. Ltd.',
  'chargcom': 'Chargcom INC',
  'datadrone': 'DataDrone INC',
  'doumein': 'Doumein Private Limited',
  'fai': 'Farmwise AI Pvt. Ltd.',
  'miporis': 'MIPORIS',
  'srm': 'SRM Institute of Technology',
  'sspc': 'SS Pack Care',
  'ssr': 'Sri Sairam Institute of Technology',
  't&t': 'Temple and Towns',
  'vedic': 'Vedic Essentials',
  'vminds': 'Vminds Technologies',
};

const getFullName = (logoPath: string) => {
  const match = logoPath.match(/([\w&-]+)\.png$/i);
  if (!match) return logoPath;
  const key = match[1].toLowerCase();
  return fullNames[key] || key.charAt(0).toUpperCase() + key.slice(1);
};

const isMajorBrand = (fullName: string) => majorBrands.includes(fullName);

export default function ClientLogos() {
  const sortedLogos = [
    ...clientLogos.filter(l => getFullName(l.src) === 'Southern Railways'),
    ...clientLogos.filter(l => getFullName(l.src) !== 'Southern Railways'),
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight font-sans">Partners & Clients</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl font-sans">
              We are proud to work with leading organizations across India, the UK, and the US, delivering innovative AI solutions that drive growth and transformation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-end">
            <div className="text-center">
              <div className="font-bold text-xl md:text-2xl text-gray-900 font-sans">30+</div>
              <div className="text-xs text-gray-500 tracking-wide font-sans">Clients in India</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl md:text-2xl text-gray-900 font-sans">6</div>
              <div className="text-xs text-gray-500 tracking-wide font-sans">Clients in UK</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl md:text-2xl text-gray-900 font-sans">2</div>
              <div className="text-xs text-gray-500 tracking-wide font-sans">Clients in US</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl md:text-2xl text-gray-900 font-sans">2</div>
              <div className="text-xs text-gray-500 tracking-wide font-sans">Years Old</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 font-sans">Our Solution Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {sortedLogos.map((logo) => {
              const fullName = getFullName(logo.src);
              return (
                <div
                  key={logo.src}
                  className="flex flex-col items-center justify-between rounded-xl border-2 border-blue-400 bg-white p-4 md:p-6 h-44 md:h-52 shadow-sm transition group hover:shadow-lg hover:scale-105 hover:-translate-y-1 duration-300"
                  style={{ minHeight: 160 }}
                >
                  <div className="flex-1 flex items-center justify-center w-full">
                    <img
                      src={logo.src}
                      alt={fullName}
                      className="object-contain max-h-10 md:max-h-12 mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                      style={{ filter: 'grayscale(0%)', maxWidth: '80%' }}
                    />
                  </div>
                  <div className="text-center font-semibold text-sm md:text-base text-blue-700 font-sans">{fullName}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}