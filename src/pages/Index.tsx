import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RestaurantGrid from "@/components/RestaurantGrid";
import DeliveryHero from "@/components/DeliveryHero";
import FeaturesSection from "@/components/FeaturesSection";
import AnnouncementSection from "@/components/AnnouncementSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <RestaurantGrid />
      <DeliveryHero />
      <FeaturesSection />
      <AnnouncementSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
