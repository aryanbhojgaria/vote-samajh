'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Box, Contact, CheckSquare, ChevronRight, Users, Landmark } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import IndiaMap from './IndiaMap';

export default function HeroSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20 px-4">
      <AnimatedBackground />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] md:left-[20%] text-accent z-0"
      >
        <Box className="w-16 h-16 opacity-80" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[10%] md:right-[20%] text-primary z-0"
      >
        <Contact className="w-20 h-20 opacity-80" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-[15%] md:right-[25%] text-accent z-0"
      >
        <CheckSquare className="w-12 h-12 opacity-60" />
      </motion.div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-8 border border-primary/20 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {t('tagline')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground"
        >
          {t('welcome')} <span className="text-primary block mt-2">{t('title')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl font-medium"
        >
          Understand your voting rights in simple, easy-to-understand language. No legal jargon.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center"
        >
          <div className="flex items-center gap-3 bg-card p-4 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex-1 max-w-xs justify-center transform transition-transform hover:scale-105">
            <div className="bg-primary/20 p-3 rounded-full">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Total Voters</p>
              <p className="font-display text-xl font-bold text-foreground">{t('stats.voters')}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-card p-4 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex-1 max-w-xs justify-center transform transition-transform hover:scale-105">
            <div className="bg-accent/20 p-3 rounded-full">
              <Landmark className="w-6 h-6 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Parliament</p>
              <p className="font-display text-xl font-bold text-foreground">{t('stats.seats')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/basics"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            {t('startLearning')}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
