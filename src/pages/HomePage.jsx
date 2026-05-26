import Closing from "../components/sections/Closing";
import CommunitySection from "../components/sections/CommunitySection";
import Hero from "../components/sections/Hero";
import IntroSection from "../components/sections/IntroSection";
import Manifesto from "../components/sections/Manifesto";
import PartnerSection from "../components/sections/PartnerSection";
import PartnersBand from "../components/sections/PartnersBand";
import ServicesSection from "../components/sections/ServicesSection";
import StatsSection from "../components/sections/StatsSection";
import StorySection from "../components/sections/StorySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import Ticker from "../components/ui/Ticker";
import WorkSection from "../components/sections/WorkSection";

const cultureItems = ["Events", "Creators", "Community", "Nagpur", "Youth Culture", "House of Hearts"];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Ticker items={cultureItems} />
      {/* <Manifesto /> */}
      <IntroSection />
      <StatsSection />
      <Ticker items={cultureItems} tone="dark" reverse />
      <ServicesSection />
      <WorkSection compact />
      <TestimonialsSection />
      <StorySection />
      <CommunitySection />
      <PartnersBand />
      <PartnerSection />
      <Closing />
    </main>
  );
}
