import { useTranslations } from "next-intl";

const HowItWorks = () => {
  const t = useTranslations("Home");

  return (
    <div id="kako-radi-dm2" className="max-w-7xl mx-auto p-5 py-20">
      <h2 className="text-4xl font-bold mb-7">{t.rich("how-it-works.title", { sup: (chunks) => <sup>{chunks}</sup> })}</h2>
      <p>
        {t.rich("how-it-works.description-p-1", { sup: (chunks) => <sup>{chunks}</sup> })}
      </p>
      <p>
        {t("how-it-works.description-p-2")}
      </p>

      <div>
        <p className="text-2xl mt-15 font-bold">{t("how-it-works.we-take-care-title")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mt-7">
          <div className="bg-[#242424] text-white p-7 md:p-10 rounded-xs">
            <p className="text-xl font-bold mb-3">{t("how-it-works.we-take-care-card-1-title")}</p>
            <p>{t("how-it-works.we-take-care-card-1-text")}</p>
          </div>
          <div className="bg-[#242424] text-white p-7 md:p-10 rounded-xs">
            <p className="text-xl font-bold mb-3">{t("how-it-works.we-take-care-card-2-title")}</p>
            <p>{t("how-it-works.we-take-care-card-2-text")}</p>
          </div>
          <div className="bg-[#242424] text-white p-7 md:p-10 rounded-xs">
            <p className="text-xl font-bold mb-3">{t("how-it-works.we-take-care-card-3-title")}</p>
            <p>{t("how-it-works.we-take-care-card-3-text")}</p>
          </div>
          <div className="bg-[#242424] text-white p-7 md:p-10 rounded-xs">
            <p className="text-xl font-bold mb-3">{t("how-it-works.we-take-care-card-4-title")}</p>
            <p>{t("how-it-works.we-take-care-card-4-text")}</p>
          </div>
          <div className="bg-[#242424] text-white p-7 md:p-10 rounded-xs">
            <p className="text-xl font-bold mb-3">{t("how-it-works.we-take-care-card-5-title")}</p>
            <p>{t("how-it-works.we-take-care-card-5-text")}</p>
          </div>
          <div className="bg-[#242424] text-white p-7 md:p-10 rounded-xs">
            <p className="text-xl font-bold mb-3">{t("how-it-works.we-take-care-card-6-title")}</p>
            <p>{t("how-it-works.we-take-care-card-6-text")}</p>
          </div>
        </div>

      </div>

      <div>
        <p className="text-2xl mt-15 font-bold">{t("how-it-works.process-title")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-7">
          <div className="bg-zinc-100 p-7 md:p-10 rounded-xs md:border-t-3 md:border-[#242424] lg:border-t-3 lg:border-[#FEE600]">
            <p className="font-bold">{t("how-it-works.process-step-1")}</p>
            <p className="text-xl font-bold mb-3 md:mb-7">{t("how-it-works.process-card-1-title")}</p>
            <p className="text-sm">{t.rich("how-it-works.process-card-1-text", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
          </div>
          <div className="bg-zinc-200 p-7 md:p-10 rounded-xs md:border-t-3 md:border-[#FEE600] lg:border-t-3 lg:border-[#242424]">
            <p className="font-bold">{t("how-it-works.process-step-2")}</p>
            <p className="text-xl font-bold mb-3 md:mb-7">{t("how-it-works.process-card-2-title")}</p>
            <p className="text-sm">{t("how-it-works.process-card-2-text")}</p>
          </div>

          <div className="bg-zinc-100 md:bg-zinc-200 lg:bg-zinc-100 p-7 md:p-10 rounded-xs lg:border-t-3 lg:border-[#FEE600]">
            <p className="font-bold">{t("how-it-works.process-step-3")}</p>
            <p className="text-xl font-bold mb-3 md:mb-7">{t("how-it-works.process-card-3-title")}</p>
            <p className="text-sm">{t("how-it-works.process-card-3-text")}</p>
          </div>
          <div className="bg-zinc-200 md:bg-zinc-100 lg:bg-zinc-200 p-7 md:p-10 rounded-xs lg:border-t-3 lg:border-[#242424]">
            <p className="font-bold">{t("how-it-works.process-step-4")}</p>
            <p className="text-xl font-bold mb-3 md:mb-7">{t("how-it-works.process-card-4-title")}</p>
            <p className="text-sm">{t("how-it-works.process-card-4-text")}</p>
          </div>
          <div className="bg-zinc-100 p-7 md:p-10 rounded-xs lg:border-t-3 lg:border-[#FEE600]">
            <p className="font-bold">{t("how-it-works.process-step-5")}</p>
            <p className="text-xl font-bold mb-3 md:mb-7">{t("how-it-works.process-card-5-title")}</p>
            <p className="text-sm">{t.rich("how-it-works.process-card-5-text", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
          </div>
        </div>
      </div>

      <div className="mt-15">
        <p className="text-2xl font-bold mb-7">{t("how-it-works.profit-sharing-title")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="mb-3">
              {t("how-it-works.profit-sharing-paragraph-1")}
            </p>
            <p className="mb-3">
              {t.rich("how-it-works.profit-sharing-paragraph-2", { sup: (chunks) => <sup>{chunks}</sup> })}
            </p>
            <p className="mb-3">
              {t("how-it-works.profit-sharing-paragraph-3")}
            </p>
            <div className="mb-3 font-bold">
              <p>
                {t("how-it-works.profit-sharing-paragraph-4")}
              </p>
              <p>
                {t("how-it-works.profit-sharing-paragraph-5")}
              </p>
              <p>
                {t("how-it-works.profit-sharing-paragraph-6")}
              </p>
            </div>
            <p className="mb-3">
              {t("how-it-works.profit-sharing-paragraph-7")}
            </p>
            {/* <p>
              Samo na ovom jednom projektu, investitori ostvaruju 40% profita,
              dok investitori u tokene dobijaju 150% svog inicijalnog ulaganja,
              već nakon prve realizacije.
            </p> */}
          </div>
          <div>
            <div className="grid grid-cols-2">
              <p className="col-span-2 font-bold bg-[#242424] text-white p-3">{t("how-it-works.profit-sharing-table-1-title")}</p>
              <p className="bg-zinc-100 p-3 border-b border-zinc-200">{t("how-it-works.profit-sharing-table-1-item-1")}</p>
              <p className="bg-zinc-100 p-3 text-right border-b border-zinc-200 flex items-center justify-end">{t("how-it-works.profit-sharing-table-1-price-1")}</p>
              <p className="bg-zinc-100 p-3 border-b border-zinc-200 ">{t("how-it-works.profit-sharing-table-1-item-2")}</p>
              <p className="bg-zinc-100 p-3 text-right border-b border-zinc-200 flex items-center justify-end">{t("how-it-works.profit-sharing-table-1-price-2")}</p>
              <p className="bg-zinc-100 p-3 ">{t("how-it-works.profit-sharing-table-1-item-3")}</p>
              <p className="bg-zinc-100 p-3 text-right flex items-center justify-end">{t("how-it-works.profit-sharing-table-1-price-3")}</p>
              <p className="col-span-2 font-bold bg-[#242424] text-white p-3 mt-7">{t("how-it-works.profit-sharing-table-2-title")}</p>
              <p className="bg-zinc-100 p-3 border-b border-zinc-200">{t("how-it-works.profit-sharing-table-2-item-1")}</p>
              <p className="bg-zinc-100 p-3 border-b border-zinc-200 flex items-center justify-end">{t("how-it-works.profit-sharing-table-2-price-1")}</p>
              <p className="bg-zinc-100 p-3 border-b border-zinc-200">{t("how-it-works.profit-sharing-table-2-item-2")}</p>
              <p className="bg-zinc-100 p-3 text-right border-b border-zinc-200 flex items-center justify-end">{t("how-it-works.profit-sharing-table-2-price-2")}</p>
              <p className="bg-zinc-100 p-3">{t.rich("how-it-works.profit-sharing-table-2-item-3", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
              <p className="bg-zinc-100 p-3 text-right flex items-center justify-end">{t("how-it-works.profit-sharing-table-2-price-3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;