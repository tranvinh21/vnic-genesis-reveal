
import Hero3D from './Hero3D';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero3D />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Logo and Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              VNIChain
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl font-semibold text-blue-300 mb-2">
            Bảo mật. Đơn giản. Toàn cầu.
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Security. Simple. Global.
          </p>
        </div>

        {/* Main Tagline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Blockchain nhanh nhất cho
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            người dùng thật, tương tác thật
          </span>
        </h2>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400">150,000</div>
            <div className="text-sm text-gray-300">TPS Performance</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-400">Cosmos</div>
            <div className="text-sm text-gray-300">SDK Integration</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-400">Free</div>
            <div className="text-sm text-gray-300">Verified Transactions</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105">
            Khám phá VNIChain
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            Xem Demo
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
}
