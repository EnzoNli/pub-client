"use client";

import { animate, motion } from "framer-motion";
import Image from "next/image";
import FormButton from "./FormButton";
import {
  faGamepad,
  faPersonRunning,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SecondStepForm from "./SecondStep";

const FirstStepForm = () => {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  const handleButtonServerClick = () => {
    const animation = animate(".first-step__form", { opacity: 0 });

    animation.then(() => {
      removeElement();
    });
  };

  return visible ? (
    <div className="first-step__form">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
        className="form__title"
      >
        Que cherchez-vous ?
      </motion.h1>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-16 pb-96">
        <FormButton content={"Un jeu"} delay={0.4} icon={faGamepad} />
        <FormButton
          content={"Un serveur de jeu"}
          delay={0.6}
          icon={faServer}
          handleClick={handleButtonServerClick}
        />
        <FormButton
          content={"Une activité"}
          delay={0.8}
          icon={faPersonRunning}
        />
      </div>
    </div>
  ) : (
    <SecondStepForm />
  );
};

export default FirstStepForm;
