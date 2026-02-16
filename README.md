# ✨ PromptTuner

**Optimize your AI prompts—reduce hallucinations, improve quality, save tokens**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tahseen137/prompttuner)

---

## 📖 About

**PromptTuner** is an **AI-powered prompt optimization tool** that helps you write better prompts for language models. Reduce hallucinations, improve output quality, and save up to 40% on tokens by optimizing your prompts for clarity, specificity, and efficiency.

Perfect for:
- 🤖 ChatGPT and GPT-4 users
- 💼 Teams using AI assistants
- 🛠️ Developers building AI features
- 📊 Prompt engineers and researchers

**Live Demo:** [prompttuner.vercel.app](https://prompttuner.vercel.app)

---

## ✨ Features

### Core Analysis
- 🔍 **Clarity Check** — Identifies ambiguous or unclear instructions
- 🎯 **Specificity Score** — Measures how well-defined your prompt is
- 📊 **Efficiency Analysis** — Finds redundant words and unnecessary tokens
- ⚠️ **Hallucination Risk** — Detects patterns that lead to made-up information

### Optimization
- ✨ **Smart Rewrites** — Get improved versions of your prompt with detailed explanations
- 📝 **Actionable Suggestions** — Specific recommendations for each issue
- 🔄 **Before/After Comparison** — See exactly what changed
- 📈 **Quality Score** — Track improvement with token savings estimates

### Coming Soon
- 🚀 **AI-Powered Optimization** — Real LLM integration (OpenAI, Anthropic)
- 📊 **Multi-Model Testing** — Compare prompts across GPT-4, Claude, Gemini
- 🔌 **API Access** — Integrate into your workflow
- 💾 **Prompt Library** — Save and organize optimized prompts

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js (Turbopack) | 16.1.6 |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | 3.4.1 |
| **Deployment** | Vercel | - |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/tahseen137/prompttuner.git
cd prompttuner

# 2. Install dependencies
npm install

# 3. (Optional) Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys (not required for basic usage)

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy PromptTuner is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tahseen137/prompttuner)

1. Click the button above or visit [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will detect Next.js automatically
4. (Optional) Add environment variables in **Settings → Environment Variables**
5. Deploy! 🚀

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Or export as static site
npm run build && npm run export
```

---

## 🎯 Usage

### Optimize a Prompt

1. **Paste Your Prompt**
   ```
   Write a blog post about AI
   ```

2. **Get Analysis**
   - Clarity: D (too vague)
   - Specificity: F (no details)
   - Efficiency: B (concise but incomplete)

3. **Review Optimized Version**
   ```
   You are an expert content writer. Provide a detailed analysis of 
   the impact of generative AI on content creation.
   
   Structure your response as follows:
   - Introduction (50 words)
   - 3 specific examples with data
   - Conclusion (50 words)
   
   Target audience: intermediate readers
   Tone: professional but approachable
   Length: 500 words
   
   Provide your response in a clear, structured format. Base your 
   response only on factual information. If unsure, acknowledge 
   the uncertainty.
   ```

### Example Transformations

#### Before
```
Explain quantum computing
```

#### After
```
You are an expert assistant. Provide a detailed description of 
quantum computing for beginners.

Structure:
1. How it differs from classical computing (100 words)
2. One real-world application (50 words)
3. Why it matters for the future (50 words)

Use analogies to make concepts accessible to non-technical readers.
Provide your response in a clear, structured format. Base your 
response only on factual information. If unsure, acknowledge 
the uncertainty.
```

---

## 📊 Optimization Methodology

PromptTuner analyzes prompts across multiple dimensions:

### 1. Role Definition
**Problem:** Vague or missing context  
**Solution:** Adds "You are an expert [role]" to set expectations

### 2. Output Format
**Problem:** Unclear deliverable structure  
**Solution:** Specifies format (bullet points, paragraphs, JSON, etc.)

### 3. Constraint Addition
**Problem:** Hallucination risk  
**Solution:** Adds "based on factual information" and uncertainty handling

### 4. Verb Specificity
**Problem:** Ambiguous verbs ("write about", "explain")  
**Solution:** Replaces with specific verbs ("provide a detailed analysis of")

### 5. Redundancy Removal
**Problem:** Repeated words, extra whitespace  
**Solution:** Cleans up formatting and removes duplicates

### Token Savings Estimate

Token savings are calculated based on:
- **Clarity bonus:** +15% (reduces follow-up questions)
- **Constraint bonus:** +10% (reduces off-topic responses)
- **Format bonus:** +8% (structured output = fewer retries)

**Example:** A 50-word vague prompt might generate a 500-token response with 2-3 retries (1,500 tokens total). The optimized 100-word prompt generates a 400-token response on the first try = **35% savings**.

---

## 💡 Best Practices

### Write Better Prompts

**❌ Too Vague**
```
Write a story
```

**✅ Specific**
```
Write a 300-word science fiction story about time travel, set in 2150, 
with a twist ending. Target audience: young adults.
```

---

**❌ No Format**
```
Explain photosynthesis
```

**✅ Formatted**
```
Explain photosynthesis for a 5th grader:
1. What it is (1 sentence)
2. How it works (3 bullet points)
3. Why it matters (1 sentence)
```

---

**❌ No Context**
```
Help me debug this code
```

**✅ Contextualized**
```
I'm getting a TypeError in this Python function when passing a string 
instead of an integer. Here's the code:

[code]

Expected behavior: [describe]
Actual behavior: [describe]
```

---

## 🏗️ Project Structure

```
prompttuner/
├── app/                      # Next.js app directory
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with navigation
│   ├── globals.css           # Global styles (Tailwind + custom)
│   ├── optimize/             # Optimizer page
│   │   └── page.tsx
│   ├── pricing/              # Pricing page
│   │   └── page.tsx
│   └── api/                  # API routes
│       └── optimize/
│           └── route.ts      # Optimization endpoint
├── public/                   # Static assets
├── .env.example              # Environment variable template
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore rules
├── LICENSE                   # MIT License
├── README.md                 # This file
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

### Development Workflow

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/prompttuner.git
   cd prompttuner
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, readable TypeScript
   - Follow existing code style
   - Test your changes locally

4. **Commit with a clear message**
   ```bash
   git commit -m 'Add amazing feature: [description]'
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/amazing-feature
   ```

### Code Style

- **TypeScript:** Use strict typing, avoid `any`
- **Components:** Functional components with hooks
- **Formatting:** Prettier with default settings
- **Naming:** camelCase for variables, PascalCase for components

### Areas for Contribution

- 🐛 **Bug fixes** - Fix issues or edge cases
- ✨ **New features** - Add AI integrations, templates, etc.
- 📝 **Documentation** - Improve README, add tutorials
- 🎨 **UI/UX** - Design improvements, accessibility
- 🧪 **Testing** - Add unit/integration tests
- 🌐 **Internationalization** - Translate to other languages

---

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

**Copyright (c) 2026 Tahseen Rahman**

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [Turbopack](https://turbo.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by [PromptPerfect](https://promptperfect.jina.ai/) and [Promptmetheus](https://www.promptmetheus.com/)

---

## 📈 Roadmap

### Phase 1: MVP ✅
- [x] Template-based optimization
- [x] Before/after comparison
- [x] Token savings estimate
- [x] Responsive UI

### Phase 2: AI Integration 🚧
- [ ] OpenAI API integration
- [ ] Claude (Anthropic) support
- [ ] Prompt history (localStorage)
- [ ] Export/share functionality

### Phase 3: Advanced Features
- [ ] Multi-model comparison
- [ ] Batch optimization (CSV upload)
- [ ] Prompt templates library
- [ ] Chrome extension

### Phase 4: Monetization
- [ ] Stripe integration
- [ ] Pro tier (API access, unlimited)
- [ ] Team accounts
- [ ] Analytics dashboard

---

## 🔗 Links

- **Live Demo:** [prompttuner.vercel.app](https://prompttuner.vercel.app)
- **GitHub:** [github.com/tahseen137/prompttuner](https://github.com/tahseen137/prompttuner)
- **Issues:** [Report a bug or request a feature](https://github.com/tahseen137/prompttuner/issues)

---

**Optimize your prompts, maximize your results ✨🎯**

*Made with ❤️ by [Tahseen Rahman](https://github.com/tahseen137)*
