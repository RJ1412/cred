                                               
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedText() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const aHead = gsap.utils.toArray(".frame-a .h-lines .line");
      const aSub = gsap.utils.toArray(".frame-a .subcopy .sub-line");
      const bHead = gsap.utils.toArray(".frame-b .h-lines .line");
      const bSub = gsap.utils.toArray(".frame-b .subcopy .sub-line");

      gsap.set(aHead.concat(aSub), {
        clipPath: "inset(0% 0 0 0)",
        y: 0,
        opacity: 1,
      });
      gsap.set(bHead.concat(bSub), {
        clipPath: "inset(100% 0 0 0)",
        y: -8,
        opacity: 1,
      });

      const tl = gsap.timeline({
        defaults: { ease: "steps(50)" },
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=3500",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(aHead, {
        clipPath: "inset(0% 0 100% 0)",
        y: 8,
        duration: 0.28,
        stagger: 0.08,
      });
      tl.to(
        aSub,
        {
          clipPath: "inset(0% 0 100% 0)",
          y: 6,
          duration: 0.24,
          stagger: 0.06,
        },
        ">-0.05"
      );
      tl.addPause("+=" + 0.02);
      tl.to(bHead, {
        clipPath: "inset(0% 0 0% 0)",
        y: 0,
        duration: 0.28,
        stagger: 0.08,
      });
      tl.to(
        bSub,
        {
          clipPath: "inset(0% 0 0% 0)",
          y: 0,
          duration: 0.24,
          stagger: 0.06,
        },
        ">-0.05"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex items-center  w-screen bg-[#f9f9f9]  justify-center relative"
    >
      <div className="w-full max-w-[1200px] relative flex items-center">
        {/* LEFT TEXT SECTION */}
        <div className="bg-[#f2f2f2] p-[60px] rounded-[12px] w-[70%] min-h-[52vh] relative z-[1]">
          <div className="relative min-h-[52vh]">
            {/* FRAME A */}
            <div className="frame frame-a absolute inset-0">
              <div className="h-lines text-[48px] font-extrabold leading-[1.1] mb-[20px]">
                <span className="line block">scan any</span>
                <span className="line block">QR and pay.</span>
                <span className="line block">on credit.</span>
              </div>
              <div className="subcopy text-[18px] text-[#555] leading-[1.5] max-w-[420px]">
                <span className="sub-line block">
                  reach your spend milestones faster,
                </span>
                <span className="sub-line block">
                  and earn credit card rewards.
                </span>
              </div>
            </div>

            {/* FRAME B */}
            <div className="frame frame-b absolute inset-0">
              <div className="h-lines text-[48px] font-extrabold leading-[1.1] mb-[20px]">
                <span className="line block">pay online,</span>
                <span className="line block">without any</span>
                <span className="line block">CVV &amp; OTP</span>
              </div>
              <div className="subcopy text-[18px] text-[#555] leading-[1.5] max-w-[420px]">
                <span className="sub-line block">
                  make purchases on credit
                </span>
                <span className="sub-line block">
                  by entering only your UPI PIN at checkout
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO SECTION */}
        <div className="ml-[-60px] z-[2]">
          <video
            loop
            playsInline
            preload="metadata"
            autoPlay
            muted
            poster="https://web-images.credcdn.in/v2/_next/assets/images/cc-on-upi/desktop-onboarding-01-thumbnail.png"
            className="bg-[#f9f9f9] w-[270px] h-[544px] rounded-[24px] shadow-[0_4px_30px_rgba(0,0,0,0.2)] object-cover"
          >
            <source
              src="https://web-images.credcdn.in/v2/_next/assets/videos/cc-on-upi/desktop-onboarding-01-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
          