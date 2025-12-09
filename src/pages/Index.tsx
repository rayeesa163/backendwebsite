import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import Metrics from "@/components/Metrics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <TechStack />
      <Metrics />
      <Footer />
    </div>
  );
};

export default Index;
