import { 
  Layers, 
  Shield, 
  Brain, 
  Zap, 
  Cloud, 
  Activity,
  Database,
  GitBranch
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Microservice Architecture",
    description: "Modular design with independent services for auth, user management, AI inference, and data pipelines."
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "JWT-based access control with role-based authorization (RBAC) and refresh token mechanism."
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Built-in AI service layer using Hugging Face Transformers and LangChain for LLM-driven insights."
  },
  {
    icon: Zap,
    title: "RESTful API Framework",
    description: "Designed with FastAPI following clean controller–service–repository structure."
  },
  {
    icon: Cloud,
    title: "Cloud-Ready Deployment",
    description: "Fully Dockerized with support for AWS EC2 and S3 integration; CI/CD pipeline managed through GitHub Actions."
  },
  {
    icon: Activity,
    title: "Observability",
    description: "Prometheus metrics and structured logging using Loguru for API performance monitoring and diagnostics."
  },
  {
    icon: Database,
    title: "Data Layer",
    description: "PostgreSQL with SQLAlchemy ORM and Alembic migrations for schema versioning."
  },
  {
    icon: GitBranch,
    title: "DevOps Pipeline",
    description: "CI/CD workflow automated via GitHub Actions — includes linting, testing, Docker build, and deployment."
  }
];

const Features = () => {
  return (
    <section className="py-24 md:py-32 relative" id="features">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-20" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Core </span>
            <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for enterprise applications with security, scalability, and observability at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
