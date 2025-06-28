import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border square-corners">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border square-corners mb-16">
          
          {/* Product Documentation */}
          <div className="p-8 border-r border-border border-b border-border lg:border-b-0">
            <h3 className="font-architectural font-bold text-lg text-foreground mb-6 uppercase tracking-wider">PRODUCT</h3>
            <ul className="space-y-4">
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">System Architecture</a></li>
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">Performance Metrics</a></li>
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">Security Framework</a></li>
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">Research Papers</a></li>
            </ul>
          </div>

          {/* Developer Resources */}
          <div className="p-8 border-r border-border border-b border-border lg:border-b-0">
            <h3 className="font-architectural font-bold text-lg text-foreground mb-6 uppercase tracking-wider">DEVELOPERS</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </li>
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">API Documentation</a></li>
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">Technical Community</a></li>
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">SDK Downloads</a></li>
            </ul>
          </div>

          {/* Organization */}
          <div className="p-8 border-r border-border border-b border-border md:border-b-0">
            <h3 className="font-architectural font-bold text-lg text-foreground mb-6 uppercase tracking-wider">ORGANIZATION</h3>
            <ul className="space-y-4">
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">Research Team</a></li>
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">Open Positions</a></li>
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="font-technical text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Technical Contact */}
          <div className="p-8">
            <h3 className="font-architectural font-bold text-lg text-foreground mb-6 uppercase tracking-wider">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex border border-border square-corners">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-background border-0 focus:outline-none font-technical text-foreground square-corners"
                />
                <button className="px-6 py-3 bg-accent text-accent-foreground font-technical font-medium hover:bg-muted transition-all border-l border-border square-corners">
                  →
                </button>
              </div>
              <p className="font-technical text-xs text-muted-foreground">
                Subscribe to technical updates and research publications
              </p>
            </div>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* System Identity */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-accent text-accent-foreground flex items-center justify-center border border-border square-corners">
                <span className="text-sm font-architectural">◉</span>
              </div>
              <div>
                <span className="font-architectural font-bold text-xl text-gradient-elegant tracking-tight">
                  VNIChain
                </span>
                <div className="font-technical text-xs text-muted-foreground uppercase tracking-wider">
                  Blockchain Operating System
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 border border-border px-4 py-2 square-corners">
                <div className="w-2 h-2 bg-green-500 square-corners"></div>
                <span className="font-technical text-sm text-muted-foreground">All systems operational</span>
              </div>
            </div>

            {/* Network Links */}
            <div className="flex items-center justify-end gap-0 border border-border square-corners">
              <a href="#" className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-all border-r border-border square-corners">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-all border-r border-border square-corners">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-all border-r border-border square-corners">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-all square-corners">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Copyright & Technical Info */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-technical text-sm text-muted-foreground">
                © 2024 VNIChain Protocol. Licensed under MIT.
              </p>
              <div className="flex items-center gap-4 font-technical text-xs text-muted-foreground uppercase tracking-wider">
                <span>Version 2.1.0</span>
                <span>•</span>
                <span>Build 20241215</span>
                <span>•</span>
                <span>API v3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
