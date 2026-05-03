'use client';

import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const learnLinks = [
  { href: '/basics', label: '📚 Election Basics' },
  { href: '/how-to-vote', label: '🗳️ How to Vote' },
  { href: '/timeline', label: '📅 Election Timeline' },
  { href: '/myths', label: '💡 Myth vs Fact' },
  { href: '/parties', label: '🏛️ Political Parties' },
];

const actionLinks = [
  { href: '/register', label: '✅ Register to Vote' },
  { href: '/find-voter', label: '🔍 Find Your Vote' },
  { href: '/quiz', label: '🧠 Take a Quiz' },
];

const infoLinks = [
  { href: '/faq', label: '❓ FAQ' },
  { href: '/resources', label: '🔗 Resources' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-foreground bg-background" onMouseLeave={() => { setLearnOpen(false); setActionOpen(false); }}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/logo.png" alt="VoteSamajh Logo" width={32} height={32} className="object-contain" />
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-primary">
            VoteSamajh
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {/* Learn Dropdown */}
          <div className="relative" onMouseEnter={() => { setLearnOpen(true); setActionOpen(false); }}>
            <button className="flex items-center gap-1 font-black uppercase tracking-wide px-3 py-2 hover:text-primary transition-colors text-sm lg:text-base">
              Learn <ChevronDown className={`w-4 h-4 transition-transform ${learnOpen ? 'rotate-180' : ''}`} />
            </button>
            {learnOpen && (
              <div className="absolute top-full left-0 mt-0 border-4 border-foreground bg-background shadow-[6px_6px_0px_var(--foreground)] min-w-[220px] z-50">
                {learnLinks.map(link => (
                  <Link key={link.href} href={link.href}
                    className="flex items-center gap-2 px-4 py-3 font-bold hover:bg-primary hover:text-primary-foreground transition-colors border-b-2 border-foreground/10 last:border-0"
                    onClick={() => setLearnOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Action Dropdown */}
          <div className="relative" onMouseEnter={() => { setActionOpen(true); setLearnOpen(false); }}>
            <button className="flex items-center gap-1 font-black uppercase tracking-wide px-3 py-2 hover:text-primary transition-colors text-sm lg:text-base">
              Act <ChevronDown className={`w-4 h-4 transition-transform ${actionOpen ? 'rotate-180' : ''}`} />
            </button>
            {actionOpen && (
              <div className="absolute top-full left-0 mt-0 border-4 border-foreground bg-background shadow-[6px_6px_0px_var(--foreground)] min-w-[220px] z-50">
                {actionLinks.map(link => (
                  <Link key={link.href} href={link.href}
                    className="flex items-center gap-2 px-4 py-3 font-bold hover:bg-primary hover:text-primary-foreground transition-colors border-b-2 border-foreground/10 last:border-0"
                    onClick={() => setActionOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {infoLinks.map(link => (
            <Link key={link.href} href={link.href} className="font-black uppercase tracking-wide px-3 py-2 hover:text-primary transition-colors text-sm lg:text-base">
              {link.label.replace(/^[^\s]+\s/, '')}
            </Link>
          ))}

          <div className="flex items-center gap-2 ml-2 border-l-4 border-foreground pl-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button className="p-2 -mr-2 text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b-4 border-foreground shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          <div className="p-3 border-b-2 border-foreground/20">
            <p className="font-black uppercase text-xs tracking-widest text-foreground/40 px-3 py-1">Learn</p>
            {learnLinks.map(link => (
              <Link key={link.href} href={link.href}
                className="block font-bold py-3 px-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
            ))}
          </div>
          <div className="p-3 border-b-2 border-foreground/20">
            <p className="font-black uppercase text-xs tracking-widest text-foreground/40 px-3 py-1">Act</p>
            {actionLinks.map(link => (
              <Link key={link.href} href={link.href}
                className="block font-bold py-3 px-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
            ))}
          </div>
          <div className="p-3">
            {infoLinks.map(link => (
              <Link key={link.href} href={link.href}
                className="block font-bold py-3 px-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
