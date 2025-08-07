import React, { useState, useRef } from 'react';

// SVG for the lock icon
const LockIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-400"
  >
    <path
      d="M34 20H14C12.8954 20 12 20.8954 12 22V38C12 39.1046 12.8954 40 14 40H34C35.1046 40 36 39.1046 36 38V22C36 20.8954 35.1046 20 34 20Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 20V14C18 10.6863 20.6863 8 24 8C27.3137 8 30 10.6863 30 14V20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 32V28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Torch() {
  // State to hold the mouse position
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  // Ref to the container div to calculate relative mouse position
  const containerRef = useRef(null);

  /**
   * Handles the mouse move event on the container.
   * Calculates the mouse position relative to the element and updates the state.
   * @param {React.MouseEvent<HTMLDivElement>} e - The mouse event.
   */
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }
  };

  /**
   * Resets the mouse position when the mouse leaves the container.
   * This hides the torch effect.
   */
  const handleMouseLeave = () => {
    setMousePos({ x: -200, y: -200 });
  };
  
  // The text content to be displayed
  const textContent = (
    <>
      all your personal data and<br />
      transactions are encrypted and<br />
      secured. there's no room for mistakes<br />
      because we didn't leave any.
    </>
  );

  return (
    <>
      {/* The main container for the entire component */}
      <div className="relative w-screen  flex flex-col items-center justify-center  min-h-screen overflow-hidden bg-black font-sans">
        
        {/* Centered content container */}
        <div className="flex flex-col items-center text-center px-4">
          <LockIcon />

          <p className="mt-6 text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase">
            Your data isn't our business. Keeping it safe is.
          </p>

          {/* This container handles the mouse events for the torch effect */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative mt-16 cursor-default"
          >
            {/* The dim, underlying text layer */}
            <p className="text-4xl md:text-5xl font-medium leading-tight text-gray-700 transition-colors duration-300">
              {textContent}
            </p>

            {/* The bright, clipped text layer that creates the torch effect */}
            <p
              className="absolute top-0 left-0 text-4xl md:text-5xl font-medium leading-tight text-gray-300 pointer-events-none" // Brightness reduced from text-gray-200 to text-gray-300
              style={{
                clipPath: `circle(95px at ${mousePos.x}px ${mousePos.y}px)`, // Radius reduced from 125px to 95px
              }}
            >
              {textContent}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
