"use client"

import { useState } from "react";

const images = [
  "/pp-1.webp",
  "/pp-2.webp",
]

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const incrementImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  }

  const decrementImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  }

  return (
    <div id="projekti">
      <div className="max-w-7xl mx-auto p-5 py-20">
        <h2 className="text-4xl font-bold mb-7">Planirani projekti</h2>
        <p>U toku je izrada i pripremna projektnog resenja prvog pilot projekta. Javno finansiranje kroz decimetre kvadratne i realizacija projekta planirani su nakon uspesnog zavrsetka incijalne ponude tokena.</p>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#fee600] rounded-xs overflow-hidden">
            <div>
              <div className="bg-[#242424] text-white px-5 py-10">
                <h3 className="text-2xl font-bold mb-5">Neu Pasua Palacios</h3>
                <p>Pilot projekat je prvi projekat koji će biti realizovan kroz dm<sup>2</sup> platformu. Projekat će biti realizovan kroz javno finansiranje kroz decimetre kvadratne i realizacija projekta planirani su nakon uspesnog zavrsetka incijalne ponude tokena.</p>
              </div>

              <div className="grid grid-cols-2 gap-3 px-5 py-10 text-sm">
                <p><span className="font-bold">Lokacija</span><br />Nova Pazova</p>
                <p><span className="font-bold">Tip</span><br />Stambeno-poslovni kompleks</p>
                <p><span className="font-bold">Površina</span><br />30.000 m<sup>2</sup></p>
                <p><span className="font-bold">Broj decimetara kvadratnih</span><br />300.000 dm<sup>2</sup></p>
                <p><span className="font-bold">Cena m<sup>2</sup> u izgradnji</span><br />1300€</p>
                <p><span className="font-bold">Prodajna cena m<sup>2</sup></span><br />1800€</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="relative h-full min-h-[400px]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${images[currentImage]}')` }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                  <p className="text-white text-2xl font-bold">Neu Pasua Palacios</p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <button className="bg-zinc-100 text-black p-3 font-bold border-r border-black" onClick={decrementImage}>← Prethodna slika</button>
                <button className="bg-zinc-100 text-black p-3 font-bold border-black" onClick={incrementImage}>Sledeća slika →</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p>Prijavi se na našu newsletter listu i saznaj cim projekat bude dostupan za ulaganje, ili se prijavi na listu cekanja za token i prihoduj u svakom slucaju.</p>
          <div className="flex flex-wrap gap-3 mt-5">
            <button className="bg-zinc-100 text-black p-3 font-bold rounded-xs">Prijavi se na newsletter</button>
            <button className="bg-[#242424] text-white p-3 font-bold rounded-xs">Prijavi se na listu cekanja za token</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;