import { motion} from "framer-motion"
import { useState } from "react";
import { CredLogo } from "../components/CredLogo";
export const CredPay = () => {

    const variants = [
    {
      id: "orange",
      bg: "https://web-images.credcdn.in/v2/_next/assets/images/snp/lunar-orange.png",
      screen: "https://web-images.credcdn.in/v2/_next/assets/images/snp/orange-snp-screen.png",
      circle: "https://web-images.credcdn.in/v2/_next/assets/images/snp/icon-02.png",
    },
    {
      id: "blue",
      bg: "https://web-images.credcdn.in/v2/_next/assets/images/snp/lunar-purple.png",
      screen: "https://web-images.credcdn.in/v2/_next/assets/images/snp/purple-snp-screen.png",
      circle: "https://web-images.credcdn.in/v2/_next/assets/images/snp/icon-03.png",
      
    },
    {
      id: "green",
      bg: "https://web-images.credcdn.in/v2/_next/assets/images/snp/lunar-greyish.png",
      screen: "https://web-images.credcdn.in/v2/_next/assets/images/snp/greyish-snp-screen.png",
      circle: "https://web-images.credcdn.in/v2/_next/assets/images/snp/icon-01.png",
    },
  ];


  const texts = Array(20).fill("download cred");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
const [activeButton, setActiveButton] = useState(currentIndex);
  const handleChange = (index) => {
    if (index === currentIndex) return; // avoid re-clicking same
    setPrevIndex(currentIndex);
     setActiveButton(index);
    setCurrentIndex(index);
  };

    return (
        <>
        <div className="relative min-h-[100vh] w-[100vw] bg-black text-white">
         <div className=" relative min-h-[100vh] flex flex-col justify-center items-center">

      {/* Top Logo */}
      <div className="absolute top-[18%] flex justify-center ">
        <img
          src="https://web-images.credcdn.in/v2/_next/assets/images/snp/cred-pay-logo.png"
          alt="CRED Pay Logo"
          className="w-26 h-10"
        />
       
      </div>

      {/* Rays */}
      <img
        src="https://web-images.credcdn.in/v2/_next/assets/images/snp/ray-01.png"
        alt="Ray 1"
        className="absolute left-[9%] top-[44%] opacity-90 h-[10%] w-[6%]"
      />
      <img
        src="https://web-images.credcdn.in/v2/_next/assets/images/snp/ray-02.png"
        alt="Ray 2"
        className="absolute right-[16%] bottom-[15%] w-[8%] h-[10%] opacity-90"
      />

      {/* Sun */}
      <img
        src="https://web-images.credcdn.in/v2/_next/assets/images/snp/sun.png"
        alt="Sun"
        className="absolute right-[25%] top-[20%] h-[10%] w-[4.7%]"
      />

      {/* Main Heading */}
      <div className="absolute top-[39%] left-[35%] tracking-[-0.6em] ">
        <h1 className=" text-[#C8FF00] text-9xl font-extrabold"><span className="font-bold tracking-tighter">CRED</span> <span className="italic font-swear">pay</span></h1>
        <h2 className="text-[#C8FF00] text-9xl italic font-swear font-extrabold space-x-5 "><span>has</span> <span>arrived</span></h2>
      </div>

      {/* Rainbow Curve */}
      <img
        src="https://web-images.credcdn.in/v2/_next/assets/images/snp/rainbow-curve-02.png"
        alt="Rainbow Curve"
        className="absolute bottom-1 w-[70%]"
      />
        </div>
        <div className="flex flex-col justify-center items-center px-50 pt-45 pb-25">
        
         <div className="text-[rgb(210,255,209)] font-swear italic  text-7xl">
          <span className="font-bold"> make a statement</span> <br />
           <span className="opacity-80 font-swear-regular">every time you pay</span>
         </div>

         <div className="text-white/80 mt-15 mb-18">
          scan & pay via UPI. earn assured rewards. 
          claim collectibles. all<br/>of this in a secure payment experience the creditworthy deserve.
         </div>

         <div className="text-[rgb(200,255,45)] text-xs tracking-[0.46em]">
           <span className="">HOW</span> <span>IT</span> <span>WORKS</span>
         </div>
         <motion.img src="https://web-images.credcdn.in/v2/_next/assets/images/snp/arrow.png" 
         className="h-3 w-4 mt-8" alt=""
         animate={{ y: [0, 20, 0] }} // Moves up 10px, back to start
        transition={{
          duration: 2,        // Total time for one cycle
          repeat: Infinity,     // Loops forever
          ease: "easeInOut",    // Smooth motion
        }}
        />
      </div>
      <div className="flex items-center justify-center space-x-56 mt-20"> 
        <div className="space-y-8">
          <div className="text-[rgb(0,255,144)] font-swear text-7xl tracking-[-0.01em]">
            <scan>scan</scan> <br />
            <scan>any QR</scan>
          </div>
          <div className="text-white opacity-80 text-xl">
          all codes are welcome. simply open <br /> CRED and swipe left to scan.
          </div>
        </div>
        <div>
            <video autoPlay loop muted playsInline className="w-[326px] h-[515.22px]" src="https://web-images.credcdn.in/v2/_next/assets/videos/snp/snp_feature_01.mp4"></video>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-56 mt-72">
        <div>
        <video autoPlay loop muted playsInline className="w-[326px] h-[515.22px]" src="https://web-images.credcdn.in/v2/_next/assets/videos/snp/snp_feature_02.mp4"></video>
        </div>
        <div className="space-y-8">
            <div className="text-[rgb(0,255,144)] font-swear text-7xl tracking-[-0.01em]">
            <scan>pay</scan> <br />
            <scan>instantly</scan>
            </div>
            <div className="text-white opacity-80 text-xl">
                while patience is a virtue, you'll <br />never get the chance to exercise <br /> yours.
            </div>
        </div>
      </div>

       <div className="flex items-center justify-center space-x-54 mt-20"> 
        <div className="space-y-8">
          <div className="text-[rgb(0,255,144)] font-swear text-7xl tracking-[-0.01em]">
            <scan>earn</scan> <br />
            <scan>assured</scan> <br /> rewards
          </div>
          <div className="text-white opacity-80 text-xl">
          the experience isn't the only reward. <br /> earn assured cashback, coins, and <br /> more on every transaction.
          </div>
        </div>
        <div>
            <video autoPlay loop muted playsInline className="w-[326px] h-[515.22px]" src="https://web-images.credcdn.in/v2/_next/assets/videos/snp/snp_feature_03.mp4"></video>
        </div>
      </div>
      <div className="mt-80 flex justify-center items-center">
        <img src="https://web-images.credcdn.in/v2/_next/assets/images/snp/snp-merchants-logostrip.png" className="h-[200px] w-[600px]" alt="" />
      </div>

      <div className="mt-40  flex flex-col justify-center items-center text-5xl gap-7">
        <div>
             shopping is hard.<span className="font-swear italic text-[rgb(255,87,208)] ">for others.</span>
        </div>
        <div>
            for you, it's as easy as picking a <span className="font-swear italic text-[rgb(52,243,255)]">partner</span>
        </div>
        <div>
            <span className="font-swear italic text-[rgb(52,243,255)]">brand outlet,</span> paying with <span className="font-swear italic text-[rgb(195,255,23)]">CRED pay,</span>
        </div>
        <div className="">
            and <span className="font-swear italic text-[rgb(255,153,0)]">claiming 2x cashback.</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-72">
     
        <div className="text-[rgb(210,255,209)] text-8xl font-swear italic">on CRED pay,</div> 
        <div className="text-[rgb(210,255,209)] text-8xl font-swear italic">security is first.</div>
        <div className="text-[rgb(210,255,209)] text-8xl font-swear-thin">and second.</div>
     
      </div>

      <div className="flex justify-center items-center mt-68 gap-28"> 
        <div className="flex flex-col text-white/90 gap-10">
           <div>
            <span className="text-3xl font-semibold tracking-tighter">switch to anonymity.</span> <br />
           <span className="text-3xl font-semibold tracking-tighter">create an alias UPI ID.</span> <br />
           </div>
           <div className="text-white/80 text-xl">hide your sensitive details from <br /> merchants when you pay. because your <br /> details are for your eyes only.</div>
        </div>
        <video autoPlay loop muted playsInline className="h-52" src="https://web-images.credcdn.in/v2/_next/assets/videos/snp/security-anonymity.mp4"></video>
      </div>

      <div className="flex justify-center items-center mt-60 mr-10">
        <video autoPlay loop muted playsInline className=" h-48 pr-28" src="https://web-images.credcdn.in/v2/_next/assets/videos/snp/security-payments.mp4"></video>
        <div className="text-white/90 text-3xl flex flex-col gap-10">
          <div className="font-semibold "> your payments come <br /> with a safety net </div>
          <div className="text-xl text-white/80">
            in the unlikely event of a payment not <br /> going through, make another one. if <br /> you're charged for the first, CRED will <br /> credit you the money back.
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center  min-h-[100vh] mt-60 ">
        <div className="text-[rgb(210,255,209)] text-7xl font-swear italic ">
          meet your skin
        </div>
        <div className="text-white/80 flex flex-col items-center justify-center mt-12 text-lg">
          <div>CRED pay is built to showcase you. your tastes. your wins. your</div>
           <div> collections. explore the skins your scanner can wear. it might just be what</div>
            <div>you need to find yourself.</div>
        </div>

 <div className="relative h-[1000px] w-[100vw] flex items-center justify-center overflow-hidden">
  {/* Background Transition */}
  {prevIndex !== null && (
    <motion.div
      key={`bg-${variants[prevIndex].id}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 bg-center bg-no-repeat -mt-[240px]"
      style={{
        backgroundImage: `url(${variants[prevIndex].bg})`,
        backgroundSize: "80", // or 80% if you want smaller
      }}
      onAnimationComplete={() => setPrevIndex(null)}
    />
  )}
  <motion.div
    key={`bg-${variants[currentIndex].id}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 bg-center bg-no-repeat -mt-[240px]"
    style={{
      backgroundImage: `url(${variants[currentIndex].bg})`,
      backgroundSize: "80%", // or 80% for smaller scaling
    }}
  />

  {/* Phone container aligned with horizon */}
  <div className="relative -mt-[132px] w-[354.52px] h-[669.03px] flex items-center justify-center z-[1]">
    {prevIndex !== null && (
      <motion.img
        key={`screen-${variants[prevIndex].id}`}
        src={variants[prevIndex].screen}
        alt="phone-screen"
        className="absolute top-[17px] w-[272.54px] h-[595.85px] object-cover rounded-[40px]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    )}
    <motion.img
      key={`screen-${variants[currentIndex].id}`}
      src={variants[currentIndex].screen}
      alt="phone-screen"
      className="absolute top-[17px] w-[272.54px] h-[595.85px] object-cover rounded-[40px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
    <img
      src="https://web-images.credcdn.in/v2/_next/assets/images/snp/iphone-model.png"
      alt="phone-frame"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />

    {/* Buttons */}
    <button
      onClick={() => handleChange(1)}
      className={`cursor-pointer absolute -bottom-[16px] left-[25px] w-[80px] h-[80px] bg-[url('https://web-images.credcdn.in/v2/_next/assets/images/snp/icon-03.png')] 
      bg-cover rounded-full border-2  ${activeButton === 1 ? 'border-green-500 border-2' : 'border-white'} `}
    />
    <button
      onClick={() => handleChange(0)}
      className={`cursor-pointer absolute bottom-[27px] w-[80px] h-[80px] bg-[url('https://web-images.credcdn.in/v2/_next/assets/images/snp/icon-02.png')] 
      bg-cover rounded-full border-2  ${activeButton === 0 ? 'border-green-500 border-2' : 'border-white'} `}
    />
    <button
      onClick={() => handleChange(2)}
      className={`cursor-pointer absolute -bottom-[16px] right-[25px] w-[80px] h-[80px] bg-[url('https://web-images.credcdn.in/v2/_next/assets/images/snp/icon-01.png')]
       bg-cover rounded-full border-2  ${activeButton === 2 ? 'border-green-500 border-2' : 'border-white'} `}
    />
    <span className="absolute bottom-[-55px] tracking-[0.5em] font-medium cursor-pointer">
      STELLAR
    </span>
    <span className="text-green-600 absolute bottom-[-90px] tracking-wider text-xs">
      TAP TO CHANGE ENVIRONMENT
    </span>
  </div>
 </div>


 <div className=" relative flex flex-col items-center font-bold mt-10 ">
 <div className="tracking-[1em] text-2xl">BEHOLD</div> 
 <div><hr className="border-2 text-white w-8" /></div>
 <div className="font-swear text-[rgb(40,88,255,0.8)] text-[180px] font-semibold">flairs</div>
</div>
 <img src="https://web-images.credcdn.in/v2/_next/assets/images/snp/flairs_rotating.png" className="h-[600px] mt-[-40px]" alt="" /> 
 <img src="https://web-images.credcdn.in/v2/_next/assets/images/snp/flairs-snp.png" className="h-[740px] w-[650px]" alt="" />

 <div className="flex justify-center gap-24 mt-16">
   <div className="font-swear text-[rgb(51,96,252)] text-6xl italic" >
    <span>designed to</span> <br />
    <span>be shown off</span>
   </div>
   <div className="mt-[40px] text-white/70 text-lg">
    <span>redeem coins to collect flairs. pin them</span> <br />
    <span>to your scanner. flaunt your good</span> <br />
    <span>taste.</span>
   </div>
 </div>

   <div className="mt-48 w-full flex flex-col justify-center items-center">
   <motion.img src="https://web-images.credcdn.in/v2/_next/assets/images/snp/perks.png" 
    className="w-80 h-72 " alt=""
    animate={{ y: [0, 10, 0] }} // Moves up 10px, back to start
  transition={{
    duration: 2,        // Total time for one cycle
    repeat: Infinity,     // Loops forever
    ease: "easeInOut",    // Smooth motion
   }}
   ></motion.img>
    <div className="text-white/90 tracking-[0.1em] text-sm font-semibold mt-20">CREDIT CARD CHECKOUT</div>
     <div className="text-[rgb(235,255,10)] mt-12 font-swear text-[70px] italic leading-none">your perks </div>
     <div className="text-[rgb(235,255,10)] font-swear text-[70px] italic  leading-none">extend online</div>
     <div className="text-lg tracking-wide mt-8">select CRED pay while checking out from your favourite</div> 
     <div className="text-lg tracking-wide">online stores. the exclusive rewards you'll unlock is not the</div>
     <div className="text-lg tracking-wide">only reason to do it.</div>
     <motion.img src="https://web-images.credcdn.in/v2/_next/assets/images/snp/boost.png"
      className="w-76 h-92 " alt=""
        animate={{ y: [0, 10, 0] }} // Moves up 10px, back to start
      transition={{
        duration: 2,        // Total time for one cycle
        repeat: Infinity,     // Loops forever
        ease: "easeInOut",    // Smooth motion
      }}
        > 
        </motion.img>
     <div className="mt-16 text-white text-xs font-medium tracking-[0.4em]">CRED BOOSTS</div>
     <div className="text-[rgb(94,255,185)] font-swear text-7xl italic mt-4">
      <div className="leading-none">say hello</div>
      <div className="leading-none">to boosts</div>
      </div>
      <div className="text-white/90 mt-12 text-lg font-semibold">but skip the small talk. unlock boosts and get 120 minutes</div>
      <div className="text-white/90 text-lg font-semibold">to shop at up to 50% less on your favorite brands.</div>
      <img src="https://web-images.credcdn.in/v2/_next/assets/images/snp/pay-days.png" className="h-44 mt-52" alt="" />
      <div className="text-white text-7xl font-swear italic">100% cashback. </div>
      <div className="text-white text-7xl font-swear italic">every hour.</div>
      <div className="uppercase text-sm tracking-[0.2em] mt-12 font-semibold">only via scan & pay.</div>
     <button className="cursor-pointer bg-[rgb(6,194,112)] flex justify-center items-center h-12 w-52 gap-2 mt-8 mb-8">
      <span className="text-black font-semibold">KNOW MORE</span> 
      <span> 
        <svg width="32" height="10" viewBox="0 0 32 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.49994H0V7.49994H1V5.49994ZM1 7.49994H30.3308V5.49994H1V7.49994ZM24.5385 4.34528e-08C24.5385 4.13653 27.8735 7.5 32 7.5V5.5C28.9893 5.5 26.5385 3.04317 26.5385 -4.34528e-08L24.5385 4.34528e-08ZM32 5.5C27.8735 5.5 24.5383 8.86343 24.5383 13H26.5383C26.5383 9.95686 28.9892 7.5 32 7.5V5.5Z" fill="black"></path></svg>
      </span>
     </button>
      <div className="overflow-hidden whitespace-nowrap bg-black w-[100vw]">
      <div
        className="inline-flex items-center text-white"
        style={{
          animation: "scrollLoop 40s linear infinite",
        }}
      >
        {/* Repeat twice for seamless loop */}
        {[...texts, ...texts].map((text, i) => (
          <span key={i} className="flex items-center gap-4 px-2 h-8 py-2 mb-2 mt-20 text-black bg-[rgb(61,255,42)] text-sm font-semibold uppercase tracking-[0.05em]">
            {text} <span>•</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scrollLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      </div>
     </div>
   </div>
   <div className="h-[55vh]">
   <div className="font-swear text-5xl mt-16 ml-16 italic ">
    <div>experience payments for the top 1%. </div>
    <div> <span className="text-white/70">access</span>  <span className="text-[rgb(61,255,42)]">CRED pay</span> on the app.   </div>
   </div>
   <div className="absolute bottom-20 left-18 space-y-2"> 
    <div className="space-x-3 text-base font-medium text-white/80"><span>privacy policy</span> <span>|</span> <span>terms and conditions</span> <span>|</span> <span>security</span></div>
    <div className="text-white/70">copyright © 2020-24 Dreamplug Technologies Pvt Ltd.</div>
   </div>
   <div className="absolute bottom-20 right-15"><CredLogo/></div>
   </div>
    </div>
        </>
    )
}