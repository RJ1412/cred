import React from "react";

const CredFooter = () => {
  return (
    <footer className="bg-black text-white font-sans px-8 md:px-20 pt-20 pb-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Logo */}
          <div className="mb-10 md:mb-0">
            <img
              src="/cred-logo.svg"
              alt="CRED Logo"
              className="h-16 w-auto mb-4"
            />
          </div>

          {/* Banner */}
          <div className="mb-10 md:mb-0">
            <div className="relative">
              <img
                src="/banner.jpg"
                alt="Banner"
                className="w-[500px] h-auto object-cover rounded"
              />
              <div className="absolute top-[-10px] left-[-10px] bg-black text-white text-xs font-semibold px-3 py-1 tracking-widest">
                NOW LIVE
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-sm tracking-wide text-white">
                <span className="mr-2">THE</span>
                <span className="border border-white px-3 py-1 rounded-full">SVALBARD 2025</span>
                <span className="ml-2">RELEASE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-16 text-sm text-gray-400">
          {/* Column 1 */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest mb-4">UPGRADES</h4>
            <ul className="space-y-2">
              <li>CRED money</li>
              <li>CRED mint</li>
              <li>CRED garage</li>
              <li>CRED escapes</li>
            </ul>

            <h4 className="text-white text-sm font-semibold tracking-widest mt-8 mb-4">PAYMENTS</h4>
            <ul className="space-y-2">
              <li>Scan & Pay</li>
              <li>Tap to Pay</li>
              <li>Pay anyone</li>
              <li>RuPay cards on UPI</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li>about CRED</li>
              <li>careers</li>
            </ul>

            <h4 className="text-white text-sm font-semibold tracking-widest mt-8 mb-4">INSIDER PERKS</h4>
            <ul className="space-y-2">
              <li>upgrade to UPI</li>
            </ul>

            <h4 className="text-white text-sm font-semibold tracking-widest mt-8 mb-4">DESIGN</h4>
            <ul className="space-y-2">
              <li>NeoPOP</li>
              <li>manifesto</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li>partner with us</li>
              <li>calculators</li>
              <li>articles</li>
              <li>tech blog</li>
              <li>credit score guide</li>
              <li>credit card payment</li>
              <li>guide</li>
              <li>customer care</li>
              <li>Dreampurse (HipBar)</li>
              <li>wallet refund form</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest mb-4">POLICY</h4>
            <ul className="space-y-2">
              <li>transaction & user</li>
              <li>verification</li>
              <li>Google API</li>
              <li>disclosure</li>
              <li>UPI FAQ &</li>
              <li>grievances</li>
              <li>returns and refunds</li>
              <li>security</li>
              <li>equal opportunity</li>
              <li>policy</li>
              <li>investor relations</li>
              <li>other disclosures</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-800 pt-10 text-sm text-gray-400">
          <div className="mb-6">
            <img
              src="/security-logos.png"
              alt="Security Logos"
              className="h-10 mb-4"
            />
            <p className="text-white font-semibold text-lg">complete security. no asterisks.</p>
            <p className="mt-2">
              CRED encrypts all data and transactions to ensure a completely secure
              experience for our members.
            </p>
          </div>

          <div className="flex justify-between items-center flex-wrap text-xs text-gray-500">
            <p>copyright © 2020-24 Dreamplug Technologies Pvt Ltd.</p>
            <div className="space-x-4">
              <a href="#">privacy policy</a>
              <span>|</span>
              <a href="#">terms and conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CredFooter;
