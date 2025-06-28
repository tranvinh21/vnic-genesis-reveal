export default function VNICOverview() {
  const specifications = [
    {
      icon: "⚡",
      title: "150,000 TPS",
      description: "Ultra-high performance transaction processing capability for enterprise applications"
    },
    {
      icon: "🌐",
      title: "Cosmos SDK",
      description: "Seamless integration with Cosmos ecosystem for maximum interoperability"
    },
    {
      icon: "🆔",
      title: "VNIC ID",
      description: "Decentralized identity system with advanced security and ease of use"
    },
    {
      icon: "💰",
      title: "Zero-Cost Transactions",
      description: "Verified users enjoy completely fee-free transaction processing"
    }
  ];

  return (
    <section id="overview" className="py-24 bg-background square-corners">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Technical Header */}
        <div className="text-center mb-20 animate-slide-up-elegant">
          <div className="inline-block border border-border px-6 py-2 square-corners mb-8">
            <span className="font-technical text-sm text-muted-foreground uppercase tracking-wider">
              BLOCKCHAIN OPERATING SYSTEM OVERVIEW
            </span>
          </div>
          
          <h2 className="font-architectural text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
            VNIC is the fastest blockchain for
            <br />
            <span className="text-gradient-elegant">
              real users, real interactions
            </span>
          </h2>
          
          <div className="divider-elegant max-w-4xl mx-auto"></div>
          
          <p className="font-technical text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-8">
            Powered by SHOAL consensus and Cosmos SDK integration, VNIChain delivers a completely new blockchain experience
          </p>
        </div>

        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border square-corners mb-16">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className={`p-8 hover:bg-muted transition-all group animate-fade-in-geometric ${
                index % 4 !== 3 ? 'border-r border-border' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="inline-flex p-4 border border-border group-hover:bg-accent group-hover:text-accent-foreground transition-all square-corners mb-6">
                  <span className="text-3xl">{spec.icon}</span>
                </div>
                <h3 className="font-architectural text-xl font-bold text-foreground mb-4">
                  {spec.title}
                </h3>
                <p className="font-technical text-muted-foreground leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Comparison Table */}
        <div className="border border-border square-corners">
          <div className="p-6 border-b border-border">
            <h3 className="font-architectural text-2xl font-bold text-foreground text-center">Performance Comparison</h3>
          </div>
          <div className="grid grid-cols-4 gap-0">
            <div className="p-6 text-center border-r border-border hover:bg-muted transition-all">
              <div className="font-architectural text-lg font-bold text-foreground mb-2">VNIChain</div>
              <div className="font-architectural text-3xl font-bold text-foreground mb-2">150,000</div>
              <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">TPS</div>
            </div>
            <div className="p-6 text-center border-r border-border hover:bg-muted transition-all">
              <div className="font-architectural text-lg font-bold text-muted-foreground mb-2">Solana</div>
              <div className="font-architectural text-3xl font-bold text-muted-foreground mb-2">65,000</div>
              <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">TPS</div>
            </div>
            <div className="p-6 text-center border-r border-border hover:bg-muted transition-all">
              <div className="font-architectural text-lg font-bold text-muted-foreground mb-2">Ethereum</div>
              <div className="font-architectural text-3xl font-bold text-muted-foreground mb-2">15</div>
              <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">TPS</div>
            </div>
            <div className="p-6 text-center hover:bg-muted transition-all">
              <div className="font-architectural text-lg font-bold text-muted-foreground mb-2">Visa</div>
              <div className="font-architectural text-3xl font-bold text-muted-foreground mb-2">24,000</div>
              <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">TPS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
