const HowItWorks = () => {
  return (
    <div id="kako-radi-dm2" className="max-w-7xl mx-auto p-5 py-20">
      <h2 className="text-4xl font-bold mb-7">Kako radi dm<sup>2</sup>?</h2>
      <p>Sam koncept je vrlo jednostavan i ne razilukuje se puno od standardnog nacina gde jedan veliki investitor ulaze u ceo projekat.</p>
      <p>Najveca razlike je u tome zapravo sto umesto jednog u nasem slucaju ma vise manjih investitora, ko nosi teret samih projekata tokom projektovanja i izgradnje, i na koji nacin se deli profit.</p>

      <div>
        <p className="text-2xl mt-15 font-bold">Kako izgleda proces od pocetka do kraja na primeru jednog projekta:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-7">
          <div className="bg-zinc-100 p-7 md:p-10 rounded-xs md:border-t-3 md:border-[#242424] lg:border-t-3 lg:border-[#FEE600]">
            <p className="font-bold">1. korak</p>
            <p className="text-xl font-bold mb-3 md:mb-7">Predlog i izrada projekta</p>
            <p className="text-sm">Ukoliko je projekat u fazi predloga, onda se on izrađuje i predstavlja potencijalnim investitorima na dm<sup>2</sup> platformi.</p>
          </div>
          <div className="bg-zinc-200 p-7 md:p-10 rounded-xs md:border-t-3 md:border-[#FEE600] lg:border-t-3 lg:border-[#242424]">
            <p className="font-bold">2. korak</p>
            <p className="text-xl font-bold mb-3 md:mb-7">Finansiranje projekta</p>
            <p className="text-sm">U ovoj fazi moguce je direktno uloziti u sam projekat po ceni kvadarata u izgradnju investiranjem u decimetare kvadratne.</p>
          </div>

          <div className="bg-zinc-100 md:bg-zinc-200 lg:bg-zinc-100 p-7 md:p-10 rounded-xs lg:border-t-3 lg:border-[#FEE600]">
            <p className="font-bold">3. korak</p>
            <p className="text-xl font-bold mb-3 md:mb-7">Izgradnja objekta</p>
            <p className="text-sm">Nakon uspesno zavrsene faze fiansiranaj i prikupljanja minimalne investicije, krece se sa izgradnjom objekata predvidjenih projektom.</p>
          </div>
          <div className="bg-zinc-200 md:bg-zinc-100 lg:bg-zinc-200 p-7 md:p-10 rounded-xs lg:border-t-3 lg:border-[#242424]">
            <p className="font-bold">4. korak</p>
            <p className="text-xl font-bold mb-3 md:mb-7">Prodaja krajnjim kupcima</p>
            <p className="text-sm">Vrlo brzo nakon zavrsetka finansiranja i pocetka izgradnje pocinje i prodaja nekretnina krajnjim kupcima.</p>
          </div>
          <div className="bg-zinc-100 p-7 md:p-10 rounded-xs lg:border-t-3 lg:border-[#FEE600]">
            <p className="font-bold">5. korak</p>
            <p className="text-xl font-bold mb-3 md:mb-7">Raspodela profita</p>
            <p className="text-sm">Profit od prdaje se deli na investitore u projekat, nosioca projekta i investitore u dm<sup>2</sup> digitalne tokene u realnom vremenu.</p>
          </div>
        </div>
      </div>

      <div className="mt-15">
        <p className="text-2xl font-bold mb-7">Raspodela profita</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="mb-3">Raspodelu profita na investitore u projekat, nosioca projekta i investiore u dm<sup>2</sup> digitalne tokene najlakse mozemo objasniti na pojednostavljenom primeru stambene zgrade od 10.000m<sup>2</sup> ukupne povrsine, sa cenom kvadrata u izgradnji od 1000€ i prodajnom cenom od 1500€.</p>
            <p className="mb-3">Od ostvarenog profita od prodaje, 300€ se deli na investitore u projekat, 100€ na investitore u token i 100€ na nosioca projekta.</p>
            <p className="mb-3">Inicijalnih 1000€ po kvadratu se vraca investitorima u projekat, sto znaci da dobijaju ukupno 1300€ po kvadratu.</p>
            <p>
              Na ovom primeru vidimo da na samo jednom projektu od 10.000 m<sup>2</sup>, investitori u projekat imaju povracaj investicije od 30%, a investitori u tokene povracaj od ⅔ inicijalne investicije vec nakon prvog projekta.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2">
              <p className="col-span-2 font-bold bg-[#242424] text-white p-3">Kljuc u ruke kvadrat</p>
              <p className="bg-zinc-100 p-3 border-b border-zinc-200">Cena izgradnje</p>
              <p className="bg-zinc-100 p-3 text-right border-b border-zinc-200 flex items-center justify-end">1000€</p>
              <p className="bg-zinc-100 p-3 border-b border-zinc-200 ">Prodajna cena</p>
              <p className="bg-zinc-100 p-3 text-right border-b border-zinc-200 flex items-center justify-end">1500€</p>
              <p className="bg-zinc-100 p-3 ">Profit nakon prodaje</p>
              <p className="bg-zinc-100 p-3 text-right flex items-center justify-end">500€</p>
              <p className="col-span-2 font-bold bg-[#242424] text-white p-3 mt-7">Profit po kvadratu se zatim deli</p>
              <p className="bg-zinc-100 p-3 border-b border-zinc-200">Investitori u projekat (30% povrat)</p>
              <p className="bg-zinc-100 p-3 border-b border-zinc-200 flex items-center justify-end">300€</p>
              <p className="bg-zinc-100 p-3 border-b border-zinc-200">Investitori u dm<sup>2</sup> token</p>
              <p className="bg-zinc-100 p-3 text-right border-b border-zinc-200 flex items-center justify-end">100€</p>
              <p className="bg-zinc-100 p-3">Nosioc projekta (dm2)</p>
              <p className="bg-zinc-100 p-3 text-right flex items-center justify-end">100€</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;