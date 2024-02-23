import React from "react";
import FormInfo from "./FormInfo";
import FormDataProvider from "@/app/FormDataProvider";
import CongratulationMessage from "../CongratulationMessage";
import FormDisplay from "./FormDisplay";

const FormSection = () => {
  return (
    <FormDataProvider>
      <FormDisplay />
    </FormDataProvider>
  );
};

export default FormSection;
