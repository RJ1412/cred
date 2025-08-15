import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

// Data for the swiper cards
const images = [
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/scan-n-pay.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/snp-logo-final.png"
  },
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/cc-on-upi.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/rupay-logo-final.png"
  },
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/tap-n-pay.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/tnp-logo-final.png"
  },
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/p2p.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/p2p-logo-final.png"
  },
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/garage.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/garage-logo-final.png"
  },
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/escapes.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/escapes-logo-final.png"
  }
];

// CardComponent
const CardComponent = ({ bgimg, tagimg, onKnowMore }) => {
  return (
    <div
      className="relative w-[28vw] h-[72vh] font-sans text-white bg-no-repeat bg-cover border border-neutral-600 ml-[9%]"
      style={{ backgroundImage: `url(${bgimg})`, backgroundPosition: 'center -150px' }}
    >
      <div className="absolute left-[8%] top-[7%] w-full h-full">
        <img className="relative" src={tagimg} height={40} width={170} alt="" />
        <div className="mt-[4%] text-4xl font-medium font-sans">
          scan & pay <br /> any UPI QR
        </div>
        <button
          onClick={onKnowMore}
          className="mt-[4%] border whitespace-nowrap border-neutral-600 text-white w-[35%] h-[7%] text-sm font-bold px-4 py-2 flex justify-center items-center space-x-2"
        >
          <div>KNOW MORE</div>
          <svg
            width="19"
            height="8"
            viewBox="0 0 32 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2 7.12494L30.5 7.12494V4.87494L2 4.87494L2 7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374 7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744 27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374 4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184 9.27259 29.4489 7.125 32 7.125V4.875Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// CreditCards Component
export const CreditCards = () => {
  const swiperAreaRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const throttleTimeout = useRef(null);
  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    window.scrollTo(0, 0);
    const swiperElement = swiperAreaRef.current;
    if (swiperElement && swiperInstance) {
      const SCROLL_DELAY = 600;

      const handleWheel = (e) => {
        if (throttleTimeout.current) return;
        e.preventDefault();
        const scrollDelta = e.deltaX || e.deltaY;
        if (Math.abs(scrollDelta) > 1) {
          if (scrollDelta > 0) {
            swiperInstance.slideNext();
          } else {
            swiperInstance.slidePrev();
          }
          throttleTimeout.current = setTimeout(() => {
            throttleTimeout.current = null;
          }, SCROLL_DELAY);
        }
      };

      swiperElement.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        swiperElement.removeEventListener('wheel', handleWheel);
        if (throttleTimeout.current) clearTimeout(throttleTimeout.current);
      };
    }
  }, [swiperInstance]);

  return (
    <div className="relative min-h-[150vh] bg-black w-screen text-white px-4 py-16">
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <div className="absolute top-[1%] left-0 w-full h-[1px] bg-gradient-to-r from-black via-neutral-600 to-black"></div>
      <div className="text-7xl font-playfair font-extrabold mb-[8%] mt-[13%] ml-[3%]">
        upgrade your life. <br /> bit by bit
      </div>

      <div ref={swiperAreaRef}>
        <Swiper
          breakpoints={{
            340: { slidesPerView: 1.2, spaceBetween: 15 },
            700: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
          }}
          grabCursor={false}
          modules={[Pagination]}
          className="max-w-[100%] no-scrollbar"
          onSwiper={setSwiperInstance}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <CardComponent
                bgimg={item.backgroundImage}
                tagimg={item.tagimg}
                onKnowMore={() => {
                  if (index === 0) {
                    const newTab = window.open('/cred-pay', '_blank');
                    if (newTab) {
                      newTab.scrollTo(0, 0); // Ensure it starts at top
                    }
                    // Redirect to Cred Pay page
                  }
                  if (index === 1) {
                    const newTab = window.open('/upi-credit', '_blank');
                    if (newTab) {
                      newTab.scrollTo(0, 0);
                    }
                  }
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// FloatingCards Component
export const FloatingCards = () => {
  return (
    <>
      <div className="relative min-h-[55vh] w-screen bg-black">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-black via-neutral-600 to-black"></div>

        <div className="grid grid-cols-3">
          <div className="col-span-2 z-10 text-white">
            <div className="absolute top-25 left-45 font-playfair font-extrabold text-7xl">
              do more with <br /> your credit cards
              <div className="absolute bottom-[-70%] text-lg font-sans font-semibold text-neutral-400">
                manage your credit cards better and improve your credit score: <br />
                receive payment reminders, uncover hidden fees, get spending <br />
                insights, and discover ways to maximize card benefits.
              </div>
            </div>
          </div>
          <div className="col-span-1">
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
};
