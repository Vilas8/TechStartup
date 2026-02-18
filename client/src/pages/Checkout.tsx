import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { ChevronLeft, CreditCard, Lock, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const plans = {
  starter: {
    name: 'Starter',
    price: 49999,
    priceDisplay: '₹49,999',
    features: ['All basic features', '24/7 Priority Support', '99.99% SLA', '10 GB Storage', '100 API Calls/day']
  },
  professional: {
    name: 'Professional',
    price: 149999,
    priceDisplay: '₹1,49,999',
    features: ['All basic features', '24/7 Priority Support', '99.99% SLA', 'Advanced Analytics', 'Custom Integrations', '100 GB Storage']
  },
  enterprise: {
    name: 'Enterprise',
    price: 499999,
    priceDisplay: '₹4,99,999',
    features: ['All basic features', '24/7 Priority Support', '99.99% SLA', 'Advanced Analytics', 'Custom Integrations', 'Dedicated Support', 'Unlimited Storage']
  }
};

export default function Checkout() {
  const [location, setLocation] = useLocation();
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans>('professional');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [productName, setProductName] = useState('CloudSync');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: ''
  });

  // Parse URL parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get('plan');
    const product = params.get('product');

    if (plan && plans[plan as keyof typeof plans]) {
      setSelectedPlan(plan as keyof typeof plans);
    }

    if (product) {
      // Map product slugs to names
      const productNames: Record<string, string> = {
        'cloudsync': 'CloudSync',
        'devtools': 'DevTools Pro',
        'dataforge': 'DataForge',
        'secureauth': 'SecureAuth'
      };
      setProductName(productNames[product] || 'CloudSync');
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      toast.error('Failed to load payment gateway. Please try again.');
      return;
    }

    const plan = plans[selectedPlan];
    
    // In production, you would create an order on your backend
    // and get the order_id from there
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_HERE',
      amount: plan.price * 100, // Amount in paise
      currency: 'INR',
      name: 'Pioneers',
      description: `${productName} - ${plan.name} Plan`,
      image: '/logo.png',
      handler: function (response: any) {
        toast.success('Payment successful! Your subscription is now active.');
        console.log('Payment ID:', response.razorpay_payment_id);
        console.log('Order Details:', {
          product: productName,
          plan: plan.name,
          amount: plan.price
        });
        // Here you would verify the payment on your backend
        setTimeout(() => {
          setLocation('/');
        }, 2000);
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        product: productName,
        plan: plan.name
      },
      theme: {
        color: '#06b6d4'
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
          toast.info('Payment cancelled');
        }
      }
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  const handleStripePayment = async () => {
    // In production, you would integrate with Stripe Elements
    toast.info('Stripe integration coming soon! Use Razorpay for now.');
    setIsProcessing(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);

    try {
      if (paymentMethod === 'card' || paymentMethod === 'upi' || paymentMethod === 'netbanking') {
        // Use Razorpay for Indian payments
        await handleRazorpayPayment();
      } else {
        // Use Stripe for international payments
        await handleStripePayment();
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  const currentPlan = plans[selectedPlan];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/pricing">
            <Button variant="ghost" className="mb-6 text-cyan-400 hover:text-cyan-300">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Pricing
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/10 rounded-2xl mb-6">
              <Lock className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              Secure Checkout
            </h1>
            <p className="text-xl text-gray-400">
              Complete your {productName} subscription in a few simple steps
            </p>
          </motion.div>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
                >
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Product & Plan Selection */}
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Selected Product</h2>
                      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-slate-700 rounded-lg p-4 mb-6">
                        <p className="text-cyan-400 font-bold text-lg">{productName}</p>
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-4">Select Plan</h2>
                      <RadioGroup value={selectedPlan} onValueChange={(value) => setSelectedPlan(value as keyof typeof plans)}>
                        {Object.entries(plans).map(([key, plan]) => (
                          <div
                            key={key}
                            className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                              selectedPlan === key
                                ? 'border-cyan-500 bg-cyan-500/10'
                                : 'border-slate-700 hover:border-slate-600'
                            }`}
                            onClick={() => setSelectedPlan(key as keyof typeof plans)}
                          >
                            <RadioGroupItem value={key} id={key} />
                            <Label htmlFor={key} className="flex-1 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <span className="text-white font-semibold">{plan.name}</span>
                                <span className="text-cyan-400 font-bold">{plan.priceDisplay}/month</span>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName" className="text-white mb-2 block">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                            className="bg-slate-800/50 border-slate-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-white mb-2 block">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            required
                            className="bg-slate-800/50 border-slate-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-white mb-2 block">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Acme Inc."
                            className="bg-slate-800/50 border-slate-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-white mb-2 block">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            required
                            className="bg-slate-800/50 border-slate-700 text-white"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">Payment Method</h2>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div
                          className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                            paymentMethod === 'card'
                              ? 'border-cyan-500 bg-cyan-500/10'
                              : 'border-slate-700 hover:border-slate-600'
                          }`}
                          onClick={() => setPaymentMethod('card')}
                        >
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer flex items-center">
                            <CreditCard className="w-5 h-5 mr-3 text-cyan-400" />
                            <span className="text-white font-semibold">Credit/Debit Card</span>
                          </Label>
                        </div>

                        <div
                          className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                            paymentMethod === 'upi'
                              ? 'border-cyan-500 bg-cyan-500/10'
                              : 'border-slate-700 hover:border-slate-600'
                          }`}
                          onClick={() => setPaymentMethod('upi')}
                        >
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi" className="flex-1 cursor-pointer">
                            <span className="text-white font-semibold">UPI (GPay, PhonePe, Paytm)</span>
                          </Label>
                        </div>

                        <div
                          className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                            paymentMethod === 'netbanking'
                              ? 'border-cyan-500 bg-cyan-500/10'
                              : 'border-slate-700 hover:border-slate-600'
                          }`}
                          onClick={() => setPaymentMethod('netbanking')}
                        >
                          <RadioGroupItem value="netbanking" id="netbanking" />
                          <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                            <span className="text-white font-semibold">Net Banking</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-6 text-lg"
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Lock className="w-5 h-5 mr-2" />
                          Complete Secure Payment
                        </span>
                      )}
                    </Button>

                    <p className="text-center text-gray-400 text-sm">
                      By completing this purchase, you agree to our{' '}
                      <Link href="/terms-of-service" className="text-cyan-400 hover:underline">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy-policy" className="text-cyan-400 hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </motion.div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 sticky top-24"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Product</span>
                      <span className="text-cyan-400">{productName}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>{currentPlan.name} Plan</span>
                      <span>{currentPlan.priceDisplay}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Billing Cycle</span>
                      <span>Monthly</span>
                    </div>
                    <div className="border-t border-slate-700 pt-4">
                      <div className="flex justify-between text-white font-bold text-lg">
                        <span>Total</span>
                        <span>{currentPlan.priceDisplay}/mo</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h3 className="text-white font-semibold mb-3">What's Included:</h3>
                    <div className="space-y-2">
                      {currentPlan.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Secured by 256-bit encryption</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}