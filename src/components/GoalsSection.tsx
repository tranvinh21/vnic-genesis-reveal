export default function GoalsSection() {
  const specifications = [
    {
      icon: "⚡",
      title: "Performance Architecture",
      description: "Lightning-fast transaction processing with 150,000+ TPS and instant finality optimized for real-world blockchain applications"
    },
    {
      icon: "🛡️",
      title: "Security Framework",
      description: "Military-grade encryption protocols with advanced consensus mechanisms ensuring maximum security for enterprise digital assets"
    },
    {
      icon: "🔧",
      title: "Developer Infrastructure",
      description: "Comprehensive APIs, SDKs, and development tools designed for rapid blockchain application development and deployment"
    },
    {
      icon: "🏗️",
      title: "Scalable System",
      description: "Built to scale from prototype to enterprise with automated load balancing and global infrastructure distribution"
    }
  ];

  return (
    <section id="goals" className="py-24 bg-background square-corners">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Technical Header */}
        <div className="text-center mb-20 animate-slide-up-elegant">
          <div className="inline-block border border-border px-6 py-2 square-corners mb-8">
            <span className="font-technical text-sm text-muted-foreground uppercase tracking-wider">
              SYSTEM ARCHITECTURE & DESIGN PRINCIPLES
            </span>
          </div>
          
          <h2 className="font-architectural text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
            Built for the future of blockchain
          </h2>
          
          <div className="divider-elegant max-w-4xl mx-auto"></div>
          
          <p className="font-technical text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-8">
            VNIChain addresses the critical challenges in blockchain technology with a 
            focus on performance, security, and developer experience through advanced architectural design.
          </p>
        </div>

        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border square-corners">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className={`p-12 hover:bg-muted transition-all group animate-fade-in-geometric ${
                index % 2 !== 0 ? 'border-l border-border' : ''
              } ${
                index >= 2 ? 'border-t border-border' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all square-corners">
                  <span className="text-2xl">{spec.icon}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-architectural text-xl font-bold text-foreground mb-4">
                    {spec.title}
                  </h3>
                  
                  <p className="font-technical text-muted-foreground leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 grid grid-cols-4 gap-0 border border-border square-corners">
          <div className="p-8 text-center border-r border-border">
            <div className="font-architectural text-3xl font-bold text-foreground mb-2">150K+</div>
            <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">Transactions/Second</div>
          </div>
          <div className="p-8 text-center border-r border-border">
            <div className="font-architectural text-3xl font-bold text-foreground mb-2">&lt;100ms</div>
            <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">Block Time</div>
          </div>
          <div className="p-8 text-center border-r border-border">
            <div className="font-architectural text-3xl font-bold text-foreground mb-2">99.99%</div>
            <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">Uptime SLA</div>
          </div>
          <div className="p-8 text-center">
            <div className="font-architectural text-3xl font-bold text-foreground mb-2">∞</div>
            <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">Scalability</div>
          </div>
        </div>
      </div>
    </section>
  );
}
