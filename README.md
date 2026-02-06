# PromptTuner 🚀

An AI-powered prompt optimization tool that helps developers improve their LLM prompts for better output quality, reduced hallucinations, and token savings.

## 🎯 Features

- **Smart Optimization**: Analyzes and rewrites prompts for clarity, specificity, and efficiency
- **Side-by-Side Comparison**: View original vs optimized prompts
- **Improvement Insights**: Get detailed notes on what was improved
- **Token Savings**: Estimates percentage of token reduction
- **Dark Mode**: Beautiful glass morphism design with purple/blue gradients

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Language**: TypeScript

## 🚀 Live Demo

**Production URL**: [https://prompttuner.vercel.app](https://prompttuner.vercel.app)

## 📦 Pages

1. **Landing Page** (`/`) - Hero, features, pricing preview
2. **Optimizer** (`/optimize`) - Main tool for prompt optimization
3. **Pricing** (`/pricing`) - Detailed pricing tiers and FAQ

## 💰 Pricing

- **Free**: 10 optimizations/month
- **Pro**: $29/mo - 500 optimizations/month
- **Team**: $99/mo - Unlimited optimizations

## 🧠 How It Works

1. **Paste Your Prompt**: Copy your existing LLM prompt
2. **AI Analysis**: Engine analyzes for clarity, specificity, and efficiency
3. **Get Optimized**: Receive improved prompt with detailed notes

The optimizer focuses on:
- Adding clear role definitions
- Specifying output formats
- Adding constraints to reduce hallucinations
- Making instructions more specific
- Removing redundancy

## 🏃 Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📝 MVP Notes

This is a hackathon MVP. The optimization engine uses a smart template-based approach (no external API calls required). The algorithm:

- Adds role/context if missing
- Specifies output formats
- Adds hallucination-reduction constraints
- Makes instructions more specific
- Removes redundancy

## 🎨 Design

- Clean, modern dark mode interface
- Glass morphism cards
- Purple/blue gradient accents
- Responsive design

## 📄 License

MIT

---

Built with ⚡ by [Tahseen](https://github.com/tahseen137)
