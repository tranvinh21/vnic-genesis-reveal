export default function SHOALSection() {
  return (
    <section className="py-24 bg-background square-corners">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Technical Header */}
        <div className="text-center mb-20">
          <div className="inline-block border border-border px-6 py-2 square-corners mb-8">
            <span className="font-technical text-sm text-muted-foreground uppercase tracking-wider">
              CONSENSUS PROTOCOL DOCUMENTATION
            </span>
          </div>
          
          <h2 className="font-architectural text-4xl md:text-5xl font-bold text-foreground mb-8">
            SHOAL Consensus Protocol
          </h2>
          
          <div className="divider-elegant max-w-4xl mx-auto"></div>
          
          <p className="font-technical text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-8">
            Advanced DAG BFT consensus technology delivering superior performance
          </p>
        </div>

        {/* Technical Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border square-corners mb-16">
          
          {/* Traditional Linear Blockchain */}
          <div className="p-12 border-r border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-6 bg-muted-foreground text-background flex items-center justify-center text-xs font-architectural square-corners">
                OLD
              </div>
              <h3 className="font-architectural text-2xl font-bold text-foreground">Traditional Linear Blockchain</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border border-border p-6 square-corners">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-muted-foreground text-background flex items-center justify-center font-architectural square-corners">
                    1
                  </div>
                  <div>
                    <div className="font-architectural font-bold text-foreground">Sequential Processing</div>
                    <div className="font-technical text-sm text-muted-foreground">Blocks must be processed one by one</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center py-2">
                <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
              </div>
              
              <div className="border border-border p-6 square-corners">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-muted-foreground text-background flex items-center justify-center font-architectural square-corners">
                    2
                  </div>
                  <div>
                    <div className="font-architectural font-bold text-foreground">Limited Throughput</div>
                    <div className="font-technical text-sm text-muted-foreground">~15 TPS for Ethereum</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SHOAL DAG-based Consensus */}
          <div className="p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-6 bg-accent text-accent-foreground flex items-center justify-center text-xs font-architectural square-corners">
                NEW
              </div>
              <h3 className="font-architectural text-2xl font-bold text-foreground">SHOAL DAG-based Consensus</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border border-border p-6 square-corners hover:bg-muted transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground flex items-center justify-center font-architectural square-corners">
                    ⚡
                  </div>
                  <div>
                    <div className="font-architectural font-bold text-foreground">Parallel Processing</div>
                    <div className="font-technical text-sm text-muted-foreground">Multiple transactions processed simultaneously</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center py-2">
                <div className="grid grid-cols-3 gap-2 max-w-16 mx-auto">
                  <ArrowDown className="w-4 h-4 text-accent" />
                  <ArrowDown className="w-4 h-4 text-accent" />
                  <ArrowDown className="w-4 h-4 text-accent" />
                </div>
              </div>
              
              <div className="border border-border p-6 square-corners hover:bg-muted transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground flex items-center justify-center font-architectural square-corners">
                    🚀
                  </div>
                  <div>
                    <div className="font-architectural font-bold text-foreground">High Throughput</div>
                    <div className="font-technical text-sm text-muted-foreground">150,000+ TPS capability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Paper Reference */}
        <div className="border border-border square-corners">
          <div className="p-8 text-center">
            <div className="inline-block border border-border px-6 py-2 square-corners mb-6">
              <span className="font-technical text-sm text-muted-foreground uppercase tracking-wider">
                SCIENTIFIC RESEARCH
              </span>
            </div>
            
            <h3 className="font-architectural text-2xl font-bold text-foreground mb-4">
              "Shoal++: High Throughput DAG BFT Can Be Fast!"
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <div className="border border-border p-8 square-corners">
                <div className="text-6xl mb-4">📄</div>
                <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">
                  TECHNICAL DOCUMENTATION
                </div>
              </div>
              <div className="text-left">
                <p className="font-architectural text-lg font-bold text-foreground mb-4">Detailed Research Paper</p>
                <p className="font-technical text-muted-foreground mb-6">
                  Explore the technology behind SHOAL consensus mechanism
                </p>
                <button className="px-6 py-3 bg-accent text-accent-foreground font-technical font-medium hover:bg-muted transition-all square-corners border border-border">
                  Read Research →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}
