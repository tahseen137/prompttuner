"use client";

import { useState } from "react";

export default function OptimizePage() {
  const [originalPrompt, setOriginalPrompt] = useState("");
  const [optimizedPrompt, setOptimizedPrompt] = useState("");
  const [improvements, setImprovements] = useState<string[]>([]);
  const [tokenSavings, setTokenSavings] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleOptimize = async () => {
    if (!originalPrompt.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: originalPrompt }),
      });
      
      const data = await response.json();
      setOptimizedPrompt(data.optimizedPrompt);
      setImprovements(data.improvements);
      setTokenSavings(data.tokenSavings);
    } catch (error) {
      console.error("Optimization failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(optimizedPrompt);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Prompt Optimizer
          </h1>
          <p className="text-gray-400 text-lg">
            Paste your prompt below and let AI optimize it for better results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Original Prompt */}
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Original Prompt</h2>
              <span className="text-sm text-gray-400">
                {originalPrompt.length} chars
              </span>
            </div>
            <textarea
              value={originalPrompt}
              onChange={(e) => setOriginalPrompt(e.target.value)}
              placeholder="Paste your LLM prompt here..."
              className="w-full h-96 bg-black/30 border border-gray-700 rounded-lg p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>

          {/* Optimized Prompt */}
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Optimized Prompt</h2>
              {optimizedPrompt && (
                <button
                  onClick={handleCopy}
                  className="text-sm text-purple-400 hover:text-purple-300 transition"
                >
                  📋 Copy
                </button>
              )}
            </div>
            <div className="w-full h-96 bg-black/30 border border-gray-700 rounded-lg p-4 overflow-auto">
              {optimizedPrompt ? (
                <p className="text-gray-200 whitespace-pre-wrap">{optimizedPrompt}</p>
              ) : (
                <p className="text-gray-500">Optimized prompt will appear here...</p>
              )}
            </div>
          </div>
        </div>

        {/* Optimize Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleOptimize}
            disabled={!originalPrompt.trim() || loading}
            className="gradient-bg text-white px-12 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Optimizing..." : "🚀 Optimize Prompt"}
          </button>
        </div>

        {/* Results */}
        {improvements.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💡</span> Improvements Made
              </h3>
              <ul className="space-y-3">
                {improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-gray-300">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📊</span> Token Savings
              </h3>
              <div className="text-center py-8">
                <div className="text-6xl font-bold gradient-text mb-2">
                  {tokenSavings}%
                </div>
                <p className="text-gray-400">Estimated token reduction</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
