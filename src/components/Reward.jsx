import React from "react";

export function RewardSection() {
  return (
    <section className="w-screen flex flex-col items-center text-center py-[60px]">
      {/* Image */}
      <img
        src="https://web-images.credcdn.in/v2/_next/assets/images/cc-on-upi/reward-icon.svg"
        alt="Reward Icon"
        className="w-[160px] h-auto mb-[32px]"
      />

      {/* Title */}
      <h1
        className="text-[48px] leading-[1.2] font-bold"
        style={{ fontFamily: "'Inter', 'Poppins', 'Avenir Next', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif" }}
      >
        twice the reasons
        <br />
        to celebrate.
      </h1>

      {/* Subtitle */}
      <p
        className="text-[18px] leading-[1.6] max-w-[620px] mt-[20px] text-[#333] font-normal"
        style={{ fontFamily: "'Inter', 'Poppins', 'Avenir Next', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif" }}
      >
        earn reward points when you pay with a RuPay credit card
        <br />
        &amp; unlock member-exclusive rewards on CRED. déjà vu, for
        <br />
        the rewarding feeling.
      </p>
    </section>
  );
}
