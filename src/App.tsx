import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/hero/HeroSection";
import TestimonialsSection from "./components/sections/testimonials/TestimonialsSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--navbar-height)]">
        <HeroSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
