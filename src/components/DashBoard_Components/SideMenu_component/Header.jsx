"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="basis-[100px] flex items-center text-2xl font-semibold text-black">
      <Link href={"/dashboard"}>Dashboard</Link>
    </header>
  );
};

export default Header;
