import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are "VoteSaathi" (वोट साथी), an AI assistant for VoteSamajh — an Indian election education platform.

STRICT RULES:
1. ONLY answer questions about Indian elections, voting process, voter registration, EVMs, VVPAT, NOTA, Election Commission of India (ECI), political parties (factual only), how to vote, voter rights, Parliament, state legislatures, and related civic topics.
2. If someone asks about ANYTHING unrelated to Indian elections/voting/democracy, politely say you can only help with election-related questions.
3. Be STRICTLY non-partisan. Never support or criticize any political party or candidate. State only facts.
4. ALWAYS respond in the SAME LANGUAGE the user wrote in. If they write in Hindi, respond in Hindi. If in Tamil, respond in Tamil. If in Bengali, respond in Bengali. If in English, respond in English. Auto-detect the language.
5. Keep answers short, simple, and easy to understand — like explaining to a first-time voter.
6. Never use complex legal or political jargon. Explain like a helpful friend.
7. You support these Indian languages: English, Hindi (हिंदी), Bengali (বাংলা), Telugu (తెలుగు), Tamil (தமிழ்), Marathi (मराठी), Kannada (ಕನ್ನಡ), Gujarati (ગુજરાતી).

EXAMPLE TOPICS YOU CAN ANSWER:
- How do I register to vote?
- What is an EVM?
- What is NOTA?
- What documents do I need to vote?
- How does the Lok Sabha election work?
- What is the Model Code of Conduct?
- Who is eligible to vote in India?
- How do I find my polling booth?
- What is e-EPIC?

START every response with a relevant emoji. Keep answers under 150 words unless the topic requires more detail.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'AI service not configured. Please add GEMINI_API_KEY to environment variables.' }, { status: 503 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'What are your rules?' }],
        },
        {
          role: 'model',
          parts: [{ text: SYSTEM_PROMPT }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 400,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to get response. Please try again.' },
      { status: 500 }
    );
  }
}
