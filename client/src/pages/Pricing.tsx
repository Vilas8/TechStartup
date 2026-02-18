import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { products } from "@/const/products";
import { formatINR } from "@/lib/currency";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Pricing() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
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
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-400">
                Choose the perfect plan for your business. All plans include 24/7 Priority Support.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {products.map((product, productIdx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: productIdx * 0.1 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{product.name}</h2>
                    <p className="text-gray-400">{product.shortDescription}</p>
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
                      className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all hover:border-cyan-500/50 overflow-hidden group"
                    >
                      {plan.tier === "professional" && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                          POPULAR
                        </div>
                      )}

                      <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                      <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                      <div className="mb-6">
                        <div className="text-4xl font-bold text-cyan-400">
                          {formatINR(product.pricing[plan.tier as keyof typeof product.pricing])}
                        </div>
                        <p className="text-sm text-gray-400 mt-2">/month, billed annually</p>
                      </div>

                      <Button
                        onClick={() => setLocation('/checkout')}
                        className={`w-full mb-6 h-11 font-semibold transition-all ${
                          plan.tier === "professional"
                            ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                            : "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                        }`}
                        variant={plan.tier === "professional" ? "default" : "outline"}
                      >
                        Get Started
                      </Button>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>All features included</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{product.support}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{product.uptime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>30-day money-back guarantee</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-800 pt-8">
                  <Button
                    onClick={() => setLocation(`/product/${product.slug}`)}
                    variant="ghost"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    View Full Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center text-white"
            >
              Frequently Asked Questions
            </motion.h2>

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
                  q: "Is there a money-back guarantee?",
                  a: "Yes, all plans include a 30-day money-back guarantee with no questions asked.",
                },
                {
                  q: "What if I need a custom plan?",
                  a: "Contact our sales team for custom enterprise solutions tailored to your needs.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/80 transition-colors"
                >
                  <h3 className="font-bold mb-3 text-white">{item.q}</h3>
                  <p className="text-gray-400">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Get Started?</h2>
              <p className="text-lg text-gray-400">
                Start your journey with Pioneers today. Choose your plan and get started in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setLocation('/checkout')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white h-12 px-8 text-base font-semibold"
              >
                Start Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => setLocation('/contact')}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 h-12 px-8 text-base font-semibold"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
