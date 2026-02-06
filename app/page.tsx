import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              <span className="gradient-text">Optimize Your Prompts,</span>
              <br />
              <span className="text-white">Maximize Your Results</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Reduce hallucinations, improve output quality, and save up to 40% on tokens 
              with AI-powered prompt optimization.
            </p>
            <Link 
              href="/optimize" 
              className="inline-block gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Start Optimizing Free
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-xl">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-3">1. Paste Your Prompt</h3>
            <p className="text-gray-400">
              Copy your existing LLM prompt into our optimizer.
            </p>
          </div>
          <div className="glass p-8 rounded-xl">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold mb-3">2. AI Analysis</h3>
            <p className="text-gray-400">
              Our engine analyzes for clarity, specificity, and efficiency.
            </p>
          </div>
          <div className="glass p-8 rounded-xl">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-3">3. Get Optimized</h3>
            <p className="text-gray-400">
              Receive an improved prompt with detailed improvement notes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <div className="text-4xl font-bold mb-4 gradient-text">$0</div>
            <p className="text-gray-400 mb-6">10 optimizations/month</p>
            <Link 
              href="/optimize" 
              className="block w-full text-center border border-purple-500 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition"
            >
              Get Started
            </Link>
          </div>
          <div className="glass p-8 rounded-xl border-2 border-purple-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 gradient-bg px-4 py-1 rounded-full text-sm font-semibold">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="text-4xl font-bold mb-4 gradient-text">$29</div>
            <p className="text-gray-400 mb-6">500 optimizations/month</p>
            <Link 
              href="/optimize" 
              className="block w-full text-center gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Upgrade Now
            </Link>
          </div>
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">Team</h3>
            <div className="text-4xl font-bold mb-4 gradient-text">$99</div>
            <p className="text-gray-400 mb-6">Unlimited optimizations</p>
            <Link 
              href="/optimize" 
              className="block w-full text-center border border-purple-500 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 text-center">
        <div className="glass max-w-3xl mx-auto p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize?</h2>
          <p className="text-gray-400 mb-8">
            Join developers shipping better AI products with optimized prompts.
          </p>
          <Link 
            href="/optimize" 
            className="inline-block gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
          >
            Try It Now
          </Link>
        </div>
      </section>
    </div>
  );
}
