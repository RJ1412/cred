// import React from 'react';

// A reusable SVG component for the star icon
const StarIcon = ({ isFilled = true }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={isFilled ? "white" : "none"}
    stroke="white"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// A component to display a rating block (stars, score, store name)
const Rating = ({ score, storeName }) => (
  <div className="flex flex-col items-center">
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <div className="flex items-baseline mt-2">
      <p className="text-6xl font-light text-white">{score}</p>
      <p className="text-3xl font-light text-gray-400">/5</p>
    </div>
    <p className="mt-2 text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">
      {storeName}
    </p>
  </div>
);

export function Ratings() {
  return (
    <div className="relative min-h-[55vh] w-screen bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] font-sans text-white overflow-hidden">
      
      {/* Content container with no centering that causes side space */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 md:px-8 py-16">

        {/* Left side content */}
        <div className="text-center md:text-left mb-12 md:mb-0">
          <p className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Trusted by 15M Members
          </p>
          <h1 className="mt-4 text-7xl md:text-8xl font-serif leading-[0.9]">
            the proof
            <br />
            writes itself
          </h1>
        </div>

        {/* Right side content */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <Rating score="4.8" storeName="App Store" />
          <Rating score="4.8" storeName="Play Store" />
        </div>

      </div>
    </div>
  );
}
