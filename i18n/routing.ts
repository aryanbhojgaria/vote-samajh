import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'hi', 'bn', 'te', 'ta', 'mr', 'kn', 'gu'] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: 'en'
});

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
