'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, Droplet, Hand, FileCheck, PartyPopper } from 'lucide-react';
import Image from 'next/image';

export default function HowToVotePage() {
  const t = useTranslations('HowToVotePage');

  const steps = [
    {
      id: 'step1',
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: 'bg-amber-500',
    },
    {
      id: 'step2',
      icon: <UserCheck className="w-8 h-8" />,
      color: 'bg-emerald-500',
    },
    {
      id: 'step3',
      icon: <Droplet className="w-8 h-8" />,
      color: 'bg-blue-500',
    },
    {
      id: 'step4',
      icon: <Hand className="w-8 h-8" />,
      color: 'bg-purple-500',
    },
    {
      id: 'step5',
      icon: <FileCheck className="w-8 h-8" />,
      color: 'bg-rose-500',
    },
    {
      id: 'step6',
      icon: <PartyPopper className="w-8 h-8" />,
      color: 'bg-green-500',
    }
  ];

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* Comic Strip Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-card border-4 border-foreground p-6 hover:-translate-y-2 transition-transform duration-300"
            style={{
              boxShadow: '8px 8px 0px var(--foreground)'
            }}
          >
            {/* Retro dots pattern background */}
            <div 
              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '12px 12px'
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6 border-b-4 border-foreground pb-4">
                <div className={`w-16 h-16 ${step.color} border-4 border-foreground text-foreground flex items-center justify-center transform -rotate-3`}>
                  {step.icon}
                </div>
                <div className="text-6xl font-display font-black text-foreground opacity-20 group-hover:opacity-100 transition-opacity select-none">
                  #{index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-bold font-display text-foreground mb-3 uppercase tracking-wide">
                {t(`steps.${step.id}.title`)}
              </h3>
              
              <p className="text-foreground/80 font-medium text-lg leading-relaxed mb-6 flex-grow">
                {t(`steps.${step.id}.description`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
