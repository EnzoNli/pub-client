"use client";

import { animate, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import GameCombobox from "./GameCombobox";

const SecondStepForm = () => {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  const handleButtonServerClick = () => {
    const animation = animate(".second-step__form", { opacity: 0 });

    animation.then(() => {
      removeElement();
    });
  };

  return visible ? (
    <div className="second-step__form">
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
        Sur quel jeu ?
      </motion.h1>
    </div>
  ) : (
    <div>
      <GameCombobox />
    </div>
  );
};

export default SecondStepForm;
