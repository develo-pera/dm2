import Image from "next/image";
import Socials from "./socials";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-screen-md mx-auto px-4">
      <Image className="mb-7" src="/dm2-logo.svg" alt="logo" width={250} height={250} />

      <p className="text-lg text-center mb-5">
        dm<sup>2</sup> je model investiranja u nekretnine koji Vam omogućava da ulažete u male delove – decimetre kvadratne – umesto da kupujete celu nekretninu.
      </p>

      <p className="text-lg font-bold text-center mt-10">Uskoro! Zapratite nas da ostanete u toku!</p>
      <Socials />
    </div>
  );
};

export default ComingSoon;