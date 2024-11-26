import React from "react";
import anime from './icon.png'
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <img
        src={anime} 
        alt="Loading..."
        className="w-32 h-32 animate-spin" 
      />
    </div>
  );
};

export default Loader;
