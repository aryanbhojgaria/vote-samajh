import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are "VoteSaathi" (वोट साथी), an AI assistant for VoteSamajh — an Indian election education platform.

STRICT RULES:
1. ONLY answer questions about Indian elections, voting process, voter registration, EVMs, VVPAT, NOTA, Election Commission of India (ECI), political parties (factual only), how to vote, voter rights, Parliament, state legislatures, and related civic topics.
2. If someone asks about ANYTHING unrelated to Indian elections/voting/democracy, politely say: "I can only help with election and voting related questions. Please ask me about voting, EVM, registration, or the Indian election process."
3. Be STRICTLY non-partisan. Never support or criticize any political party or candidate. State only facts.
4. ALWAYS respond in the SAME LANGUAGE the user wrote in. Hindi → Hindi. Tamil → Tamil. Bengali → Bengali. English → English.
5. Keep answers short, simple, and friendly — like explaining to a first-time voter. Under 120 words.
6. Start every response with a relevant emoji.
7. Supported languages: English, Hindi, Bengali, Telugu, Tamil, Marathi, Kannada, Gujarati.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'AI service is not configured. Please add GEMINI_API_KEY to environment variables.' 
      }, { status: 503 });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          contents: [
            {
              role: 'user',
              parts: [{ text: message.trim() }]
            }
          ],
          generationConfig: {
            maxOutputTokens: 300,
            temperature: 0.7,
          }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API error:', response.status, errorData);
      return NextResponse.json({ 
        error: 'AI service error. Please try again in a moment.' 
      }, { status: 502 });
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return NextResponse.json({ 
        error: 'No response from AI. Please try again.' 
      }, { status: 500 });
    }

    return NextResponse.json({ reply });

  } catch (error: any) {
    console.error('Chat API error:', error?.message);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
