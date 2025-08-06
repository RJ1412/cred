import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Helper Components ---

// Logo component as seen in the design
const CredLogo = () => (
  <div className="flex flex-col items-center">
    {/* SVG for the CRED logo icon */}
    <svg className="w-10 h-10 text-white mb-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z"/>
    </svg>
    <span className="font-cred font-bold tracking-wider text-sm">CRED</span>
  </div>
);

// Icon component for the menu items
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

// --- Menu Component ---
const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSvalbardVideoOpen, setIsSvalbardVideoOpen] = useState(false);
  const [isSvalbardHovered, setIsSvalbardHovered] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState("WHAT'S NEW");
  const hamburgerButtonRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleMenuToggle = () => {
    // When opening the menu, ensure video is closed
    setIsSvalbardVideoOpen(false);
    if (hamburgerButtonRef.current) {
      const rect = hamburgerButtonRef.current.getBoundingClientRect();
      setMenuPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleVideoToggle = () => {
    // When opening the video, ensure menu is closed
    setIsMenuOpen(false);
    setIsSvalbardVideoOpen(!isSvalbardVideoOpen);
  }

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSvalbardVideoOpen(false);
  }

  const menuItems = ["WHAT'S NEW", "PAYMENTS", "UPGRADES", "COMPANY", "INSIDER PERKS"];
  const svalbardVideoUrl = "https://web-images.credcdn.in/v2/_next/assets/videos/svalbard/desktop/svalbard-hero-final.mp4?tr=q-95";
  const svalbardVideoPoster = "https://web-images.credcdn.in/v2/_next/assets/images/svalbard/desktop/svalbard-hero-poster.jpg?tr=orig";

  const contentMap = {
    "WHAT'S NEW": {
      mainImage: "https://placehold.co/800x400/1C313C/ffffff?text=THE+SVALBARD+2025+RELEASE",
      smallImages: [
        { title: "MONEY", description: "track, analyse, and reflect on your financial behavior", src: "https://placehold.co/300x400/4a4a4a/ffffff?text=Image+1" },
        { title: "GARAGE", description: "manage, maintain, and obsess over your cars", src: "https://placehold.co/300x400/4a4a4a/ffffff?text=Image+2" },
        { title: "PAY ANYONE", description: "pay anyone, no matter what UPI app they're on", src: "https://placehold.co/300x400/4a4a4a/ffffff?text=Image+3" },
        { title: "WORK FOR CRED", description: "apply to build the most trustworthy community", src: "https://placehold.co/300x400/4a4a4a/ffffff?text=Image+4" },
      ],
    },
    "PAYMENTS": { items: [{ text: "TAP TO PAY", icon: "tap-to-pay" }, { text: "PAY ANYONE", icon: "pay-anyone" }, { text: "RUPAY CARDS ON UPI", icon: "rupay" }, { text: "SCAN & PAY", icon: "scan-pay" }] },
    "UPGRADES": { items: [{ text: "TRAVEL", icon: "travel" }, { text: "GARAGE", icon: "garage" }, { text: "MINT", icon: "mint" }, { text: "MONEY", icon: "money" }] },
    "COMPANY": { items: [{ text: "ABOUT CRED" }, { text: "CAREERS" }] },
    "INSIDER PERKS": { items: [{ text: "UPGRADE TO UPI!" }] },
  };

  const videoOverlayVariants = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: { y: '0vh', opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { y: '-100vh', opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };
  const contentVariants = { hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.5 + i * 0.2, duration: 0.6, ease: "easeOut" } }) };
  const menuAnimationVariants = {
    open: (pos) => ({ clipPath: `circle(150% at ${pos.x}px ${pos.y}px)`, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }),
    closed: (pos) => ({ clipPath: `circle(0px at ${pos.x}px ${pos.y}px)`, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } })
  };
  const svalbardTextVariants = {
    hidden: { width: 0, opacity: 0, paddingLeft: 0, marginRight: 0 },
    visible: { width: 'auto', opacity: 1, paddingLeft: '1rem', marginRight: '0.5rem', transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const renderMenuContent = () => {
    const content = contentMap[hoveredMenuItem];
    if (!content) return null;
    if (hoveredMenuItem === "WHAT'S NEW") {
      return (
        <div className="flex flex-col h-full">
          <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.2}}} className="relative w-full h-1/2 bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10 mt-20">NOW LIVE</div>
            <img src={content.mainImage} alt="Main content" className="w-full h-full object-cover" />
          </motion.div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {content.smallImages.map((image, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }} className="w-full bg-gray-800 rounded-lg overflow-hidden">
                <img src={image.src} alt={image.title} className="w-full h-32 object-cover" />
                <div className="p-2"><h3 className="text-sm font-bold">{image.title}</h3><p className="text-xs text-gray-400">{image.description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    const isGrid = hoveredMenuItem === "PAYMENTS" || hoveredMenuItem === "UPGRADES";
    return (
      <div className={`flex flex-col h-full`}>
        <span className="text-lg font-cred tracking-wide text-gray-400 mb-6 mt-30">{hoveredMenuItem === 'COMPANY' || hoveredMenuItem === 'INSIDER PERKS' ? '' : hoveredMenuItem}</span>
        <div className={`${isGrid ? 'grid grid-cols-2 gap-8' : 'flex-grow'}`}>
          {content.items.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }} className={`flex items-center space-x-4 ${isGrid ? '' : 'mb-4'}`}>
              {item.icon && <Icon name={item.icon} />}
              <span className={`text-xl font-cred ${isGrid ? '' : 'tracking-wide'}`}>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  const isOverlayActive = isMenuOpen || isSvalbardVideoOpen;

  return (
    <>
      <div className="absolute top-8 right-8 z-50">
        <AnimatePresence mode="wait">
          {!isOverlayActive ? (
            <motion.div 
              key="main-buttons" 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }} 
              transition={{ duration: 0.3 }}
              className="flex items-center border border-white/30 rounded-md overflow-hidden"
            >
              <motion.div
                key="svalbard-section"
                layout
                className="relative flex items-center cursor-pointer"
                onMouseEnter={() => setIsSvalbardHovered(true)}
                onMouseLeave={() => setIsSvalbardHovered(false)}
                onClick={handleVideoToggle}
                transition={{ layout: { duration: 0.4, ease: "easeOut" } }}
              >
                <AnimatePresence>
                  {isSvalbardHovered && (
                    <motion.div variants={svalbardTextVariants} initial="hidden" animate="visible" exit="hidden" className="flex items-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="ml-2 text-sm font-cred text-white whitespace-nowrap tracking-widest font-bold">CLICK TO EXPAND</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="text-2xl font-serif-display text-white px-6 py-2">Svalbard</span>
              </motion.div>

              <div ref={hamburgerButtonRef} className="w-16 h-full border-l border-white/30">
                {/* This is the single button that handles both hamburger and close states. */}
                <motion.button 
                  onClick={handleMenuToggle} 
                  className="w-full h-full flex flex-col items-center justify-center gap-1 py-4"
                >
                  <motion.span
                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-0.5 bg-white rounded origin-center"
                  />
                  <motion.span
                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-0.5 bg-white rounded"
                  />
                  <motion.span
                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-0.5 bg-white rounded origin-center"
                  />
                </motion.button>
              </div>
            </motion.div>
          ) : (
            // The single close button when an overlay is active
            <motion.button
              key="close-button"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              onClick={closeAll}
              className="w-16 h-[54px] flex items-center justify-center border border-white/30 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isSvalbardVideoOpen && (
          <motion.div
            key="video-overlay"
            className="fixed inset-x-0 top-0 w-full h-[90vh] rounded-b-3xl overflow-hidden z-40 bg-black shadow-lg"
            variants={videoOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* The video element with the new poster and src */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={svalbardVideoUrl}
              poster={svalbardVideoPoster}
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Overlay to darken the video for better text contrast */}
            <div className="absolute inset-0 z-10 bg-black/60"></div>
            
            {/* Main content of the overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-between p-10">
              {/* Top Section */}
              <div className="w-full flex justify-between items-center text-white">
                <div className="flex items-center space-x-2">
                  <span className="font-cred text-lg">THE</span>
                  <span className="font-cred text-lg px-4 py-1 border border-white rounded-full">SVALBARD 2025</span>
                  <span className="font-cred text-lg">RELEASE</span>
                </div>
                {/* The close button for the video overlay is now handled by the universal close button outside this div.
                    This comment is left to explain the change.
                */}
              </div>

              {/* Centered Content */}
              <div className="flex flex-col items-center justify-center flex-grow">
                <motion.h1
                  className="text-7xl md:text-9xl font-bold font-cred text-center glowing-text"
                  custom={2}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  experience the shift.
                </motion.h1>
                <motion.button
                  className="mt-8 px-8 py-4 border border-white rounded-xl text-lg font-bold transition-transform duration-200 transform hover:scale-105"
                  custom={3}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  LEARN MORE →
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div key="menu-overlay" custom={menuPosition} variants={menuAnimationVariants} initial="closed" animate={isMenuOpen ? "open" : "closed"} className="fixed inset-0 w-full h-full bg-black z-40">
        <AnimatePresence>
        {isMenuOpen && (
            <div className="w-full h-full flex flex-col md:flex-row p-10 text-white">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (<motion.li key={item} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60, transition: { duration: 0.3, ease: 'easeIn' } }} transition={{ delay: 0.4 + index * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} onMouseEnter={() => setHoveredMenuItem(item)} className={`text-4xl font-cred hover:opacity-100 cursor-pointer transition-opacity ${hoveredMenuItem === item ? 'opacity-100' : 'opacity-50'}`}>{item}</motion.li>))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center mt-10 md:mt-0">
                <AnimatePresence mode="wait"><motion.div key={hoveredMenuItem} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }} exit={{ opacity: 0, transition: { duration: 0.2 } }} className="flex flex-col h-full justify-center">{renderMenuContent()}</motion.div></AnimatePresence>
              </div>
            </div>
        )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

// --- Main App Component ---
export  function Landing() {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Space+Grotesk:wght@500;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  return (
    <div className="text-white relative h-screen w-screen overflow-hidden bg-white font-sans">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4?tr=q-95" autoPlay loop muted playsInline />
      <div className="absolute inset-0  z-1"></div>
      <div className="absolute top-8 left-8 z-20"><CredLogo /></div>
      <Menu />
      <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
        <div className="text-center font-serif-display font-bold text-7xl md:text-8xl p-4 leading-tight">crafted for the<br />creditworthy.</div>
        <div className="text-center text-xl mt-8 p-4 max-w-md font-cred">CRED is a members-only club that enables the trustworthy to make financial progress.</div>
      </div>
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/down-arrow.png" alt="arrow" className="w-8 h-auto" />
        <div className="text-right font-cred"><p className="font-bold">download CRED</p><p className="text-sm text-gray-400">for iOS and android</p></div>
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/homepage-qr.png" alt="QR Code" className="w-24 h-24" />
      </div>
      <style>{`.font-cred { font-family: 'Space Grotesk', sans-serif; } .font-serif-display { font-family: 'Playfair Display', serif; } .glowing-text { text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4); }`}</style>
    </div>
  );
}
