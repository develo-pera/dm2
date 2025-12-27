import { routing } from "./routing";

type LocaleIdMap = {
  sr: string;
  en: string;
}

type LocaleUrlMap = {
  sr: string;
  en: string;
}

export const localeIdAttribute = (locale: string, localeIdMap: LocaleIdMap) => {
  return localeIdMap[locale as keyof LocaleIdMap];
}

export const localeUrl = (locale: string, localeUrlMap: LocaleUrlMap) => {
  return localeUrlMap[locale as keyof LocaleUrlMap];
}