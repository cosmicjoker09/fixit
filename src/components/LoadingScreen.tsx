import { Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-orange-700 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <style>{`
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes rotate-wrench {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-15deg);
          }
          75% {
            transform: rotate(15deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .wrench-animate {
          animation: rotate-wrench 1s ease-in-out infinite;
        }

        .logo-pulse {
          animation: pulse-scale 1s ease-in-out infinite;
        }

        .ripple-1 {
          animation: ripple 1.5s ease-out infinite;
        }

        .ripple-2 {
          animation: ripple 1.5s ease-out infinite 0.5s;
        }

        .ripple-3 {
          animation: ripple 1.5s ease-out infinite 1s;
        }
      `}</style>

      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="ripple-1 absolute w-32 h-32 border-4 border-white/30 rounded-full"></div>
          <div className="ripple-2 absolute w-32 h-32 border-4 border-orange-500/30 rounded-full"></div>
          <div className="ripple-3 absolute w-32 h-32 border-4 border-white/20 rounded-full"></div>
        </div>

        <div className="logo-pulse relative bg-white rounded-3xl p-6 shadow-2xl">
          <div className="bg-gradient-to-br from-blue-900 to-orange-600 p-4 rounded-2xl">
            <Wrench className="w-12 h-12 text-white wrench-animate" />
          </div>
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-2 logo-pulse">
            Fix<span className="text-orange-400">It</span>
          </h1>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
