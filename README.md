<div align="center">
  <h1 align="center">🛍️ Modern E-Commerce Store</h1>
  <p align="center">A full-stack e-commerce solution built with Next.js 15, TypeScript, and Tailwind CSS</p>
  
  <div align="center">
    <a href="https://nextjs.org/" target="_blank">
      <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
    </a>
    <a href="https://stripe.com/" target="_blank">
      <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe">
    </a>
  </div>
</div>

## ✨ Features

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: #f8fafc; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
    <h3>🚀 Modern Stack</h3>
    <p>Built with Next.js 15 App Router, Server Components, and TypeScript for optimal performance and developer experience.</p>
  </div>
  
  <div style="background: #f8fafc; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #10b981;">
    <h3>💳 Secure Payments</h3>
    <p>Integrated with Stripe for secure payment processing with support for all major payment methods.</p>
  </div>
  
  <div style="background: #f8fafc; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #8b5cf6;">
    <h3>📱 Responsive Design</h3>
    <p>Fully responsive layout that works seamlessly on all devices from mobile to desktop.</p>
  </div>
  
  <div style="background: #f8fafc; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #ec4899;">
    <h3>⚡ Fast Performance</h3>
    <p>Optimized for speed with code splitting, image optimization, and efficient state management.</p>
  </div>
</div>

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/danray472/e-commerce.git
   cd e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your Stripe keys:
   ```
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🛠️ Project Structure

```
e-commerce/
├── app/                    # App Router
│   ├── api/               # API routes
│   ├── components/        # Reusable components
│   ├── lib/               # Utility functions
│   └── styles/            # Global styles
├── public/                # Static files
└── types/                 # TypeScript type definitions
```

## 📚 Tech Stack

- **Frontend Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Payments**: [Stripe](https://stripe.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/danray472">Danray</a></p>
  <p>Give a ⭐️ if you like this project!</p>
</div>