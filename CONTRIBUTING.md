# Contributing to PromptTuner

Thank you for considering contributing to PromptTuner! 🎉

This document provides guidelines for contributing to the project. By participating, you agree to abide by our code of conduct and development practices.

---

## 🚀 How to Contribute

### 1. Find or Create an Issue

Before starting work, check if an issue exists for your contribution:

- **Browse existing issues:** [github.com/tahseen137/prompttuner/issues](https://github.com/tahseen137/prompttuner/issues)
- **Create a new issue** if your idea isn't listed yet

**Good first issues** are labeled with `good first issue` and are perfect for newcomers!

### 2. Fork and Clone

```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/prompttuner.git
cd prompttuner

# Add upstream remote to sync with main repo
git remote add upstream https://github.com/tahseen137/prompttuner.git
```

### 3. Set Up Development Environment

```bash
# Install dependencies
npm install

# Copy environment variables (optional for basic development)
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your changes.

### 4. Create a Feature Branch

```bash
# Always branch from main
git checkout main
git pull upstream main
git checkout -b feature/your-feature-name
```

**Branch naming conventions:**
- `feature/` - New features (e.g., `feature/ai-integration`)
- `fix/` - Bug fixes (e.g., `fix/optimize-api-error`)
- `docs/` - Documentation (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/api-structure`)
- `test/` - Adding tests (e.g., `test/optimize-endpoint`)

### 5. Make Your Changes

**Code Quality Guidelines:**

#### TypeScript
- Use strict typing (avoid `any` unless absolutely necessary)
- Prefer interfaces over types for object shapes
- Document complex logic with JSDoc comments

```typescript
// ✅ Good
interface OptimizeRequest {
  prompt: string;
  model?: string;
}

// ❌ Avoid
const data: any = req.body;
```

#### React Components
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks

```typescript
// ✅ Good
export default function OptimizePage() {
  const [prompt, setPrompt] = useState("");
  // ...
}

// ❌ Avoid class components
class OptimizePage extends React.Component { }
```

#### Styling
- Use Tailwind CSS utility classes
- Follow existing design patterns (glassmorphism, gradients)
- Ensure mobile responsiveness (`sm:`, `md:`, `lg:` breakpoints)

```typescript
// ✅ Good
<button className="gradient-bg text-white px-8 py-4 rounded-lg">
  Optimize
</button>

// ❌ Avoid inline styles
<button style={{ background: "purple" }}>
  Optimize
</button>
```

#### API Routes
- Validate all inputs
- Return consistent error shapes
- Use proper HTTP status codes

```typescript
// ✅ Good
if (!prompt || typeof prompt !== "string") {
  return NextResponse.json(
    { error: "Invalid prompt" },
    { status: 400 }
  );
}

// ❌ Avoid throwing without handling
const { prompt } = await request.json(); // Could throw!
```

### 6. Test Your Changes

**Manual Testing:**
1. Test on desktop and mobile
2. Verify all pages load without errors
3. Check console for warnings

**Build Test:**
```bash
npm run build
```

Build must complete with **zero errors** before submitting PR.

### 7. Commit Your Changes

Use clear, descriptive commit messages:

```bash
# ✅ Good commit messages
git commit -m "Add OpenAI API integration for real-time optimization"
git commit -m "Fix: Handle empty prompt edge case in API route"
git commit -m "Docs: Add contributing guidelines"

# ❌ Avoid vague messages
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

**Commit Message Format:**
```
<type>: <subject>

[optional body]

[optional footer]
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting, whitespace
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### 8. Push and Create Pull Request

```bash
# Push your branch to your fork
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub:

1. Go to [github.com/tahseen137/prompttuner](https://github.com/tahseen137/prompttuner)
2. Click **"New Pull Request"**
3. Select your fork and branch
4. Fill out the PR template (see below)

---

## 📋 Pull Request Template

When creating a PR, include:

```markdown
## Description
[Brief description of what this PR does]

## Type of Change
- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📝 Documentation update

## Checklist
- [ ] My code follows the project's code style
- [ ] I have tested my changes locally
- [ ] `npm run build` completes without errors
- [ ] I have updated documentation (if applicable)
- [ ] My changes don't introduce new warnings

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Related Issue
Closes #[issue number]
```

---

## 🎯 What to Contribute

### High-Priority Areas

#### 1. AI Integration
- OpenAI API connector
- Anthropic (Claude) API connector
- Gemini API support
- Model comparison view

#### 2. User Features
- Prompt history (localStorage)
- Export as .txt, .json
- Share link generation
- Prompt templates library

#### 3. Developer Experience
- Unit tests (Jest + React Testing Library)
- Integration tests for API routes
- Error boundary components
- Loading states and skeletons

#### 4. UI/UX Improvements
- Dark/light mode toggle
- Diff view (highlight changes)
- Keyboard shortcuts
- Accessibility (ARIA labels, keyboard nav)

#### 5. Documentation
- Tutorial videos
- Blog posts about prompt engineering
- API documentation (when API is added)
- Internationalization (i18n)

### Ideas for First-Time Contributors

**Good First Issues:**
- Add loading spinner on "Optimize" button
- Add character limit warning (e.g., >5000 chars)
- Improve mobile responsiveness of pricing page
- Add "Clear" button to reset optimizer
- Create prompt template examples (5-10 templates)

**Bug Fixes:**
- Handle edge cases (empty prompts, very long prompts)
- Fix layout issues on specific browsers
- Improve error messages
- Add input validation

**Documentation:**
- Add code comments
- Improve setup instructions
- Create troubleshooting guide
- Add FAQ section

---

## 🐛 Reporting Bugs

If you find a bug, please create an issue with:

1. **Clear title** (e.g., "API returns 500 on empty prompt")
2. **Steps to reproduce**
   ```
   1. Go to /optimize
   2. Click "Optimize" without entering text
   3. See error
   ```
3. **Expected behavior**
4. **Actual behavior**
5. **Screenshots** (if applicable)
6. **Environment:**
   - OS: [e.g., macOS 13, Windows 11]
   - Browser: [e.g., Chrome 120, Safari 17]
   - Node version: [e.g., 18.17.0]

---

## 💡 Suggesting Features

Feature requests are welcome! Please include:

1. **Problem statement:** What problem does this solve?
2. **Proposed solution:** How would you implement it?
3. **Alternatives considered:** Other approaches you thought of
4. **User impact:** Who benefits and how?

**Example:**
```markdown
## Feature Request: Multi-Model Comparison

**Problem:** Users want to test prompts across different models (GPT-4, Claude, Gemini) 
to see which performs best for their use case.

**Solution:** Add a "Compare Models" tab that runs the same prompt through 3 models 
side-by-side and displays results in a table.

**Alternatives:**
- Sequential testing (slower, less convenient)
- External tools (requires switching apps)

**Impact:** High - Many users test across models manually today
```

---

## 🔍 Code Review Process

All PRs go through code review:

1. **Automated checks run** (build, lint)
2. **Maintainer reviews code** (usually within 48 hours)
3. **Feedback addressed** (if any changes requested)
4. **PR approved and merged** 🎉

**Tips for faster reviews:**
- Keep PRs small and focused (one feature/fix per PR)
- Respond to feedback promptly
- Be open to suggestions

---

## 📜 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them succeed
- Accept constructive criticism gracefully
- Focus on what's best for the community

### Unacceptable Behavior

- Harassment, trolling, or personal attacks
- Publishing others' private information
- Spam or excessive self-promotion

### Enforcement

Violations may result in temporary or permanent ban from the project. Report issues to [tahseen.rahman@example.com] (maintainer contact).

---

## 🛠️ Development Tips

### Hot Reload Issues?
```bash
# Clear .next cache
rm -rf .next
npm run dev
```

### TypeScript Errors?
```bash
# Check TypeScript directly
npx tsc --noEmit
```

### Tailwind Classes Not Working?
Make sure your file is in the `tailwind.config.ts` content array.

### API Route Not Updating?
Restart the dev server (`Ctrl+C`, then `npm run dev`).

---

## 🙏 Thank You!

Your contributions make PromptTuner better for everyone. Whether it's code, documentation, bug reports, or ideas—every contribution matters! 🚀

**Questions?** Open a [Discussion](https://github.com/tahseen137/prompttuner/discussions) or reach out on [Twitter/X](https://twitter.com/tahseen137).

---

*Happy coding! ✨*
