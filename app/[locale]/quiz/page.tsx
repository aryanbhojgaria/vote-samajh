'use client';

import { useTranslations, useMessages } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  q: string;
  options: string[];
  answer: number;
}

export default function QuizPage() {
  const t = useTranslations('QuizPage');
  const messages = useMessages();

  // Safely access array data via raw messages
  const rawQuestions = (messages as any)?.QuizPage?.questions as Question[] ?? [];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (selectedIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent double-click
    const correct = selectedIndex === rawQuestions[currentQ].answer;
    setSelectedAnswer(selectedIndex);
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      if (currentQ + 1 < rawQuestions.length) {
        setCurrentQ(q => q + 1);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setStarted(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const getButtonClass = (i: number) => {
    if (selectedAnswer === null) {
      return 'text-left bg-background border-4 border-foreground p-4 text-xl font-medium hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground transition-all shadow-[4px_4px_0px_var(--foreground)]';
    }
    if (i === rawQuestions[currentQ].answer) {
      return 'text-left bg-[#138808] text-white border-4 border-foreground p-4 text-xl font-medium shadow-[4px_4px_0px_var(--foreground)]';
    }
    if (i === selectedAnswer) {
      return 'text-left bg-red-500 text-white border-4 border-foreground p-4 text-xl font-medium shadow-[4px_4px_0px_var(--foreground)]';
    }
    return 'text-left bg-background border-4 border-foreground p-4 text-xl font-medium opacity-50 shadow-[4px_4px_0px_var(--foreground)]';
  };

  if (rawQuestions.length === 0) {
    return (
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-xl text-foreground/60">Loading quiz...</p>
      </main>
    );
  }

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
              <p className="text-6xl mb-8">🗳️</p>
              <button
                onClick={() => setStarted(true)}
                className="bg-primary text-primary-foreground font-black text-2xl uppercase tracking-widest px-12 py-6 border-4 border-foreground hover:-translate-y-2 hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_var(--foreground)]"
              >
                {t('startQuiz')}
              </button>
            </div>
          ) : showResult ? (
            <div className="text-center">
              <p className="text-6xl mb-4">{score >= 4 ? '🏆' : score >= 2 ? '👍' : '📚'}</p>
              <h2 className="text-3xl font-black font-display uppercase tracking-widest mb-6">
                {t('results')}
              </h2>
              <div className="text-7xl font-black text-primary mb-8 border-4 border-foreground inline-block px-10 py-4 bg-background transform -rotate-2">
                {score}/{rawQuestions.length}
              </div>
              <div className="mt-4">
                <button
                  onClick={restart}
                  className="bg-primary text-primary-foreground font-black text-xl uppercase tracking-widest px-8 py-4 border-4 border-foreground hover:-translate-y-1 hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_var(--foreground)]"
                >
                  {t('retry')}
                </button>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                {/* Progress */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-black text-primary text-lg border-2 border-foreground px-3 py-1 bg-background">
                    {currentQ + 1}/{rawQuestions.length}
                  </span>
                  <div className="flex-1 h-3 bg-background border-2 border-foreground">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${((currentQ) / rawQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-display leading-tight mb-8">
                  {rawQuestions[currentQ].q}
                </h3>

                <div className="flex flex-col gap-4">
                  {rawQuestions[currentQ].options.map((opt: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className={getButtonClass(i)}
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
