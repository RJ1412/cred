export const Iphone = () => {
  return (
    <div className="w-screen overflow-hidden relative bg-black mb-20">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent z-10" />

      {/* Video Section */}
      <div className="w-full">
        <video
          className="w-full h-auto border-none"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/phone-ticker-desktop-poster-final.jpg?tr=q-95"
          src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/phone-ticker-desktop-final.mp4?tr=q-95"
        />
      </div>

      {/* Text Section */}
      <div className="mt-8  mb-8 text-center text-white w-full px-4">
        <h1 className="font-playfair font-extrabold tracking-tight text-[3.5rem] lg:text-[5.5rem] leading-[1.2]">
          all that you deserve.<br />
          and some more.
        </h1>

        <p className="mt-8  font-sans font-medium text-neutral-400 text-lg md:text-xl">
          if you're a CRED member, you're already a step ahead. every<br />
          experience you unlock takes you higher up the pedestal.
        </p>
      </div>
    </div>
  );
};
