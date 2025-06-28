export default function RoadmapSection() {
  const roadmapItems = [
    {
      title: "Optimistic Rollup",
      description: "Enhanced scalability with Layer 2 solutions for enterprise deployment",
      status: "In Development",
      icon: "🚀"
    },
    {
      title: "Anonymous Transactions",
      description: "Privacy-preserving transactions for sensitive enterprise applications",
      status: "Research Phase",
      icon: "🔒"
    },
    {
      title: "RWA Modules",
      description: "Real World Assets integration for institutional adoption",
      status: "Planning Phase",
      icon: "🏠"
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-background square-corners">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Technical Header */}
        <div className="text-center mb-20">
          <div className="inline-block border border-border px-6 py-2 square-corners mb-8">
            <span className="font-technical text-sm text-muted-foreground uppercase tracking-wider">
              DEVELOPMENT ROADMAP
            </span>
          </div>
          
          <h2 className="font-architectural text-4xl md:text-5xl font-bold text-foreground mb-8">
            Future Development
          </h2>
          
          <div className="divider-elegant max-w-4xl mx-auto"></div>
          
          <p className="font-technical text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
            Planned enhancements and features for next-generation blockchain infrastructure
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border square-corners">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`p-12 hover:bg-muted transition-all group animate-fade-in-geometric ${
                index !== roadmapItems.length - 1 ? 'border-r border-border' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Status Badge */}
              <div className="mb-8">
                <div className={`inline-block px-4 py-2 border square-corners font-technical text-sm uppercase tracking-wider ${
                  item.status === 'In Development' 
                    ? 'border-accent text-accent'
                    : item.status === 'Research Phase'
                    ? 'border-muted-foreground text-muted-foreground'
                    : 'border-muted-foreground text-muted-foreground'
                }`}>
                  {item.status}
                </div>
              </div>

              {/* Icon */}
              <div className="border border-border p-6 square-corners group-hover:bg-accent group-hover:text-accent-foreground transition-all mb-8 inline-block">
                <span className="text-4xl">{item.icon}</span>
              </div>

              {/* Content */}
              <h3 className="font-architectural text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              
              <p className="font-technical text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16 border border-border square-corners">
          <div className="p-6 border-b border-border">
            <h3 className="font-architectural text-lg font-bold text-foreground text-center">Development Timeline</h3>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-4 h-4 bg-accent square-corners mx-auto mb-4"></div>
                <div className="font-technical text-sm text-accent uppercase tracking-wider">Q1 2024</div>
                <div className="font-architectural text-base text-foreground">Optimistic Rollup</div>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-muted-foreground square-corners mx-auto mb-4"></div>
                <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">Q2 2024</div>
                <div className="font-architectural text-base text-foreground">Anonymous Transactions</div>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-muted-foreground square-corners mx-auto mb-4"></div>
                <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">Q3 2024</div>
                <div className="font-architectural text-base text-foreground">RWA Modules</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
