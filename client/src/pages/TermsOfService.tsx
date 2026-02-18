import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/10 rounded-2xl mb-6">
              <FileText className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              Terms of Service
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
            <div className="prose prose-invert prose-purple max-w-none">
              <h2 className="text-3xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                By accessing or using Pioneers services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily access and use our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to reverse engineer any software contained in our services</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">User Accounts</h2>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">Account Creation</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To access certain features, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-2xl font-semibold text-purple-400 mb-3">Account Security</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                You are responsible for safeguarding your account credentials and for any activities or actions under your account. You must immediately notify us of any unauthorized use of your account.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Acceptable Use</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to use our services:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any malicious code, viruses, or harmful components</li>
                <li>To harass, abuse, or harm another person</li>
                <li>To impersonate or attempt to impersonate Pioneers or another user</li>
                <li>To engage in any automated use of the system</li>
                <li>To interfere with or circumvent security features</li>
                <li>To collect or track personal information of others</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Service Availability</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We strive to provide 99.99% uptime but do not guarantee that our services will be uninterrupted, timely, secure, or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Subscriptions and Payments</h2>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">Billing</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Some features require a paid subscription. You agree to pay all fees associated with your chosen plan. All fees are non-refundable except as required by law or as explicitly stated in our refund policy.
              </p>

              <h3 className="text-2xl font-semibold text-purple-400 mb-3">Automatic Renewal</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Subscriptions automatically renew unless cancelled before the renewal date. You will be charged the then-current rate for your subscription plan.
              </p>

              <h3 className="text-2xl font-semibold text-purple-400 mb-3">Cancellation</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                All content, features, and functionality of our services are owned by Pioneers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">User Content</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You retain ownership of any content you submit to our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with our services.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Disclaimer of Warranties</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our services will meet your requirements or that they will be error-free.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                To the maximum extent permitted by law, Pioneers shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Indemnification</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You agree to indemnify and hold harmless Pioneers from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 mt-12">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none pl-0 text-gray-300 space-y-2">
                <li>• Email: legal@pioneers.com</li>
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