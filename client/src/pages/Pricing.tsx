import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { products } from "@/const/products";
import { formatINR } from "@/lib/currency";

/**
 * Pricing Page
 * Display all products with pricing tiers
 */

export default function Pricing() {
  const [, setLocation] = useLocation();

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
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">Simple, Transparent Pricing</h1>
              <p className="text-xl text-muted-foreground">
                Choose the perfect plan for your business. All plans include 24/7 priority support and a 30-day free trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-24">
            {products.map((product) => (
              <div key={product.id} className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-primary-foreground">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className="text-muted-foreground">{product.shortDescription}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { tier: "starter", name: "Starter", description: "Perfect for small teams" },
                    { tier: "professional", name: "Professional", description: "For growing businesses" },
                    { tier: "enterprise", name: "Enterprise", description: "For large organizations" },
                  ].map((plan) => (
                    <div
                      key={plan.tier}
                      className="relative p-8 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-all hover:border-accent overflow-hidden"
                    >
                      {plan.tier === "professional" && (
                        <div className="absolute top-0 right-0 bg-accent text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-lg">
                          POPULAR
                        </div>
                      )}

                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                      <div className="mb-6">
                        <div className="text-4xl font-bold text-accent">
                          {formatINR(product.pricing[plan.tier as keyof typeof product.pricing])}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">/month, billed annually</p>
                      </div>

                      <Button
                        className={`w-full mb-6 h-11 font-semibold ${
                          plan.tier === "professional"
                            ? "bg-accent text-primary-foreground hover:bg-accent/90"
                            : "border-accent text-accent hover:bg-accent/10"
                        }`}
                        variant={plan.tier === "professional" ? "default" : "outline"}
                      >
                        Get Started
                      </Button>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>All features included</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{product.support}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{product.uptime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>30-day free trial</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-8">
                  <Button
                    onClick={() => setLocation(`/product/${product.slug}`)}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    View Full Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: "Can I change my plan anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
                },
                {
                  q: "Is there a long-term contract?",
                  a: "No, all our plans are month-to-month with no long-term contracts. You can cancel anytime.",
                },
                {
                  q: "Do you offer discounts for annual billing?",
                  a: "Yes, we offer 20% discount when you pay annually instead of monthly.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, UPI, and bank transfers for Indian customers.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, all plans include a 30-day free trial with full access to all features.",
                },
                {
                  q: "What if I need a custom plan?",
                  a: "Contact our sales team for custom enterprise solutions tailored to your needs.",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                  <h3 className="font-bold mb-3">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground">
                Start your free trial today. No credit card required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-primary-foreground hover:bg-accent/90 h-12 px-8 text-base font-semibold">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => setLocation("/")}
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 h-12 px-8 text-base font-semibold"
              >
                Back to Home
              </Button>
            </div>
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
