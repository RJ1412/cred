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
      style={{
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9", // light whiteish background to match phone
    overflow: "hidden",
    justifyContent: "center",
    position: "relative",
  }}
    >
      <div
        style={{
      width: "100%",
      maxWidth: "1200px",
      position: "relative",
      display: "flex",
      alignItems: "center",
    }}
      >
        {/* LEFT TEXT SECTION */}
        <div
          style={{
        backgroundColor: "#f2f2f2",
        padding: "60px",
        borderRadius: "12px",
        width: "70%",
        minHeight: "52vh",
        position: "relative",
        zIndex: 1,
      }}
        >
          <div style={{ position: "relative", minHeight: "52vh" }}>
            {/* FRAME A */}
            <div className="frame frame-a" style={{ position: "absolute", inset: 0 }}>
              <div
                className="h-lines"
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  marginBottom: "20px",
                }}
              >
                <span className="line" style={{ display: "block" }}>scan any</span>
                <span className="line" style={{ display: "block" }}>QR and pay.</span>
                <span className="line" style={{ display: "block" }}>on credit.</span>
              </div>
              <div
                className="subcopy"
                style={{
                  fontSize: "18px",
                  color: "#555",
                  lineHeight: "1.5",
                  maxWidth: "420px",
                }}
              >
                <span className="sub-line" style={{ display: "block" }}>
                  reach your spend milestones faster,
                </span>
                <span className="sub-line" style={{ display: "block" }}>
                  and earn credit card rewards.
                </span>
              </div>
            </div>

            {/* FRAME B */}
            <div className="frame frame-b" style={{ position: "absolute", inset: 0 }}>
              <div
                className="h-lines"
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  marginBottom: "20px",
                }}
              >
                <span className="line" style={{ display: "block" }}>pay online,</span>
                <span className="line" style={{ display: "block" }}>without any</span>
                <span className="line" style={{ display: "block" }}>CVV &amp; OTP</span>
              </div>
              <div
                className="subcopy"
                style={{
                  fontSize: "18px",
                  color: "#555",
                  lineHeight: "1.5",
                  maxWidth: "420px",
                }}
              >
                <span className="sub-line" style={{ display: "block" }}>
                  make purchases on credit
                </span>
                <span className="sub-line" style={{ display: "block" }}>
                  by entering only your UPI PIN at checkout
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO SECTION */}
        <div   style={{
        marginLeft: "-60px", // pull phone into card to remove gap
        zIndex: 2,
      }}>
          <video 
  loop 
  playsInline 
  preload="metadata" 
  autoPlay 
  muted 
  poster="https://web-images.credcdn.in/v2/_next/assets/images/cc-on-upi/desktop-onboarding-01-thumbnail.png"
  style={{
     
         
          backgroundColor: "#f9f9f9", // match phone background color
    width: "270px",
    height: "544px",
    borderRadius: "24px",
    boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
    objectFit: "cover",
    position: "initial",
    visibility: "visible"
  }}
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
