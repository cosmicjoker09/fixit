import { CheckCircle } from 'lucide-react';

interface SubmissionAnimationProps {
  isVisible: boolean;
  message?: string;
}

export function SubmissionAnimation({ isVisible, message = 'Booking Confirmed!' }: SubmissionAnimationProps) {
  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes checkmark-pop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes success-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(34, 197, 94, 0);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-60px);
            opacity: 0;
          }
        }

        .checkmark-animate {
          animation: checkmark-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .pulse-animate {
          animation: success-pulse 2s infinite;
        }

        .float-text {
          animation: float-up 2s ease-out forwards;
        }
      `}</style>

      <div className="fixed inset-0 z-[9998] flex items-center justify-center pointer-events-none">
        <div className="relative flex flex-col items-center">
          <div className="checkmark-animate pulse-animate">
            <CheckCircle className="w-24 h-24 text-green-500" />
          </div>

          <div className="float-text mt-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{message}</h3>
            <p className="text-gray-600">Your request has been received</p>
          </div>

          <div className="mt-8 flex space-x-1">
            <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
