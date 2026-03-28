import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ProfessionalSection from "@/components/ProfessionalSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import SchedulingSection from "@/components/SchedulingSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <ProfessionalSection />
        <TestimonialsSection />
        <BlogSection />
        <SchedulingSection />
        <FAQSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
