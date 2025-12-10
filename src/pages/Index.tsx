import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SubsidiariesShowcase from "@/components/SubsidiariesShowcase";
import ApproachSection from "@/components/ApproachSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <div id="services">
          <SubsidiariesShowcase />
        </div>
        <ApproachSection />
        <TestimonialsSection />
        <div id="resources">
          <ResourcesSection />
        </div>
        <WhyChooseUs />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
