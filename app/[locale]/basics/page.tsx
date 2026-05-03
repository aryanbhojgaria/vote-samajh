import { useTranslations } from 'next-intl';
import StepCard from '@/components/StepCard';
import { Vote, Users, Landmark, MonitorSmartphone, Printer, Ban } from 'lucide-react';

export default function BasicsPage() {
  const t = useTranslations('BasicsPage');

  const steps = [
    {
      key: 'step1',
      icon: <Vote className="w-6 h-6" />
    },
    {
      key: 'step2',
      icon: <Users className="w-6 h-6" />
    },
    {
      key: 'step3',
      icon: <Landmark className="w-6 h-6" />
    },
    {
      key: 'step4',
      icon: <MonitorSmartphone className="w-6 h-6" />
    },
    {
      key: 'step5',
      icon: <Printer className="w-6 h-6" />
    },
    {
      key: 'step6',
      icon: <Ban className="w-6 h-6" />
    }
  ];

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-[3.5rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
        {steps.map((step, index) => (
          <div key={step.key} className="relative z-10 flex items-center justify-center">
            <div className="w-full">
              <StepCard
                stepNumber={index + 1}
                title={t(`steps.${step.key}.title`)}
                description={t(`steps.${step.key}.description`)}
                icon={step.icon}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
