
export const FloatingCards = () => {
    return (
      <>
      <div className="relative min-h-[55vh] w-screen bg-black">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-black via-neutral-600 to-black"></div>
        
        <div className=" grid grid-cols-3">
          <div className="col-span-2 z-10 text-white">
              <div className="absolute top-25 left-45  font-playfair font-extrabold text-7xl">
                do more with <br /> your credit cards
              <div className="absolute bottom-[-70%] text-lg font-sans font-semibold text-neutral-400">
                 manage your credit cards better and improve your credit score: <br />
                 receive payment reminders, uncover hidden fees, get spending <br />
                 insights, and discover ways to maximize card benefits.
              </div>
              </div>
          </div>
          <div className=" col-span-1 ">
           <video
            className="absolute top-1 left-0 bottom-1 w-full h-full object-cover z-5"
            src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/ccbp-fold-d.mp4?tr=q-95"
            autoPlay
            loop
            muted
            playsInline
            />
          </div>
      </div>
      </div>
      </>
    ); 
} 