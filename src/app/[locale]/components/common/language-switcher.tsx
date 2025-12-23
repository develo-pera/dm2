'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const currentPathname = usePathname();

  const handleValueChange = (value: string) => {
    const newLocale = value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      locale === routing.defaultLocale &&
      routing.localePrefix !== 'as-needed'
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${locale}`, `/${newLocale}`)
      );
    }

    router.refresh();
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