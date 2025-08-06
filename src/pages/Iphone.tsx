
export const Iphone = () => {
    return (
        <div className="h-[150vh] w-screen overflow-hidden relative bg-black mb-10">
  {/* Top border */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent z-10" />
<div className="relative">
  <video
    className="w-full h-auto border-none "
    autoPlay
    muted
    playsInline
    preload="metadata"
    poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/phone-ticker-desktop-poster-final.jpg?tr=q-95"
    src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/phone-ticker-desktop-final.mp4?tr=q-95"
  />
  <div className="absolute left-[28%] font-playfair font-extrabold tracking-tighter text-6xl lg:text-8xl bottom-[-5%] text-white ">
   all that you deserve. <br />
  </div>
  <div className="absolute left-[32%] font-playfair font-extrabold tracking-tighter text-6xl lg:text-8xl bottom-[-14%] text-white ">
   and some more.
    <div className="absolute font-sans font-medium text-neutral-400 left-[10%] text-lg bottom-[-100%] w-full tracking-normal">
    if you're a cred member, you're already a step ahead. every <br />
      <p className="ml-2">experience you unlock takes you higher up the pedestal.  </p>
  </div>
  </div>
 
</div>
</div>

    )
}