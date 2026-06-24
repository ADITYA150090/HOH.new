import Closing from "../components/sections/Closing";
// import CommunitySection from "../components/sections/CommunitySection";
import Hero from "../components/sections/Hero";
import IntroSection from "../components/sections/IntroSection";
// import Manifesto from "../components/sections/Manifesto";
import PartnerSection from "../components/sections/PartnerSection";
import PartnersBand from "../components/sections/PartnersBand";
// import ServicesSection from "../components/sections/ServicesSection";
import StatsSection from "../components/sections/StatsSection";
// import StorySection from "../components/sections/StorySection";
// import TestimonialsSection from "../components/sections/TestimonialsSection";
import OurStory from "../components/sections/OurStory/Story";
import Brands from "../components/sections/Brands/Brands";
import Ticker from "../components/ui/Ticker";
import WorkSection from "../components/sections/WorkSection";
import ImageTicker from "../components/animations/ImageTicker/ImageTicker";
// import WorkSectionTwo from "../components/sections/WorkSectionTwo";
import CardStack from "../components/animations/SkipperUi/Cards";
import Timeline from "../components/Events/Events";

const cultureItems = ["Events", "Creators", "Community", "Nagpur", "Youth Culture", "House of Hearts"];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Ticker items={cultureItems} />
      {/* <Manifesto /> */}
      <IntroSection />
      <StatsSection />
      <Ticker items={cultureItems}  reverse />
      {/* <ServicesSection /> */}
      <WorkSection compact />
      <Timeline/>
      < ImageTicker/>
      {/* <WorkSectionTwo compact /> */}
    
      {/* <TestimonialsSection /> */}
      {/* <StorySection /> */}
      {/* <CommunitySection /> */}
      <OurStory/>
      <Brands/>
      <CardStack />
     
      {/* <PartnersBand /> */}
      <PartnerSection />
      {/* <Closing /> */}
    </main>
  );
}
