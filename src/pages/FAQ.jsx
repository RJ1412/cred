import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import clsx from 'clsx';

export const FAQ = () => {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const toggleFaq = () => {
    setIsFaqOpen(!isFaqOpen);
  };

  return (
   <div class={clsx("bg-black text-white h-[150vh] w-screen", isFaqOpen ?   "border-y-[0.5px] border-neutral-600" : "border-none")}>
     <div className={clsx('h-[15%] w-full bg-black flex mb-[4%] items-center justify-center', !isFaqOpen ? "border-y-[0.5px] border-neutral-600" : "border-none")}>
       <button
            onClick={toggleFaq}
            className="flex justify-center items-center text-2xl text-white/70 cursor-pointer font-semibold text-leftext-3xl focus:outline-none tracking-[8.4px]"
          >
            FAQs
            <FaChevronDown
              className={`transform transition-transform duration-500 text-xs mt-1 ml-1 ${isFaqOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>
     </div>
      {isFaqOpen && ( <div class="w-screen ml-[5%] mr-[5%]">
        
        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-[2%]">about CRED</h2>
          <p class="text-[19px] font-medium text-white/60 leading-relaxed">
            CRED is a members-only club that rewards trustworthy individuals with financial and lifestyle progress. members are rewarded with exclusive perks and privileges for making sound financial decisions. trusted by over 25 million creditworthy members, CRED transforms each payment into a rewarding experience.
          </p>
        </section>

       
        <section class="mb-12 flex flex-col md:flex-row justify-between items-start">
          <div class="flex-grow">
            <h2 class="text-3xl font-bold mb-[2%]">getting a membership</h2>
            <p class="text-[19px] font-medium text-white/60 leading-relaxed">
              to become a CRED member, you need a credit score of 750 or above. you can apply for membership by signing up on CRED with your name and a valid mobile number (issued within India). if your credit score makes the cut, we'll see you there.
            </p>
          </div>
        </section>

       
        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-[2%]">the CRED member experience</h2>
          <p class="text-[19px] font-medium text-white/60 leading-relaxed">
            CRED's suite of products is designed to help the creditworthy fast-track their financial & lifestyle progress. we partner with premier brands to offer unparalleled experiences and rewards to our members. members also earn cashback and coins on their payments, along with opportunities to elevate their lifestyle.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-[2%]">checking your credit score</h2>
          <p class="text-[19px] font-medium text-white/60 leading-relaxed">
            members can check and refresh their credit score on the CRED app. CRED acquires the updated credit score through a CIBIL score soft inquiry. you can access your credit score data anytime without any extra charges. as a member, this helps you keep regular checks on your credit score and re-evaluate your spending patterns to maintain a healthy credit status.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-bold mb-[2%]">banks supported on CRED</h2>
          <p class="text-[19px] font-medium text-white/60 leading-relaxed">
            CRED supports credit card bill payments for American Express, Standard Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL, PNB, and other top Indian banks. We support VISA, MasterCard, American Express & RuPay cards.
          </p>
        </section>      

      </div>)}
    </div>
  );
};

