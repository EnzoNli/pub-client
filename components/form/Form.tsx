"use client";

import { FormProps } from "@/types";
import {
  faGamepad,
  faPersonRunning,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";
import FormButton from "./FormButton";

const Form = ({ onClose }: FormProps) => {
  return (
    <div className="form flex-1 pt-36 padding-x">
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
      <div className="grid grid-cols-3 gap-16 pb-96">
        <FormButton content={"Un jeu"} delay={0.4} icon={faGamepad} />
        <FormButton content={"Un serveur de jeu"} delay={0.6} icon={faServer} />
        <FormButton
          content={"Une activité"}
          delay={0.8}
          icon={faPersonRunning}
        />
      </div>
    </div>
  );
};

export default Form;
