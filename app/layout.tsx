import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PromptTuner - Optimize Your LLM Prompts",
  description: "Reduce hallucinations, improve output quality, and save tokens with AI-powered prompt optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full z-50 glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-2xl font-bold gradient-text">
                PromptTuner
              </Link>
              <div className="flex gap-6">
                <Link href="/optimize" className="text-gray-300 hover:text-white transition">
                  Optimizer
                </Link>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition">
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
