import React from "react";

const SolutionCard = ({ icon: Icon, name, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer rounded-2xl border border-gray-800 
               bg-gradient-to-br from-black/80 via-gray-900 to-black/70 
               p-6 flex flex-col items-center text-center
               transition-all duration-300 
               hover:shadow-[0_0_25px_#f87171aa] hover:scale-105"
  >
    <div className="relative w-16 h-16 mb-6">
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600 via-orange-400 to-yellow-300 rounded-full shadow-lg shadow-red-500/30" />
      <div className="absolute inset-[4px] bg-black rounded-full z-10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-white" />
      </div>
    </div>

    <h3 className="text-lg font-semibold text-white">{name}</h3>
  </div>
);

export default SolutionCard;
export { SolutionCard };
