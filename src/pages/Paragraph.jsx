import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Paragraph = () => {
  const containerRef = useRef(null);

  // The text is broken down into the exact lines from the video.
  const lines = [
    "not everyone makes it in.",
    "the story of CRED begins with",
    "trust. we believe individuals",
    "who've proven their",
    "trustworthiness deserve",
    "better: better experiences,",
    "better rewards, better rules.",
    "this is the status quo we're",
    "building. make it into the club,",
    "and experience the ascension",
    "yourself."
  ];

  // We need a flat array of all words to calculate animation progress.
  const words = lines.join(" ").split(" ");
  let wordIndexCounter = 0;

  // useScroll hook to track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Animate from when the top of the container hits the middle of the screen
    // to when the bottom of the container leaves the middle of the screen.
    offset: ["start 0.5", "end 0.5"] 
  });

  // Add Google Fonts to the document head
  useEffect(() => {
    const playfairFont = document.createElement('link');
    playfairFont.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap';
    playfairFont.rel = 'stylesheet';
    document.head.appendChild(playfairFont);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[220vh] w-full bg-black flex items-center justify-center py-24">
      <div className="w-[50vw] max-w-5xl">
        
        
        
        {/* Map over each line to create the structure */}
        {lines.map((line, lineIndex) => (
          <p key={lineIndex} className="font-playfair text-6xl leading-tight font-medium text-white mt-6 tracking-tight">
            
            {/* Map over words in the current line to apply animation */}
            {line.split(" ").map((word, i) => {
              const wordStart = wordIndexCounter / words.length;
              const wordEnd = (wordIndexCounter + 1) / words.length;
              
              // Increment the global word counter
              wordIndexCounter++;

              const opacity = useTransform(scrollYProgress, [wordStart, wordEnd], [0.15, 1]);

              return (
                <motion.span
                  key={i}
                  style={{ opacity }}
                  className="transition-opacity duration-100"
                >
                  {word}{' '}
                </motion.span>
              );
            })}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Paragraph;
