"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";
import Form from "./form/Form";
import { animate, motion } from "framer-motion";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    animate(".base__hero", { opacity: 0 });
    setTimeout(() => {
      setShowForm(true);
    }, 1000);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return !showForm ? (
    <motion.div
      className="hero base__hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Vous vous ennuyez ?</h1>
        <p className="hero__subtitle">
          Cherchez un jeu, un serveur. Trouvez facilement et rapidement quelque
          chose à faire en répondant à quelques questions !
        </p>
        <CustomButton
          title="Lancez-vous !"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleButtonClick}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </motion.div>
  ) : (
    <div className="hero">
      <Form onClose={handleCloseForm} />
    </div>
  );
};

export default Hero;
