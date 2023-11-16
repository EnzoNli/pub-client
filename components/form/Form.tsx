"use client";

import { FormProps } from "@/types";
import React from "react";
import FirstStepForm from "./FirstStep";

const Form = ({ onClose }: FormProps) => {
  return (
    <div className="form flex-1 pt-36 padding-x">
      <FirstStepForm />
    </div>
  );
};

export default Form;
