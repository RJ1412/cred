import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Helper Components ---

// Logo component as seen in the design

const CredLogo = () => {
    return (
        <>
         <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="88"
        viewBox="0 0 74 88"
        fill="none"
        class="w-15 h-auto"
      >
        <path
          d="M36.9957 57.4618C36.6778 57.4628 36.3652 57.3812 36.0889 57.225L12.5222 44.0271C12.2371 43.8671 11.9999 43.6345 11.835 43.3533C11.6701 43.072 11.5834 42.7521 11.5839 42.4266V1.83446C11.5839 1.34793 11.7783 0.88133 12.1243 0.537302C12.4703 0.193273 12.9396 0 13.429 0H60.5595C61.0489 0 61.5182 0.193273 61.8642 0.537302C62.2102 0.88133 62.4046 1.34793 62.4046 1.83446V42.4266C62.4051 42.7521 62.3184 43.072 62.1535 43.3533C61.9887 43.6345 61.7514 43.8671 61.4663 44.0271L37.8996 57.225C37.6242 57.3808 37.3126 57.4624 36.9957 57.4618ZM15.274 41.3681L36.9957 53.5332L58.7145 41.3681V3.66892H15.274V41.3681Z"
          fill="white"
        />
        <path
          d="M36.9957 39.0858C36.678 39.0854 36.3658 39.0038 36.0889 38.849L28.6284 34.6665C28.3433 34.5069 28.106 34.2749 27.9406 33.9942C27.7752 33.7135 27.6878 33.3941 27.6872 33.0688V25.3915H31.3773V32.0132L36.9986 35.1515L43.5552 31.4769L45.3658 34.6722L37.9053 38.8547C37.6271 39.0081 37.3138 39.0877 36.9957 39.0858Z"
          fill="white"
        />
        <path
          d="M36.9957 48.2752C36.678 48.2748 36.3658 48.1933 36.0889 48.0384L20.5739 39.3482C20.2891 39.1885 20.0522 38.9563 19.8873 38.6756C19.7225 38.3949 19.6356 38.0756 19.6356 37.7506V17.8425C19.6356 17.356 19.83 16.8894 20.176 16.5453C20.522 16.2013 20.9913 16.008 21.4806 16.008H44.2668V19.6855H23.3199V36.6864L36.99 44.3438L50.6571 36.6864V28.7323H54.3472V37.7506C54.3472 38.0756 54.2603 38.3949 54.0954 38.6756C53.9306 38.9563 53.6936 39.1885 53.4089 39.3482L37.8938 48.0384C37.6196 48.192 37.3104 48.2735 36.9957 48.2752Z"
          fill="white"
        />
        <path
          d="M54.3529 21.7197H50.6628V11.6744H26.1664V8.00545H52.5108C53.0001 8.00545 53.4694 8.19872 53.8154 8.54275C54.1614 8.88678 54.3558 9.35338 54.3558 9.83991L54.3529 21.7197Z"
          fill="white"
        />
        <path
          d="M0 78.5624C0 73.2244 3.97991 69.1304 9.46915 69.1304C11.0224 69.1067 12.5559 69.4796 13.9228 70.2134C15.2898 70.9471 16.4446 72.0173 17.2769 73.3214L13.6872 75.4013C12.8809 74.0005 11.3199 73.1731 9.47202 73.1731C6.2439 73.1731 4.16356 75.3242 4.16356 78.5624C4.16356 81.8005 6.2439 83.9516 9.47202 83.9516C11.3199 83.9516 12.9153 83.1243 13.6872 81.7235L17.2769 83.7976C15.7159 86.3652 12.8034 87.9943 9.47202 87.9943C3.97991 87.9943 0 83.9003 0 78.5624Z"
          fill="white"
        />
        <path
          d="M53.1248 83.9174V87.9515H40.8264V69.1219H53.1248V73.156H45.1478V76.3827H52.1693V80.4681H45.1478V83.9088L53.1248 83.9174Z"
          fill="white"
        />
        <path
          d="M32.5997 81.0673C33.63 80.5632 34.5007 79.7866 35.1162 78.8229C35.7317 77.8591 36.0683 76.7453 36.0889 75.6038C36.092 74.7546 35.9262 73.9131 35.601 73.1278C35.2759 72.3425 34.7979 71.6288 34.1945 71.0278C33.591 70.4268 32.8741 69.9502 32.0848 69.6256C31.2956 69.301 30.4495 69.1346 29.5954 69.1361H22.0201V88H26.3472V81.7948H28.4075L31.9799 87.9943H36.6341L32.5997 81.0673ZM29.5954 78.0231H26.3472V73.1731H29.5954C30.7862 73.1731 31.759 74.223 31.759 75.5981C31.759 76.9733 30.7862 78.0231 29.5954 78.0231Z"
          fill="white"
        />
        <path
          d="M64.8178 69.1304H57.8594V87.9315H64.8178C70.0229 87.9315 74 83.8489 74 78.531C74 73.213 70.0143 69.1304 64.8178 69.1304ZM64.8178 83.9174H62.175V73.1674H64.8063C67.7733 73.1674 69.8221 75.31 69.8221 78.5338C69.8221 81.7577 67.7848 83.9174 64.8178 83.9174Z"
          fill="white"
        />
      </svg>
        </>
    )
}
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
