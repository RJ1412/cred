import React from "react";

export function CredUtilitiesClone() {
  return (
    <div className="ml-40px mt-40px mb-20 bg-[#f4f5f7] flex justify-center w-screen">
      <div className="w-[min(1320px,92vw)] py-[36px] pb-[64px] text-[#0a0a0a] font-['Inter','Poppins','Avenir_Next','Segoe_UI','Helvetica_Neue',Arial,sans-serif]">
        
        {/* Row 1 — track */}
        <div className="grid grid-cols-[1.2fr_1fr] items-center py-[40px] pb-[42px]">
          <div className="pl-[52px]">
            <h2 className="text-[88px] leading-[0.9] tracking-[-0.5px] font-extrabold m-0 p-0">
              track
            </h2>
            <p className="text-[22px] leading-[1.6] font-medium opacity-90 mt-[22px] mb-0 max-w-[520px]">
              track your spends, credit limit, bills,
              <br />
              and due dates.
            </p>
          </div>

          <div className="flex justify-end pr-[64px]">
            <svg
              viewBox="0 0 120 120"
              className="w-[96px] h-[96px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 92 L76 32"
                stroke="#000"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <circle cx="58" cy="50" r="7.5" fill="#000" />
              <path
                d="M76 32 L104 32 L104 60"
                stroke="#000"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M88 20 L104 36"
                stroke="#000"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* divider */}
        <div className="flex justify-center">
          <div className="w-[83%] h-px bg-[#bdbdbd] opacity-90" />
        </div>

        {/* Row 2 — savor */}
        <div className="grid grid-cols-[1.2fr_1fr] items-center py-[40px] pb-[42px]">
          <div className="pl-[52px]">
            <h2 className="text-[88px] leading-[0.9] tracking-[-0.5px] font-extrabold m-0 p-0">
              savor
            </h2>
            <p className="text-[22px] leading-[1.6] font-medium opacity-90 mt-[22px] mb-0 max-w-[520px]">
              shop smarter by browsing card offers
              <br />&amp; benefits.
            </p>
          </div>

          <div className="flex justify-end pr-[64px]">
            <svg
              viewBox="0 0 120 120"
              className="w-[96px] h-[96px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="28"
                y="46"
                width="64"
                height="56"
                rx="4"
                stroke="#000"
                strokeWidth="6"
              />
              <path
                d="M44 46 C44 34 76 34 76 46"
                stroke="#000"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* divider */}
        <div className="flex justify-center">
          <div className="w-[83%] h-px bg-[#bdbdbd] opacity-90" />
        </div>

        {/* Row 3 — reflect */}
        <div className="grid grid-cols-[1.2fr_1fr] items-center py-[40px] pb-[42px]">
          <div className="pl-[52px]">
            <h2 className="text-[88px] leading-[0.9] tracking-[-0.5px] font-extrabold m-0 p-0">
              reflect
            </h2>
            <p className="text-[22px] leading-[1.6] font-medium opacity-90 mt-[22px] mb-0 max-w-[520px]">
              get insights on your spends and
              <br />
              access to monthly smart statements.
            </p>
          </div>

          <div className="flex justify-end pr-[64px]">
            <svg
              viewBox="0 0 140 120"
              className="w-[110px] h-[96px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="22"
                y="28"
                width="36"
                height="72"
                rx="4"
                stroke="#000"
                strokeWidth="6"
                fill="none"
              />
              <rect
                x="82"
                y="28"
                width="36"
                height="72"
                rx="4"
                stroke="#000"
                strokeWidth="6"
                fill="#c7c7c7"
              />
              <line
                x1="70"
                y1="28"
                x2="70"
                y2="100"
                stroke="#000"
                strokeWidth="6"
                strokeDasharray="6 8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
