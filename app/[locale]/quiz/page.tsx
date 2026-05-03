'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuizPage() {
  const t = useTranslations('QuizPage');
  
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);

  // We have to extract the questions array properly
  const questions = [0, 1, 2, 3, 4].map(idx => ({
    q: t(`questions.${idx}.q`),
    options: [
      t(`questions.${idx}.options.0`),
      t(`questions.${idx}.options.1`),
      t(`questions.${idx}.options.2`),
      t(`questions.${idx}.options.3`)
    ],
    answer: parseInt(t(`questions.${idx}.answer`))
  }));

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQ].answer) {
      setScore(score + 1);
    }
    
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4 uppercase tracking-widest border-b-4 border-foreground inline-block pb-2">
          {t('title')}
        </h1>
        <p className="text-xl text-foreground/80 font-medium mt-4">
          {t('subtitle')}
        </p>
      </div>

      <div className="bg-card border-4 border-foreground p-8 min-h-[400px] flex flex-col justify-center items-center relative overflow-hidden" style={{ boxShadow: '8px 8px 0px var(--foreground)' }}>
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '12px 12px'
          }}
        />

        <div className="relative z-10 w-full">
          {!started ? (
            <div className="text-center">
              <button 
                onClick={() => setStarted(true)}
                className="bg-primary text-primary-foreground font-black text-2xl uppercase tracking-widest px-12 py-6 border-4 border-foreground hover:-translate-y-2 hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_var(--foreground)]"
              >
                {t('startQuiz')}
              </button>
            </div>
          ) : showResult ? (
            <div className="text-center animate-in fade-in zoom-in duration-500">
              <h2 className="text-4xl font-black font-display uppercase tracking-widest mb-6">
                {t('results')}
              </h2>
              <div className="text-8xl font-black text-primary mb-8 border-4 border-foreground inline-block px-12 py-6 bg-background transform -rotate-3">
                {score}/{questions.length}
              </div>
              <div>
                <button 
                  onClick={restart}
                  className="bg-accent text-accent-foreground font-black text-xl uppercase tracking-widest px-8 py-4 border-4 border-foreground hover:-translate-y-1 hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_var(--foreground)]"
                >
                  {t('retry')}
                </button>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentQ}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <div className="mb-8">
                  <span className="font-black text-primary text-xl border-2 border-foreground px-3 py-1 bg-background mr-4">
                    Q{currentQ + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-display leading-tight inline">
                    {questions[currentQ].q}
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {questions[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className="text-left bg-background border-4 border-foreground p-4 text-xl font-medium hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground transition-all shadow-[4px_4px_0px_var(--foreground)]"
                    >
                      <span className="font-black mr-4 uppercase">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </main>
  );
}
