import { Github, BookOpen, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">rayeesa</span>
            <span className="text-2xl font-bold text-gradient">-backend</span>
          </div>

          {/* Status badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-muted-foreground">Production Ready</span>
            </div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <span className="text-primary">⚙️</span>
              <span className="text-muted-foreground">Actively Maintained</span>
            </div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <span className="text-info">☁️</span>
              <span className="text-muted-foreground">Cloud Compatible</span>
            </div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <span className="text-primary">📈</span>
              <span className="text-muted-foreground">Enterprise Scalable</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>Documentation</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>API Reference</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border w-full max-w-md">
            <p className="text-sm text-muted-foreground">
              A cloud-ready, modular backend system optimized for enterprise-level AI applications.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-4">
              © 2024 rayeesa-backend. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
