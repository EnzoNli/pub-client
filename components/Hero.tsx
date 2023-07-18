"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Vous vous ennuyez ?</h1>

        <p className="hero__subtitle">
          Cherchez un jeu, un serveur. Trouvez facilement et rapidement quelque
          chose a faire en répondant à quelques questions !
        </p>

        <CustomButton
          title="Lancez-vous !"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
