import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#architecture", label: "Architecture" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#metrics", label: "Metrics" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="text-lg font-bold text-foreground">rayeesa</span>
            <span className="text-lg font-bold text-gradient">-backend</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
