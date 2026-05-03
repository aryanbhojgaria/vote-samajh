'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StepCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  stepNumber: number;
}

export default function StepCard({ title, description, icon, stepNumber }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: stepNumber * 0.1 }}
      className="bg-card border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          {icon ? icon : stepNumber}
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 font-display">{title}</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
