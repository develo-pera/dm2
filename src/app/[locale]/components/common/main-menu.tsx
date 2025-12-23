import { useTranslations } from "next-intl";
import Link from "next/link";

const MainMenu = () => {
  const t = useTranslations("Navigation");

  return (
    <div>
      <nav className="flex flex-col lg:flex-row gap-5 items-center">
        <Link href="/#sta-je-dm2">{t.rich("about", { sup: (chunks) => <sup>{chunks}</sup> })}</Link>
        <Link href="/#kako-radi-dm2">{t.rich("how-it-works", { sup: (chunks) => <sup>{chunks}</sup> })}</Link>
        <Link href="/#dm2-token">{t("token")}</Link>
        <Link href="/#kalkulator">{t("calculator")}</Link>
        <Link href="/#planirani-projekti">{t("projects")}</Link>
        <Link href="/#cesto-postavljana-pitanja">{t("faq")}</Link>
        {/* <Link href="/#o-nama">O nama</Link> */}
        <Link href="/#kontakt">{t("contact")}</Link>
      </nav>
    </div>
  );
};

export default MainMenu;