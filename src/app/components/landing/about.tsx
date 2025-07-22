import { LucideBadgeEuro, LucideDollarSign, LucidePercent, LucideReceiptEuro } from "lucide-react";

const About = () => {
  return (
    <div id="sta-je-dm2" className="max-w-7xl mx-auto p-5 py-20">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <p className="text-4xl font-bold mb-7">Šta je dm<sup>2</sup>?</p>
          <p className="mb-3">
            Decimetar kvadratni je investiranje u nekretnine dostupno
            svima. Kroz usitnjavanje, tj. frakcionisanje ukupne površine nekretnine
            na decimetre kvadratne, umesto cele nekretnine, možete kupiti samo
            deo, tj. jedan ili više decimetara kvadratnih.
          </p>
          <p className="mb-3">Iako relativno nova na našim prostorima,
            ovakva vrsta združenog investiranja u nekretnine je dobro oprobana
            praksa u mnogim zemljama razvijenih tržišta čiji građani poseduju
            određenu svotu novca koju mogu da investiraju, ali im je kupovina
            celokupne nekretnine u svrhu investicije i dalje veliki izdatak.
          </p>
          <p className="mb-3">
            Investiranje na našoj platformi se
            dešava u projektnoj fazi, što znači da dobijate najbolju moguću cenu,
            a profit se realizuje nakon prodaje nekretnine krajnjem kupcu.
          </p>
        </div>

      </div>

      <p className="text-2xl mt-15 font-bold">U dm<sup>2</sup> je moguće investirati na dva načina</p>
      <div className="grid grid-cols-2 gap-5 mt-10">
        <div className="bg-zinc-100 p-5 md:p-10 rounded-xs flex flex-col gap-5">
          <p className="font-bold text-lg uppercase mb-3">Direktna investicija u projekte</p>
          <p>
            Kroz našu platformu investitori mogu da ulože svoj novac direktno u građevinske projekte, tj. stambeno-poslovne komplekse u veoma najranijoj fazi.</p>
          <p>Veličina investicije kreće od cene jedne desetine kvadrata u izgradnji, tj. decimetra kvadratnog, a moguće je investirati u više decimetara ili metara kvadratnih, pa do čak i jednu ili više celokupnih jedinica.
          </p>
        </div>
        <div className="bg-[#242424] text-white p-5 md:p-10 rounded-xs flex flex-col gap-5">
          <p className="font-bold text-lg uppercase mb-3">Investicija u dm<sup>2</sup> digitalne tokene</p>
          <p>
            Investicija u dm<sup>2</sup> digitalne tokene omogućava investitorima da ulože svoj novac jedom i dobijaju deo profita od svih realizovanih projekata dokle god drze tokene u sopstvenom vlasnistvu.
          </p>
          <p>Ovaj vid investicije prestavlja istinski pasivan prihod, a pored toga sami tokeni donose dodatne pogodnosti svojim vlasnicima kao što su:</p>
          <div className="grid grid-cols-[20px_1fr] items-center gap-y-3 gap-x-5">
            <LucidePercent className="!w-5 !h-5 stroke-[#FEE600]" />
            <p className="leading-tight">Povoljnija cena prilikom direktne investicije</p>

            <LucideReceiptEuro className="!w-5 !h-5 stroke-[#FEE600]" />
            <p className="leading-tight">Mogućnost prodaje token u bilo kom trenutku po istoj ili većoj ceni od one koju su kupili</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;