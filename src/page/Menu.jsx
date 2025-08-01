import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svalboard from "../assets/svalbard-hero-final.mp4"; // Adjust the path as necessary
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState("WHAT'S NEW");

  const menuItems = ["WHAT'S NEW", "PAYMENTS", "UPGRADES", "COMPANY", "INSIDER PERKS"];

  // Mapping of menu items to their corresponding right-side content
  const contentMap = {
    "WHAT'S NEW": {
      mainImage: "https://placehold.co/800x400/1C313C/ffffff?text=THE SVALBARD 2025 RELEASE",
      smallImages: [
        { title: "MONEY", description: "track, analyse, and reflect on your financial behavior", src: "https://placehold.co/300x400/4a4a4a/ffffff?text=Image+1" },
        { title: "GARAGE", description: "manage, maintain, and obsess over your cars", src: "https://placehold.co/300x400/4a4a4a/ffffff?text=Image+2" },
        { title: "PAY ANYONE", description: "pay anyone, no matter what UPI app they're on", src: "https://placehold.co/300x400/4a4a4a/ffffff?text=Image+3" },
        { title: "WORK FOR CRED", description: "apply to build the most trustworthy community", src: "https://placehold.co/300x400/4a4a4a/ffffff?text=Image+4" },
      ],
    },
    "PAYMENTS": {
      title: "PAYMENTS",
      items: [
        { text: "TAP TO PAY", icon: "tap-to-pay" },
        { text: "PAY ANYONE", icon: "pay-anyone" },
        { text: "RUPAY CARDS ON UPI", icon: "rupay" },
        { text: "SCAN & PAY", icon: "scan-pay" },
      ],
    },
    "UPGRADES": {
      title: "UPGRADES",
      items: [
        { text: "TRAVEL", icon: "travel" },
        { text: "GARAGE", icon: "garage" },
        { text: "MINT", icon: "mint" },
        { text: "MONEY", icon: "money" },
      ],
    },
    "COMPANY": {
      title: "COMPANY",
      items: [
        { text: "ABOUT CRED" },
        { text: "CAREERS" },
      ],
    },
    "INSIDER PERKS": {
      title: "INSIDER PERKS",
      items: [
        { text: "UPGRADE TO UPI!" },
      ],
    },
  };

  // Animation variants for the "click to expand" text
  const expandTextVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "auto", transition: { duration: 0.3, ease: "easeOut" } },
  };

  // Video fade-in animation variants
  const videoVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" } },
  };

  // Staggered animation variants for the video overlay content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      },
    }),
  };

  // Inline SVG icons for the menu content
  const Icon = ({ name }) => {
    switch (name) {
      case "tap-to-pay": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6a7.5 7.5 0 00-15 0v4.5" /></svg>;
      case "pay-anyone": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>;
      case "rupay": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
      case "scan-pay": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v.01M12 12v.01M12 20v.01M18 4h2a2 2 0 012 2v2M20 18v2a2 2 0 01-2 2h-2M6 4H4a2 2 0 00-2 2v2M4 18v2a2 2 0 002 2h2" /></svg>;
      case "travel": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M22 17H2a2 2 0 01-2-2V7a2 2 0 012-2h8l2 4h10a2 2 0 012 2v6a2 2 0 01-2 2z" /></svg>;
      case "garage": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
      case "mint": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0v3m-3.414 2.586a2 2 0 112.828-2.828L15 15l-2 2 2-2M15 15l2 2 2-2M12 19l-7-7-4 4-2-2 7-7 4 4 4 4z" /></svg>;
      case "money": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3 1.343 3 3v2h2v4h-2v2H9v-2H7v-4h2v-2c0-1.657 1.343-3 3-3zM7 11h2v-2H7v2zM15 11h2v-2h-2v2z" /></svg>;
      default: return null;
    }
  };
  
  const renderMenuContent = () => {
    const content = contentMap[hoveredMenuItem];
    if (!content) return null;
  
    if (hoveredMenuItem === "WHAT'S NEW") {
      return (
        <div className="flex flex-col h-full">
          <div className="relative w-full h-1/2 bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">NOW LIVE</div>
            <img
              src={content.mainImage}
              alt={content.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {content.smallImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                className="w-full bg-gray-800 rounded-lg overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-sm font-bold">{image.title}</h3>
                  <p className="text-xs text-gray-400">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
  
    const isGrid = hoveredMenuItem === "PAYMENTS" || hoveredMenuItem === "UPGRADES";
    return (
      <div className={`flex flex-col h-full`}>
        <span className="text-lg font-cred tracking-wide text-gray-400 mb-6">{hoveredMenuItem === 'COMPANY' || hoveredMenuItem === 'INSIDER PERKS' ? '' : hoveredMenuItem}</span>
        <div className={`${isGrid ? 'grid grid-cols-2 gap-8' : 'flex-grow'}`}>
          {content.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              className={`flex items-center space-x-4 ${isGrid ? '' : 'mb-4'}`}
            >
              {item.icon && <Icon name={item.icon} />}
              <span className={`text-xl font-cred ${isGrid ? '' : 'tracking-wide'}`}>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  // Custom font styling to match CRED's design
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-black font-inter text-white relative overflow-hidden">
      
      {/* Universal close button for overlays */}
      <AnimatePresence>
        {isOpen && (
          <motion.button 
            key="close-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsOpen(false);
            }}
            className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center border border-white bg-white/10 rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main content of the App (visible when overlays are closed) */}
      <AnimatePresence>
        {!isOpen && !isVideoVisible && (
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 mb-2">experience the power of the cred ecosystem</h1>
            <p className="text-center text-lg text-gray-400 max-w-xl">
              explore a world of exclusive benefits and rewards designed for the discerning credit card user.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Container for Svalbard and Menu Button */}
      <div className="absolute top-4 right-4 z-50 flex items-center space-x-0 border border-white bg-black/50 backdrop-blur-sm rounded-sm overflow-hidden">
        {/* Svalbard Component */}
        <div className="relative">
          <AnimatePresence>
            {!isVideoVisible && !isOpen && (
              <motion.div
                key="svalbard-initial"
                className="relative flex items-center cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsVideoVisible(true)}
              >
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      variants={expandTextVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="flex items-center space-x-2 whitespace-nowrap p-4"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="text-xl font-bold font-cred">CLICK TO EXPAND</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="text-4xl font-cred text-white p-4">
                  Svalbard
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Hamburger Menu Button */}
        <AnimatePresence>
          {!isVideoVisible && (
            <motion.button
              key="hamburger-button"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex flex-col items-center justify-center gap-1 border-l border-white"
            >
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white rounded origin-center"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-white rounded"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white rounded origin-center"
              />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Expanded state: Video and content overlay */}
      <AnimatePresence>
        {isVideoVisible && (
          <motion.div
            key="video-overlay"
            className="fixed inset-0 z-40"
            variants={videoVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <video
              className="w-full h-full object-cover"
              src={svalboard}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full text-center">
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <motion.div
                  className="h-10 w-auto flex items-center"
                  custom={0}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="35" viewBox="0 0 65 35" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.4474 1.13963C16.9405 1.13963 16.5298 1.54359 16.5298 2.04354C16.5298 2.54348 16.9405 2.94744 17.4474 2.94744H20.9168V1.13963H17.4474ZM20.9168 12.0125H17.4474C16.9405 12.0125 16.5298 12.4164 16.5298 12.9164C16.5298 13.4163 16.9405 13.8203 17.4474 13.8203H20.9168V12.0125ZM17.4474 21.0503H20.9168V19.2425H17.4474C16.9405 19.2425 16.5298 19.6464 16.5298 20.1464C16.5298 20.6463 16.9405 21.0503 17.4474 21.0503ZM17.4474 30.1232H20.9168V28.3154H17.4474C16.9405 28.3154 16.5298 28.7194 16.5298 29.2193C16.5298 29.7193 16.9405 30.1232 17.4474 30.1232ZM20.9168 34.0195H17.4474C16.9405 34.0195 16.5298 34.4235 16.5298 34.9234C16.5298 35.4234 16.9405 35.8273 17.4474 35.8273H20.9168V34.0195Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9515 0.5C5.7925 0.5 0 6.2925 0 13.4515V35.8273H12.9515V22.8753C12.9515 22.3754 13.3622 21.9714 13.8691 21.9714H16.1481V21.0503C16.1481 19.2425 17.4474 18.0673 19.2553 18.0673H21.2829V17.0673C21.2829 15.2595 19.9836 13.8203 18.1757 13.8203H16.1481V12.9164C16.1481 11.1086 17.4474 9.66937 19.2553 9.66937H21.2829V8.66937C21.2829 6.86156 19.9836 5.42236 18.1757 5.42236H16.1481V4.52445C16.1481 2.71664 17.4474 1.13963 19.2553 1.13963H21.2829V0.5H12.9515Z" fill="white"/>
                    <path d="M17.4474 1.13963C16.9405 1.13963 16.5298 1.54359 16.5298 2.04354C16.5298 2.54348 16.9405 2.94744 17.4474 2.94744H20.9168V1.13963H17.4474ZM20.9168 12.0125H17.4474C16.9405 12.0125 16.5298 12.4164 16.5298 12.9164C16.5298 13.4163 16.9405 13.8203 17.4474 13.8203H20.9168V12.0125ZM17.4474 21.0503H20.9168V19.2425H17.4474C16.9405 19.2425 16.5298 19.6464 16.5298 20.1464C16.5298 20.6463 16.9405 21.0503 17.4474 21.0503ZM17.4474 30.1232H20.9168V28.3154H17.4474C16.9405 28.3154 16.5298 28.7194 16.5298 29.2193C16.5298 29.7193 16.9405 30.1232 17.4474 30.1232ZM20.9168 34.0195H17.4474C16.9405 34.0195 16.5298 34.4235 16.5298 34.9234C16.5298 35.4234 16.9405 35.8273 17.4474 35.8273H20.9168V34.0195Z" fill="black"/>
                  </svg>
                  <span className="font-cred text-lg ml-2 font-bold text-white">CRED</span>
                </motion.div>
              </div>
              <div className="absolute top-4 right-4 flex flex-col items-end space-y-4">
                <motion.div
                  className="flex items-center space-x-2 text-white"
                  custom={1}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="font-cred text-lg">THE</span>
                  <span className="font-cred text-lg px-4 py-1 border border-white rounded-full">SVALBARD 2025</span>
                  <span className="font-cred text-lg">RELEASE</span>
                </motion.div>
                <button
                  onClick={() => setIsVideoVisible(false)}
                  className="w-12 h-12 flex items-center justify-center border border-white bg-white/10 rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <motion.h1
                className="text-7xl md:text-9xl font-bold font-cred glowing-text mt-20"
                custom={2}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                experience the shift.
              </motion.h1>
              <motion.button
                className="absolute bottom-10 px-8 py-4 border border-white rounded-xl text-lg font-bold transition-transform duration-200 transform hover:scale-105"
                custom={3}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                LEARN MORE →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The fullscreen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 w-full h-full bg-black text-white flex flex-col md:flex-row z-40"
          >
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
              <div className="space-y-6 mt-20">
                <div className="h-10 w-auto flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="35" viewBox="0 0 65 35" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.4474 1.13963C16.9405 1.13963 16.5298 1.54359 16.5298 2.04354C16.5298 2.54348 16.9405 2.94744 17.4474 2.94744H20.9168V1.13963H17.4474ZM20.9168 12.0125H17.4474C16.9405 12.0125 16.5298 12.4164 16.5298 12.9164C16.5298 13.4163 16.9405 13.8203 17.4474 13.8203H20.9168V12.0125ZM17.4474 21.0503H20.9168V19.2425H17.4474C16.9405 19.2425 16.5298 19.6464 16.5298 20.1464C16.5298 20.6463 16.9405 21.0503 17.4474 21.0503ZM17.4474 30.1232H20.9168V28.3154H17.4474C16.9405 28.3154 16.5298 28.7194 16.5298 29.2193C16.5298 29.7193 16.9405 30.1232 17.4474 30.1232ZM20.9168 34.0195H17.4474C16.9405 34.0195 16.5298 34.4235 16.5298 34.9234C16.5298 35.4234 16.9405 35.8273 17.4474 35.8273H20.9168V34.0195Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9515 0.5C5.7925 0.5 0 6.2925 0 13.4515V35.8273H12.9515V22.8753C12.9515 22.3754 13.3622 21.9714 13.8691 21.9714H16.1481V21.0503C16.1481 19.2425 17.4474 18.0673 19.2553 18.0673H21.2829V17.0673C21.2829 15.2595 19.9836 13.8203 18.1757 13.8203H16.1481V12.9164C16.1481 11.1086 17.4474 9.66937 19.2553 9.66937H21.2829V8.66937C21.2829 6.86156 19.9836 5.42236 18.1757 5.42236H16.1481V4.52445C16.1481 2.71664 17.4474 1.13963 19.2553 1.13963H21.2829V0.5H12.9515Z" fill="white"/>
                    <path d="M17.4474 1.13963C16.9405 1.13963 16.5298 1.54359 16.5298 2.04354C16.5298 2.54348 16.9405 2.94744 17.4474 2.94744H20.9168V1.13963H17.4474ZM20.9168 12.0125H17.4474C16.9405 12.0125 16.5298 12.4164 16.5298 12.9164C16.5298 13.4163 16.9405 13.8203 17.4474 13.8203H20.9168V12.0125ZM17.4474 21.0503H20.9168V19.2425H17.4474C16.9405 19.2425 16.5298 19.6464 16.5298 20.1464C16.5298 20.6463 16.9405 21.0503 17.4474 21.0503ZM17.4474 30.1232H20.9168V28.3154H17.4474C16.9405 28.3154 16.5298 28.7194 16.5298 29.2193C16.5298 29.7193 16.9405 30.1232 17.4474 30.1232ZM20.9168 34.0195H17.4474C16.9405 34.0195 16.5298 34.4235 16.5298 34.9234C16.5298 35.4234 16.9405 35.8273 17.4474 35.8273H20.9168V34.0195Z" fill="black"/>
                  </svg>
                  <span className="font-cred text-lg ml-2 font-bold">CRED</span>
                </div>
                <ul className="mt-10 space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 150 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.1,
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      onMouseEnter={() => setHoveredMenuItem(item)}
                      className={`text-3xl font-cred hover:opacity-80 cursor-pointer border-b border-white/20 pb-2 ${hoveredMenuItem === item ? 'opacity-100' : 'opacity-40'}`}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-between mt-30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredMenuItem}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col h-full"
                >
                  {renderMenuContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .glowing-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
}

const Icon = ({ name }) => {
  switch (name) {
    case "tap-to-pay": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6a7.5 7.5 0 00-15 0v4.5" /></svg>;
    case "pay-anyone": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>;
    case "rupay": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
    case "scan-pay": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v.01M12 12v.01M12 20v.01M18 4h2a2 2 0 012 2v2M20 18v2a2 2 0 01-2 2h-2M6 4H4a2 2 0 00-2 2v2M4 18v2a2 2 0 002 2h2" /></svg>;
    case "travel": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M22 17H2a2 2 0 01-2-2V7a2 2 0 012-2h8l2 4h10a2 2 0 012 2v6a2 2 0 01-2 2z" /></svg>;
    case "garage": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
    case "mint": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0v3m-3.414 2.586a2 2 0 112.828-2.828L15 15l-2 2 2-2M15 15l2 2 2-2M12 19l-7-7-4 4-2-2 7-7 4 4 4 4z" /></svg>;
    case "money": return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3 1.343 3 3v2h2v4h-2v2H9v-2H7v-4h2v-2c0-1.657 1.343-3 3-3zM7 11h2v-2H7v2zM15 11h2v-2h-2v2z" /></svg>;
    default: return null;
  }
};
