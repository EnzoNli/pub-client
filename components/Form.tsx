import { FormProps } from "@/types";
import React from "react";

const Form = ({ onClose }: FormProps) => {
  // Ajoutez ici le code du formulaire
  return (
    <div className="form">
      {/* Ajoutez les champs et le code HTML de votre formulaire ici */}
      <button onClick={onClose}>Fermer le formulaire</button>
    </div>
  );
};

export default Form;
