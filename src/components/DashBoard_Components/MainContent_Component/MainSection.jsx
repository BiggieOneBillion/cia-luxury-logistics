import React from "react";
import Info from "./AdminInfo/Info";

const MainSection = ({ children }) => {
  return (
    <section className="right-section overflow-scroll flex flex-col">
      <Info />
      {children}
    </section>
  );
};

export default MainSection;
