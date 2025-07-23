import Link from "next/link";

const MainMenu = () => {
  return (
    <div>
      <nav className="flex flex-col lg:flex-row gap-5 items-center">
        <Link href="#sta-je-dm2">Šta je dm<sup>2</sup></Link>
        <Link href="#kako-radi-dm2">Kako radi dm<sup>2</sup></Link>
        <Link href="#dm2-token">dm<sup>2</sup> token</Link>
        <Link href="#kalkulator">Kalkulator</Link>
        <Link href="#planirani-projekti">Planirani projekti</Link>
        <Link href="#ceo-postavljana-pitanja">Često postavljana pitanja</Link>
        <Link href="#o-nama">O nama</Link>
        <Link href="#kontakt">Kontakt</Link>
      </nav>
    </div>
  );
};

export default MainMenu;