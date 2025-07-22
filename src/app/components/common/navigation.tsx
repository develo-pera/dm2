import { PhoneCall } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <div className="border-b border-black/10">
        <div className="max-w-7xl mx-auto py-6 px-5 flex justify-between items-center">
          <img className="h-[35px]" src="/dm2-logo.svg" alt="logo" />
          <div className="flex gap-7 items-center">
            <div className="flex gap-2 items-center">
              <PhoneCall className="h-[20px]" />
              <p className="font-bold">+381 62 626262</p>
            </div>
            <button className="bg-[#FEE600] font-bold px-8 py-3 rounded-xs">
              Uložite u nekretnine
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-black/10">
        <div className="max-w-7xl mx-auto py-4 px-5 flex justify-between items-center text-sm">
          <div className="flex gap-5 items-center">
            <Link href="#sta-je-dm2">Šta je dm<sup>2</sup></Link>
            <Link href="#kako-radi-dm2">Kako radi dm<sup>2</sup></Link>
            <Link href="#kalkulator">Kalkulator</Link>
            <Link href="#planirani-projekti">Planirani projekti</Link>
            <Link href="#ceo-postavljana-pitanja">Često postavljana pitanja</Link>
            <Link href="#o-nama">O nama</Link>
            <Link href="#kontakt">Kontakt</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;