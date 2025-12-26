import { LucideBuilding2, LucidePercent, LucideReceiptEuro } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("Home")

  return (
    <div id="sta-je-dm2" className="max-w-7xl mx-auto p-5 py-20">
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 lg:col-span-1">
          <h2 className="text-4xl font-bold mb-7">{t.rich("about.title", { sup: (chunks) => <sup>{chunks}</sup> })}</h2>
          <p className="mb-3">
            {t.rich("about.paragraph-1", { sup: (chunks) => <sup>{chunks}</sup> })}
          </p>
          <p className="mb-3">
            {t("about.paragraph-2")}
          </p>
          <p className="mb-3">
            {t.rich("about.paragraph-3", {
              prypco: (chunks) => <a href="https://mint.prypco.com/" target="_blank" rel="noopener noreferrer" className="underline">{chunks}</a>,
              parcl: (chunks) => <a href="https://www.parcl.co/" target="_blank" rel="noopener noreferrer" className="underline">{chunks}</a>,
              japan: (chunks) => <a href="https://cointelegraph.com/news/gates-oasys-tokenize-tokyo-real-estate-global-expansion" target="_blank" rel="noopener noreferrer" className="underline">{chunks}</a>,
              sup: (chunks) => <sup>{chunks}</sup>
            })}
          </p>
          <p className="mb-3">
            {t("about.paragraph-4")}
          </p>
          <p className="text-2xl mt-15 mb-5 font-bold">{t.rich("about.h2", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
        </div>
        <div className="lg:block hidden bg-[#FEE600] p-5 md:p-10 rounded-xs" />
      </div>

      <div className="grid sm:grid-rows-[1fr_1fr] md:grid-rows-1 md:grid-cols-2 gap-5 mt-5">
        <div className="bg-zinc-100 p-5 md:p-10 rounded-xs flex flex-col gap-5">
          <p className="font-bold text-lg uppercase mb-3">{t("about.section-1-title")}</p>
          <p>
            {t.rich("about.section-1-p-1", { sup: (chunks) => <sup>{chunks}</sup> })}
          </p>
          <p>
            {t("about.section-1-p-2")}
          </p>
        </div>
        <div className="bg-[#242424] text-white p-5 md:p-10 rounded-xs flex flex-col gap-5">
          <p className="font-bold text-lg uppercase mb-3"> {t("about.section-2-title")}</p>
          <p>
            {t("about.section-2-p-1")}
          </p>
          <p>
            {t("about.section-2-p-2")}
          </p>
          <div className="grid grid-cols-[20px_1fr] items-center gap-y-3 gap-x-5">
            <LucideBuilding2 className="!w-5 !h-5 stroke-[#FEE600]" />
            <p className="leading-tight">{t("about.section-2-point-1")}</p>

            <LucidePercent className="!w-5 !h-5 stroke-[#FEE600]" />
            <p className="leading-tight">{t("about.section-2-point-2")}</p>

            <LucideReceiptEuro className="!w-5 !h-5 stroke-[#FEE600]" />
            <p className="leading-tight">{t("about.section-2-point-3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;