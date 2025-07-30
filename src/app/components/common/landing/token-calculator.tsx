"use client";

import { useState, useEffect } from "react";

const TokenCalculator = () => {
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
        <p className="text-xl font-bold">Izračunajte svoju zaradu od tokena po pojedinačnom projektu.</p>
        <p className="text-sm mb-5">Za potrebe ove kalkulacije pretpostavljamo da je svaki projekat u pitanju objekat neto površine 10.000m<sup>2</sup> i da im je cena m<sup>2</sup> u izgradnji i prodaji ista.</p>
        <div className="mb-5">
          <p className="mb-2">Vaš inicijalni ulog u tokene</p>
          <p className="mb-2 text-sm">Minimalni inicijalni ulog u tokene je 150 eur.</p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Cena kvadratnog metra u izgradnji" value={initialInvestment} onChange={(e) => setInitialInvestment(Number(e.target.value))} />
        </div>
        <div className="mb-5">
          <p>Prosečna cena m<sup>2</sup> u izgradnji</p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Cena m2 u izgradnji" value={constructionPrice} onChange={(e) => setConstructionPrice(Number(e.target.value))} />
        </div>
        <div>
          <p className="mb-2">Prosečna prodajna cena m<sup>2</sup></p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Prodajna cena m2" value={salePrice} onChange={(e) => setSalePrice(Number(e.target.value))} />
        </div>
      </div>
      <div className="bg-[#242424] text-white p-5 rounded-xs">
        <p className="text-xl font-bold">Rezultat kalkulacije</p>
        <p className="mb-5 text-sm">Investitori u dm2 tokene ostvaruju 20% od profita nakon prodaje svih realizovanih projekata dokle god imaju tokene u svom vlasništvu.</p>
        <p>Vaš ulog</p>
        <p className="text-2xl font-bold mb-2">{initialInvestment} eur</p>
        <p className="mb-2">Broj realizovanih projekata</p>
        <div className="grid grid-cols-4 max-w-[150px] mb-4">
          <div className="bg-zinc-600/50 rounded-r-xs p-2 flex items-center justify-center cursor-pointer" onClick={() => checkNumberOfProjectsAfterChange(numberOfProjects - 1)}>-</div>
          <div className="bg-zinc-500 p-2 col-span-2 flex items-center justify-center">{numberOfProjects}</div>
          <div className="bg-zinc-600/50 rounded-l-xs p-2 flex items-center justify-center cursor-pointer" onClick={() => checkNumberOfProjectsAfterChange(numberOfProjects + 1)}>+</div>
        </div>
        <p>Vaš profit nakon {numberOfProjects} realizovanih projekata</p>
        <p className="text-2xl text-[#fff] font-bold mb-2">{calculateProfit()} eur</p>
        <p>Ukupan iznos na Vašem nalogu</p>
        <p className="text-4xl text-[#fee600] font-bold">{calculateTotalProfit()} eur</p>
      </div>
    </div>
  );
};

export default TokenCalculator;