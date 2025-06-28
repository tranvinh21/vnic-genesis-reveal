
export default function SHOALSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SHOAL Consensus Protocol
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Công nghệ đồng thuận DAG BFT tiên tiến mang lại hiệu suất vượt trội
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Linear vs DAG Comparison */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Linear Blockchain</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Sequential Processing</div>
                  <div className="text-sm text-gray-600">Blocks must be processed one by one</div>
                </div>
              </div>
              <div className="flex items-center justify-center py-2">
                <ArrowDown className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Limited Throughput</div>
                  <div className="text-sm text-gray-600">~15 TPS for Ethereum</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">SHOAL DAG-based Consensus</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Parallel Processing</div>
                  <div className="text-sm text-gray-600">Multiple transactions processed simultaneously</div>
                </div>
              </div>
              <div className="flex items-center justify-center py-2">
                <div className="grid grid-cols-3 gap-2">
                  <ArrowDown className="w-4 h-4 text-green-400" />
                  <ArrowDown className="w-4 h-4 text-green-400" />
                  <ArrowDown className="w-4 h-4 text-green-400" />
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🚀</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">High Throughput</div>
                  <div className="text-sm text-gray-600">150,000+ TPS capability</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Paper Reference */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Nghiên cứu khoa học</h3>
          <p className="text-lg mb-6">
            "Shoal++: High Throughput DAG BFT Can Be Fast!"
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
              <div className="text-6xl">📄</div>
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold mb-2">Tài liệu nghiên cứu chi tiết</p>
              <p className="text-blue-200 mb-4">Khám phá công nghệ đằng sau SHOAL consensus</p>
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                Đọc nghiên cứu
              </button>
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
