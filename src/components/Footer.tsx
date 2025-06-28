
export default function Footer() {
  const footerSections = [
    {
      title: "Sản phẩm",
      links: [
        { name: "VNIChain Blockchain", href: "#" },
        { name: "VNIC Wallet", href: "#" },
        { name: "VNIC ID", href: "#" },
        { name: "Developer Tools", href: "#" }
      ]
    },
    {
      title: "Tài liệu",
      links: [
        { name: "Whitepaper", href: "#" },
        { name: "Technical Docs", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "SHOAL Research", href: "#" }
      ]
    },
    {
      title: "Cộng đồng", 
      links: [
        { name: "Discord", href: "#" },
        { name: "Telegram", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "GitHub", href: "#" }
      ]
    },
    {
      title: "Công ty",
      links: [
        { name: "Về chúng tôi", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Liên hệ", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">⭐</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                VNIChain
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Blockchain nhanh nhất cho người dùng thật, tương tác thật. 
              Xây dựng tương lai phi tập trung với công nghệ SHOAL consensus.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <span>📧</span>
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <span>🐦</span>
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <span>💬</span>
              </button>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 VNIChain Labs. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
