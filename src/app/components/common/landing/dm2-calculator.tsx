"use client";

import { useState } from "react";

const Dm2Calculator = () => {
  const [constructionPrice, setConstructionPrice] = useState<number | undefined>(1000);
  const [numberOfDm2, setNumberOfDm2] = useState<number | undefined>(1);
  const [salePrice, setSalePrice] = useState<number | undefined>(1500);

  const calculateInvestment = () => {
    if (numberOfDm2 && constructionPrice) {
      return numberOfDm2 * (constructionPrice / 10);
    }
    return 0;
  };

  const calculateProfit = () => {
    if (numberOfDm2 && salePrice && constructionPrice) {
      return numberOfDm2 * (salePrice - constructionPrice) / 10 * 60 / 100;
    }
    return 0;
  };

  const calculateTotalProfit = () => {
    if (numberOfDm2 && salePrice && constructionPrice) {
      return calculateProfit() + (numberOfDm2 * (constructionPrice / 10));
    }
    return 0;
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="md:col-span-2 bg-zinc-100/50 p-5 rounded-xs">
        <p className="text-xl font-bold mb-5">Izracunajte svoju zaradu na osnovu cene m<sup>2</sup> u izgradnji i prodajne cene m<sup>2</sup>.</p>
        <div className="mb-5">
          <p className="mb-2">Cena m<sup>2</sup> u izgradnji</p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Cena kvadratnog metra u izgradnji" value={constructionPrice} onChange={(e) => setConstructionPrice(Number(e.target.value))} />
        </div>
        <div className="mb-5">
          <p>Broj dm<sup>2</sup> u koje zelite da ulozite</p>
          <p className="mb-2 text-sm">Na osnovu cene m<sup>2</sup> u izgradnji koju ste uneli, cena 1 decimetra kvadratnog iznosi {constructionPrice ? constructionPrice / 10 : 0} eur.</p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" min={1} placeholder="Broj dm2" value={numberOfDm2} onChange={(e) => setNumberOfDm2(Number(e.target.value))} />
        </div>
        <div>
          <p className="mb-2">Prodajna cena m<sup>2</sup></p>
          <input className="w-full max-w-[300px] border border-zinc-200 rounded-xs p-2" type="number" placeholder="Prodajna cena m2" value={salePrice} onChange={(e) => setSalePrice(Number(e.target.value))} />
        </div>
      </div>
      <div className="bg-[#242424] text-white p-5 rounded-xs">
        <p className="text-xl font-bold">Rezultat kalkulacije</p>
        <p className="mb-5 text-sm">Investitori u decimetre kvadratne ostvaruju 60% od profita nakon prodaje, dok se ostalih 40% deli na nosioca projekta i investitore u digitalne tokene.</p>
        <p>Vas ulog</p>
        <p className="text-2xl font-bold mb-2">{calculateInvestment()} eur</p>
        <p>Vas profit</p>
        <p className="text-2xl font-bold mb-2">{calculateProfit()} eur</p>
        <p>Ukupno dobijate</p>
        <p className="text-4xl text-[#fee600] font-bold">{calculateTotalProfit()} eur</p>
      </div>
    </div>
  );
};

export default Dm2Calculator;