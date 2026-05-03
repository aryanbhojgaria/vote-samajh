'use client';

import { MessageCircle } from 'lucide-react';

interface WhatsAppShareProps {
  text?: string;
  compact?: boolean;
}

export default function WhatsAppShare({ text, compact = false }: WhatsAppShareProps) {
  const shareText = text ?? "🗳️ Learn about your voting rights on VoteSamajh — India's free election education platform! समझो अपना अधिकार 🇮🇳\n\nhttps://vote-samajh.vercel.app";
  const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  if (compact) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-[#25D366] text-white font-black text-sm uppercase tracking-wide hover:-translate-y-1 transition-transform shadow-[3px_3px_0px_var(--foreground)]"
        title="Share on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        Share
      </a>
    );
  }

  return (
    <div className="border-4 border-foreground bg-[#25D366]/10 p-4 flex items-center justify-between gap-4 my-8">
      <div>
        <p className="font-black uppercase tracking-wide text-sm">Know someone who should learn about their voting rights?</p>
        <p className="text-sm font-medium text-foreground/70 mt-1">Share VoteSamajh on WhatsApp</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 flex items-center gap-2 px-6 py-3 border-4 border-foreground bg-[#25D366] text-white font-black uppercase tracking-widest hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_var(--foreground)]"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
}
