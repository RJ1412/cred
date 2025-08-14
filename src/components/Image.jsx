import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

// CRED-style 3-card carousel with heading.
// - Middle card is in front, side cards sit behind.
// - Clicking LEFT card => middle moves right, right moves to left, left comes to middle.
// - Clicking RIGHT card => middle moves left, right comes to middle, left goes to right.
// - Soft border with blurry glow around each card.
// - Slower, smoother animation than the previous version.
// TailwindCSS required. Framer Motion is used for smooth animations.

const LEFT_IMG =
  "https://web-images.credcdn.in/v2/_next/assets/images/cc-on-upi/feature-screenshot-03.jpg";
const MIDDLE_IMG =
  "https://web-images.credcdn.in/v2/_next/assets/images/cc-on-upi/feature-screenshot-02.jpg";
const RIGHT_IMG =
  "https://web-images.credcdn.in/v2/_next/assets/images/cc-on-upi/feature-screenshot-01.jpg";

export function CredStyleCarousel() {
  // arr represents which image is at [left, center, right]
  const [arr, setArr] = useState([
    { id: "left", src: LEFT_IMG },
    { id: "middle", src: MIDDLE_IMG },
    { id: "right", src: RIGHT_IMG },
  ]);

  // Responsive horizontal offset for the side cards
  const [offset, setOffset] = useState(260);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 480) setOffset(110);
      else if (w < 768) setOffset(140);
      else if (w < 1024) setOffset(190);
      else setOffset(260);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // motion presets for positions
  const variants = useMemo(
    () => ({
      left: {
        x: -offset,
        scale: 0.9,
        zIndex: 5,
        rotateY: 8,
        filter: "brightness(0.85)",
      },
      center: {
        x: 0,
        scale: 1,
        zIndex: 30,
        rotateY: 0,
        filter: "brightness(1)",
      },
      right: {
        x: offset,
        scale: 0.9,
        zIndex: 5,
        rotateY: -8,
        filter: "brightness(0.85)",
      },
    }),
    [offset]
  );

  // Slower spring for smoother, more deliberate motion
  const spring = {
    type: "spring",
    stiffness: 120,
    damping: 38,
    mass: 1.4,
  };

  // Rotate helpers
  const rotateLeft = () => {
    // [L, C, R] => [C, R, L]
    setArr(([L, C, R]) => [C, R, L]);
  };
  const rotateRight = () => {
    // [L, C, R] => [R, L, C]
    setArr(([L, C, R]) => [R, L, C]);
  };

  // Card component with frame + blur glow
  const Card = ({ position, img, onClick, isInteractive }) => (
    <motion.div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      animate={variants[position]}
      transition={spring}
      style={{ perspective: 1200 }}
    >
      {/* Glow frame behind the card */}
      <div className="pointer-events-none absolute -inset-7 rounded-3xl border border-neutral-300/70 bg-white/10 shadow-[0_12px_60px_rgba(0,0,0,0.55)]" />
      {/* Soft outer blur to emulate frosted edge */}
      <div className="pointer-events-none absolute -inset-12 rounded-3xl bg-neutral-200/50 blur-3xl" />

      <div
        onClick={onClick}
        className={`relative overflow-hidden rounded-3xl md:rounded-[28px] ring-1 ring-white/20 shadow-xl ${
          isInteractive ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <img
          src={img}
          alt="carousel-card"
          className="block h-screen w-screen sm:h-[430px] sm:w-[310px] md:h-screen md:w-[360px] lg:h-screen lg:w-[400px] object-cover select-none"
          draggable={false}
          loading="eager"
        />
      </div>
    </motion.div>
  );

  return (
    <section className="w-screen bg-[#f4f5f7]">
      {/* Heading above the carousel */}
      <div className="mx-auto max-w-screen px-4">
        <h2 className="pt-20 mb-20 sm:pt-24 sm:pb-20 text-center font-serif tracking-tight text-black leading-[0.95] text-[42px] sm:text-[56px] md:text-[76px] lg:text-[96px]">
          <span className="block">know your cards.</span>
          <span className="block">inside out.</span>
        </h2>
        
      </div>


      {/* Carousel area */}
      <div className="mb-10 min-h-[70vh] w-full flex items-center justify-center">
        <div className="relative mx-auto h=[580px] w-full max-w-6xl sm:h-[640px] md:h-[700px]">
          {/* Background vignette to match the reference look */}
          {/* <div className="mb-10 pointer-events-none absolute inset-0 mx-auto max-w-5xl rounded-[36px] bg-gradient-to-b from-neutral-200 to-neutral-100" /> */}

          {/* Layered cards */}
          <Card position="left" img={arr[0].src} onClick={rotateRight} isInteractive />
          <Card position="center" img={arr[1].src} onClick={() => {}} isInteractive={false} />
          <Card position="right" img={arr[2].src} onClick={rotateLeft} isInteractive />

          {/* Optional: helpful hint */}
       
        </div>

      </div>
       <h2
    className="text-center font-sans tracking-[0.5em] text-[14px] md:text-[16px] font-medium text-black uppercase mt-15"
    style={{
      letterSpacing: "0.5em",
      fontWeight: 500,
    }}
  >
    EVERYTHING YOU NEED. IN ONE PLACE.
  </h2>
 
      



      {/* Local styles to enhance 3D feel on WebKit */}
      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
    
  );
}
