import { useTranslations } from 'next-intl';
import { CheckSquare, ExternalLink } from 'lucide-react';

export default function RegisterPage() {
  const t = useTranslations('RegisterPage');

  const steps = [
    t('steps.step1'),
    t('steps.step2'),
    t('steps.step3'),
    t('steps.step4'),
    t('steps.step5')
  ];

  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4 uppercase tracking-widest border-b-4 border-foreground inline-block pb-2">
          {t('title')}
        </h1>
        <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mt-6">
          {t('subtitle')}
        </p>
      </div>

      <div className="bg-card border-4 border-foreground p-8 relative" style={{ boxShadow: '8px 8px 0px var(--foreground)' }}>
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '12px 12px'
          }}
        />
        
        <div className="relative z-10 flex flex-col gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border-2 border-foreground bg-background hover:-translate-y-1 transition-transform">
              <CheckSquare className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold font-display uppercase tracking-wide">
                  Step {index + 1}
                </h3>
                <p className="text-lg text-foreground/80 font-medium">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center relative z-10">
          <a 
            href="https://voters.eci.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-black text-xl uppercase tracking-widest px-8 py-4 border-4 border-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            {t('visitPortal')} <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
    </main>
  );
}
