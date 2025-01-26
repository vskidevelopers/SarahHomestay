import HeroSection from "@/components/HeroSection";
import reception from "@/assets/reception.jpg";
import AboutUsSection from "@/sections/AboutUsSection";
import FeaturesSection from "@/sections/FeaturesSetion";

function About() {
  return (
    <div>
      <div>
        <HeroSection title="About Us" image={reception} />
      </div>
      <AboutUsSection />
      <FeaturesSection />
    </div>
  );
}

export default About;
