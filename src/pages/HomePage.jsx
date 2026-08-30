import Loader from "../components/Loader";
import Hero from "../components/sections/Hero";
import IntroSection from "../components/sections/IntroSection";
import PartnerSection from "../components/sections/PartnerSection";
import StatsSection from "../components/sections/StatsSection";
import OurStory from "../components/sections/OurStory/Story";
import Ticker from "../components/ui/Ticker";
import WorkSection from "../components/sections/WorkSection";
import ImageTicker from "../components/animations/ImageTicker/ImageTicker";
import WorkSectionTwo from "../components/sections/WorkSectionTwo";
import CardStack from "../components/animations/SkipperUi/Cards";

const cultureItems = ["Events", "Creators", "Community", "Nagpur", "Youth Culture", "House of Hearts"];

export default function HomePage() {
  return (
    <main>
      <Loader />
      <Hero id="home" />
      {/* <Ticker items={cultureItems} /> */}
      <IntroSection />
      <StatsSection />
      <Ticker items={cultureItems} reverse />
      <WorkSection compact />
      <ImageTicker />
      <WorkSectionTwo compact />
      <OurStory />
      <CardStack />
      <PartnerSection />
    </main>
  );
}
