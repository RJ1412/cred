import React from 'react';

// The main component for the CTA section
export function Light() {
  // The URL for the background image
  const backgroundImageUrl = 'https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/cta-fold-final.png';

  return (
    // Main container that fills the screen and applies the background image
    <div
      className="w-full h-screen bg-black bg-cover bg-center flex items-center justify-end font-sans"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Content container to hold the text, positioned to the right */}
      <div className="w-full md:w-1/2 lg:w-2/5 text-left p-8 md:p-16">
        
        {/* Main heading with serif font and tight leading */}
        <h1 className="font-serif text-white text-6xl md:text-7xl lg:text-8xl leading-tight">
          not everyone
          <br />
          gets it
        </h1>
        
        {/* Sub-heading paragraph with lighter font weight */}
        <p className="text-gray-400 text-lg md:text-xl mt-8 font-light leading-relaxed">
          like all good things in life, earning a CRED membership
          is not easy; but the possibility of unlocking a greater
          future makes the effort worthwhile.
        </p>

      </div>
    </div>
  );
}
