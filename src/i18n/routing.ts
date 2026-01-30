import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["sr", "en"],

  // Used when no locale matches
  defaultLocale: "sr",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/politika-privatnosti": {
      sr: "/politika-privatnosti",
      en: "/privacy-policy"
    }
  }
});