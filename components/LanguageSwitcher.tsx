'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useState } from 'react';
import { Globe } from 'lucide-react';
import { locales } from '@/i18n/routing';

const languageNames = {
  en: 'English',
  hi: 'हिन्दी',
  bn: 'বাংলা',
  te: 'తెలుగు',
  ta: 'தமிழ்',
  mr: 'मराठी',
  kn: 'ಕನ್ನಡ',
  gu: 'ગુજરાતી',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-card hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Switch Language"
      >
        <Globe className="w-5 h-5 text-primary" />
        <span className="font-medium text-sm hidden sm:block">
          {languageNames[locale as keyof typeof languageNames] || 'Language'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-card rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 py-2 z-50">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                locale === l ? 'text-primary font-bold bg-slate-50 dark:bg-slate-800' : 'text-foreground'
              }`}
            >
              {languageNames[l as keyof typeof languageNames]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
