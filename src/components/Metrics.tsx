import { useEffect, useState, useRef } from "react";
import { TrendingDown, Clock, Server, Users } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: 38,
    suffix: "%",
    label: "Reduced Latency",
    description: "Response time improvement through async endpoints"
  },
  {
    icon: Clock,
    value: 99.3,
    suffix: "%",
    label: "Uptime Achieved",
    description: "Across deployments using Docker orchestration"
  },
  {
    icon: Server,
    value: 100,
    suffix: "%",
    label: "Cloud Native",
    description: "Compatible with cloud-native deployments"
  },
  {
    icon: Users,
    value: 5,
    suffix: "+",
    label: "Modular Services",
    description: "Independent AI and API pipeline development"
  }
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current * 10) / 10);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {count.toFixed(value % 1 !== 0 ? 1 : 0)}{suffix}
    </div>
  );
};

const Metrics = () => {
  return (
    <section className="py-24 md:py-32 relative" id="metrics">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Business </span>
            <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real performance metrics that drive enterprise value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="glass rounded-xl p-8 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                <metric.icon className="w-7 h-7" />
              </div>
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <h3 className="text-lg font-semibold mt-2 text-foreground">
                {metric.label}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
