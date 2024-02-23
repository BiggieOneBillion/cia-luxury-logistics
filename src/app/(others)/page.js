"use client";
import BookACar from "@/components/BookACar";
import HeroSection from "@/components/Home_Component/HeroSection";
import SectionAboutUs from "@/components/Home_Component/SectionAboutUs";
import SectionSpecial from "@/components/Home_Component/SectionSpecial";
import Testomonial from "@/components/Home_Component/Testomonial";
import Image from "next/image";
import { useGlobalContext } from "@/Context/GlobalContext";
import FormSection from "@/components/BookingForm_Component/FormSection";
import NewSection from "@/components/Home_Component/New Section/NewSection";
import Solutions from "@/components/Home_Component/Solutions/Solutions";



export default function Home() {
  const { bookNow } = useGlobalContext();
  return (
    <div>
      <HeroSection />
      <SectionSpecial />
      <NewSection />
      <SectionAboutUs />
      <Solutions />
      <Testomonial />
      <BookACar />
      {bookNow && <FormSection />}
    </div>
  );
}
