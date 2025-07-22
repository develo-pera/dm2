const Hero = () => {
  return (
    <div className="bg-[url('/dm2bg.png')] bg-cover bg-top">
      <div className="max-w-7xl mx-auto p-5 py-50">
        <div className="p-5 bg-black rounded-xs inline-block mb-5">
          <p className="text-3xl font-black leading-[1.1] max-w-5xl text-white">Već od 150€</p>
        </div>
        <p className="text-7xl font-black leading-[1.1] max-w-5xl text-white">
          Uložite u nekretnine i uživajte u pasivnom
          prihodu od 30% godišnje
        </p>
        <div className="flex gap-5">
          <button className="bg-[#FEE600] font-bold px-8 py-3 rounded-xs mt-10">
            Prijavite se na listu čekanja
          </button>
          <button className=" bg-white font-bold px-8 py-3 rounded-xs mt-10">
            Saznajte više
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;