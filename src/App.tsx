import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/hero/HeroSection";
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
        <Footer />
      </main>
    </>
  );
}

export default App;
