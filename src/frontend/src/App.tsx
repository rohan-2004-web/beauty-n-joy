import { Layout } from "@/components/Layout";
import { AboutSection } from "@/pages/AboutSection";
import { ContactSection } from "@/pages/ContactSection";
import { FaqSection } from "@/pages/FaqSection";
import { GallerySection } from "@/pages/GallerySection";
import { HeroSection } from "@/pages/HeroSection";
import { PricingSection } from "@/pages/PricingSection";
import { ServicesSection } from "@/pages/ServicesSection";
import { TestimonialsSection } from "@/pages/TestimonialsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </Layout>
  );
}
