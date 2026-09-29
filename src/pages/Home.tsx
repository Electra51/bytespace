import CategoriesSection from "@/components/ui/home/CategoriesSection";
import CourseDiscoverySection from "@/components/ui/home/CourseDiscoverySection";
import CreatorCTA from "@/components/ui/home/CreatorCTA";
import FeaturesSection from "@/components/ui/home/FeaturesSection";
import GrowthSection from "@/components/ui/home/GrowthSection";
import Hero from "@/components/ui/home/Hero";
import Testimonials from "@/components/ui/home/Testimonials";
import TrustedPartners from "@/components/ui/home/TrustedPartners";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustedPartners />
      <CourseDiscoverySection />
      <CategoriesSection />
      <GrowthSection />
      <FeaturesSection />
      <CreatorCTA />
      <Testimonials />
    </div>
  );
};

export default Home;
