'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

const chambers = [
  {
    name: "Lok Sabha",
    subtitle: "House of the People",
    seats: 543,
    color: "#FF9933",
    term: "5 Years",
    elected: "Directly by citizens",
    icon: "🏛️",
    facts: [
      "Members are called MPs (Members of Parliament)",
      "The party with majority (272+ seats) forms the government",
      "The PM must be a member of Lok Sabha (usually)",
      "Can be dissolved before 5 years by the President",
      "Speaker is the presiding officer"
    ]
  },
  {
    name: "Rajya Sabha",
    subtitle: "Council of States",
    seats: 245,
    color: "#138808",
    term: "6 Years (staggered)",
    elected: "By state legislators (MLAs)",
    icon: "🏟️",
    facts: [
      "A permanent body — cannot be dissolved",
      "1/3rd of members retire every 2 years",
      "Vice President is the ex-officio Chairman",
      "Represents the states and UTs of India",
      "12 members are nominated by the President"
    ]
  }
];

const levels = [
  { name: "Central Government", body: "Parliament (Lok Sabha + Rajya Sabha)", head: "Prime Minister", icon: "🇮🇳" },
  { name: "State Government", body: "Vidhan Sabha (+ Vidhan Parishad in some states)", head: "Chief Minister", icon: "🗺️" },
  { name: "Local Government", body: "Municipal Corporations, Panchayats", head: "Mayor / Sarpanch", icon: "🏘️" },
];

export default function ParliamentPage() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4 uppercase tracking-widest border-b-4 border-foreground inline-block pb-2">
          How Parliament Works
        </h1>
        <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mt-4">
          India's democracy has three tiers of government. Here's how they all fit together.
        </p>
      </div>

      {/* The Two Houses */}
      <h2 className="text-3xl font-black font-display uppercase tracking-widest border-b-4 border-foreground pb-2 mb-8">
        The Two Houses of Parliament
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {chambers.map((chamber, i) => (
          <motion.div
            key={chamber.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border-4 border-foreground p-6 hover:-translate-y-2 transition-transform"
            style={{ boxShadow: `8px 8px 0px ${chamber.color}` }}
          >
            <div className="text-5xl mb-4">{chamber.icon}</div>
            <div className="inline-block px-3 py-1 font-black text-xs uppercase tracking-widest text-white border-2 border-foreground mb-3"
              style={{ background: chamber.color }}>
              {chamber.seats} Seats
            </div>
            <h3 className="text-3xl font-black font-display uppercase mb-1">{chamber.name}</h3>
            <p className="text-foreground/60 font-medium mb-4">{chamber.subtitle}</p>

            <div className="flex flex-col gap-2 mb-6 text-sm">
              <div className="flex gap-2 border-2 border-foreground p-2 bg-background">
                <span className="font-black uppercase tracking-wide">Term:</span>
                <span className="font-medium">{chamber.term}</span>
              </div>
              <div className="flex gap-2 border-2 border-foreground p-2 bg-background">
                <span className="font-black uppercase tracking-wide">Elected by:</span>
                <span className="font-medium">{chamber.elected}</span>
              </div>
            </div>

            <ul className="flex flex-col gap-2">
              {chamber.facts.map((fact, j) => (
                <li key={j} className="flex items-start gap-2 text-sm font-medium">
                  <span className="text-primary font-black mt-0.5">→</span> {fact}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* 3 Tiers of Government */}
      <h2 className="text-3xl font-black font-display uppercase tracking-widest border-b-4 border-foreground pb-2 mb-8">
        3 Tiers of Government
      </h2>
      <div className="flex flex-col gap-4 mb-16">
        {levels.map((level, i) => (
          <motion.div
            key={level.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-6 bg-card border-4 border-foreground p-6 hover:-translate-y-1 transition-transform"
            style={{ boxShadow: '6px 6px 0px var(--foreground)' }}
          >
            <div className="text-4xl">{level.icon}</div>
            <div className="flex-1">
              <div className="font-black font-display uppercase text-xl text-primary">{level.name}</div>
              <div className="font-medium text-foreground/70">{level.body}</div>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-xs font-black uppercase tracking-widest text-foreground/40">Head</div>
              <div className="font-black text-lg">{level.head}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* How a bill becomes law */}
      <h2 className="text-3xl font-black font-display uppercase tracking-widest border-b-4 border-foreground pb-2 mb-8">
        How a Bill Becomes a Law
      </h2>
      <div className="bg-card border-4 border-foreground p-8" style={{ boxShadow: '8px 8px 0px var(--foreground)' }}>
        <div className="flex flex-col md:flex-row gap-0">
          {[
            { step: "1", label: "Bill Introduced", detail: "In either Lok Sabha or Rajya Sabha", icon: "📝" },
            { step: "2", label: "Debate & Vote", detail: "Members discuss, amend, and vote", icon: "🗣️" },
            { step: "3", label: "Other House", detail: "Goes to the other house for approval", icon: "↔️" },
            { step: "4", label: "President's Assent", detail: "President signs to make it law", icon: "✅" },
          ].map((s, i, arr) => (
            <div key={s.step} className="flex-1 flex items-center gap-0">
              <div className="flex flex-col items-center text-center p-4 flex-1">
                <div className="text-4xl mb-2">{s.icon}</div>
                <div className="w-10 h-10 bg-primary text-primary-foreground font-black text-lg border-2 border-foreground flex items-center justify-center mb-3">
                  {s.step}
                </div>
                <div className="font-black uppercase text-sm tracking-wide mb-1">{s.label}</div>
                <div className="text-xs font-medium text-foreground/60">{s.detail}</div>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden md:block text-2xl font-black text-primary">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
