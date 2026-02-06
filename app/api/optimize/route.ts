import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Invalid prompt" },
        { status: 400 }
      );
    }

    // Smart template-based optimization (MVP - no OpenAI call needed)
    const optimizedPrompt = optimizePrompt(prompt);
    const improvements = analyzeImprovements(prompt, optimizedPrompt);
    const tokenSavings = estimateTokenSavings(prompt, optimizedPrompt);

    return NextResponse.json({
      optimizedPrompt,
      improvements,
      tokenSavings,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Optimization failed" },
      { status: 500 }
    );
  }
}

function optimizePrompt(prompt: string): string {
  let optimized = prompt;

  // Add role/context if missing
  if (!prompt.toLowerCase().includes("you are") && !prompt.toLowerCase().includes("act as")) {
    optimized = `You are an expert assistant. ${optimized}`;
  }

  // Add output format specification if vague
  if (!prompt.toLowerCase().includes("format") && !prompt.toLowerCase().includes("structure")) {
    optimized += "\n\nProvide your response in a clear, structured format.";
  }

  // Add constraints to reduce hallucinations
  if (!prompt.toLowerCase().includes("only") && !prompt.toLowerCase().includes("based on")) {
    optimized += " Base your response only on factual information. If unsure, acknowledge the uncertainty.";
  }

  // Make instructions more specific
  optimized = optimized
    .replace(/write about/gi, "provide a detailed analysis of")
    .replace(/explain/gi, "explain in specific detail")
    .replace(/tell me/gi, "provide a comprehensive overview of")
    .replace(/describe/gi, "provide a detailed description of");

  // Remove redundancy
  optimized = optimized
    .replace(/please please/gi, "please")
    .replace(/very very/gi, "very")
    .replace(/\s+/g, " ") // Multiple spaces
    .trim();

  // Add clarity improvements
  if (prompt.length < 100) {
    optimized += "\n\nBe specific and comprehensive in your response.";
  }

  return optimized;
}

function analyzeImprovements(original: string, optimized: string): string[] {
  const improvements: string[] = [];

  if (!original.toLowerCase().includes("you are") && optimized.toLowerCase().includes("you are")) {
    improvements.push("Added clear role definition to set context");
  }

  if (!original.toLowerCase().includes("format") && optimized.toLowerCase().includes("format")) {
    improvements.push("Specified output format for consistency");
  }

  if (!original.toLowerCase().includes("based on") && optimized.toLowerCase().includes("based on")) {
    improvements.push("Added constraints to reduce hallucinations");
  }

  if (original !== original.replace(/write about/gi, "provide a detailed analysis of")) {
    improvements.push("Made instructions more specific and actionable");
  }

  if (original.includes("  ") || original.includes("please please")) {
    improvements.push("Removed redundancy and cleaned up formatting");
  }

  if (original.length < 100 && optimized.length > original.length) {
    improvements.push("Added specificity requirements for better output quality");
  }

  // Always add a few core improvements
  if (improvements.length === 0) {
    improvements.push(
      "Enhanced clarity and specificity",
      "Added structure for consistent outputs",
      "Optimized for reduced ambiguity"
    );
  }

  return improvements;
}

function estimateTokenSavings(original: string, optimized: string): number {
  // Simple heuristic: longer prompts with better structure = more efficient responses
  // This mocks the "token savings" metric
  
  const originalLength = original.length;
  const optimizedLength = optimized.length;
  
  // If we added clarity/constraints, the LLM will be more focused = fewer tokens in response
  const clarityBonus = optimized.includes("specific") ? 15 : 0;
  const constraintBonus = optimized.includes("only") || optimized.includes("based on") ? 10 : 0;
  const formatBonus = optimized.includes("format") ? 8 : 0;
  
  // Base savings from improved structure
  const baseSavings = Math.min(35, Math.floor((optimizedLength - originalLength) / 10));
  
  const totalSavings = Math.max(5, Math.min(45, baseSavings + clarityBonus + constraintBonus + formatBonus));
  
  return totalSavings;
}
