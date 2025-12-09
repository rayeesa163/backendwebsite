import { ArrowRight, Server, Shield, Brain, Database, BarChart3 } from "lucide-react";

const architectureNodes = [
  {
    icon: Server,
    title: "API Gateway",
    description: "Routes traffic to modular services",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Auth Service",
    description: "JWT generation, validation & RBAC",
    color: "success"
  },
  {
    icon: Brain,
    title: "AI Service",
    description: "Summarization, sentiment & LLM tasks",
    color: "info"
  },
  {
    icon: Database,
    title: "Data Service",
    description: "PostgreSQL transactions",
    color: "warning"
  },
  {
    icon: BarChart3,
    title: "Monitoring",
    description: "Real-time health dashboards",
    color: "primary"
  }
];

const Architecture = () => {
  return (
    <section className="py-24 md:py-32 relative" id="architecture">
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">System </span>
            <span className="text-gradient">Architecture</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A modular, scalable architecture designed for enterprise AI applications.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {architectureNodes.map((node, index) => (
              <div key={node.title} className="flex flex-col items-center">
                <div className="glass rounded-xl p-6 w-full hover:shadow-glow transition-all duration-500 hover:-translate-y-1 text-center">
                  <div className={`mb-3 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${node.color}/10`}>
                    <node.icon className={`w-7 h-7 text-${node.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {node.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {node.description}
                  </p>
                </div>
                {index < architectureNodes.length - 1 && (
                  <div className="hidden md:flex items-center absolute" style={{ left: `calc(${(index + 1) * 20}% - 10px)` }}>
                    <ArrowRight className="w-5 h-5 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connection lines - simplified for visual */}
          <div className="hidden md:block mt-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>

        {/* Technical highlights table */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technical Highlights
          </h3>
          <div className="glass rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Implementation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { category: "Framework", impl: "FastAPI (Async)" },
                  { category: "Database", impl: "PostgreSQL" },
                  { category: "Auth", impl: "JWT + Refresh Tokens + RBAC" },
                  { category: "AI/ML Layer", impl: "Hugging Face Transformers + LangChain" },
                  { category: "DevOps", impl: "Docker, GitHub Actions CI/CD, AWS EC2" },
                  { category: "Monitoring", impl: "Prometheus + Loguru" },
                  { category: "Testing", impl: "Pytest + Coverage Reports" },
                  { category: "Documentation", impl: "Swagger UI & ReDoc" },
                ].map((row) => (
                  <tr key={row.category} className="hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">{row.category}</td>
                    <td className="px-6 py-4 text-sm font-mono text-primary">{row.impl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
