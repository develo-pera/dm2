import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-zinc-100/50 text-black">
      <div className="max-w-7xl mx-auto p-5 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
        <div className="max-w-md">
          <Image src="/dm2-logo.svg" alt="dm2" width={250} height={100} />
          <p className="text-sm mt-5">dm<sup>2</sup> je inovativni način ulaganja koji omogucava investiranje u nekretnine po znacajno povoljnijim uslovima smanjujući iznos potrebne investicije, dajući priliku i malim investitorima da investiraju pre izgradnje i ostvare prihod od prodaje nekretnina.</p>
        </div>
        <div className="max-w-md">
          <div className="mb-10">
            <h3 id="kontakt" className="text-xl font-bold mb-5">Kontakt</h3>
            <p className="mb-1">
              <span className="font-bold">Email:</span> <a href="mailto:contact@decimetarkvadratni.com">contact@decimetarkvadratni.com</a>
            </p>
            <p>
              <span className="font-bold">Telefon:</span> <a href="tel:+381641234567">+381 64 123 4567</a>
            </p>
          </div>
        </div>
        <div className="max-w-md">
          <div>
            <p className="text-xl font-bold mb-4">Prjavite se na našu mejling listu</p>
            <p className="text-sm mb-4">Prjavite se i pratite najnovije informacije o dm<sup>2</sup> projektima.</p>
            <input type="email" placeholder="Email" className="w-full p-2 rounded-xs border border-zinc-300" />
            <button className="bg-[#242424] text-white px-4 py-2 rounded-xs w-full mt-2">Prjavite se</button>
            <p className="text-sm mt-2">Nećemo Vas spamovati, obećavamo!</p>
          </div>
        </div>
      </div>
      <div className="bg-[#242424] text-white text-sm">
        <div className="max-w-7xl mx-auto p-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex gap-4">
            <Link href="/">Politika privatnosti</Link>
            <Link href="/">Odricanje od odgovornosti</Link>
          </div>
          <p>Sva prava zadržana © {new Date().getFullYear()} dm2</p>
        </div>
      </div>
    </div >
  );
};

export default Footer;