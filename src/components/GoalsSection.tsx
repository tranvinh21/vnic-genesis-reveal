
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
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mục tiêu của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VNIChain được thiết kế để giải quyết những thách thức lớn nhất trong thế giới blockchain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{goal.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-sm font-medium text-blue-600 mb-4">{goal.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
