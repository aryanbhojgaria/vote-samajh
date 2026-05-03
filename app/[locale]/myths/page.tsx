'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useState } from 'react';

const myths = [
  {
    myth: "You MUST show your Voter ID card to vote.",
    fact: "You can show any of 12 alternate photo IDs — including Aadhaar, PAN card, Driving License, Passport, or Bank passbook.",
    tag: "ID Rules"
  },
  {
    myth: "If you press the wrong button on an EVM, you can ask to re-vote.",
    fact: "Once you press the button and hear the beep, your vote is final. Always confirm before pressing.",
    tag: "EVM"
  },
  {
    myth: "EVMs can be hacked to change results.",
    fact: "EVMs are standalone machines with no WiFi, Bluetooth, or internet. They use one-time programmable chips and cannot be hacked remotely.",
    tag: "EVM Security"
  },
  {
    myth: "NOTA means the election will be held again.",
    fact: "NOTA only records your dissatisfaction. Even if NOTA gets the most votes, the candidate with the second-highest votes wins.",
    tag: "NOTA"
  },
  {
    myth: "You lose your right to vote if you don't vote in the previous election.",
    fact: "Your right to vote cannot be cancelled for not voting. It is a permanent right for every eligible Indian citizen.",
    tag: "Voter Rights"
  },
  {
    myth: "You can't vote if your name has a spelling error in the voter list.",
    fact: "Minor spelling errors don't disqualify you. The Presiding Officer can verify your identity through other documents.",
    tag: "Voter List"
  }
];

export default function MythsPage() {
  const [revealed, setRevealed] = useState<number[]>([]);

  const toggle = (i: number) => {
    setRevealed(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4 uppercase tracking-widest border-b-4 border-foreground inline-block pb-2">
          Myth vs Fact
        </h1>
        <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mt-4">
          Common election myths debunked. Click a card to reveal the truth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {myths.map((item, i) => {
          const isRevealed = revealed.includes(i);
          return (
            <motion.div
              key={i}
              layout
              onClick={() => toggle(i)}
              className="cursor-pointer select-none"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Tag */}
              <div className="inline-block bg-foreground text-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-2">
                {item.tag}
              </div>

              {/* Myth side */}
              <div className={`border-4 border-foreground p-6 transition-all duration-300 ${isRevealed ? 'opacity-40' : ''}`}
                style={{ boxShadow: '6px 6px 0px var(--foreground)' }}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest text-red-500">Myth</span>
                </div>
                <p className="text-xl font-bold font-display leading-snug">"{item.myth}"</p>
              </div>

              {/* Fact side */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={isRevealed ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-4 border-t-0 border-[#138808] p-6 bg-[#138808]/10">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#138808] border-2 border-foreground flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-black text-xs uppercase tracking-widest text-[#138808]">Fact</span>
                  </div>
                  <p className="text-lg font-medium leading-relaxed">{item.fact}</p>
                </div>
              </motion.div>

              {!isRevealed && (
                <p className="text-center text-sm font-bold text-foreground/40 mt-2 uppercase tracking-widest">
                  Tap to reveal fact →
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
