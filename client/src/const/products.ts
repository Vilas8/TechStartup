/**
 * Product Data Constants
 * Centralized product information with pricing in INR
 */

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  stats: {
    label: string;
    value: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  useCases: string[];
  integrations: string[];
  support: string;
  uptime: string;
}

export const products: Product[] = [
  {
    id: "cloudsync",
    name: "CloudSync",
    slug: "cloudsync",
    description:
      "Real-time data synchronization across distributed systems with zero downtime. CloudSync ensures your data is always consistent, secure, and available wherever you need it.",
    shortDescription: "Real-time data synchronization across distributed systems with zero downtime.",
    icon: "Zap",
    color: "from-accent to-accent/50",
    features: [
      "Real-time data synchronization",
      "Multi-region replication",
      "Automatic failover",
      "End-to-end encryption",
      "API-first architecture",
      "Webhook support",
      "Rate limiting & throttling",
      "Advanced monitoring",
    ],
    pricing: {
      starter: 49999,
      professional: 149999,
      enterprise: 499999,
    },
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Data Centers", value: "12+" },
      { label: "Sync Speed", value: "<100ms" },
      { label: "Active Users", value: "5000+" },
    ],
    benefits: [
      {
        title: "Zero Downtime",
        description: "Seamless updates and maintenance without service interruption",
      },
      {
        title: "Global Reach",
        description: "Deploy across multiple regions for optimal performance",
      },
      {
        title: "Enterprise Security",
        description: "Military-grade encryption and compliance certifications",
      },
      {
        title: "Developer Friendly",
        description: "Comprehensive APIs and SDKs for easy integration",
      },
    ],
    useCases: [
      "Real-time collaboration tools",
      "Financial transaction systems",
      "IoT data collection",
      "Multi-tenant SaaS applications",
      "Gaming leaderboards",
      "Live analytics dashboards",
    ],
    integrations: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Docker", "PostgreSQL", "MongoDB", "Redis"],
    support: "24/7 Priority Support",
    uptime: "99.99% SLA",
  },
  {
    id: "devflow",
    name: "DevFlow",
    slug: "devflow",
    description:
      "Streamlined development pipeline that reduces deployment time by 80%. DevFlow automates your entire CI/CD workflow, from code commit to production deployment.",
    shortDescription: "Streamlined development pipeline that reduces deployment time by 80%.",
    icon: "Code2",
    color: "from-accent/70 to-accent/30",
    features: [
      "Automated CI/CD pipeline",
      "One-click deployments",
      "Environment management",
      "Rollback capabilities",
      "Performance monitoring",
      "Security scanning",
      "Team collaboration",
      "Audit logs",
    ],
    pricing: {
      starter: 29999,
      professional: 99999,
      enterprise: 299999,
    },
    stats: [
      { label: "Deployment Time", value: "-80%" },
      { label: "Build Success Rate", value: "99.8%" },
      { label: "Teams Using", value: "2000+" },
      { label: "Deployments/Month", value: "100k+" },
    ],
    benefits: [
      {
        title: "Faster Deployments",
        description: "Reduce time-to-market with automated pipelines",
      },
      {
        title: "Reliability",
        description: "Consistent deployments with automated testing and validation",
      },
      {
        title: "Team Collaboration",
        description: "Streamlined workflows for distributed development teams",
      },
      {
        title: "Cost Efficiency",
        description: "Reduce infrastructure costs with optimized resource allocation",
      },
    ],
    useCases: [
      "Microservices deployment",
      "Continuous integration",
      "Blue-green deployments",
      "Canary releases",
      "Infrastructure as Code",
      "Multi-environment management",
    ],
    integrations: ["GitHub", "GitLab", "Bitbucket", "Jenkins", "Docker", "Kubernetes", "Terraform", "Ansible"],
    support: "24/7 Priority Support",
    uptime: "99.95% SLA",
  },
  {
    id: "teamhub",
    name: "TeamHub",
    slug: "teamhub",
    description:
      "Unified collaboration platform for remote and distributed teams. TeamHub brings together communication, project management, and knowledge sharing in one intuitive interface.",
    shortDescription: "Unified collaboration platform for remote and distributed teams.",
    icon: "Users",
    color: "from-accent/50 to-accent/10",
    features: [
      "Real-time messaging",
      "Video conferencing",
      "Project management",
      "File sharing",
      "Task tracking",
      "Time tracking",
      "Knowledge base",
      "Integrations",
    ],
    pricing: {
      starter: 19999,
      professional: 59999,
      enterprise: 199999,
    },
    stats: [
      { label: "Team Members", value: "Unlimited" },
      { label: "Storage", value: "Up to 1TB" },
      { label: "Active Teams", value: "3500+" },
      { label: "Countries", value: "150+" },
    ],
    benefits: [
      {
        title: "Unified Communication",
        description: "All team communication in one place",
      },
      {
        title: "Increased Productivity",
        description: "Reduce context switching and improve focus",
      },
      {
        title: "Remote-First Design",
        description: "Built for distributed and hybrid teams",
      },
      {
        title: "Easy Integration",
        description: "Connect with your existing tools seamlessly",
      },
    ],
    useCases: [
      "Remote team management",
      "Project collaboration",
      "Client communication",
      "Knowledge management",
      "Onboarding new team members",
      "Cross-functional projects",
    ],
    integrations: ["Slack", "Microsoft Teams", "Google Workspace", "Jira", "Asana", "Notion", "Zapier", "Webhooks"],
    support: "24/7 Priority Support",
    uptime: "99.9% SLA",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 10 team members",
      "Basic features",
      "Email support",
      "Community access",
      "Standard integrations",
    ],
  },
  {
    name: "Professional",
    description: "For growing businesses",
    features: [
      "Up to 100 team members",
      "Advanced features",
      "Priority email support",
      "Custom integrations",
      "Advanced analytics",
      "SSO",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "All features",
      "24/7 phone support",
      "Custom development",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option",
    ],
  },
];
