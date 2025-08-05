import React, { useEffect, useState } from "react";

const SolutionModal = ({
  open,
  onClose,
  name,
  icon: Icon,
  prodext,
  tagline,
  description,
  mantraValue,
}) => {
  const [shouldRender, setShouldRender] = useState(open);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      requestAnimationFrame(() => setAnimationClass("animate-twistIn"));
    } else if (shouldRender) {
      setAnimationClass("animate-twistOut");
      const timeout = setTimeout(() => {
        setShouldRender(false);
        setAnimationClass("");
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [open, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-4xl mx-4 p-0 rounded-2xl border border-gray-800
                    bg-gradient-to-br from-black/80 via-gray-900 to-black/70 text-white
                    shadow-xl ${animationClass}`}
        style={{ transformOrigin: "center" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/60 border border-gray-800 
                     flex items-center justify-center text-gray-300 hover:text-white hover:bg-black/70 
                     transition-colors"
        >
          ×
        </button>

        {/* Header */}
       <div className="flex flex-col md:flex-row items-center md:items-center gap-6 p-6 md:p-8">
        {/* Left column */}
        <div className="md:w-1/2 flex flex-col items-center text-center md:pr-6">
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600 via-orange-400 to-yellow-300 shadow-lg shadow-red-500/30" />
            <div className="absolute inset-[4px] rounded-full bg-black flex items-center justify-center z-10">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            {name}
          </h2>
          {prodext && (
            <h3 className="mt-1 text-base font-medium text-gray-300">{prodext}</h3>
          )}
          {tagline && (
            <p className="mt-2 italic text-sm text-gray-400">{tagline}</p>
          )}
        </div>

          {/* Divider */}
  <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent h-24 mx-4" />

          {/* Content (right) */}
          <div className="md:w-1/2 md:pl-6">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-5 rounded-sm bg-gradient-to-b from-red-600 via-orange-400 to-yellow-300" />
                  <h4 className="text-sm font-bold text-gray-200">Product Overview</h4>
                </div>
                <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-5 rounded-sm bg-gradient-to-b from-red-600 via-orange-400 to-yellow-300" />
                  <h4 className="text-sm font-bold text-gray-200">How MantraDATA Adds Value</h4>
                </div>
                <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">
                  {mantraValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes twistIn {
            0% { transform: rotateY(-90deg) scale(0.9); opacity: 0; }
            100% { transform: rotateY(0deg) scale(1); opacity: 1; }
          }
          @keyframes twistOut {
            0% { transform: rotateY(0deg) scale(1); opacity: 1; }
            100% { transform: rotateY(90deg) scale(0.9); opacity: 0; }
          }
          .animate-twistIn { animation: twistIn 0.4s ease-out forwards; }
          .animate-twistOut { animation: twistOut 0.4s ease-in forwards; }
        `}
      </style>
    </div>
  );
};

export default SolutionModal;
export { SolutionModal };
