import React from "react";

export function RuPayUPIHero() {
  return (
    <section className="bg-black text-white w-screen min-h-screen flex items-center">
      <div className="cred-rupay-wrap">
        {/* LEFT: Big serif headline */}
        <div className="cred-left">
          <h2 className="cred-hl">
            <span>give your</span>
            <span>RuPay credit</span>
            <span>card the UPI</span>
            <span>advantage</span>
          </h2>
        </div>

        {/* RIGHT: Copy, CTA, partnership */}
        <div className="cred-right">
          <p className="cred-copy">
            activate UPI on your RuPay credit card.<br />
            pay on credit, wherever you shop.
          </p>

          <a href="#" className="cred-cta">Activate now ↗</a>

          <div className="cred-partner">
            <span className="cred-partner-label">IN PARTNERSHIP WITH</span>
            <div className="cred-logos">
              {/* Replace with your actual assets */}
              <img src="https://web-images.credcdn.in/v2/_next/assets/images/cc-on-upi/rupay-cc-on-upi-logo.png?tr=q-95" alt="RuPay Credit" className="logo-rupay" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
