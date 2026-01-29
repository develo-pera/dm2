import { useTranslations } from "next-intl";
import { useState } from "react";

const ProjectCard = ({ images }: { images: string[] }) => {
  const t = useTranslations("Home")
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
            <h3 className="text-2xl font-bold mb-5">{t("planned-projects.card-title")}</h3>
            <p>{t.rich("planned-projects.card-paragraph-1", { br: (chunks) => <br />, sup: (chunks) => <sup>{chunks}</sup> })}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 px-5 py-10 text-sm">
            <p><span className="font-bold">{t("planned-projects.card-paragraph-2")}</span><br />{t("planned-projects.card-paragraph-3")}</p>
            <p><span className="font-bold">{t("planned-projects.card-paragraph-4")}</span><br />{t("planned-projects.card-paragraph-5")}</p>
            <p><span className="font-bold">{t("planned-projects.card-paragraph-6")}</span><br />{t.rich("planned-projects.card-paragraph-7", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
            <p><span className="font-bold">{t("planned-projects.card-paragraph-8")}</span><br />{t.rich("planned-projects.card-paragraph-9", { sup: (chunks) => <sup>{chunks}</sup> })}</p>
            <p><span className="font-bold">{t.rich("planned-projects.card-paragraph-10", { sup: (chunks) => <sup>{chunks}</sup> })}</span><br />{t("planned-projects.card-paragraph-11")}</p>
            <p><span className="font-bold">{t.rich("planned-projects.card-paragraph-12", { sup: (chunks) => <sup>{chunks}</sup> })}</span><br />{t("planned-projects.card-paragraph-13")}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative h-full min-h-[400px]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${images[currentImage]}')` }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
              <p className="text-white text-2xl font-bold">{t("planned-projects.overlay-title")}</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <button className="bg-zinc-100 text-black p-3 font-bold border-r border-black" onClick={decrementImage}>← {t("planned-projects.previous-button")}</button>
            <button className="bg-zinc-100 text-black p-3 font-bold border-black" onClick={incrementImage}>{t("planned-projects.next-button")} →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;