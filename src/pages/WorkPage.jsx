import PartnersBand from "../components/sections/PartnersBand";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WorkSection from "../components/sections/WorkSection";

export default function WorkPage() {
  return (
    <main className="page-pad">
      <WorkSection />
      <TestimonialsSection />
      <PartnersBand />
    </main>
  );
}
