import { useTranslations } from 'next-intl';
import { Phone, Globe, ExternalLink, ShieldAlert } from 'lucide-react';
import WhatsAppShare from '@/components/WhatsAppShare';

export default function ResourcesPage() {
  const t = useTranslations('ResourcesPage');

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Helpline Card */}
        <div className="bg-primary text-primary-foreground border-4 border-foreground p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_var(--foreground)]">
          <Phone className="w-16 h-16 mb-6" />
          <h2 className="text-2xl font-bold font-display uppercase tracking-wide mb-2">
            {t('helpline')}
          </h2>
          <a href={`tel:${t('helplineNumber')}`} className="text-5xl font-black tracking-widest hover:underline decoration-4 underline-offset-8 mt-4">
            {t('helplineNumber')}
          </a>
        </div>

        {/* ECI Website Card */}
        <a 
          href="https://eci.gov.in/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-card border-4 border-foreground p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_var(--foreground)] group"
        >
          <Globe className="w-16 h-16 mb-6 text-accent group-hover:text-primary transition-colors" />
          <h2 className="text-2xl font-bold font-display uppercase tracking-wide mb-4">
            {t('eci')}
          </h2>
          <span className="inline-flex items-center gap-2 font-black uppercase text-accent group-hover:text-primary tracking-widest mt-auto">
            Visit Site <ExternalLink className="w-5 h-5" />
          </span>
        </a>

        {/* Voter Portal Card */}
        <a 
          href="https://voters.eci.gov.in/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground border-4 border-foreground p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_var(--foreground)] md:col-span-2 group"
        >
          <ShieldAlert className="w-16 h-16 mb-6" />
          <h2 className="text-2xl font-bold font-display uppercase tracking-wide mb-4">
            {t('voterPortal')}
          </h2>
          <p className="text-lg font-medium mb-6 max-w-xl">
            Register as a new voter, download your e-EPIC, search your name in the electoral roll, and know your polling booth.
          </p>
          <span className="inline-flex items-center gap-2 font-black uppercase tracking-widest mt-auto border-2 border-accent-foreground px-6 py-2 group-hover:bg-accent-foreground group-hover:text-accent transition-colors">
            Access Portal <ExternalLink className="w-5 h-5" />
          </span>
        </a>
      </div>
      <WhatsAppShare />
    </main>
  );
}
