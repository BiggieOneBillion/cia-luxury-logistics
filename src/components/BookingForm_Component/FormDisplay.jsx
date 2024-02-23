import { useFormDatum } from "@/Context/FormData";
import React from "react";
import CongratulationMessage from "../CongratulationMessage";
import FormInfo from "./FormInfo";

const FormDisplay = () => {
  const { showCongratulation } = useFormDatum();

  return showCongratulation ? <CongratulationMessage /> : <FormInfo />;
};

export default FormDisplay;
