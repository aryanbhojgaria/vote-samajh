'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('HomePage');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/basics', label: 'Basics' },
    { href: '/how-to-vote', label: 'How to Vote' },
    { href: '/register', label: 'Register' },
    { href: '/quiz', label: 'Quiz' },
    { href: '/faq', label: 'FAQ' },
    { href: '/resources', label: 'Resources' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-foreground bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="VoteSamajh Logo" width={32} height={32} className="object-contain" />
          <span className="font-display font-bold text-2xl tracking-tight text-primary">
            VoteSamajh
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-bold uppercase tracking-wide hover:text-primary transition-colors text-sm lg:text-base">
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-2 lg:ml-4 border-l-4 border-foreground pl-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button 
            className="p-2 -mr-2 text-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b-4 border-foreground shadow-lg py-4 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="font-bold uppercase tracking-wide py-3 px-4 hover:bg-primary hover:text-primary-foreground border-2 border-transparent hover:border-foreground transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
