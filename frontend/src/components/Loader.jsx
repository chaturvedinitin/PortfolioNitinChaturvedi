import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-300">
      <div className="w-12 h-12 border-4 border-t-transparent border-zinc-800 rounded-full animate-spin mb-4"></div>
      <p className="text-zinc-800 text-4xl font-medium animate-pulse">Preparing Resume...</p>
    </div>
  );
};

export default Loader;
