import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronLeft, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/10 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: February 18, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12"
          >
            <div className="prose prose-invert prose-cyan max-w-none">
              <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At Pioneers, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Information We Collect</h2>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Personal Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Register for an account</li>
                <li>Subscribe to our services</li>
                <li>Fill out a contact form</li>
                <li>Participate in surveys or promotions</li>
                <li>Communicate with our support team</li>
              </ul>

              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you access our services, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>To provide, operate, and maintain our services</li>
                <li>To improve, personalize, and expand our services</li>
                <li>To understand and analyze how you use our services</li>
                <li>To develop new products, services, and features</li>
                <li>To communicate with you for customer service and updates</li>
                <li>To process your transactions and manage your orders</li>
                <li>To send you marketing and promotional communications (with your consent)</li>
                <li>To detect and prevent fraud and abuse</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission or storage system is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Data Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>The right to access your personal data</li>
                <li>The right to rectify inaccurate data</li>
                <li>The right to erase your data</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
                <li>The right to withdraw consent</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none pl-0 text-gray-300 space-y-2">
                <li>• Email: privacy@pioneers.com</li>
                <li>• Phone: +1 (555) 123-4567</li>
                <li>• Address: 123 Tech Street, San Francisco, CA 94105</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}