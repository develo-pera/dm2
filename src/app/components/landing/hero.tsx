const Hero = () => {
  return (
    <div className="bg-[url('/dm2bg.png')] bg-cover bg-top">
      <div className="max-w-7xl mx-auto p-5 py-32 md:py-50">
        <div className="p-5 bg-black rounded-xs inline-block mb-5">
          <p className="text-2xl md:text-3xl font-black leading-[1.1] text-white">Već od 150€</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] max-w-2xl md:max-w-[1000px] text-white">
          Uložite u nekretnine i uživajte u pasivnom
          prihodu i do 30% godišnje
        </h1>
        <div className="flex flex-wrap gap-5 mt-10">
          <button className="bg-[#FEE600] font-bold px-8 py-3 rounded-xs">
            Prijavite se na listu čekanja
          </button>
          <button className=" bg-white font-bold px-8 py-3 rounded-xs">
            Saznajte više
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;