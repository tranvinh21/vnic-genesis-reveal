
export default function RoadmapSection() {
  const roadmapItems = [
    {
      title: "Optimistic Rollup",
      description: "Tăng cường khả năng mở rộng với Layer 2 solutions",
      status: "Đang phát triển",
      icon: "🚀"
    },
    {
      title: "Anonymous Transactions",
      description: "Giao dịch ẩn danh bảo vệ quyền riêng tư người dùng",
      status: "Nghiên cứu",
      icon: "🔒"
    },
    {
      title: "RWA Modules",
      description: "Tích hợp tài sản thực (Real World Assets)",
      status: "Lên kế hoạch",
      icon: "🏠"
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Roadmap tương lai
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Những cải tiến và tính năng mới sẽ được triển khai trong tương lai gần
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-blue-500 h-full"></div>

          <div className="space-y-16">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8 animate-slide-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:bg-white/90 hover:border-white/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                      index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                    } max-w-md`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-manrope text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <span className={`text-sm px-3 py-1 rounded-full font-inter font-medium ${
                          item.status === 'Đang phát triển' 
                            ? 'bg-green-100 text-green-700'
                            : item.status === 'Nghiên cứu'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <p className="font-inter text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full border-4 border-white shadow-lg z-10 animate-glow"></div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
