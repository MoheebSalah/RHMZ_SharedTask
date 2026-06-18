import FaqSection from "../components/sections/faq/faqSection";
import ImpactSection2 from "../components/sections/impact/impactSection2";
import HeroSection from "../components/sections/hero/HeroSection";
import PartnersSection from "../components/sections/partners/PartnersSection";
import TestimonialsSection from "../components/sections/testimonials/TestimonialsSection";
import Footer from "../components/layout/footer/Footer";
import Navbar from "../components/layout/Navbar";
import FeatureOne from "../components/sections/feature-one/FeatureOneSection";
import CoreServices from "../components/sections/core-services/CoreServices";
import LatestInsights from "../components/sections/insights/LatestInsights";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip pt-[var(--navbar-height)]">
        <HeroSection />
        <PartnersSection />
        <FeatureOne />
        <ImpactSection2 />
        <FaqSection />
        <CoreServices />
        <LatestInsights />
        <TestimonialsSection />

        <Footer />
      </main>
    </>
  );
}
