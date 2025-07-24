import Image from "next/image";

const Token = () => {
  return (
    <div id="dm2-token" className="max-w-7xl mx-auto p-5 py-20">
      <h2 className="text-4xl font-bold mb-7">Sta je dm<sup>2</sup> token i cemu sluzi</h2>
      <div>
        <div className="bg-[#fee600] p-5 rounded-xs">
          <p className="font-bold">dm<sup>2</sup> tokeni su u potpunosti regulisani Zakonom o digitalnoj imovini, a naš Beli papir je zvanično odobrila Komisija za hartije od vrednosti Republike Srbije (licenca broj: 3/3-333-1933/33-24). Ovo odobrenje garantuje usklađenost, transparentnost i zaštitu investitora.</p>
        </div>
        <div className="my-10 grid lg:grid-cols-2 gap-5">
          <div>
            <p>dm<sup>2</sup> tokeni su jedan od dve vrste investicija koje postoje na dm<sup>2</sup> platformi. Druga vrsta je investicija u same decimetre kvadratne.</p>
            <p className="mb-3">Razlika izmedju tokena i direkte investicije u decimetre kvadrate je u tome sto tokeni donose prihod od profita dugorocno i od svih realizovanih projekata, dok decimetri kvadratni vaze samo za projekat u kome su investirani i profit je jednokratan.</p>
            <p className="mb-3">Digitalni tokeni kao nacin ulaganja u projekte nisu nikakva novina na nasem trzistu i do sada je uspesno realizovano nekoliko projekata koji su nudili digitalne tokene svojim investitorima poput Finspota, Treesury-ja (Walnut fund) i drugih.</p>
            <p>Ulaganjem u dm<sup>2</sup> tokene, stičete pravo na deo zarade od svih realizovanih gradjevinskih projekata, dokle god imate tokene u sopstvenom vlasnistvu. Minimalna cena tokena je zagarantovana od strane dm<sup>2</sup> platforme, koje u svakom trenutku mozete prodati po istoj ili vecoj ceni od koje ste kupili.</p>
            <p className="mb-3">Samim tim investicija u dm<sup>2</sup> tokene predstavlja investiciju niskog rizika.</p>
            <p>Svoje tokene, ostvarenu zaradu i profit, kao i prodaju tokena mozete pratiti i izvrsiti na svom dm<sup>2</sup> nalogu unutar dm<sup>2</sup> platforme.</p>
          </div>
          <Image src="/dm2-platforma-2.png" alt="dm2 platforma" width={1200} height={500} className="lg:inline-block hidden rounded-xs" />
        </div>
        <p className="mb-5 font-bold">Prijavi se na listu cekanja odmah i kupi dm<sup>2</sup> tokene po najpovoljnijim uslovima.</p>
        <div className="flex flex-wrap gap-2">
          <button className="bg-zinc-100 p-3 rounded-xs font-bold">Procitaj Beli papir</button>
          <button className="bg-[#242424] text-white p-3 rounded-xs font-bold">Prijavi se na listu cekanja</button>
        </div>
      </div>
    </div>
  );
};

export default Token;