

export const Balls = () => {
    return (
        <>
        <div className="relative h-[100vh] w-screen bg-black text-white ">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-black via-neutral-600 to-black"></div>
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-black via-neutral-600 to-black"></div>
    <video
        className="absolute top-[0.1%] bottom-[1%] left-0 w-full h-full object-cover z-0"
        src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/rewards-desktop-final.mp4?tr=q-95"
        autoPlay
        loop
        muted
        playsInline
    />
    <div className="absolute inset-0 bg-black opacity-0 z-[1]"></div> 
    <div className="absolute inset-0 flex flex-col justify-center items-center font-playfair font-extrabold z-10 text-8xl">
       <div>feel the odds fall  </div> 
        <div className="">in your favour</div> 
        <div className="text-lg text-neutral-300 font-sans font-medium mt-[3%]">
            unlock cashback, exclusive rewards from select brands, and special access to curated products and 
        </div>
        <div className="text-lg text-neutral-300 font-sans font-medium">
            experiences.
        </div>
    </div>
</div>
        </>
    )
}