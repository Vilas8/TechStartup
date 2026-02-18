/**
 * Payment configuration
 * 
 * IMPORTANT: Never commit real API keys to version control
 * Use environment variables for production
 */

export const PAYMENT_CONFIG = {
  razorpay: {
    keyId: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_HERE',
    keySecret: import.meta.env.VITE_RAZORPAY_KEY_SECRET || '',
    currency: 'INR',
    description: 'Pioneers Subscription',
  },
  stripe: {
    publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_YOUR_KEY_HERE',
    currency: 'usd',
  },
  general: {
    companyName: 'Pioneers',
    supportEmail: 'support@pioneers.com',
    refundPolicy: '30-day money-back guarantee',
  },
};

/**
 * Test card details for development
 */
export const TEST_CARDS = {
  razorpay: {
    success: {
      number: '4111 1111 1111 1111',
      expiry: 'Any future date',
      cvv: 'Any 3 digits',
      name: 'Test User',
    },
    failure: {
      number: '4000 0000 0000 0002',
      expiry: 'Any future date',
      cvv: 'Any 3 digits',
      name: 'Test User',
    },
  },
  stripe: {
    success: {
      number: '4242 4242 4242 4242',
      expiry: 'Any future date',
      cvc: 'Any 3 digits',
      zip: 'Any 5 digits',
    },
    requiresAuth: {
      number: '4000 0027 6000 3184',
      expiry: 'Any future date',
      cvc: 'Any 3 digits',
      zip: 'Any 5 digits',
    },
  },
};

/**
 * Payment error messages
 */
export const PAYMENT_ERRORS = {
  LOAD_FAILED: 'Failed to load payment gateway. Please refresh and try again.',
  CANCELLED: 'Payment was cancelled.',
  FAILED: 'Payment failed. Please try again or use a different payment method.',
  INVALID_DETAILS: 'Please check your payment details and try again.',
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  UNKNOWN: 'An unexpected error occurred. Please contact support if this persists.',
};
