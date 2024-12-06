import React from "react";
import LandingPage from "@/src/components/layouts/Homelayout";
import Footer from "../components/Footer";
import { jakarta } from "@/styles/fonts";
import Header from "../components/Header";
import DashboardLayout from "../components/layouts/DashboardLayout";
import SettingLayout from "../components/layouts/SettingLayout";

export default function Home() {
  return (
    <main className={`${jakarta.className}  z-[999]`}>
      {/* <Header/>
      <LandingPage/>
      
      <Footer/> */
      
     /* <DashboardLayout /> */
    
      <SettingLayout/>}
    </main>
  );
}
