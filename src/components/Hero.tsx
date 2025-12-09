import { Button } from "@/components/ui/button";
import { ArrowRight, Github, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-60 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-glow opacity-40 animate-pulse-glow delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-muted-foreground">Production Ready</span>
              <span className="text-foreground font-medium">v2.0</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up delay-100">
            <span className="text-foreground">rayeesa</span>
            <span className="text-gradient">-backend</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-up delay-200">
            Enterprise-Grade Modular Backend System
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl animate-fade-up delay-300">
            A cloud-ready, modular backend built with FastAPI, PostgreSQL, and Docker. 
            Features secure authentication, AI service integration, and CI/CD automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <Button variant="hero" size="xl">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="xl">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-up delay-500">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">99.3%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">38%</div>
              <div className="text-sm text-muted-foreground">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">∞</div>
              <div className="text-sm text-muted-foreground">Scalable</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
