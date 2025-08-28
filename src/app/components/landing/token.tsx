import Image from "next/image";
import WaitlistDialog from "../common/waitlist-dialog";
import { LucideChartSpline, LucideHandCoins, LucidePiggyBank, LucideShieldCheck } from "lucide-react";

const prePreWhitePaper = `Digitalni tokeni su u potpunosti regulisani Zakonom o digitalnoj imovini, a mi smo trenutno u procesu predaje Belog papira Komisiji za hartije od vrednosti Republike Srbije na evaluaciju i odobrenje. Ovo odobrenje garantuje usklađenost, transparentnost i zaštitu investitora.`
const preWhitePaper = `Digitalni tokeni su u potpunosti regulisani Zakonom o digitalnoj imovini, a naš Beli papir je zvanično predat Komisiji za hartije od vrednosti Republike Srbije na evaluaciju i odobrenje. Ovo odobrenje garantuje usklađenost, transparentnost i zaštitu investitora.`
const afterWhitePaper = `dm<sup>2</sup> tokeni su u potpunosti regulisani Zakonom o digitalnoj imovini, a naš Beli papir je zvanično odobrila Komisija za hartije od vrednosti Republike Srbije (licenca broj: 3/3-333-1933/33-24). Ovo odobrenje garantuje usklađenost, transparentnost i zaštitu investitora.`

const Token = () => {
  return (
    <div id="dm2-token" className="max-w-7xl mx-auto p-5 py-20">
      <h2 className="text-4xl font-bold mb-7">Šta je DM2 token i čemu služi</h2>
      <div>
        <div className="bg-[#fee600] p-5 rounded-xs">
          <p className="font-bold" dangerouslySetInnerHTML={{ __html: prePreWhitePaper || preWhitePaper || afterWhitePaper }} />
        </div>
        <div className="my-10 grid lg:grid-cols-2 gap-5">
          <div>
            <p className="font-bold">Na dm<sup>2</sup> platformi postoje dva načina ulaganja:</p>
            <p>Direktna investicija u kvadrate (decimetre kvadratne)</p>
            <p className="mb-3">Kupovina DM2 tokena</p>

            <p className="font-bold">Ključna razlika:</p>
            <p className="mb-3">
              Investiranjem u kvadrate ulažete u jedan konkretan projekat
              i ostvarujete jednokratni profit kada se on završi i proda.
            </p>
            <p className="mb-3">
              Investiranjem u DM2 tokene stičete pravo na deo profita iz
              svih budućih projekata koji se realizuju putem dm<sup>2</sup> platforme
              — dugoročno i pasivno, sve dok držite tokene
            </p>
            <p className="mb-3">
              Digitalni tokeni nisu novost na našem tržištu — uspešne primere
              već imamo kroz projekte poput
              {' '}
              <a href="https://finspot.com/" target="_blank" className="underline">Finspota</a>,
              {' '}
              <a href="https://treesury.com/" target="_blank" className="underline">Treesury-a</a>,
              {' '}
              <a href="https://thewalnutfund.com/invest-in-walnut-tokens-sustainable-agriculture-blockchain/" target="_blank" className="underline">Walnut Funda</a>
              {' '}
              i drugih.
            </p>
            <p className="mt-7 mb-5 font-bold">Zašto ulagati u dm2 tokene?</p>
            <div className="grid grid-cols-[20px_1fr] items-center gap-y-3 gap-x-3">
              <LucidePiggyBank className="!w-5 !h-5 stroke-[#242424]" />
              <p className="leading-tight">
                <span className="font-bold">Pasivni prihod: </span>
                zarađujete od svih realizovanih projekata
              </p>
              <LucideShieldCheck className="!w-5 !h-5 stroke-[#242424]" />
              <p className="leading-tight">
                <span className="font-bold">Bez rizika: </span>
                minimalna cena tokena je zagarantovana od strane dm<sup>2</sup> platforme
              </p>
              <LucideHandCoins className="!w-5 !h-5 stroke-[#242424]" />
              <p className="leading-tight">
                <span className="font-bold">Likvidnost: </span>
                tokene možete prodati u svakom trenutku, po istoj ili višoj ceni
              </p>
              <LucideChartSpline className="!w-5 !h-5 stroke-[#242424]" />
              <p className="leading-tight">
                <span className="font-bold">Preglednost: </span>
                sve podatke o zaradi, tokenima i prodaji pratite kroz svoj dm<sup>2</sup> nalog
              </p>
            </div>
          </div>
          <Image src="/dm2-platforma2-min.png" alt="dm2 platforma" width={980} height={500} className="lg:inline-block rounded-xs" />
        </div>
        <p className="mb-5 font-bold">Prijavi se na listu čekanja i među prvima kupi DM2 tokene po najpovoljnijim uslovima.</p>
        <div className="flex flex-wrap gap-2">
          {/* <button className="bg-zinc-100 px-8 py-3 rounded-xs font-bold">Pročitaj Beli papir</button> */}
          <WaitlistDialog>
            <div className="bg-[#242424] text-white px-8 py-3 rounded-xs font-bold">Prijavi se na listu čekanja</div>
          </WaitlistDialog>
        </div>
      </div>
    </div>
  );
};

export default Token;