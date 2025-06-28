
export default function ProductFeatures() {
  const walletFeatures = [
    {
      title: "Tạo ví dễ dàng với Passkey",
      description: "Không cần ghi nhớ cụm từ khôi phục phức tạp",
      icon: "🔐"
    },
    {
      title: "Giao diện thân thiện",
      description: "Trải nghiệm như các ứng dụng truyền thống",
      icon: "📱"
    },
    {
      title: "Quản lý danh tính tiện lợi",
      description: "VNIC ID tích hợp sẵn trong ví",
      icon: "👤"
    }
  ];

  const vnicIdFeatures = [
    {
      name: "Nguyen Van A",
      address: "vnic1abc...def123",
      verified: true
    },
    {
      name: "Tran Thi B",
      address: "vnic1ghi...jkl456",
      verified: true
    },
    {
      name: "Le Van C",
      address: "vnic1mno...pqr789",
      verified: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sản phẩm VNIChain
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hệ sinh thái hoàn chỉnh từ ví điện tử đến hệ thống nhận dạng phi tập trung
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* VNIC Wallet */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">VNIC Wallet</h3>
            
            {/* Mobile Mockups */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-48 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white rounded-2xl h-full p-4 flex flex-col">
                    <div className="text-gray-900 text-sm font-semibold mb-4">VNIChain Wallet</div>
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-2xl">💰</span>
                      </div>
                      <div className="text-gray-900 font-bold text-lg">1,250.50</div>
                      <div className="text-gray-600 text-sm">VNIC</div>
                    </div>
                    <div className="space-y-2">
                      <button className="w-full bg-orange-500 text-white py-2 rounded-xl text-sm font-medium">
                        Gửi
                      </button>
                      <button className="w-full bg-gray-100 text-gray-900 py-2 rounded-xl text-sm font-medium">
                        Nhận
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="w-48 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white rounded-2xl h-full p-4">
                    <div className="text-gray-900 text-sm font-semibold mb-4">Giao dịch</div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">↑</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 text-xs font-medium">Nhận từ Alice</div>
                          <div className="text-gray-600 text-xs">+100 VNIC</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">↓</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 text-xs font-medium">Gửi cho Bob</div>
                          <div className="text-gray-600 text-xs">-50 VNIC</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wallet Features */}
            <div className="space-y-4">
              {walletFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-yellow-400 mb-2">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VNIC ID */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">VNIC ID</h3>
            
            {/* Contact Management Interface */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 mb-8">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="text-gray-900 font-semibold mb-4">Người nhận đã lưu</h4>
                <div className="space-y-3">
                  {vnicIdFeatures.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-900 font-medium text-sm">{contact.name}</span>
                          {contact.verified && (
                            <span className="text-green-500 text-xs">✓</span>
                          )}
                        </div>
                        <div className="text-gray-600 text-xs font-mono">{contact.address}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* VNIC ID Benefits */}
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">🔗 Liên kết dễ dàng</h4>
                <p className="text-gray-300">Gửi tiền bằng tên thay vì địa chỉ ví phức tạp</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-green-400 mb-3">✅ Xác minh danh tính</h4>
                <p className="text-gray-300">Hệ thống xác minh phi tập trung an toàn và đáng tin cậy</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">🔒 Bảo mật cao</h4>
                <p className="text-gray-300">Dữ liệu cá nhân được mã hóa và lưu trữ phi tập trung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
