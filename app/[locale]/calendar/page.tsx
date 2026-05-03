'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const elections = [
  {
    state: "Bihar",
    type: "Vidhan Sabha",
    scheduled: "Late 2025",
    seats: 243,
    status: "upcoming",
    color: "#FF9933"
  },
  {
    state: "West Bengal",
    type: "Vidhan Sabha",
    scheduled: "April–May 2026",
    seats: 294,
    status: "upcoming",
    color: "#138808"
  },
  {
    state: "Tamil Nadu",
    type: "Vidhan Sabha",
    scheduled: "April–May 2026",
    seats: 234,
    status: "upcoming",
    color: "#2e3072"
  },
  {
    state: "Kerala",
    type: "Vidhan Sabha",
    scheduled: "April–May 2026",
    seats: 140,
    status: "upcoming",
    color: "#FF9933"
  },
  {
    state: "Assam",
    type: "Vidhan Sabha",
    scheduled: "April–May 2026",
    seats: 126,
    status: "upcoming",
    color: "#138808"
  },
  {
    state: "Delhi",
    type: "Vidhan Sabha",
    scheduled: "February 2025",
    seats: 70,
    status: "completed",
    color: "#2e3072"
  },
  {
    state: "Bihar",
    type: "Lok Sabha By-polls",
    scheduled: "As required",
    seats: "TBD",
    status: "tbd",
    color: "#FF9933"
  },
];

const importantDates = [
  { label: "Last date to register as new voter", date: "~4 weeks before election", icon: "📝" },
  { label: "Last date to update voter details", date: "~4 weeks before election", icon: "✏️" },
  { label: "Model Code of Conduct begins", date: "Day of schedule announcement", icon: "📋" },
  { label: "Campaign silence period begins", date: "48 hours before polling", icon: "🔇" },
  { label: "Polling Day", date: "Varies by constituency", icon: "🗳️" },
  { label: "Result Declaration", date: "Counting Day", icon: "📊" },
];

export default function CalendarPage() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4 uppercase tracking-widest border-b-4 border-foreground inline-block pb-2">
          Election Calendar
        </h1>
        <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mt-4">
          Upcoming state elections and important election dates across India.
        </p>
      </div>

      {/* Status Legend */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { label: "Upcoming", dot: "bg-primary" },
          { label: "Completed", dot: "bg-[#138808]" },
          { label: "To Be Announced", dot: "bg-foreground/30" },
        ].map(s => (
          <div key={s.label} className="flex items-center gap-2 border-2 border-foreground px-3 py-1 font-bold text-sm">
            <span className={`w-3 h-3 ${s.dot} border border-foreground`} />
            {s.label}
          </div>
        ))}
      </div>

      {/* Elections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {elections.map((el, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`bg-card border-4 border-foreground p-6 hover:-translate-y-1 transition-transform ${el.status === 'completed' ? 'opacity-60' : ''}`}
            style={{ boxShadow: `6px 6px 0px ${el.color}` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-black font-display uppercase">{el.state}</h3>
                <p className="text-sm font-bold text-foreground/60 uppercase tracking-widest">{el.type}</p>
              </div>
              <div className={`px-3 py-1 text-xs font-black uppercase tracking-widest border-2 border-foreground
                ${el.status === 'upcoming' ? 'bg-primary text-primary-foreground' :
                  el.status === 'completed' ? 'bg-[#138808] text-white' : 'bg-foreground/20'}`}>
                {el.status === 'upcoming' ? 'Upcoming' : el.status === 'completed' ? 'Done' : 'TBA'}
              </div>
            </div>
            <div className="flex gap-4 text-sm font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-primary" /> {el.scheduled}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-primary" /> {el.seats} Seats
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Dates Timeline */}
      <h2 className="text-3xl font-black font-display uppercase tracking-widest border-b-4 border-foreground pb-2 mb-8">
        Key Dates in Any Election
      </h2>
      <div className="bg-card border-4 border-foreground p-8" style={{ boxShadow: '8px 8px 0px var(--foreground)' }}>
        <div className="flex flex-col gap-0">
          {importantDates.map((d, i) => (
            <div key={i} className="flex gap-4 relative">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-primary border-4 border-foreground flex items-center justify-center text-lg flex-shrink-0 z-10">
                  {d.icon}
                </div>
                {i < importantDates.length - 1 && (
                  <div className="w-1 flex-1 bg-foreground/20 min-h-[2rem]" />
                )}
              </div>
              <div className="pb-6 pt-1">
                <h3 className="font-black uppercase tracking-wide">{d.label}</h3>
                <p className="text-sm font-medium text-foreground/60 flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3" /> {d.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
