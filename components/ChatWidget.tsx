'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, Loader2, ChevronDown } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const suggestions = [
  "How do I register to vote?",
  "What is an EVM?",
  "What is NOTA?",
  "How to find my polling booth?",
  "What documents do I need to vote?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: '🙏 Namaste! I am VoteSaathi, your election guide. Ask me anything about voting, registration, EVMs, or the Indian election process — in any language!\n\nआप हिंदी में भी पूछ सकते हैं।'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim() }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, {
        role: 'bot',
        text: data.reply || data.error || 'Sorry, something went wrong. Please try again.'
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'bot',
        text: '❌ Could not connect. Please check your internet and try again.'
      }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(o => !o)}
        className="fixed bottom-6 right-6 z-[200] w-16 h-16 bg-primary border-4 border-foreground text-primary-foreground flex items-center justify-center hover:-translate-y-1 transition-transform"
        style={{ boxShadow: '4px 4px 0px var(--foreground)' }}
        whileTap={{ scale: 0.95 }}
        title="Ask VoteSaathi"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative">
              <MessageCircle className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#138808] border border-foreground rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[199] w-[calc(100vw-2rem)] sm:w-[400px] bg-background border-4 border-foreground flex flex-col"
            style={{ height: '520px', boxShadow: '8px 8px 0px var(--foreground)', maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between border-b-4 border-foreground flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 border-2 border-primary-foreground flex items-center justify-center text-xl">
                  🗳️
                </div>
                <div>
                  <div className="font-black uppercase tracking-widest text-sm">VoteSaathi AI</div>
                  <div className="text-xs font-medium opacity-80">Ask in any Indian language</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-primary-foreground/20 p-1">
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-4 py-3 border-2 border-foreground text-sm font-medium leading-relaxed whitespace-pre-wrap
                    ${msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground'
                    }`}
                    style={{ boxShadow: '2px 2px 0px var(--foreground)' }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-card border-2 border-foreground px-4 py-3" style={{ boxShadow: '2px 2px 0px var(--foreground)' }}>
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-3 pb-2 flex gap-2 overflow-x-auto flex-shrink-0" style={{ scrollbarWidth: 'none' }}>
                {suggestions.map(s => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="flex-shrink-0 border-2 border-foreground bg-card px-3 py-1.5 text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t-4 border-foreground flex flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
                placeholder="Ask in any language..."
                className="flex-1 px-4 py-3 bg-background text-foreground font-medium focus:outline-none text-sm"
                disabled={loading}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="px-4 bg-primary text-primary-foreground border-l-4 border-foreground hover:bg-foreground hover:text-background transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
