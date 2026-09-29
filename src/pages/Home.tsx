import Logo from "@/components/common/Logo";
import Footer from "@/components/layout/Footer";
import CreatorCTA from "@/components/ui/home/CreatorCTA";
import FeaturesSection from "@/components/ui/home/FeaturesSection";
import GrowthSection from "@/components/ui/home/GrowthSection";
import Testimonials from "@/components/ui/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Logo />
      <GrowthSection />
      <FeaturesSection />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
