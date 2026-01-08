const BrandLogo = ({ name }: { name: string }) => {
  const logos: Record<string, JSX.Element> = {
    Samsung: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#1428A0">
          Samsung
        </text>
      </svg>
    ),
    LG: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <circle cx="30" cy="30" r="15" fill="#E4001B" />
        <circle cx="80" cy="30" r="15" fill="#E4001B" />
        <text x="60" y="38" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#E4001B">
          LG
        </text>
      </svg>
    ),
    Sony: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#000">
          SONY
        </text>
      </svg>
    ),
    Panasonic: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#00A0DF">
          Panasonic
        </text>
      </svg>
    ),
    Whirlpool: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0066CC">
          Whirlpool
        </text>
      </svg>
    ),
    Bosch: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <rect x="20" y="15" width="15" height="30" fill="#E2001B" />
        <rect x="45" y="15" width="15" height="30" fill="#E2001B" />
        <rect x="70" y="15" width="15" height="30" fill="#E2001B" />
        <text x="60" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#000">
          BOSCH
        </text>
      </svg>
    ),
    Haier: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#E31C23">
          Haier
        </text>
      </svg>
    ),
    Voltas: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0052B4">
          Voltas
        </text>
      </svg>
    ),
    Daikin: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#004B87">
          Daikin
        </text>
      </svg>
    ),
    Godrej: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#C41E3A">
          Godrej
        </text>
      </svg>
    ),
    IFB: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#0066CC">
          IFB
        </text>
      </svg>
    ),
    'Blue Star': (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <polygon points="60,10 75,30 60,50 45,30" fill="#0052B4" />
        <text x="60" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0052B4">
          Blue Star
        </text>
      </svg>
    ),
    Carrier: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#004B9D">
          Carrier
        </text>
      </svg>
    ),
    Hitachi: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <circle cx="35" cy="30" r="12" fill="#E41B1B" />
        <circle cx="75" cy="30" r="12" fill="#E41B1B" />
        <text x="60" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E41B1B">
          Hitachi
        </text>
      </svg>
    ),
    TCL: (
      <svg viewBox="0 0 120 60" className="w-20 h-10">
        <text x="60" y="35" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FF6B35">
          TCL
        </text>
      </svg>
    ),
  };

  return logos[name] || <span className="text-sm font-semibold text-gray-700">{name}</span>;
};

export function Brands() {
  const brands = [
    'Samsung', 'LG', 'Sony', 'Panasonic', 'Whirlpool',
    'Bosch', 'Haier', 'Voltas', 'Daikin', 'Godrej',
    'IFB', 'Blue Star', 'Carrier', 'Hitachi', 'TCL',
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-50 to-blue-50 border-y overflow-hidden">
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .brands-scroll {
          animation: slide 25s linear infinite;
        }

        .brands-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Brands We <span className="text-orange-600">Work With</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Authorized service experts for all major electronics brands
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="flex brands-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 sm:px-12 py-8 flex items-center justify-center min-w-max group hover:bg-orange-50 transition-colors duration-300"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="h-20 w-28 flex items-center justify-center filter group-hover:drop-shadow-lg transition-all duration-300">
                  <BrandLogo name={brand} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-600 group-hover:text-orange-600 transition-colors">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
