'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQPage() {
  const t = useTranslations('FAQPage');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [0, 1, 2, 3].map(idx => ({
    q: t(`faqs.${idx}.q`),
    a: t(`faqs.${idx}.a`)
  }));

  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4 uppercase tracking-widest border-b-4 border-foreground inline-block pb-2">
          {t('title')}
        </h1>
        <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mt-4">
          {t('subtitle')}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="bg-card border-4 border-foreground"
              style={{ boxShadow: isOpen ? '8px 8px 0px var(--color-primary)' : '8px 8px 0px var(--foreground)' }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-background transition-colors"
              >
                <h3 className="text-2xl font-bold font-display uppercase pr-8">
                  {faq.q}
                </h3>
                <ChevronDown 
                  className={`w-8 h-8 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t-2 border-dashed border-foreground/30 bg-background text-lg font-medium text-foreground/90">
                      <p className="mt-4">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </main>
  );
}
