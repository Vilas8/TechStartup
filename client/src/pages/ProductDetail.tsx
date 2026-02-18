import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Zap, Code2, Users } from "lucide-react";
import { products } from "@/const/products";
import { formatINR } from "@/lib/currency";
import ContactForm from "@/components/ContactForm";

/**
 * ProductDetail Page
 * Displays comprehensive information about a specific product
 */

export default function ProductDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const slug = params.slug;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Product Not Found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
          <Button onClick={() => setLocation("/")} className="bg-accent text-primary-foreground hover:bg-accent/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-12 h-12" />;
      case "Code2":
        return <Code2 className="w-12 h-12" />;
      case "Users":
        return <Users className="w-12 h-12" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold tracking-wider">PIONEERS</span>
          </button>
          <Button
            onClick={() => setLocation("/")}
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
          >
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Product Icon and Name */}
            <div className="space-y-6">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-accent`}>
                {getIcon(product.icon)}
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold">{product.name}</h1>
                <p className="text-xl text-muted-foreground max-w-3xl">{product.description}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-accent text-primary-foreground hover:bg-accent/90 h-12 px-8 text-base font-semibold">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 h-12 px-8 text-base font-semibold">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {product.stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Key Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Why Choose {product.name}?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Use Cases</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors hover:border-accent"
                >
                  <p className="font-semibold">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Integrations</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.integrations.map((integration, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-border bg-background hover:bg-card/50 transition-colors text-center font-semibold"
                >
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Choose the perfect plan for your needs. All plans include {product.support}.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { tier: "starter", name: "Starter" },
                { tier: "professional", name: "Professional" },
                { tier: "enterprise", name: "Enterprise" },
              ].map((plan) => (
                <div
                  key={plan.tier}
                  className="relative p-8 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-all hover:border-accent"
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-accent mb-6">
                    {formatINR(product.pricing[plan.tier as keyof typeof product.pricing])}
                    <span className="text-lg text-muted-foreground font-normal">/month</span>
                  </div>

                  <Button className="w-full bg-accent text-primary-foreground hover:bg-accent/90 mb-6">
                    Get Started
                  </Button>

                  <div className="space-y-3 text-sm">
                    <p className="font-semibold mb-4">Includes:</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>All basic features</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{product.support}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{product.uptime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground">
                Have questions? Our team is here to help you find the perfect solution.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Pioneers. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
