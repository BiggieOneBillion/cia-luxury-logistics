"use client";

import FormSection from "@/components/BookingForm_Component/FormSection";
import Fleet from "@/components/Fleet_Component/Fleet";
import { useGlobalContext } from "@/Context/GlobalContext";
import { useState } from "react";

export default function Home() {
  const { bookNow } = useGlobalContext();
  
  return (
    <div>
      <Fleet  />
      {bookNow && <FormSection />}
    </div>
  );
}
