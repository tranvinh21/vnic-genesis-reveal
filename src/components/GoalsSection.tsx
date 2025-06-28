
export default function GoalsSection() {
  const goals = [
    {
      emoji: "⚡",
      title: "Hiệu suất & Trải nghiệm",
      subtitle: "Performance & Experience",
      description: "Tốc độ xử lý 150,000 TPS với trải nghiệm người dùng mượt mà"
    },
    {
      emoji: "🛡️",
      title: "An ninh Tài chính",
      subtitle: "Financial Security",
      description: "Bảo mật tuyệt đối với các giao dịch và tài sản số"
    },
    {
      emoji: "🔧",
      title: "Ổn định và đáng tin cậy",
      subtitle: "Stable & Reliable",
      description: "Hạ tầng blockchain ổn định, hoạt động 24/7"
    },
    {
      emoji: "🏗️",
      title: "Hạ tầng Dịch vụ",
      subtitle: "Service Infrastructure",
      description: "Nền tảng hoàn chỉnh cho các ứng dụng phi tập trung"
    }
  ];

  return (
    <section id="goals" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mục tiêu của chúng tôi
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            VNIChain được thiết kế để giải quyết những thách thức lớn nhất trong thế giới blockchain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 hover:border-white/80 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {goal.emoji}
                </div>
                <h3 className="font-manrope text-xl font-bold text-gray-900 mb-2">{goal.title}</h3>
                <p className="font-inter text-sm font-medium text-blue-600 mb-4">{goal.subtitle}</p>
                <p className="font-inter text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
