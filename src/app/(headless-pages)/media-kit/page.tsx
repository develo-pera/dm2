import { MOBILE_NUMBER } from "@/lib/consts";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media Kit - Decimetar kvadratni",
  description: "Media Kit - Decimetar kvadratni",
};

const MediaKit = async () => {
  return (
    <div className="max-w-5xl mx-auto p-5 py-20">
      <div className="flex justify-between items-center mb-10">
        <img className="w-50" src="/dm2-logo.svg" alt="Decimetar kvadratni" />
        <Link className="bg-[#242424] text-white px-4 py-2 rounded-xs hidden sm:block" href="/" target="_blank" rel="noopener noreferrer">
          &larr; Idite na sajt
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-7">Media Kit</h1>

      <div className="my-10">
        <h2 className="text-2xl font-bold mb-7">O nama</h2>
        <p>Decimetar kvadratni (dm²) je digitalna platforma koja omogućava zajednička ulaganja u građevinske projekte putem tokenizacije.</p>
        <p>Umesto da investiranja stotina hiljada evra, može se početi već od 150.</p>
        <p className="mb-3">Tokenizacija je regulisana Zakonom o digitalnoj imovini i prolazi proveru Komisije za hartije od vrednosti, a svaki token ima pokriće u realnoj imovini.</p>
        <p>Naš cilj je da investiranje u nekretnine postane dostupno svima.</p>
      </div >

      <div className="my-10">
        <h2 className="text-2xl font-bold mb-7">Šta nas izdvaja</h2>
        <ul className="list-disc">
          <li>
            <p>
              Minimalno potrebna investicija za početak — već od 150 €
            </p>
          </li>
          <li>
            <p>
              Regulatorno usklađeno i bezbedno
            </p>
          </li>
          <li>
            <p>
              Realna imovina kao pokriće
            </p>
          </li>
          <li>
            <p>
              Povezujemo građevinu, finansije i blockchain
            </p>
          </li>
        </ul>
      </div >

      <div className="my-10">
        <h2 className="text-2xl font-bold mb-7">Tokenizacija — kratko objašnjenje</h2>
        <p className="mb-3">Tokenizacija omogućava da vlasništvo nad nekretninom bude podeljeno na digitalne tokene koji predstavljaju stvarni udeo u projektu.</p>
        <p>dm² prvi donosi ovaj model na našem tržištu, čineći tržište imovine otvorenijim, likvidnijim i dostupnim svima.</p>
      </div >

      <div className="my-10">
        <div>
          <h2 className="text-2xl font-bold mb-7">Logo</h2>
          <p className="mb-3">
            Decimetar kvadratni ima dve verzije logoa: <strong>Decimetar kvadratni</strong> i minimalna verzija <strong>dm<sup>2</sup></strong>.
          </p>

          <p><strong>Decimetar kvadratni</strong> - ovo je glavni logo koji se koristi u većini slučajeva.</p>
          <p className="mb-3">
            <strong>dm<sup>2</sup></strong> - ovo je logo koji se koristi u slučajevima kada je potrebno koristiti manje prostora ili kada je potrebno koristiti logo bez teksta.
          </p>
          <p>Obe verzije logoa su dostupne u SVG, PNG i JPG formatu, kao i u tamnoj i svijetloj varijanti.</p>

          <div className="my-10 grid sm:grid-cols-2 gap-5">
            <img src="/dm2-logo-example.jpg" alt="Decimetar kvadratni primeri logoa" />
            <img src="/dm2-icon-example.jpg" alt="Decimetar kvadratni primeri ikonica" />
          </div>
        </div>
        <a href="/dm2-logo.svg" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#242424] text-white px-4 py-2 rounded-xs">
            Preuzmite logo
          </button>
        </a>
      </div>

      <div className="my-10">
        <h2 className="text-2xl font-bold mb-7">Boje</h2>
        <p>
          Decimetar kvadratni ima dve primarne boje: <strong>crna</strong> i <strong>žuta</strong>, kao i nekoliko sekundarnih boja.
        </p>

        <div className="flex flex-wrap gap-5 mt-5">
          <div>
            <div className="w-32 h-32 bg-[#242424] mb-2" />
            <p className="text-sm">Crna (#242424)</p>
          </div>
          <div>
            <div className="w-32 h-32 bg-[#FEE600] mb-2" />
            <p className="text-sm">Žuta (#FEE600)</p>
          </div>
          <div>
            <div className="w-32 h-32 bg-zinc-100 mb-2" />
            <p className="text-sm">Siva (#F5F4F4)</p>
          </div>
          <div>
            <div className="w-32 h-32 bg-white border border-zinc-300 mb-2" />
            <p className="text-sm">Bela (#FFFFFF)</p>
          </div>
        </div>
      </div>

      <div className="my-10">
        <h2 className="text-2xl font-bold mb-7">Linkovi</h2>
        <p>Website: <a className="underline break-all" href="https://decimetarkvadratni.com" target="_blank" rel="noopener noreferrer">decimetarkvadratni.com</a></p>
        <p>Instagram: <a className="underline break-all" href="https://instagram.com/decimetarkvadratni/" target="_blank" rel="noopener noreferrer">https://instagram.com/decimetarkvadratni/</a></p>
        <p>LinkedIn: <a className="underline break-all" href="https://www.linkedin.com/company/decimetar-kvadratni" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/company/decimetar-kvadratni</a></p>
        <p>Facebook: <a className="underline break-all" href="https://www.facebook.com/decimetarkvadratni" target="_blank" rel="noopener noreferrer">https://www.facebook.com/decimetarkvadratni</a></p>
        <p>Twitter: <a className="underline break-all" href="https://x.com/decimetar2" target="_blank" rel="noopener noreferrer">https://x.com/decimetar2</a></p>
      </div>

      <div className="my-10">
        <h2 className="text-2xl font-bold mb-7">Kontakt</h2>
        <p>Email: <a className="underline" href="mailto:info@decimetarkvadratni.com">info@decimetarkvadratni.com</a></p>
        <p>Telefon: <a className="underline" href={`tel:${MOBILE_NUMBER.replaceAll(" ", "")}`}>{MOBILE_NUMBER}</a></p>
      </div>
    </div >
  );
};

export default MediaKit;