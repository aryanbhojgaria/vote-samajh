'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, ChevronDown } from 'lucide-react';
import { findAnswer } from '@/lib/electionKB';

interface Message { role: 'user' | 'bot'; text: string; }

const suggestions = ['How to vote?', 'What is EVM?', 'What is NOTA?', 'Register to vote', 'Lost my Voter ID'];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    role: 'bot',
    text: '🙏 Namaste! I am VoteSaathi — your offline election guide.\n\nAsk me about voting, EVM, NOTA, registration, or anything about Indian elections!\n\nआप हिंदी में भी पूछ सकते हैं।'
  }]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const reply = findAnswer(text);
    setMessages(prev => [...prev, { role: 'user', text }, { role: 'bot', text: reply }]);
    setInput('');
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(o => !o)}
        className="fixed bottom-6 right-6 z-[200] w-16 h-16 bg-primary border-4 border-foreground text-primary-foreground flex items-center justify-center"
        style={{ boxShadow: '4px 4px 0px var(--foreground)' }}
        whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-7 h-7" /> : (
          <div className="relative">
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#138808] border border-foreground rounded-full animate-pulse" />
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[199] w-[calc(100vw-2rem)] sm:w-[390px] bg-background border-4 border-foreground flex flex-col"
            style={{ height: '500px', boxShadow: '8px 8px 0px var(--foreground)', maxHeight: 'calc(100vh-120px)' }}
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 py-3 border-b-4 border-foreground flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🗳️</span>
                <div>
                  <div className="font-black uppercase tracking-widest text-sm">VoteSaathi AI</div>
                  <div className="text-xs opacity-80">Offline · Instant · No API</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}><ChevronDown className="w-5 h-5" /></button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-4 py-3 border-2 border-foreground text-sm font-medium leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card'}`}
                    style={{ boxShadow: '2px 2px 0px var(--foreground)' }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-3 pb-2 flex gap-2 overflow-x-auto flex-shrink-0" style={{ scrollbarWidth: 'none' }}>
                {suggestions.map(s => (
                  <button key={s} onClick={() => send(s)}
                    className="flex-shrink-0 border-2 border-foreground bg-card px-3 py-1.5 text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap">
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t-4 border-foreground flex flex-shrink-0">
              <input ref={inputRef} type="text" value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send(input)}
                placeholder="Ask in Hindi or English..."
                className="flex-1 px-4 py-3 bg-background text-foreground font-medium focus:outline-none text-sm"
              />
              <button onClick={() => send(input)} disabled={!input.trim()}
                className="px-4 bg-primary text-primary-foreground border-l-4 border-foreground hover:bg-foreground hover:text-background transition-colors disabled:opacity-40">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
