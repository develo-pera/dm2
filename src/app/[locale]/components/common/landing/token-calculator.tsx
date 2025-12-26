"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const TokenCalculator = () => {
  const t = useTranslations("Home")

  const [initialInvestment, setInitialInvestment] = useState(150);
  const [constructionPrice, setConstructionPrice] = useState(2250);
  const [salePrice, setSalePrice] = useState(2950);
  const [numberOfProjects, setNumberOfProjects] = useState(1);

  const calculateProfit = () => {
    const tokenMarketCap = 1500000;
    const initialInvestmentShareOfTokenMarketCap = tokenMarketCap / 10000 / 150;
    const profitPerSquareMeter = (salePrice - constructionPrice) * 0.2;
    return initialInvestmentShareOfTokenMarketCap * profitPerSquareMeter * numberOfProjects;
  };

  const calculateTotalProfit = () => {
    return initialInvestment + calculateProfit();
  };

  const checkNumberOfProjectsAfterChange = (value: number) => {
    if (value < 1) {
      setNumberOfProjects(1);
    } else {
      setNumberOfProjects(value);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="md:col-span-2 bg-zinc-100/50 p-5 rounded-xs">
        <p className="text-xl font-bold">{t("calculator.token-calculator-title")}</p>
        <p className="text-sm mb-5">{t.rich("calculator.token-calculator-paragraph-1-description", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
        <div className="mb-5">
          <p className="mb-2">{t("calculator.token-calculator-paragraph-1")}</p>
          <p className="mb-2 text-sm">{t("calculator.token-calculator-paragraph-1-min-investment")}</p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Cena kvadratnog metra u izgradnji" value={initialInvestment} onChange={(e) => setInitialInvestment(Number(e.target.value))} />
        </div>
        <div className="mb-5">
          <p>{t.rich("calculator.token-calculator-paragraph-2", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Cena m2 u izgradnji" value={constructionPrice} onChange={(e) => setConstructionPrice(Number(e.target.value))} />
        </div>
        <div>
          <p className="mb-2">{t.rich("calculator.token-calculator-paragraph-3", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Prodajna cena m2" value={salePrice} onChange={(e) => setSalePrice(Number(e.target.value))} />
        </div>
      </div>
      <div className="bg-[#242424] text-white p-5 rounded-xs">
        <p className="text-xl font-bold">{t("calculator.token-calculator-result-title")}</p>
        <p className="mb-5 text-sm">{t("calculator.token-calculator-result-paragraph-1")}</p>
        <p>{t("calculator.token-calculator-result-paragraph-2")}</p>
        <p className="text-2xl font-bold mb-2">{initialInvestment} €</p>
        <p className="mb-2">{t("calculator.token-calculator-result-paragraph-2-projects")}</p>
        <div className="grid grid-cols-4 max-w-[150px] mb-4">
          <div className="bg-zinc-600/50 rounded-r-xs p-2 flex items-center justify-center cursor-pointer" onClick={() => checkNumberOfProjectsAfterChange(numberOfProjects - 1)}>-</div>
          <div className="bg-zinc-500 p-2 col-span-2 flex items-center justify-center">{numberOfProjects}</div>
          <div className="bg-zinc-600/50 rounded-l-xs p-2 flex items-center justify-center cursor-pointer" onClick={() => checkNumberOfProjectsAfterChange(numberOfProjects + 1)}>+</div>
        </div>
        <p>{t.rich("calculator.token-calculator-result-paragraph-3", { projects: numberOfProjects })}</p>
        <p className="text-2xl text-[#fff] font-bold mb-2">{calculateProfit()} €</p>
        <p>{t("calculator.token-calculator-result-paragraph-4")}</p>
        <p className="text-4xl text-[#fee600] font-bold">{calculateTotalProfit()} €</p>
      </div>
    </div>
  );
};

export default TokenCalculator;