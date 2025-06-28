
export default function VNICOverview() {
  const features = [
    {
      icon: "⚡",
      title: "150,000 TPS",
      description: "Hiệu suất vượt trội với khả năng xử lý 150,000 giao dịch mỗi giây"
    },
    {
      icon: "🌐",
      title: "Cosmos SDK",
      description: "Tích hợp hoàn hảo với hệ sinh thái Cosmos cho khả năng tương tác"
    },
    {
      icon: "🆔",
      title: "VNIC ID",
      description: "Hệ thống nhận dạng phi tập trung an toàn và dễ sử dụng"
    },
    {
      icon: "💰",
      title: "Giao dịch miễn phí",
      description: "Người dùng đã xác minh được thực hiện giao dịch hoàn toàn miễn phí"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            VNIC là Blockchain nhanh nhất cho
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              người dùng thật, tương tác thật
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Với công nghệ SHOAL consensus và tích hợp Cosmos SDK, VNIChain mang đến trải nghiệm blockchain hoàn toàn mới
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Performance Comparison */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-center mb-8">So sánh hiệu suất</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">VNIChain</div>
              <div className="text-4xl font-bold text-yellow-400">150,000</div>
              <div className="text-sm text-gray-400">TPS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">Solana</div>
              <div className="text-4xl font-bold">65,000</div>
              <div className="text-sm text-gray-400">TPS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">Ethereum</div>
              <div className="text-4xl font-bold">15</div>
              <div className="text-sm text-gray-400">TPS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">Visa</div>
              <div className="text-4xl font-bold">24,000</div>
              <div className="text-sm text-gray-400">TPS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
