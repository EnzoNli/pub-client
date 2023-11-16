import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface FormButtonProps {
  content: string;
  delay: number;
  icon: IconDefinition;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface FormProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
}
