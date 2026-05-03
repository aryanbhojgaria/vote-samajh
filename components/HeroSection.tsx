'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ChevronRight, Users, Landmark, BookOpen, Search, Brain, Calendar } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { useState, useEffect } from 'react';

const facts = [
  "India has the world's largest electorate — over 97 crore registered voters.",
  "The first General Election in India was held in 1951–52 and took 4 months to complete.",
  "India uses around 55 lakh EVMs during a General Election.",
  "Voting is done on paper in just one Indian state — Sikkim still uses paper ballots for some polls.",
  "The Indelible ink used on voter's fingers is made in Mysuru, Karnataka.",
  "India has over 10.5 lakh polling stations across the country.",
  "A candidate needs to deposit ₹25,000 for Lok Sabha and ₹10,000 for Vidhan Sabha elections.",
];

const quickNav = [
  { href: '/how-to-vote', icon: <BookOpen className="w-5 h-5" />, label: 'How to Vote' },
  { href: '/find-voter', icon: <Search className="w-5 h-5" />, label: 'Find Your Vote' },
  { href: '/quiz', icon: <Brain className="w-5 h-5" />, label: 'Take Quiz' },
  { href: '/timeline', icon: <Calendar className="w-5 h-5" />, label: 'Timeline' },
];

export default function HeroSection() {
  const t = useTranslations('HomePage');
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFactIndex(i => (i + 1) % facts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20 px-4">
        <AnimatedBackground />

        {/* Main Content */}
        <div className="z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
          {/* Tagline badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm border-4 border-foreground mb-8"
            style={{ boxShadow: '4px 4px 0px var(--foreground)' }}
          >
            <span className="w-2 h-2 bg-primary-foreground animate-pulse rounded-full" />
            {t('tagline')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-black tracking-tight mb-6 text-foreground uppercase leading-none"
          >
            {t('welcome')}<br />
            <span className="text-primary">{t('title')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl font-medium"
          >
            Understand your voting rights in simple, easy-to-understand language. No legal jargon.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center"
          >
            {[
              { icon: <Users className="w-6 h-6" />, label: 'Total Voters', value: t('stats.voters'), color: '#FF9933' },
              { icon: <Landmark className="w-6 h-6" />, label: 'Parliament', value: t('stats.seats'), color: '#138808' },
              { icon: <BookOpen className="w-6 h-6" />, label: 'Languages', value: '8 Indian Languages', color: '#2e3072' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border-4 border-foreground p-4 flex-1 max-w-xs hover:-translate-y-1 transition-transform"
                style={{ boxShadow: `4px 4px 0px ${stat.color}` }}>
                <div className="p-2 border-2 border-foreground" style={{ background: stat.color + '20' }}>
                  {stat.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs font-black uppercase tracking-widest text-foreground/50">{stat.label}</p>
                  <p className="font-display text-lg font-black text-foreground">{stat.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link href="/basics"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-black text-lg uppercase tracking-widest px-8 py-4 border-4 border-foreground hover:-translate-y-1 hover:bg-foreground hover:text-background transition-all"
              style={{ boxShadow: '4px 4px 0px var(--foreground)' }}>
              {t('startLearning')} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/find-voter"
              className="group inline-flex items-center gap-2 bg-background text-foreground font-black text-lg uppercase tracking-widest px-8 py-4 border-4 border-foreground hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground transition-all"
              style={{ boxShadow: '4px 4px 0px var(--foreground)' }}>
              <Search className="w-5 h-5" /> Find Your Vote
            </Link>
          </motion.div>

          {/* Quick Nav Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full"
          >
            {quickNav.map((nav, i) => (
              <Link key={nav.href} href={nav.href}
                className="flex flex-col items-center gap-2 bg-card border-2 border-foreground p-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-bold uppercase text-sm tracking-wide">
                {nav.icon}
                {nav.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Did You Know Ticker */}
      <div className="border-y-4 border-foreground bg-primary text-primary-foreground py-4 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex items-center gap-6">
          <span className="font-black uppercase tracking-widest text-sm flex-shrink-0 border-2 border-primary-foreground px-3 py-1">
            Did You Know?
          </span>
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={factIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="font-medium text-base"
              >
                {facts[factIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
