import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/Navbar";
import FaqSection from "./components/sections/faq/faqSection";
import HeroSection from "./components/sections/hero/HeroSection";
import ImpactSection2 from "./components/sections/impact/impactSection2";
import PartnersSection from "./components/sections/partners/PartnersSection";
import TestimonialsSection from "./components/sections/testimonials/TestimonialsSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip pt-[var(--navbar-height)]">
        <HeroSection />
        <PartnersSection />
        <TestimonialsSection />
        <FaqSection />
        <ImpactSection2 />
        <Footer />
      </main>
    </>
  );
}

export default App;
