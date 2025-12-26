"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const Dm2Calculator = () => {
  const t = useTranslations("Home")
  const [constructionPrice, setConstructionPrice] = useState<number | undefined>(1000);
  const [numberOfDm2, setNumberOfDm2] = useState<number | undefined>(10);
  const [salePrice, setSalePrice] = useState<number | undefined>(1500);

  const calculateInvestment = () => {
    if (numberOfDm2 && constructionPrice) {
      return numberOfDm2 * (constructionPrice / 100);
    }
    return 0;
  };

  const calculateProfit = () => {
    if (numberOfDm2 && salePrice && constructionPrice) {
      return numberOfDm2 * (salePrice - constructionPrice) / 100 * 60 / 100;
    }
    return 0;
  };

  const calculateTotalProfit = () => {
    if (numberOfDm2 && salePrice && constructionPrice) {
      return calculateProfit() + (numberOfDm2 * (constructionPrice / 100));
    }
    return 0;
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="md:col-span-2 bg-zinc-100/50 p-5 rounded-xs">
        <p className="text-xl font-bold mb-5">{t.rich("calculator.dm2-calculator-title", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
        <div className="mb-5">
          <p className="mb-2">{t.rich("calculator.dm2-calculator-paragraph-1", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Cena kvadratnog metra u izgradnji" value={constructionPrice} onChange={(e) => setConstructionPrice(Number(e.target.value))} />
        </div>
        <div className="mb-5">
          <p>{t.rich("calculator.dm2-calculator-paragraph-2", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
          <div>
            <p className="text-sm">{t.rich("calculator.dm2-calculator-paragraph-2-min-investment", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
            <p className="mb-2 text-sm">{t.rich("calculator.dm2-calculator-paragraph-2-price", { sup: (chunks) => <sup>{chunks}</sup>, price: () => <span>{constructionPrice ? constructionPrice / 100 : 0}</span> })}</p>
          </div>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Broj dm2" value={numberOfDm2} onChange={(e) => {
            setNumberOfDm2(Number(e.target.value));
          }} />
        </div>
        <div>
          <p className="mb-2">{t.rich("calculator.dm2-calculator-paragraph-3", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Prodajna cena m2" value={salePrice} onChange={(e) => setSalePrice(Number(e.target.value))} />
        </div>
      </div>
      <div className="bg-[#242424] text-white p-5 rounded-xs">
        <p className="text-xl font-bold">{t("calculator.dm2-calculator-result-title")}</p>
        <p className="mb-5 text-sm">{t("calculator.dm2-calculator-result-paragraph-1")}</p>
        <p>{t("calculator.dm2-calculator-result-paragraph-2")}</p>
        <p className="text-2xl font-bold mb-2">{calculateInvestment()} €</p>
        <p>{t("calculator.dm2-calculator-result-paragraph-3")}</p>
        <p className="text-2xl font-bold mb-2">{calculateProfit()} €</p>
        <p>{t("calculator.dm2-calculator-result-paragraph-4")}</p>
        <p className="text-4xl text-[#fee600] font-bold">{calculateTotalProfit()} €</p>
      </div>
    </div >
  );
};

export default Dm2Calculator;