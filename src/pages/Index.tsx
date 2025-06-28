
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import GoalsSection from '../components/GoalsSection';
import VNICOverview from '../components/VNICOverview';
import SHOALSection from '../components/SHOALSection';
import ProductFeatures from '../components/ProductFeatures';
import RoadmapSection from '../components/RoadmapSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <GoalsSection />
      <VNICOverview />
      <SHOALSection />
      <ProductFeatures />
      <RoadmapSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
