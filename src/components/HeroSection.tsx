import { Suspense } from 'react';
import Hero3D from './Hero3D';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById('goals');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden architectural-grid square-corners">
      {/* Geometric Abstract Elements */}
      <div className="geometric-abstract"></div>
      
      {/* 3D Hero Element */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-muted/20" />
      }>
        <Hero3D />
      </Suspense>
      
      {/* Linear Art Overlay */}
      <div className="absolute inset-0 linear-art"></div>
      
      <div className="relative z-10 text-center text-foreground px-6 max-w-7xl mx-auto animate-slide-up-elegant square-corners">
        
        {/* Architectural Brand Section */}
        <div className="mb-16 animate-fade-in-geometric">
          <div className="inline-flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-accent text-accent-foreground flex items-center justify-center border border-border shadow-lg square-corners">
              <span className="text-2xl font-architectural">◉</span>
            </div>
            <h1 className="font-architectural text-6xl md:text-8xl font-bold text-gradient-elegant tracking-tight">
              VNIChain
            </h1>
          </div>
        </div>

        {/* Main Technical Statement */}
        <div className="mb-20">
          <h2 className="font-architectural text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-none tracking-tight">
            The Blockchain Operating System
          </h2>
          
          <div className="divider-elegant max-w-2xl mx-auto"></div>
          
          <p className="font-technical text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-8">
            Create production-ready blockchain solutions in a single API call
          </p>
        </div>

        {/* Architectural Action Interface */}
        <div className="flex flex-col sm:flex-row gap-0 justify-center mb-24 border border-border square-corners">
          <button className="px-12 py-4 bg-accent text-accent-foreground font-technical font-medium hover:bg-muted transition-all border-r border-border square-corners">
            $ vnic init
          </button>
          <button className="px-12 py-4 bg-background text-foreground font-technical font-medium hover:bg-muted transition-all border-l border-border square-corners">
            Documentation →
          </button>
        </div>

        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-3 gap-0 max-w-3xl mx-auto mb-20 border border-border square-corners">
          <div className="p-6 text-center border-r border-border">
            <div className="font-architectural text-2xl font-bold text-foreground mb-2">150K+</div>
            <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">TPS</div>
          </div>
          <div className="p-6 text-center border-r border-border">
            <div className="font-architectural text-2xl font-bold text-foreground mb-2">∞</div>
            <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">SCALE</div>
          </div>
          <div className="p-6 text-center">
            <div className="font-architectural text-2xl font-bold text-foreground mb-2">0ms</div>
            <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">LATENCY</div>
          </div>
        </div>

        {/* Navigation Indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-4 border border-border hover:bg-muted transition-all square-corners"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
