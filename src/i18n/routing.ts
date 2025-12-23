import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["sr", "en"],

  // Used when no locale matches
  defaultLocale: "sr",
  localePrefix: "as-needed",
  // pathnames: {
  //   "/": {
  //     sr: "/",
  //     en: "/en"
  //   }
  // }
});