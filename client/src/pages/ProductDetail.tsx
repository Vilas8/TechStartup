import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Zap, Code2, Users } from "lucide-react";
import { products } from "@/const/products";
import { formatINR } from "@/lib/currency";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoRequestModal from "@/components/DemoRequestModal";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const slug = params.slug;
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <Navbar />
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Product Not Found</h1>
          <p className="text-gray-400">The product you're looking for doesn't exist.</p>
          <Button onClick={() => setLocation("/")} className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
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

  const handleStartFreeTrial = () => {
    // Navigate to checkout with product and default to professional plan
    setLocation(`/checkout?plan=professional&product=${product.slug}`);
  };

  const handleGetStarted = (planTier: string) => {
    setLocation(`/checkout?plan=${planTier}&product=${product.slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      {/* Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        productName={product.name}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Product Icon and Name */}
            <div className="space-y-6">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-white`}>
                {getIcon(product.icon)}
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">{product.description}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleStartFreeTrial}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white h-12 px-8 text-base font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => setIsDemoModalOpen(true)}
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 h-12 px-8 text-base font-semibold"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900/30 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {product.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-white">Key Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors hover:border-cyan-500/50"
                >
                  <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="font-semibold text-white">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-white">Why Choose {product.name}?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="space-y-3"
                >
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-white">Use Cases</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors hover:border-cyan-500/50"
                >
                  <p className="font-semibold text-white">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-white">Integrations</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.integrations.map((integration, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors text-center font-semibold text-white"
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
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-white">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-400 text-center mb-12">
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
                  className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-all hover:border-cyan-500/50"
                >
                  {plan.tier === "professional" && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                      POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">
                    {formatINR(product.pricing[plan.tier as keyof typeof product.pricing])}
                    <span className="text-lg text-gray-400 font-normal">/month</span>
                  </div>

                  <Button
                    onClick={() => handleGetStarted(plan.tier)}
                    className={`w-full mb-6 ${
                      plan.tier === "professional"
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                        : "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                    }`}
                    variant={plan.tier === "professional" ? "default" : "outline"}
                  >
                    Get Started
                  </Button>

                  <div className="space-y-3 text-sm">
                    <p className="font-semibold mb-4 text-white">Includes:</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>All basic features</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>{product.support}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Check className="w-4 h-4 text-cyan-400" />
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
      <section className="py-24 bg-slate-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Get Started?</h2>
              <p className="text-lg text-gray-400">
                Have questions? Our team is here to help you find the perfect solution.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
