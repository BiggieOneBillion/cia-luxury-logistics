"use client";

import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const SideMenu = () => {
  return (
    <section className="left-section border-r flex flex-col px-10 ">
      <Header />
      <Navigation />
    </section>
  );
};

export default SideMenu;
