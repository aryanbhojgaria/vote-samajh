import Link from 'next/link';
import Image from 'next/image';
import { Phone, Globe, ExternalLink } from 'lucide-react';

export default function Footer() {
  const links = [
    { label: 'Basics', href: '/en/basics' },
    { label: 'How to Vote', href: '/en/how-to-vote' },
    { label: 'Timeline', href: '/en/timeline' },
    { label: 'Parliament', href: '/en/parliament' },
    { label: 'Myth vs Fact', href: '/en/myths' },
    { label: 'Parties', href: '/en/parties' },
    { label: 'Stats', href: '/en/stats' },
    { label: 'Calendar', href: '/en/calendar' },
    { label: 'Register', href: '/en/register' },
    { label: 'Find Your Vote', href: '/en/find-voter' },
    { label: 'Quiz', href: '/en/quiz' },
    { label: 'FAQ', href: '/en/faq' },
    { label: 'Resources', href: '/en/resources' },
  ];

  return (
    <footer className="border-t-4 border-foreground bg-card mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="VoteSamajh" width={40} height={40} className="object-contain" />
              <span className="font-display font-black text-2xl text-primary uppercase tracking-widest">
                VoteSamajh
              </span>
            </div>
            <p className="font-medium text-foreground/70 leading-relaxed">
              समझो अपना अधिकार — A non-partisan, educational platform dedicated to empowering every Indian voter.
            </p>
            <div className="mt-6 flex items-center gap-2 font-black text-lg">
              <Phone className="w-5 h-5 text-primary" />
              <span>Helpline: <a href="tel:1950" className="text-primary hover:underline">1950</a></span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-black text-lg uppercase tracking-widest border-b-4 border-foreground pb-2 mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {links.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="font-medium hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <h3 className="font-display font-black text-lg uppercase tracking-widest border-b-4 border-foreground pb-2 mb-4">
              Official Links
            </h3>
            <div className="flex flex-col gap-3">
              <a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-primary transition-colors">
                <Globe className="w-4 h-4" /> Election Commission of India <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://voters.eci.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-primary transition-colors">
                <Globe className="w-4 h-4" /> NVSP Voter Portal <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.voterIdHelplineApp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-primary transition-colors">
                <Globe className="w-4 h-4" /> Voter Helpline App <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 border-2 border-foreground/30 bg-background text-sm text-foreground/60 font-medium">
              ⚠️ This is an independent educational platform. Not affiliated with any political party or the Election Commission of India.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t-2 border-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tricolor stripe */}
          <div className="flex h-1 w-full md:w-32 rounded-full overflow-hidden">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white border-y border-foreground/10" />
            <div className="flex-1 bg-[#138808]" />
          </div>
          <p className="text-sm font-medium text-foreground/50 text-center">
            © 2026 VoteSamajh. Made with 🗳️ for India's voters.
          </p>
          <a href="https://github.com/aryanbhojgaria/vote-samajh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4" /> GitHub — Open Source
          </a>
        </div>
      </div>
    </footer>
  );
}
