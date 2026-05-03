'use client';

import { motion } from 'framer-motion';

const turnoutData = [
  { year: "1951", pct: 44.9 },
  { year: "1957", pct: 47.7 },
  { year: "1962", pct: 55.4 },
  { year: "1967", pct: 61.3 },
  { year: "1971", pct: 55.3 },
  { year: "1977", pct: 60.5 },
  { year: "1980", pct: 56.9 },
  { year: "1984", pct: 63.6 },
  { year: "1989", pct: 62.0 },
  { year: "1991", pct: 57.0 },
  { year: "1996", pct: 58.0 },
  { year: "1998", pct: 62.0 },
  { year: "1999", pct: 60.0 },
  { year: "2004", pct: 58.1 },
  { year: "2009", pct: 58.2 },
  { year: "2014", pct: 66.4 },
  { year: "2019", pct: 67.4 },
  { year: "2024", pct: 65.8 },
];

const statCards = [
  { icon: "🗳️", value: "97 Crore+", label: "Registered Voters (2024)", color: "#FF9933" },
  { icon: "🏛️", value: "543", label: "Lok Sabha Constituencies", color: "#138808" },
  { icon: "📍", value: "10.5 Lakh+", label: "Polling Stations", color: "#2e3072" },
  { icon: "👤", value: "67.4%", label: "Record Turnout (2019)", color: "#FF9933" },
  { icon: "📅", value: "1951", label: "First General Election", color: "#138808" },
  { icon: "⏱️", value: "4 Months", label: "Duration of First Election", color: "#2e3072" },
  { icon: "💰", value: "₹25,000", label: "Lok Sabha Deposit Required", color: "#FF9933" },
  { icon: "🖊️", value: "55 Lakh", label: "EVMs Used in 2024", color: "#138808" },
];

export default function StatsPage() {
  const maxPct = Math.max(...turnoutData.map(d => d.pct));

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4 uppercase tracking-widest border-b-4 border-foreground inline-block pb-2">
          India Election Stats
        </h1>
        <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mt-4">
          Key numbers and historical data from India's democratic journey.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {statCards.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border-4 border-foreground p-5 text-center hover:-translate-y-1 transition-transform"
            style={{ boxShadow: `4px 4px 0px ${s.color}` }}
          >
            <div className="text-3xl mb-2">{s.icon}</div>
            <div className="font-black font-display text-xl md:text-2xl text-primary mb-1">{s.value}</div>
            <div className="text-xs font-bold uppercase tracking-wide text-foreground/60">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Voter Turnout Chart */}
      <div className="bg-card border-4 border-foreground p-8 mb-16" style={{ boxShadow: '8px 8px 0px var(--foreground)' }}>
        <h2 className="text-2xl font-black font-display uppercase tracking-widest border-b-4 border-foreground pb-3 mb-8">
          Voter Turnout — General Elections (1951–2024)
        </h2>
        <div className="flex items-end gap-1 h-48 overflow-x-auto pb-2">
          {turnoutData.map((d, i) => (
            <motion.div
              key={d.year}
              className="flex flex-col items-center gap-1 flex-shrink-0"
              style={{ minWidth: '44px' }}
              initial={{ height: 0 }}
              whileInView={{ height: 'auto' }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-black text-primary">{d.pct}%</span>
              <motion.div
                className="w-8 border-2 border-foreground"
                style={{ background: d.pct >= 65 ? '#138808' : d.pct >= 60 ? '#FF9933' : '#2e3072' }}
                initial={{ height: 0 }}
                whileInView={{ height: `${(d.pct / maxPct) * 160}px` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.03 }}
              />
              <span className="text-[9px] font-bold text-foreground/50 rotate-45 origin-left mt-3 w-10">{d.year}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-4 mt-8 pt-4 border-t-2 border-foreground/20 text-xs font-bold">
          <span className="flex items-center gap-2"><span className="w-4 h-4 inline-block border border-foreground bg-[#138808]" /> 65%+ (Record)</span>
          <span className="flex items-center gap-2"><span className="w-4 h-4 inline-block border border-foreground bg-[#FF9933]" /> 60–65%</span>
          <span className="flex items-center gap-2"><span className="w-4 h-4 inline-block border border-foreground bg-[#2e3072]" /> Below 60%</span>
        </div>
      </div>

      {/* Gender wise turnout */}
      <div className="bg-card border-4 border-foreground p-8" style={{ boxShadow: '8px 8px 0px var(--foreground)' }}>
        <h2 className="text-2xl font-black font-display uppercase tracking-widest border-b-4 border-foreground pb-3 mb-8">
          2024 Election — Gender-wise Turnout
        </h2>
        <div className="flex flex-col gap-6">
          {[
            { label: "Male Voters", pct: 65.6, color: "#2e3072" },
            { label: "Female Voters", pct: 65.8, color: "#FF9933" },
            { label: "Third Gender", pct: 18.9, color: "#138808" },
          ].map((g, i) => (
            <div key={g.label} className="flex items-center gap-4">
              <div className="w-28 font-black uppercase text-sm">{g.label}</div>
              <div className="flex-1 h-8 bg-background border-2 border-foreground overflow-hidden">
                <motion.div
                  className="h-full flex items-center justify-end pr-2 border-r-2 border-foreground"
                  style={{ background: g.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${g.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  <span className="text-white font-black text-xs">{g.pct}%</span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
