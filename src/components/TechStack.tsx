const techStack = [
  { name: "FastAPI", category: "Framework" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "JWT Auth", category: "Security" },
  { name: "AWS", category: "Cloud" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Hugging Face", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "Pytest", category: "Testing" },
  { name: "SQLAlchemy", category: "ORM" },
  { name: "Alembic", category: "Migrations" },
];

const TechStack = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="tech-stack">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Tech </span>
            <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with industry-leading technologies for maximum performance and reliability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="group glass rounded-full px-6 py-3 hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="font-mono text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Code snippet decoration */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-warning/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">main.py</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="font-mono">
                <span className="text-info">from</span>{" "}
                <span className="text-primary">fastapi</span>{" "}
                <span className="text-info">import</span>{" "}
                <span className="text-foreground">FastAPI</span>{"\n"}
                <span className="text-info">from</span>{" "}
                <span className="text-primary">app.core</span>{" "}
                <span className="text-info">import</span>{" "}
                <span className="text-foreground">settings, security</span>{"\n"}
                <span className="text-info">from</span>{" "}
                <span className="text-primary">app.api</span>{" "}
                <span className="text-info">import</span>{" "}
                <span className="text-foreground">router</span>{"\n\n"}
                <span className="text-muted-foreground"># Initialize rayeesa-backend</span>{"\n"}
                <span className="text-foreground">app</span>{" "}
                <span className="text-info">=</span>{" "}
                <span className="text-primary">FastAPI</span>
                <span className="text-foreground">(</span>{"\n"}
                {"    "}
                <span className="text-foreground">title</span>
                <span className="text-info">=</span>
                <span className="text-success">"rayeesa-backend"</span>
                <span className="text-foreground">,</span>{"\n"}
                {"    "}
                <span className="text-foreground">version</span>
                <span className="text-info">=</span>
                <span className="text-success">"2.0.0"</span>{"\n"}
                <span className="text-foreground">)</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
