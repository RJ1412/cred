import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CredFaqAccordion() {
  const faqs = [
    {
      q: "how does RuPay credit card on UPI work?",
      a: (
        <>
          <p>
            RuPay credit card on UPI allows you to make payments using your RuPay credit card
            through the Unified Payments Interface (UPI). This means you can use your RuPay credit card
            to make payments to merchants (not family or friends) without carrying your physical card.
            Here's why you should:
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>for the convenience: leave your card behind and pay digitally.</li>
            <li>for the security: UPI uses two-factor authentication.</li>
            <li>for the rewards: earn cashback and reward points.</li>
            <li>for the flexibility: scan & pay at any valid merchant QR.</li>
          </ul>
        </>
      ),
    },
    {
      q: "does credit card on UPI work everywhere and on every card?",
      a: (
        <p>
          you can only make payments to merchants. you can do this by scanning UPI QRs, while paying utility bills, rent, or education fees, while shopping on CRED store, or on your digital checkout screens.
currently, UPI can be enabled only on RuPay credit cards. moreover, not all banks have enabled the feature.
        </p>
      ),
    },
    {
      q: "is it safe to use credit card on UPI?",
      a: (
        <p>
         yes. UPI uses two-factor authentication to protect your account information.
do not share your card details with anyone and ensure that you monitor your credit card expenses for suspicious transactions. if you do find suspicious activity in your statements, contact your bank immediately.
        </p>
      ),
    },
    {
      q: "how can i get a RuPay credit card if i don't have one?",
      a: (
        <p>
          you've earned some insider scoop: we're partnering with the country's leading banks to help you get instant access to RuPay credit cards. until then, you can apply for eligible RuPay credit card via your preferred bank. or you can find one for yourself by visiting <a href="https://www.rupay.co.in" target="_blank" style="color: rgb(255, 255, 255); opacity: 0.9; text-decoration: underline;">rupay.co.in</a>
        </p>
      ),
    },
    {
        q:"how can i start using UPI on my RuPay credit card?",
        a: (
            <p>
                link an eligible RuPay credit card with your UPI account. once linked, you will see the option to use credit card on UPI on your digital checkout screens. while paying at stores, you can also scan their QR and pay via the UPI ID linked to your credit card.
            </p>
        ),
    },
    {
        q:"can i send money to friends using credit card on UPI?",
        a:(<p>you cannot make payments to friends and family using your credit card.
you can only make payments to merchants.</p>)
    },
    {
        q:"which banks are currently live for credit card on UPI?",

        a:(<><p>

            currently, NPCI has approved the RuPay on UPI feature only for the following banks:</p>
            <br></br>
            <ul className="faq-list">
    <li>Axis Bank</li>
    <li>Bank of Baroda</li>
    <li>Canara Bank</li>
    <li>HDFC Bank</li>
    <li>ICICI</li>
    <li>Indian Bank</li>
    <li>Kotak Mahindra Bank</li>
    <li>Punjab National Bank</li>
    <li>Union Bank</li>
    <li>Yes Bank</li>
  </ul>
  </>
)
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="w-screen bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10 lg:px-14 pt-20 pb-28">
        {/* Heading */}
        <h2 className="font-['Inter','Poppins','Avenir_Next','Segoe_UI','Helvetica_Neue',Arial,sans-serif] text-[56px] sm:text-[72px] lg:text-[96px] leading-[0.95] font-semibold tracking-tight mb-12">
          <span className="block">frequently</span>
          <span className="block">asked questions</span>
        </h2>
        <div className="h-[100px]" />

        {/* List */}
        <div className="mt-10">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-white/15">
                {/* Clickable row */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full grid grid-cols-[70px_1fr_32px] items-center gap-x-6 py-8 text-left focus:outline-none"
                >
                  {/* Index */}
                  <span className="text-white/60 text-sm tracking-[0.30em] select-none">
                    {`${(i + 1).toString().padStart(2, "0")}`}
                  </span>

                  {/* Question */}
                  <span className="text-[22px] sm:text-[26px] md:text-[28px] leading-[1.25] font-medium text-white">
                    {item.q}
                  </span>

                  {/* Plus -> X */}
                  <span
                    aria-hidden
                    className={`relative h-6 w-6 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <span className="absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 bg-white" />
                    <span className="absolute left-1/2 top-1/2 block w-[2px] h-6 -translate-x-1/2 -translate-y-1/2 bg-white" />
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[70px] pr-10 pb-8 text-[16px] md:text-[18px] leading-7 text-neutral-300">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
