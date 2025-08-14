import React from "react";

export function CredSignupSection() {
  return (
    <section className="bg-black w-screen flex flex-col items-center justify-center">
      {/* Video */}
      <video
        src="https://web-images.credcdn.in/v2/_next/assets/videos/cc-on-upi/desktop-signup-video.mp4?tr=q-95"
        autoPlay
        muted
        loop
        playsInline
        className="w-screen"
      />

      {/* Text + Button */}
      <div className="text-center">
        <h2 className="text-white font-serif text-[44px] sm:text-[56px] md:text-[72px] leading-tight">
          pay via CRED UPI.
          <br />
          on credit.
        </h2>

        <button className="mt-25 px-8 py-4 bg-white text-black text-[16px] uppercase tracking-wide font-medium rounded-none hover:opacity-90 transition">
          BECOME A MEMBER →
        </button>
      </div>

      {/* Space below button */}
      <div className="h-[400px]" />
    </section>
  );
}
