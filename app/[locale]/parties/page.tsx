'use client';

import { motion } from 'framer-motion';

const parties = [
  {
    name: "Indian National Congress",
    abbr: "INC",
    founded: "1885",
    symbol: "Hand",
    ideology: "Social Democracy, Secularism",
    color: "#00BFFF",
    eciLink: "https://www.eci.gov.in"
  },
  {
    name: "Bharatiya Janata Party",
    abbr: "BJP",
    founded: "1980",
    symbol: "Lotus",
    ideology: "Social Conservatism, Nationalism",
    color: "#FF6600",
    eciLink: "https://www.eci.gov.in"
  },
  {
    name: "Aam Aadmi Party",
    abbr: "AAP",
    founded: "2012",
    symbol: "Broom",
    ideology: "Anti-Corruption, Populism",
    color: "#0070C0",
    eciLink: "https://www.eci.gov.in"
  },
  {
    name: "Communist Party of India (Marxist)",
    abbr: "CPI(M)",
    founded: "1964",
    symbol: "Hammer, Sickle & Star",
    ideology: "Marxism-Leninism, Communism",
    color: "#CC0000",
    eciLink: "https://www.eci.gov.in"
  },
  {
    name: "Samajwadi Party",
    abbr: "SP",
    founded: "1992",
    symbol: "Bicycle",
    ideology: "Democratic Socialism, Secularism",
    color: "#FF0000",
    eciLink: "https://www.eci.gov.in"
  },
  {
    name: "Bahujan Samaj Party",
    abbr: "BSP",
    founded: "1984",
    symbol: "Elephant",
    ideology: "Social Justice, Ambedkarism",
    color: "#0000FF",
    eciLink: "https://www.eci.gov.in"
  },
];

const disclaimer = "⚠️ VoteSamajh is strictly non-partisan. This information is factual and sourced from public ECI records. We do not endorse, support, or oppose any political party.";

export default function PartiesPage() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4 uppercase tracking-widest border-b-4 border-foreground inline-block pb-2">
          Political Parties
        </h1>
        <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mt-4">
          A factual, non-partisan overview of major national parties recognized by the Election Commission of India.
        </p>
      </div>

      {/* Disclaimer banner */}
      <div className="border-4 border-foreground bg-primary/10 p-4 mb-12 text-center font-medium text-sm">
        {disclaimer}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto mb-16">
        <table className="w-full border-4 border-foreground" style={{ boxShadow: '8px 8px 0px var(--foreground)' }}>
          <thead>
            <tr className="bg-foreground text-background">
              <th className="p-4 text-left font-black uppercase tracking-widest text-sm border-r-2 border-background/20">Party</th>
              <th className="p-4 text-left font-black uppercase tracking-widest text-sm border-r-2 border-background/20">Founded</th>
              <th className="p-4 text-left font-black uppercase tracking-widest text-sm border-r-2 border-background/20">Symbol</th>
              <th className="p-4 text-left font-black uppercase tracking-widest text-sm">Ideology</th>
            </tr>
          </thead>
          <tbody>
            {parties.map((party, i) => (
              <motion.tr
                key={party.abbr}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-t-4 border-foreground hover:bg-primary/5 transition-colors group"
              >
                <td className="p-4 border-r-2 border-foreground/20">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-10 flex-shrink-0 border-2 border-foreground" style={{ backgroundColor: party.color }} />
                    <div>
                      <div className="font-black font-display text-lg">{party.abbr}</div>
                      <div className="text-sm font-medium text-foreground/60">{party.name}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-r-2 border-foreground/20 font-bold text-lg">{party.founded}</td>
                <td className="p-4 border-r-2 border-foreground/20 font-medium">{party.symbol}</td>
                <td className="p-4 font-medium text-foreground/80">{party.ideology}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* How to evaluate parties box */}
      <div className="bg-card border-4 border-foreground p-8" style={{ boxShadow: '8px 8px 0px var(--foreground)' }}>
        <h2 className="text-3xl font-black font-display uppercase tracking-widest mb-6 border-b-4 border-foreground pb-3">
          How to Evaluate Candidates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: '📜', tip: 'Read their manifesto', desc: 'Parties publish their official promises before elections. Look for concrete, measurable commitments.' },
            { icon: '📊', tip: 'Check track record', desc: 'Research what the party or candidate did when previously in power. Results matter more than promises.' },
            { icon: '💡', tip: 'Local candidate matters', desc: 'Your MP/MLA works for your constituency. Research their work in your area, not just national party policies.' },
            { icon: '🔍', tip: 'Verify through ADR', desc: 'Association for Democratic Reforms (adrindia.org) publishes criminal and financial records of all candidates.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start p-4 border-2 border-foreground bg-background">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-black font-display uppercase tracking-wide mb-1">{item.tip}</h3>
                <p className="font-medium text-foreground/70 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
