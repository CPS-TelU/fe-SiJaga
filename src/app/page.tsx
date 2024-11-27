import React from "react";
import LandingPage from "@/src/components/layouts/Homelayout";
import Footer from "../components/Footer";
import { jakarta } from "@/styles/fonts";

export default function Home() {
  return (
    <main className={`${jakarta.className} pt-12 z-[999]`}>
      <LandingPage/>
      <Footer/>
    </main>
  );
}
