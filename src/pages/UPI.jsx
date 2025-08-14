AnimatedText
import {AnimatedText} from "../components/ANIMATED.JSX";
import { CredUtilitiesClone } from "../components/CredUtils";
import { CredFaqAccordion } from "../components/FAQ";
import { First } from "../components/First";
import { CredStyleCarousel } from "../components/Image";
import { CredSignupSection } from "../components/Member";
import { RewardSection } from "../components/Reward";
import { RuPayUPIHero } from "../components/UPIHERO";
import { CredFooter } from "./CredFooter";

CredSignupSection
export function UPI() {
  return (
    <div className="w-screen">
        
      <First />
        <RuPayUPIHero />
      <AnimatedText />
      <CredStyleCarousel />
       <CredUtilitiesClone />
       <RewardSection />
      <CredSignupSection />
      <CredFaqAccordion />
      <CredFooter/>
    </div>
  );
}