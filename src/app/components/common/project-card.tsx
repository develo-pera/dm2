import { useState } from "react";

const ProjectCard = ({ images }: { images: string[] }) => {
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
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#fee600] rounded-xs overflow-hidden">
        <div>
          <div className="bg-[#242424] text-white px-5 py-10">
            <h3 className="text-2xl font-bold mb-5">Neu Pasua Palacios – Pilot projekat</h3>
            <p>Prvi projekat koji će biti realizovan putem DM2 platforme.
              Investitorima će biti omogućen ulazak kroz javno finansiranje decimetara kvadratnih, odmah nakon završetka inicijalne ponude tokena.</p>
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
  );
};

export default ProjectCard;