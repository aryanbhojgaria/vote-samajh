'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const timelineSteps = [
  {
    phase: "Phase 1",
    title: "Election Announced",
    duration: "~8 weeks before",
    description: "The Election Commission announces the election schedule. The Model Code of Conduct (MCC) comes into effect immediately.",
    icon: "📢",
    color: "#FF9933"
  },
  {
    phase: "Phase 2",
    title: "Voter List Finalized",
    duration: "~6 weeks before",
    description: "The final electoral roll is published. Citizens can check if their name is included using the NVSP portal.",
    icon: "📋",
    color: "#2e3072"
  },
  {
    phase: "Phase 3",
    title: "Nomination Filing",
    duration: "~5 weeks before",
    description: "Candidates file their nomination papers with the Returning Officer along with a security deposit.",
    icon: "📝",
    color: "#FF9933"
  },
  {
    phase: "Phase 4",
    title: "Scrutiny & Withdrawal",
    duration: "~4 weeks before",
    description: "Nominations are scrutinized. Candidates who wish to withdraw may do so by the withdrawal deadline.",
    icon: "🔍",
    color: "#138808"
  },
  {
    phase: "Phase 5",
    title: "Campaigning",
    duration: "3–4 weeks before",
    description: "Political parties and candidates campaign across constituencies. Campaign must stop 48 hours before polling (Silent Period).",
    icon: "🎙️",
    color: "#2e3072"
  },
  {
    phase: "Phase 6",
    title: "Polling Day",
    duration: "Election Day",
    description: "Voters go to their assigned polling booth and cast their vote using the EVM. The ink mark is applied to their finger.",
    icon: "🗳️",
    color: "#FF9933"
  },
  {
    phase: "Phase 7",
    title: "Vote Counting",
    duration: "Results Day",
    description: "EVM machines are transported to counting centers. Votes are counted under strict supervision. Results are declared.",
    icon: "📊",
    color: "#138808"
  },
  {
    phase: "Phase 8",
    title: "Government Formation",
    duration: "Within weeks",
    description: "The party/coalition with majority forms the government. The President/Governor invites the leader to be sworn in.",
    icon: "🏛️",
    color: "#2e3072"
  }
];

export default function TimelinePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4 uppercase tracking-widest border-b-4 border-foreground inline-block pb-2">
          Election Timeline
        </h1>
        <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mt-4">
          From announcement to oath — every step of how an Indian election unfolds.
        </p>
      </div>

      {/* Scroll controls */}
      <div className="flex justify-end gap-3 mb-6">
        <button onClick={() => scroll('left')} className="border-4 border-foreground p-3 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all shadow-[4px_4px_0px_var(--foreground)]">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={() => scroll('right')} className="border-4 border-foreground p-3 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all shadow-[4px_4px_0px_var(--foreground)]">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Horizontal scroll track */}
      <div ref={scrollRef} className="flex gap-0 overflow-x-auto pb-8 scroll-smooth" style={{ scrollbarWidth: 'none' }}>
        {timelineSteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex-shrink-0 w-72 relative"
          >
            {/* Connector line */}
            {i < timelineSteps.length - 1 && (
              <div className="absolute top-12 left-full w-full h-[4px] bg-foreground z-0" style={{ left: '4.5rem' }} />
            )}

            <div className="border-4 border-foreground bg-card p-6 mx-3 relative z-10 h-full hover:-translate-y-2 transition-transform"
              style={{ boxShadow: `6px 6px 0px ${step.color}` }}>
              {/* Phase badge */}
              <div className="text-xs font-black uppercase tracking-widest mb-3 text-foreground/50">
                {step.phase}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4">{step.icon}</div>

              {/* Duration */}
              <div className="inline-block border-2 border-foreground text-xs font-black uppercase tracking-widest px-2 py-1 mb-3"
                style={{ background: step.color, color: '#fff' }}>
                {step.duration}
              </div>

              <h3 className="text-2xl font-black font-display uppercase leading-tight mb-3">
                {step.title}
              </h3>

              <p className="text-base font-medium text-foreground/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Step counter */}
      <div className="flex justify-center gap-2 mt-4">
        {timelineSteps.map((_, i) => (
          <div key={i} className="w-2 h-2 border-2 border-foreground bg-card" />
        ))}
      </div>
    </main>
  );
}
