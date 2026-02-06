# ✨ PromptTuner

**Optimize your AI prompts—reduce hallucinations, improve quality, save tokens**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tahseen137/prompttuner)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://prompttuner.vercel.app)

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
- ✨ **AI-Powered Rewrites** — Get improved versions of your prompt
- 📝 **Detailed Suggestions** — Specific recommendations for each issue
- 🔄 **Before/After Comparison** — See exactly what changed
- 📈 **Quality Score** — Track improvement with A-F grading

### Pro Features
- 🚀 **Bulk Optimization** — Optimize multiple prompts at once
- 📊 **Advanced Analytics** — Track performance over time
- 🔌 **API Access** — Integrate into your workflow
- 💾 **Prompt Library** — Save and organize optimized prompts

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tahseen137/prompttuner.git
cd prompttuner

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📦 Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tahseen137/prompttuner)

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
   Write a 500-word blog post about the impact of generative AI 
   on content creation. Include 3 specific examples, target 
   intermediate readers, and maintain a professional but 
   approachable tone.
   ```

### Example Transformations

#### Before
```
Explain quantum computing
```

#### After
```
Provide a beginner-friendly explanation of quantum computing in 
200 words. Focus on:
1. How it differs from classical computing
2. One real-world application
3. Why it matters for the future

Use analogies to make concepts accessible to non-technical readers.
```

---

## 📊 Scoring System

| Score | Grade | Description |
|-------|-------|-------------|
| 90-100 | A | Excellent prompt quality |
| 80-89 | B | Good with minor improvements possible |
| 70-79 | C | Needs optimization |
| 60-69 | D | Significant issues |
| 0-59 | F | Critical flaws |

### Factors
- **Clarity** (30%) — Clear instructions
- **Specificity** (30%) — Detailed requirements
- **Efficiency** (20%) — Token usage
- **Structure** (20%) — Organization and format

---

## 💡 Best Practices

### Write Better Prompts

**Be Specific**
```
❌ Write a story
✅ Write a 300-word science fiction story about time travel, 
   set in 2150, with a twist ending
```

**Define the Format**
```
❌ Explain photosynthesis
✅ Explain photosynthesis in 3 bullet points for a 5th grader
```

**Set Context**
```
❌ Help me debug this code
✅ I'm getting a TypeError in this Python function. The error 
   occurs when passing a string instead of an integer. 
   Here's the code: [code]
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

**Optimize your prompts, maximize your results ✨🎯**
