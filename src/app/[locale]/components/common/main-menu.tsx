import { localeUrl } from "@/i18n/helpers";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";

const localeUrlMap = {
  about: {
    sr: "/#sta-je-dm2",
    en: "/#about"
  },
  howItWorks: {
    sr: "/#kako-radi-dm2",
    en: "/#how-it-works"
  },
  token: {
    sr: "/#dm2-token",
    en: "/#dm2-token"
  },
  calculator: {
    sr: "/#kalkulator",
    en: "/#calculator"
  },
  projects: {
    sr: "/#planirani-projekti",
    en: "/#upcoming-projects"
  },
  faq: {
    sr: "/#cesto-postavljana-pitanja",
    en: "/#faq"
  },
  contact: {
    sr: "/#kontakt",
    en: "/#contact"
  }
}

const MainMenu = () => {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <div>
      <nav className="flex flex-col lg:flex-row gap-5 items-center">
        <Link href={localeUrl(locale, localeUrlMap.about)}>{t.rich("about", { sup: (chunks) => <sup>{chunks}</sup> })}</Link>
        <Link href={localeUrl(locale, localeUrlMap.howItWorks)}>{t.rich("how-it-works", { sup: (chunks) => <sup>{chunks}</sup> })}</Link>
        <Link href={localeUrl(locale, localeUrlMap.token)}>{t("token")}</Link>
        <Link href={localeUrl(locale, localeUrlMap.calculator)}>{t("calculator")}</Link>
        <Link href={localeUrl(locale, localeUrlMap.projects)}>{t("projects")}</Link>
        <Link href={localeUrl(locale, localeUrlMap.faq)}>{t("faq")}</Link>
        {/* <Link href="/#o-nama">O nama</Link> */}
        <Link href={localeUrl(locale, localeUrlMap.contact)}>{t("contact")}</Link>
      </nav>
    </div>
  );
};

export default MainMenu;