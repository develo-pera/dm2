import { LucideBuilding2, LucidePercent, LucideReceiptEuro } from "lucide-react";

const About = () => {
  return (
    <div id="sta-je-dm2" className="max-w-7xl mx-auto p-5 py-20">
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 lg:col-span-1">
          <h2 className="text-4xl font-bold mb-7">Šta je dm<sup>2</sup></h2>
          <p className="mb-3">
            dm<sup>2</sup> je model investiranja u nekretnine koji Vam omogućava da ulažete u male delove
            – decimetre kvadratne – umesto da kupujete celu nekretninu.
          </p>
          <p className="mb-3">
            Na ovaj način, investiranje u nekretnine više nije rezervisano samo za
            velike investitore. Već sa 150€, možete postati deo profitabilnih građevinskih
            projekata i ostvarivati pasivan prihod od prodaje.
          </p>
          <p className="mb-3">
            Koncept frakcionisanog ulaganja u nekretnine već je dobro poznat u razvijenim
            zemljama poput Ujedinjenih Arapskih Emirata, SAD-a, i Velike Britanije gde ga
            koriste hiljade malih investitora koji žele da ulože pametno, bez prevelikog
            rizika. Sada je ovaj model dostupan i kod nas, kroz dm<sup>2</sup> platformu.
          </p>
          <p className="mb-3">
            Ulaganje se dešava u najranijoj, projektnoj fazi, kada su cene najniže.
            Nakon izgradnje, nekretnine se prodaju krajnjim kupcima, a profit se deli
            između investitora u projekte, vlasnika dm<sup>2</sup> tokena i samog tima
            koji vodi realizaciju.
          </p>
          <p className="text-2xl mt-15 mb-5 font-bold">U dm<sup>2</sup> je moguće investirati na dva načina</p>
        </div>
        <div className="lg:block hidden bg-[#FEE600] p-5 md:p-10 rounded-xs" />
      </div>

      <div className="grid sm:grid-rows-[1fr_1fr] md:grid-rows-1 md:grid-cols-2 gap-5 mt-5">
        <div className="bg-zinc-100 p-5 md:p-10 rounded-xs flex flex-col gap-5">
          <p className="font-bold text-lg uppercase mb-3">Direktna investicija u projekte</p>
          <p>
            Kroz našu platformu investitori mogu da ulože svoj novac direktno u građevinske
            projekte, tj. stambeno-poslovne komplekse, hotele, kancelarije, poslovne centre,
            u najranijoj fazi.
          </p>
          <p>Veličina investicije kreće od cene jedne desetine kvadrata u izgradnji,
            tj. decimetra kvadratnog, a moguće je investirati u više decimetara ili
            metara kvadratnih, pa do jedne ili više celokupnih jedinica.
          </p>
        </div>
        <div className="bg-[#242424] text-white p-5 md:p-10 rounded-xs flex flex-col gap-5">
          <p className="font-bold text-lg uppercase mb-3">Investicija u dm<sup>2</sup> digitalne tokene</p>
          <p>
            Investicija u dm<sup>2</sup> digitalne tokene omogućava investitorima da ulože
            svoj novac jednom i dobijaju deo profita od svih realizovanih projekata dokle
            god drže tokene u sopstvenom vlasništvu.
          </p>
          <p>
            Ovaj vid investicije prestavlja istinski dugoročan pasivan prihod, a pored toga sami
            tokeni donose dodatne pogodnosti svojim vlasnicima kao što su:
          </p>
          <div className="grid grid-cols-[20px_1fr] items-center gap-y-3 gap-x-5">
            <LucideBuilding2 className="!w-5 !h-5 stroke-[#FEE600]" />
            <p className="leading-tight">Eksluzivne prilike za investiranje dostupne samo vlasnicima tokena</p>

            <LucidePercent className="!w-5 !h-5 stroke-[#FEE600]" />
            <p className="leading-tight">Povoljnija cena prilikom direktne investicije</p>

            <LucideReceiptEuro className="!w-5 !h-5 stroke-[#FEE600]" />
            <p className="leading-tight">Mogućnost prodaje tokena u bilo kom trenutku po istoj ili većoj ceni od one koju su kupili</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;