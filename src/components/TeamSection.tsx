export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Nguyen Van A",
      role: "CEO & Co-founder",
      company: "VNIChain Labs",
      image: "👨‍💼",
      expertise: "Blockchain Architecture"
    },
    {
      name: "Dr. Tran Thi B",
      role: "CTO & Co-founder", 
      company: "VNIChain Labs",
      image: "👩‍💻",
      expertise: "Consensus Algorithms"
    },
    {
      name: "Le Van C",
      role: "Head of Engineering",
      company: "VNIChain Labs", 
      image: "👨‍🔬",
      expertise: "System Architecture"
    },
    {
      name: "Pham Thi D",
      role: "Head of Research",
      company: "VNIChain Labs",
      image: "👩‍🔬", 
      expertise: "Cryptography"
    },
    {
      name: "Hoang Van E",
      role: "Product Manager",
      company: "VNIChain Labs",
      image: "👨‍💼",
      expertise: "Product Strategy"
    },
    {
      name: "Vu Thi F",
      role: "Lead Developer",
      company: "VNIChain Labs",
      image: "👩‍💻",
      expertise: "Smart Contracts"
    }
  ];

  return (
    <section className="py-24 bg-background square-corners">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Technical Header */}
        <div className="text-center mb-20">
          <div className="inline-block border border-border px-6 py-2 square-corners mb-8">
            <span className="font-technical text-sm text-muted-foreground uppercase tracking-wider">
              ENGINEERING TEAM
            </span>
          </div>
          
          <h2 className="font-architectural text-4xl md:text-5xl font-bold text-foreground mb-8">
            VNIChain Development Team
          </h2>
          
          <div className="divider-elegant max-w-4xl mx-auto"></div>
          
          <p className="font-technical text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
            Leading experts in blockchain technology and financial systems engineering
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border square-corners mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`p-8 hover:bg-muted transition-all group ${
                index % 3 !== 2 ? 'border-r border-border' : ''
              } ${
                index < 3 ? 'border-b border-border' : ''
              }`}
            >
              {/* Avatar */}
              <div className="border border-border p-6 square-corners group-hover:bg-accent group-hover:text-accent-foreground transition-all inline-block mb-6">
                <span className="text-4xl">{member.image}</span>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-architectural text-lg font-bold text-foreground mb-2">{member.name}</h3>
                <p className="font-technical text-accent font-medium mb-1">{member.role}</p>
                <p className="font-technical text-muted-foreground text-sm mb-4">{member.company}</p>
                
                {/* Expertise */}
                <div className="border border-border px-3 py-1 square-corners inline-block">
                  <span className="font-technical text-xs text-muted-foreground uppercase tracking-wider">
                    {member.expertise}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Information */}
        <div className="border border-border square-corners">
          <div className="p-6 border-b border-border">
            <h3 className="font-architectural text-2xl font-bold text-foreground text-center">VNIChain Labs</h3>
          </div>
          <div className="p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="border border-border p-8 square-corners">
                <p className="font-technical text-muted-foreground text-lg leading-relaxed">
                  Founded by a team of experts with extensive experience in blockchain technology, 
                  VNIChain Labs is committed to developing the most advanced blockchain technology 
                  for the Vietnamese and international markets.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border square-corners mt-8">
                <div className="p-6 border-r border-border hover:bg-muted transition-all">
                  <div className="font-architectural text-2xl font-bold text-foreground mb-2">15+</div>
                  <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">Team Members</div>
                </div>
                <div className="p-6 border-r border-border hover:bg-muted transition-all">
                  <div className="font-architectural text-2xl font-bold text-foreground mb-2">5+</div>
                  <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="p-6 hover:bg-muted transition-all">
                  <div className="font-architectural text-2xl font-bold text-foreground mb-2">100%</div>
                  <div className="font-technical text-sm text-muted-foreground uppercase tracking-wider">Innovation Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
