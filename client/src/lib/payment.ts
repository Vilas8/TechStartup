/**
 * Payment utility functions for Razorpay and Stripe integration
 */

export interface PaymentOptions {
  amount: number;
  currency: string;
  name: string;
  description: string;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

/**
 * Load Razorpay script dynamically
 */
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

/**
 * Initialize Razorpay payment
 */
export const initializeRazorpayPayment = async (
  options: PaymentOptions,
  onSuccess: (response: RazorpayResponse) => void,
  onFailure: (error: any) => void
) => {
  const res = await loadRazorpayScript();

  if (!res) {
    onFailure(new Error('Razorpay SDK failed to load'));
    return;
  }

  // In production, create order on backend and get order_id
  // For now, using test configuration
  const razorpayOptions = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_HERE',
    amount: options.amount * 100, // Amount in paise
    currency: options.currency,
    name: options.name,
    description: options.description,
    image: '/logo.png',
    handler: function (response: RazorpayResponse) {
      onSuccess(response);
    },
    prefill: {
      name: options.customerName,
      email: options.customerEmail,
      contact: options.customerPhone,
    },
    theme: {
      color: '#06b6d4', // Cyan color matching the theme
    },
    modal: {
      ondismiss: function () {
        onFailure(new Error('Payment cancelled by user'));
      },
    },
  };

  const paymentObject = new (window as any).Razorpay(razorpayOptions);
  paymentObject.open();
};

/**
 * Format amount for display
 */
export const formatAmount = (amount: number, currency: string = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(amount);
};

/**
 * Validate payment details
 */
export const validatePaymentDetails = (details: {
  name: string;
  email: string;
  phone: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!details.name || details.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!details.email || !emailRegex.test(details.email)) {
    errors.push('Please enter a valid email address');
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!details.phone || !phoneRegex.test(details.phone.replace(/\D/g, '').slice(-10))) {
    errors.push('Please enter a valid 10-digit phone number');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Plan configurations
 */
export const PLANS = {
  starter: {
    id: 'starter',
    name: 'Starter',
    price: 49999,
    priceDisplay: '₹49,999',
    interval: 'month',
    features: [
      'All basic features',
      '24/7 Priority Support',
      '99.99% SLA',
      '10 GB Storage',
      '100 API Calls/day',
    ],
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    price: 149999,
    priceDisplay: '₹1,49,999',
    interval: 'month',
    features: [
      'All Starter features',
      'Advanced Analytics',
      'Custom Integrations',
      '100 GB Storage',
      'Unlimited API Calls',
      'Priority Email Support',
    ],
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    price: 499999,
    priceDisplay: '₹4,99,999',
    interval: 'month',
    features: [
      'All Professional features',
      'Dedicated Support Team',
      'Custom SLA',
      'Unlimited Storage',
      'White-label Options',
      'On-premise Deployment',
      'Dedicated Account Manager',
    ],
  },
} as const;

export type PlanType = keyof typeof PLANS;
