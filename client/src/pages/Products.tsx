import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronLeft, Cloud, Code, Database, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = [
  {
    slug: 'cloudsync',
    name: 'CloudSync',
    icon: Cloud,
    description: 'Seamless cloud synchronization for all your devices',
    features: ['Real-time sync', 'End-to-end encryption', 'Unlimited storage', 'Multi-device support'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    slug: 'devtools',
    name: 'DevTools Pro',
    icon: Code,
    description: 'Professional development tools for modern teams',
    features: ['Code collaboration', 'CI/CD integration', 'Version control', 'Team analytics'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    slug: 'dataforge',
    name: 'DataForge',
    icon: Database,
    description: 'Advanced data processing and analytics platform',
    features: ['Real-time analytics', 'Custom dashboards', 'API integration', 'Data visualization'],
    color: 'from-green-500 to-cyan-500'
  },
  {
    slug: 'secureauth',
    name: 'SecureAuth',
    icon: Shield,
    description: 'Enterprise-grade authentication and security',
    features: ['Multi-factor auth', 'SSO integration', 'Security monitoring', 'Compliance tools'],
    color: 'from-orange-500 to-red-500'
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-cyan-400 hover:text-cyan-300">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-cyan-400 font-mono text-sm mb-4">OUR PRODUCTS</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              Innovative Solutions
            </h1>
            <p className="text-xl text-gray-400">
              Discover our suite of powerful tools designed to transform your workflow and boost productivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/product/${product.slug}`}>
                  <div className="group h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                    <p className="text-gray-400 mb-6">{product.description}</p>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="text-cyan-400 hover:text-cyan-300 group-hover:translate-x-2 transition-transform"
                    >
                      Learn More →
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}