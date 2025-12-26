import Image from "next/image";
import WaitlistDialog from "../common/waitlist-dialog";
import { LucideChartSpline, LucideHandCoins, LucidePiggyBank, LucideShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

const prePreWhitePaper = `Digitalni tokeni su u potpunosti regulisani Zakonom o digitalnoj imovini, a mi smo trenutno u procesu predaje Belog papira Komisiji za hartije od vrednosti Republike Srbije na evaluaciju i odobrenje. Ovo odobrenje garantuje usklađenost, transparentnost i zaštitu investitora.`
const preWhitePaper = `Digitalni tokeni su u potpunosti regulisani Zakonom o digitalnoj imovini, a naš Beli papir je zvanično predat Komisiji za hartije od vrednosti Republike Srbije na evaluaciju i odobrenje. Ovo odobrenje garantuje usklađenost, transparentnost i zaštitu investitora.`
const afterWhitePaper = `dm<sup>2</sup> tokeni su u potpunosti regulisani Zakonom o digitalnoj imovini, a naš Beli papir je zvanično odobrila Komisija za hartije od vrednosti Republike Srbije (licenca broj: 3/3-333-1933/33-24). Ovo odobrenje garantuje usklađenost, transparentnost i zaštitu investitora.`

const Token = () => {
  const t = useTranslations("Home")
  return (
    <div id="dm2-token" className="max-w-7xl mx-auto p-5 py-20">
      <h2 className="text-4xl font-bold mb-7">{t("token.title")}</h2>
      <div>
        <div className="bg-[#fee600] p-5 rounded-xs">
          {/* <p className="font-bold" dangerouslySetInnerHTML={{ __html: prePreWhitePaper || preWhitePaper || afterWhitePaper }} /> */}
          <p className="font-bold">{t("token.disclaimer")}</p>
        </div>
        <div className="my-10 grid lg:grid-cols-2 gap-5">
          <div>
            <p className="font-bold">{t.rich("token.paragraph-1", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
            <p>{t("token.paragraph-2")}</p>
            <p className="mb-3">{t("token.paragraph-3")}</p>

            <p className="font-bold">{t("token.paragraph-4")}</p>
            <p className="mb-3">
              {t("token.paragraph-5")}
            </p>
            <p className="mb-3">
              {t.rich("token.paragraph-6", { sup: (chunks) => <sup>{chunks}</sup> })}
            </p>
            <p className="mb-3">
              {t.rich("token.paragraph-7", {
                finspot: (chunks) => <a href="https://finspot.com/" target="_blank" rel="noopener noreferrer" className="underline">{chunks}</a>,
                treesury: (chunks) => <a href="https://treesury.com/" target="_blank" rel="noopener noreferrer" className="underline">{chunks}</a>,
                walnut: (chunks) => <a href="https://thewalnutfund.com/invest-in-walnut-tokens-sustainable-agriculture-blockchain/" target="_blank" rel="noopener noreferrer" className="underline">{chunks}</a>,
              })}
            </p>
            <p className="mt-7 mb-5 font-bold">{t("token.paragraph-8")}</p>
            <div className="grid grid-cols-[20px_1fr] items-center gap-y-3 gap-x-3">
              <LucidePiggyBank className="!w-5 !h-5 stroke-[#242424]" />
              <p className="leading-tight">
                {t.rich("token.paragraph-9", { span: (chunks) => <span className="font-bold">{chunks}</span> })}
              </p>
              <LucideShieldCheck className="!w-5 !h-5 stroke-[#242424]" />
              <p className="leading-tight">
                {t.rich("token.paragraph-10", {
                  span: (chunks) => <span className="font-bold">{chunks}</span>,
                  sup: (chunks) => <sup>{chunks}</sup>,
                })}
              </p>
              <LucideHandCoins className="!w-5 !h-5 stroke-[#242424]" />
              <p className="leading-tight">
                {t.rich("token.paragraph-11", { span: (chunks) => <span className="font-bold">{chunks}</span> })}
              </p>
              <LucideChartSpline className="!w-5 !h-5 stroke-[#242424]" />
              <p className="leading-tight">
                {t.rich("token.paragraph-12", {
                  span: (chunks) => <span className="font-bold">{chunks}</span>,
                  sup: (chunks) => <sup>{chunks}</sup>,
                })}
              </p>
            </div>
          </div>
          <Image src="/platforma.png" alt="dm2 platforma" width={980} height={500} className="lg:inline-block rounded-xs" />
        </div>
        <p className="mb-5 font-bold">{t("token.paragraph-13")}</p>
        <div className="flex flex-wrap gap-2">
          {/* <button className="bg-zinc-100 px-8 py-3 rounded-xs font-bold">Pročitaj Beli papir</button> */}
          <WaitlistDialog>
            <div className="bg-[#242424] text-white px-8 py-3 rounded-xs font-bold">{t("join-waitlist")}</div>
          </WaitlistDialog>
        </div>
      </div>
    </div>
  );
};

export default Token;