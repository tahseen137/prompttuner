import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-400 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Free Tier */}
          <div className="glass p-8 rounded-2xl flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold gradient-text">$0</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400">Perfect for trying out PromptTuner</p>
            </div>

            <div className="flex-1 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">10 optimizations/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Basic prompt analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Token savings estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 text-xl">×</span>
                  <span className="text-gray-500">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 text-xl">×</span>
                  <span className="text-gray-500">API access</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/optimize" 
              className="block w-full text-center border border-purple-500 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="glass p-8 rounded-2xl flex flex-col border-2 border-purple-500 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 gradient-bg px-6 py-2 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold gradient-text">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400">For serious developers and teams</p>
            </div>

            <div className="flex-1 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">500 optimizations/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Advanced analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Token savings estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Batch processing</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/optimize" 
              className="block w-full text-center gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              Upgrade to Pro
            </Link>
          </div>

          {/* Team Tier */}
          <div className="glass p-8 rounded-2xl flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Team</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold gradient-text">$99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400">For organizations at scale</p>
            </div>

            <div className="flex-1 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Unlimited optimizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Advanced analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Custom token models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Dedicated support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Full API access</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/optimize" 
              className="block w-full text-center border border-purple-500 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition font-semibold"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">How does the optimization work?</h3>
              <p className="text-gray-400">
                Our AI analyzes your prompt for clarity, specificity, and efficiency. It rewrites 
                ambiguous sections, adds helpful constraints, and removes redundancy to improve 
                output quality and reduce token usage.
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-400">
                Yes! All plans are month-to-month with no long-term commitment. Cancel anytime 
                from your account settings.
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Do you store my prompts?</h3>
              <p className="text-gray-400">
                No. All optimization happens in real-time and we don't store your prompts or 
                results. Your intellectual property stays yours.
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">What LLM providers do you support?</h3>
              <p className="text-gray-400">
                Our optimizations work with any LLM provider (OpenAI, Anthropic, Google, etc.). 
                The principles of clear, specific prompts apply universally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
