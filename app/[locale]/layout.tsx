import type { Metadata } from "next";
import { Noto_Sans, Baloo_2 } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import IndiaMap from '@/components/IndiaMap';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';
import "../globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin", "devanagari"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
});

const baloo2 = Baloo_2({
  subsets: ["latin", "devanagari"],
  variable: "--font-baloo-2",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VoteSamajh | Samajho Apna Adhikar",
  description: "Educational website about the Indian election process.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${notoSans.variable} ${baloo2.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {/* Fixed global backgrounds */}
            <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-[#FF9933]/5 via-transparent to-[#138808]/5 dark:from-[#FF9933]/10 dark:to-[#138808]/10" />
            <IndiaMap />
            <ScrollProgress />
            {/* App content */}
            <Navbar />
            <div className="flex-1 flex flex-col relative z-0">
              {children}
            </div>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
