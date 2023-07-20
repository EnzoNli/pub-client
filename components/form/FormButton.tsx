"use client";

import { FormButtonProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

const FormButton = ({ content, delay, icon }: FormButtonProps) => {
  return (
    <motion.button
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
            delay: delay,
          },
        },
      }}
      className="group select__button"
    >
      <h5 className="text__button">{content}</h5>
      <FontAwesomeIcon className="form__icons" icon={icon} />
    </motion.button>
  );
};

export default FormButton;
