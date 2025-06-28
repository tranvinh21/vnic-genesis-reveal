
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
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Đội ngũ VNIChain
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Những chuyên gia hàng đầu trong lĩnh vực blockchain và công nghệ tài chính
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                {member.image}
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-orange-400 font-semibold mb-1">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.company}</p>
                
                {/* Expertise badge */}
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">
                  {member.expertise}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">VNIChain Labs</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Được thành lập bởi đội ngũ các chuyên gia có nhiều năm kinh nghiệm trong lĩnh vực blockchain, 
              VNIChain Labs cam kết phát triển công nghệ blockchain tiên tiến nhất cho thị trường Việt Nam và quốc tế.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
