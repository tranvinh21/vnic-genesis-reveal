import { Code, Database, Shield, Zap, Globe, Users } from 'lucide-react';

export default function ProductFeatures() {
  const frameworkLogos = [
    { name: 'Python', icon: 'PY' },
    { name: 'Node.js', icon: 'JS' },
    { name: 'React', icon: 'RX' },
    { name: 'Next.js', icon: 'NX' },
    { name: 'Rust', icon: 'RS' },
  ];

  const institutions = [
    'MIT', 'Stanford', 'Berkeley', 'CMU', 'ETH', 'Oxford', 'Cambridge', 'Tsinghua'
  ];

  return (
    <section id="features" className="py-24 bg-background square-corners">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Technical Documentation Header */}
        <div className="text-center mb-20">
          <div className="inline-block border border-border px-6 py-2 square-corners">
            <span className="font-technical text-sm text-muted-foreground uppercase tracking-wider">
              BUILD BLOCKCHAIN INFRASTRUCTURE WITH VNICHAIN
            </span>
          </div>
          
          <div className="divider-elegant max-w-4xl mx-auto my-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-6xl mx-auto border border-border square-corners">
            {/* API Documentation */}
            <div className="p-8 border-r border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-accent text-accent-foreground flex items-center justify-center text-xs font-architectural square-corners">
                  API
                </div>
                <h3 className="font-architectural text-2xl font-bold text-foreground">Blockchain API</h3>
              </div>
              <p className="font-technical text-muted-foreground leading-relaxed">
                Build scalable blockchain applications with advanced transaction management and infinite scalability. 
                Built-in persistence and gas optimization with comprehensive smart contract support.
              </p>
            </div>
            
            {/* Development Environment */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-accent text-accent-foreground flex items-center justify-center text-xs font-architectural square-corners">
                  VDE
                </div>
                <h3 className="font-architectural text-2xl font-bold text-foreground">Development Environment</h3>
              </div>
              <p className="font-technical text-muted-foreground leading-relaxed">
                VNI Development Environment for visualizing blockchain performance, transaction flow, and network health. 
                Monitor, test, and optimize your infrastructure in real time.
              </p>
            </div>
          </div>
        </div>

        {/* Research Institutions */}
        <div className="text-center mb-20">
          <div className="inline-block border border-border px-6 py-2 square-corners mb-12">
            <span className="font-technical text-sm text-muted-foreground uppercase tracking-wider">
              BACKED BY LEADING RESEARCH INSTITUTIONS
            </span>
          </div>
          
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-0 border border-border square-corners">
            {institutions.map((institution, index) => (
              <div 
                key={index} 
                className={`p-4 text-center border-r border-border hover:bg-muted transition-all ${
                  index === institutions.length - 1 ? 'border-r-0' : ''
                } ${
                  index >= 4 ? 'border-t border-border' : ''
                }`}
              >
                <div className="font-architectural text-sm font-bold text-foreground">{institution}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Integration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border square-corners">
          {/* Framework Integration */}
          <div className="p-12 border-r border-border">
            <h2 className="font-architectural text-3xl md:text-4xl font-bold text-foreground mb-8">
              Framework Integration
            </h2>
            <p className="font-technical text-muted-foreground mb-12 leading-relaxed">
              Program your blockchain applications and connect them through VNIChain's 
              comprehensive API, SDKs, and framework integrations.
            </p>
            
            {/* Framework Grid */}
            <div className="grid grid-cols-5 gap-0 border border-border square-corners mb-8">
              {frameworkLogos.map((framework, index) => (
                <div 
                  key={index} 
                  className={`p-4 text-center border-r border-border hover:bg-muted transition-all group ${
                    index === frameworkLogos.length - 1 ? 'border-r-0' : ''
                  }`}
                >
                  <div className="font-architectural text-lg font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                    {framework.icon}
                  </div>
                  <div className="font-technical text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                    {framework.name}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-border font-technical font-medium text-foreground hover:bg-muted transition-all square-corners">
              View Documentation →
            </button>
          </div>
          
          {/* Code Interface */}
          <div className="p-0">
            <div className="bg-accent text-accent-foreground square-corners h-full">
              {/* Terminal Header */}
              <div className="border-b border-border p-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border border-accent-foreground square-corners"></div>
                  <div className="w-3 h-3 border border-accent-foreground square-corners"></div>
                  <div className="w-3 h-3 border border-accent-foreground square-corners"></div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex border border-accent-foreground square-corners">
                      <span className="px-3 py-1 bg-accent-foreground text-accent font-technical text-xs">PYTHON</span>
                      <span className="px-3 py-1 font-technical text-xs">NODE.JS</span>
                      <span className="px-3 py-1 font-technical text-xs">RUST</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-technical text-sm leading-relaxed">
                <div className="space-y-2">
                  <div><span className="text-accent-foreground/60"># VNIChain API Integration</span></div>
                  <div><span className="text-accent-foreground/80">from</span> vnichain <span className="text-accent-foreground/80">import</span> Client</div>
                  <div></div>
                  <div>client = Client(</div>
                  <div className="pl-4">api_key=<span className="text-accent-foreground/60">"vnic_..."</span>,</div>
                  <div className="pl-4">network=<span className="text-accent-foreground/60">"mainnet"</span></div>
                  <div>)</div>
                  <div></div>
                  <div><span className="text-accent-foreground/60"># Deploy smart contract</span></div>
                  <div>contract = client.deploy(</div>
                  <div className="pl-4">source=<span className="text-accent-foreground/60">"contract.sol"</span>,</div>
                  <div className="pl-4">gas_limit=<span className="text-accent-foreground/80">150000</span></div>
                  <div>)</div>
                  <div></div>
                  <div>print(f<span className="text-accent-foreground/60">"Contract: {"{"}contract.address{"}"}"</span>)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border square-corners">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: "High Performance",
              description: "150,000+ TPS with instant finality and zero downtime architecture"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Enterprise Security",
              description: "Military-grade encryption with advanced consensus mechanisms"
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Global Infrastructure",
              description: "Distributed nodes across 50+ regions for maximum availability"
            },
            {
              icon: <Database className="w-6 h-6" />,
              title: "Smart Contracts",
              description: "Deploy and manage contracts with comprehensive tooling"
            },
            {
              icon: <Code className="w-6 h-6" />,
              title: "Developer APIs",
              description: "Comprehensive REST and GraphQL APIs for rapid development"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Open Protocol",
              description: "Open source protocol with active research community"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`p-8 hover:bg-muted transition-all group ${
                index % 3 !== 2 ? 'border-r border-border' : ''
              } ${
                index >= 3 ? 'border-t border-border' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 border border-border group-hover:bg-accent group-hover:text-accent-foreground transition-all square-corners">
                  {feature.icon}
                </div>
                <h3 className="font-architectural text-lg font-bold text-foreground">{feature.title}</h3>
              </div>
              <p className="font-technical text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
