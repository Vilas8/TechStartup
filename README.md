# Pioneers Tech Startup Website

A modern, fully-featured tech startup website built with React, TypeScript, and cutting-edge UI technologies. Features include complete payment integration, responsive design, and professional UI/UX.

![Pioneers Banner](https://img.shields.io/badge/Pioneers-Tech%20Startup-cyan?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan?style=flat-square)

## ✨ Features

### 💻 Core Pages
- **Home** - Modern landing page with parallax effects and smooth animations
- **About** - Company information and mission
- **Products** - Product showcase with detailed descriptions
- **Team** - Team member profiles with social links
- **Pricing** - Transparent pricing with multiple plans
- **Checkout** - Secure payment processing with Razorpay/Stripe
- **Contact** - Contact form with company details
- **Privacy Policy** - Comprehensive privacy policy
- **Terms of Service** - Legal terms and conditions

### 💳 Payment Integration
- **Razorpay** - Complete integration for Indian payments
  - Credit/Debit Cards
  - UPI (GPay, PhonePe, Paytm)
  - Net Banking
  - Wallets
- **Stripe** - Ready for international payments
- Secure 256-bit encryption
- Order summary and invoice
- Multiple subscription plans

### 🎨 UI/UX Features
- Modern gradient design (Cyan/Purple theme)
- Smooth parallax scrolling effects
- Responsive design (Mobile, Tablet, Desktop)
- Glassmorphism effects
- Framer Motion animations
- Dark mode optimized
- Accessibility compliant

### 🧭 Navigation
- Sticky navbar with smooth scroll
- Mobile-responsive hamburger menu
- Active link highlighting
- Breadcrumb navigation
- Footer with sitemap

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS + Shadcn UI
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Notifications**: Sonner (Toast notifications)
- **Payment**: Razorpay SDK + Stripe Elements
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vilas8/TechStartup.git
   cd TechStartup
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Razorpay (for Indian payments)
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   VITE_RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   
   # Stripe (for international payments)
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   
   # API Base URL (if using backend)
   VITE_API_BASE_URL=http://localhost:3000
   ```

4. **Update payment keys**
   
   Edit `client/src/pages/Checkout.tsx`:
   ```typescript
   const options = {
     key: process.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_HERE',
     // ...
   };
   ```

5. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

6. **Open in browser**
   ```
   http://localhost:5173
   ```

## 💳 Payment Setup

### Razorpay Setup (Indian Payments)

1. **Create Razorpay Account**
   - Visit [Razorpay Dashboard](https://dashboard.razorpay.com)
   - Sign up for a free account
   - Complete KYC verification

2. **Get API Keys**
   - Navigate to Settings > API Keys
   - Generate Test/Live keys
   - Copy Key ID and Key Secret

3. **Configure Webhook** (for payment verification)
   - Go to Settings > Webhooks
   - Add webhook URL: `https://your-domain.com/api/razorpay/webhook`
   - Select events: `payment.captured`, `payment.failed`

4. **Test Payment**
   - Use test card: `4111 1111 1111 1111`
   - Any future expiry date
   - Any CVV

### Stripe Setup (International Payments)

1. **Create Stripe Account**
   - Visit [Stripe Dashboard](https://dashboard.stripe.com)
   - Sign up for account

2. **Get API Keys**
   - Navigate to Developers > API Keys
   - Copy Publishable key and Secret key

3. **Test Payment**
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any CVC

## 📁 Project Structure

```
TechStartup/
├── client/
│   ├── public/
│   │   └── logo.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Shadcn UI components
│   │   │   ├── Navbar.tsx      # Main navigation
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   └── ...other components
│   │   ├── pages/
│   │   │   ├── Home.tsx        # Landing page
│   │   │   ├── About.tsx       # About page
│   │   │   ├── Products.tsx    # Product listing
│   │   │   ├── Team.tsx        # Team page
│   │   │   ├── Pricing.tsx     # Pricing plans
│   │   │   ├── Checkout.tsx    # Payment page
│   │   │   ├── Contact.tsx     # Contact form
│   │   │   ├── PrivacyPolicy.tsx
│   │   │   └── TermsOfService.tsx
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── App.tsx         # Main app with routing
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 📝 Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm lint             # Lint code
pnpm format           # Format code with Prettier

# Testing
pnpm test             # Run tests
pnpm test:ui          # Run tests with UI
pnpm test:coverage    # Generate coverage report
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project in Vercel dashboard
   - Connect GitHub repository

2. **Configure Build Settings**
   - Framework: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`

3. **Add Environment Variables**
   - Add all env variables from `.env` file

4. **Deploy**
   - Click Deploy
   - Automatic deployments on push to main

### Netlify

1. **Deploy via Git**
   - Connect repository
   - Build command: `pnpm build`
   - Publish directory: `dist`

2. **Configure Redirects**
   Create `public/_redirects`:
   ```
   /* /index.html 200
   ```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_RAZORPAY_KEY_ID` | Razorpay API Key ID | Yes (India) |
| `VITE_RAZORPAY_KEY_SECRET` | Razorpay API Secret | Yes (Backend) |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe Publishable Key | Yes (International) |
| `VITE_API_BASE_URL` | Backend API URL | Optional |

## 🐛 Known Issues & Solutions

### Issue: Payment not processing
**Solution**: Check if Razorpay/Stripe keys are correctly configured and not expired.

### Issue: Navigation not working
**Solution**: Ensure all routes are defined in `App.tsx` and components are imported.

### Issue: Styles not loading
**Solution**: Run `pnpm install` again and check if Tailwind config is correct.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Vilas** - Full Stack Developer
- GitHub: [@Vilas8](https://github.com/Vilas8)
- Email: your-email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

**Project Link**: [https://github.com/Vilas8/TechStartup](https://github.com/Vilas8/TechStartup)

**Live Demo**: [https://tech-startup-omega.vercel.app](https://tech-startup-omega.vercel.app)

## ⭐ Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for beautiful components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Razorpay](https://razorpay.com/) for payment integration
- [Vercel](https://vercel.com/) for hosting

---

**Made with ❤️ by Vilas**
