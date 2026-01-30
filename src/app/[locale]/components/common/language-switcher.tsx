'use client';

import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname(); // This returns pathname without locale prefix
  const pathnameStr = pathname as string; // Cast to string to avoid type issues

  const handleValueChange = (newLocale: string) => {
    // usePathname() returns pathname without locale prefix, but we need to ensure
    // it doesn't start with a locale prefix (in case of edge cases)
    let cleanPathname = pathnameStr;

    // Remove any existing locale prefix if present
    if (cleanPathname.startsWith('/en/') || cleanPathname === '/en') {
      cleanPathname = cleanPathname.replace(/^\/en/, '') || '/';
    }
    if (cleanPathname.startsWith('/sr/') || cleanPathname === '/sr') {
      cleanPathname = cleanPathname.replace(/^\/sr/, '') || '/';
    }

    // Handle custom pathnames (e.g., /politika-privatnosti -> /privacy-policy)
    let targetPathname = cleanPathname;
    if (cleanPathname === '/politika-privatnosti' && newLocale === 'en') {
      targetPathname = '/privacy-policy';
    } else if (cleanPathname === '/privacy-policy' && newLocale === 'sr') {
      targetPathname = '/politika-privatnosti';
    }

    // For as-needed locale prefix:
    // - Default locale (sr) has no prefix: / or /some-path
    // - Non-default locale (en) has prefix: /en or /en/some-path
    let newPath: string;
    if (newLocale === routing.defaultLocale) {
      // Switching to default locale - no prefix needed
      newPath = targetPathname;
    } else {
      // Switching to non-default locale - add prefix
      newPath = `/${newLocale}${targetPathname}`;
    }

    // Use window.location for navigation
    window.location.href = newPath;
  };

  return (
    <Select value={locale} onValueChange={handleValueChange}>
      <SelectTrigger className="rounded-xs px-5 !py-3 !h-[100%] !bg-zinc-100 border-zinc-100">
        <SelectValue placeholder={locale === 'sr' ? 'SRB' : 'ENG'} className="text-sm" />
      </SelectTrigger>
      <SelectContent className="rounded-xs">
        <SelectItem value="sr" className="rounded-xs">SRB</SelectItem>
        <SelectItem value="en" className="rounded-xs">ENG</SelectItem>
      </SelectContent>
    </Select>
  );
}