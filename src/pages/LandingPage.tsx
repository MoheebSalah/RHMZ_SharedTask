import FeatureOne from "../components/sections/feature-one/FeatureOneSection";
import CTASection from "../components/layout/footer/CTASection";
import FooterHero from "../components/layout/footer/FooterHero";
import FooterBottom from "../components/layout/footer/FooterBottom";
// import FooterBottom from "../components/layout/footer/FooterBottom";



export default function LandingPage() {
  return <div>
    <FeatureOne/>
          <CTASection />
          <FooterHero/>
          <FooterBottom/>
  </div>;
}
